// lib/sanity.ts
import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: '2023-08-22',
  useCdn: true,
})
