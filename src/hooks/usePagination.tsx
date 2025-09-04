import { useState } from 'react'

function usePagination<T>(initialCount: number) {
  const [items, setItems] = useState<T[]>([])
  const [visibleCount, setVisibleCount] = useState(initialCount)

  const updateItems = (newItems: T[]) => {
    if (!newItems) return
    setItems(newItems)
  }

  const showMore = () => {
    setVisibleCount((prev) => Math.min(items.length, prev + initialCount))
  }

  return {
    visibleItems: items.slice(0, visibleCount),
    showMore,
    updateItems,
    hasMore: visibleCount < items.length
  }
}

export default usePagination
