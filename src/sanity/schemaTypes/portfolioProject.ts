import { defineField, defineType } from 'sanity';

export const portfolioProject = defineType({
  name: 'portfolioProject',
  title: 'Proyek Portofolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Proyek',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'clientName',
      title: 'Nama Fasilitas / Klien',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Ringkasan Proyek',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Foto Utama / Cover',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'serviceCategory',
      title: 'Kategori Layanan',
      type: 'string',
      options: {
        list: [
          { title: 'Instalasi Alat', value: 'Instalasi Alat' },
          { title: 'Instalasi Ruang', value: 'Instalasi Ruang' },
          { title: 'Perbaikan', value: 'Perbaikan' },
          { title: 'Renovasi', value: 'Renovasi' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'challenge',
      title: 'Tantangan Pekerjaan',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'solution',
      title: 'Solusi RADAMED',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Galeri Dokumentasi Proyek',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'galleryItem',
          title: 'Item Galeri',
          fields: [
            defineField({
              name: 'image',
              title: 'Foto Dokumentasi',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'altText',
              title: 'Teks Alt Gambar',
              type: 'string',
            }),
            defineField({
              name: 'caption',
              title: 'Keterangan Foto',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'caption',
              subtitle: 'altText',
              media: 'image',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'projectDate',
      title: 'Tanggal Proyek Selesai',
      type: 'date',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Tampilkan di Sorotan Beranda (Featured)',
      type: 'boolean',
      initialValue: false,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'published',
      title: 'Publikasikan ke Website',
      type: 'boolean',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'Judul SEO (Meta Title)',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Deskripsi SEO (Meta Description)',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'clientName',
      media: 'coverImage',
    },
  },
});

