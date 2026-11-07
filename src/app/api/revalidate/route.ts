import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret) {
    return NextResponse.json(
      { message: 'Missing SANITY_REVALIDATE_SECRET environment variable' },
      { status: 500 }
    );
  }

  // 1. Verifikasi secret token langsung (Header Authorization Bearer / x-revalidate-secret / Query ?secret=)
  const authHeader = req.headers.get('authorization');
  const customHeader = req.headers.get('x-revalidate-secret');
  const token = authHeader?.replace(/^Bearer\s+/i, '') || customHeader;
  const searchParamSecret = req.nextUrl.searchParams.get('secret');

  if (token === secret || searchParamSecret === secret) {
    revalidatePath('/', 'layout');
    return NextResponse.json({ revalidated: true, now: Date.now() });
  }

  // 2. Verifikasi header sanity-webhook-signature jika dikirimkan oleh Sanity Webhook
  const signature = req.headers.get('sanity-webhook-signature');
  if (signature) {
    try {
      const { isValidSignature } = await parseBody<{ _type?: string }>(
        req,
        secret,
        false
      );

      if (isValidSignature) {
        revalidatePath('/', 'layout');
        return NextResponse.json({ revalidated: true, now: Date.now() });
      }
    } catch (err) {
      console.error('Error validating Sanity webhook signature:', err);
    }
  }

  return NextResponse.json(
    { message: 'Invalid secret or signature' },
    { status: 401 }
  );
}

