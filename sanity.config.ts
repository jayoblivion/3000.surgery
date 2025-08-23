// sanity.config.ts
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import post from './sanity/schemas/post'

// --- sound (섹션 추가) ---
const sound = {
  name: 'sound',
  title: 'Sound',
  type: 'document',
  fields: [
    {name: 'title', type: 'string', title: 'Title', validation: (Rule:any)=>Rule.required()},
    {
      name: 'section',
      title: 'Section',
      type: 'string',
      options: { list: [
        {title: '데모', value: 'demo'},
        {title: '믹스테입', value: 'mixtape'},
        {title: '리믹스', value: 'remix'},
      ]},
      validation: (Rule:any)=>Rule.required(),
    },
    {name: 'url', type: 'url', title: 'URL', description: 'YouTube 또는 SoundCloud 주소', validation: (Rule:any)=>Rule.required()},
    {name: 'publishedAt', type: 'datetime', title: 'Published at'},
  ],
}

// --- visual ---
const visual = {
  name: 'visual',
  title: 'Visual',
  type: 'document',
  fields: [
    {name: 'title', type: 'string', title: 'Title', validation: (Rule:any)=>Rule.required()},
    {name: 'url', type: 'url', title: 'URL', description: 'YouTube 또는 Vimeo 주소', validation: (Rule:any)=>Rule.required()},
    {name: 'publishedAt', type: 'datetime', title: 'Published at'},
  ],
}

export default defineConfig({
  name: 'default',
  title: 'Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [post, sound, visual],
  },
})
