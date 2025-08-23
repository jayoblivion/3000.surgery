// components/PortableBody.tsx
'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/lib/sanity' // ← 이 경로 확인 (lib/sanity.ts가 존재해야 함)

const builder = imageUrlBuilder(client)

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null
      const imageUrl = builder.image(value).width(800).url()
      const alt = value.alt || 'image'
      return (
        <img
          src={imageUrl}
          alt={alt}
          style={{
            width: '100%',
            borderRadius: '8px',
            marginTop: '1rem',
            marginBottom: '1rem',
          }}
        />
      )
    },
  },
}

export default function PortableBody({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}
