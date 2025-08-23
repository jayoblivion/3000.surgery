// lib/sanity.ts
import { createClient } from 'next-sanity'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7d2e1liv'   // <= 기본값 강제
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'    // <= 기본값 강제
export const apiVersion = '2024-01-01'
export const useCdn = true

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
})
