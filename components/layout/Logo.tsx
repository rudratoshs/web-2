import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative w-8 h-8">
        <Image
          src="/logo.svg"
          alt="X Innovation Code Stack"
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        X Innovation Code Stack
      </span>
    </Link>
  )
}