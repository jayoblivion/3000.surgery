'use client'

import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanityImage'

export default function PortableBody({ value }: { value: any }) {
  return (
    <div style={{ lineHeight: '1.7' }}>
      <PortableText
        value={value}
        components={{
          types: {
            image: ({ value }) => {
              if (!value?.asset?._ref) return null
              return (
                <img
                  src={urlFor(value).width(800).url()}
                  alt={value.alt || ''}
                  style={{ margin: '2rem 0', maxWidth: '100%', borderRadius: 8 }}
                />
              )
            },
          },
        }}
      />
    </div>
  )
}
