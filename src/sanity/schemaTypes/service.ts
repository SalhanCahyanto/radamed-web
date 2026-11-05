import { defineField, defineType } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Layanan',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Layanan',
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
      name: 'shortDescription',
      title: 'Deskripsi Singkat',
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
      name: 'image',
      title: 'Foto Layanan',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sortOrder',
      title: 'Urutan Tampil',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isVisible',
      title: 'Tampilkan di Website',
      type: 'boolean',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Urutan Tampil',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
      media: 'image',
    },
  },
});

