import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

type Props = {
  title: string
  coverImage: any
  slug?: string
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  const image = (
    <Image
      width={896}
      height={450}
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )

  return (
    <div className="flex justify-center">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
