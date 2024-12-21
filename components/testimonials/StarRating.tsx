import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
}

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? 'text-amber-400 fill-amber-400'
              : 'text-muted/20'
          }`}
        />
      ))}
    </div>
  )
}