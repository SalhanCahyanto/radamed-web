import { defineField, defineType } from 'sanity';

export const companyProfile = defineType({
  name: 'companyProfile',
  title: 'Profil Perusahaan',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Profil',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro Singkat',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Lengkap',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'vision',
      title: 'Visi',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mission',
      title: 'Misi',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'values',
      title: 'Nilai-Nilai Perusahaan',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'companyValue',
          title: 'Nilai Perusahaan',
          fields: [
            defineField({
              name: 'title',
              title: 'Judul Nilai',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Deskripsi Nilai',
              type: 'text',
              rows: 2,
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Gambar Hero',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'heroImage',
    },
  },
});

