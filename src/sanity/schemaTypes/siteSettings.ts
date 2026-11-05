import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Pengaturan Situs',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Nama Perusahaan',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo Perusahaan',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline Perusahaan',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Nomor Telepon Kantor',
      type: 'string',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'Nomor WhatsApp Resmi',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Alamat Email Resmi',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Alamat Lengkap Kantor',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mapUrl',
      title: 'Tautan Google Maps',
      type: 'url',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Tautan Media Sosial',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          title: 'Media Sosial',
          fields: [
            defineField({
              name: 'label',
              title: 'Nama Platform (misal: LinkedIn, Instagram)',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL Profil',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'clientLogos',
      title: 'Logo Klien / Mitra Rumah Sakit',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'clientLogoItem',
          title: 'Logo Klien',
          fields: [
            defineField({
              name: 'name',
              title: 'Nama Klien / Rumah Sakit',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'logo',
              title: 'File Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'altText',
              title: 'Teks Alt Logo',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'Website Klien (Opsional)',
              type: 'url',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logo',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'companyName',
      subtitle: 'tagline',
      media: 'logo',
    },
  },
});

