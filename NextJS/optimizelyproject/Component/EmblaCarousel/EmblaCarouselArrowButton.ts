"use client"
import { useCallback } from 'react'

export const usePrevNextButtons = (emblaApi: any) => {
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  return { onPrevButtonClick, onNextButtonClick }
}