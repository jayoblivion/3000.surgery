import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7d2e1liv'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2024-01-01'
export const useCdn = true

export const client = createClient({ projectId, dataset, apiVersion, useCdn })

const builder = imageUrlBuilder(client)
export function urlFor(source: any) {
  return builder.image(source)
}
