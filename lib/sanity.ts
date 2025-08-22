// lib/sanity.ts
import {createClient} from 'next-sanity'

// ✅ 환경변수 없으면 하드코딩 값으로 대체
const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7d2e1liv'
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
})
