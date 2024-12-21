import { PortableText as BasePortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from './image'

export const components = {
  types: {
    image: ({ value }: any) => {
      const imageUrl = urlForImage(value)
      return (
        <div className="relative w-full aspect-[16/9] my-8 rounded-xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={value.alt || ''}
            fill
            className="object-cover"
          />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-6">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-6">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-muted px-1.5 py-0.5 rounded">{children}</code>
    ),
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        className="text-primary hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
}