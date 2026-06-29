'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

interface Slide {
  url: string
  alt: string
}

interface Props {
  slides: Slide[]
  fullPage?: boolean
}

export default function HeroSlider({ slides, fullPage = false }: Props) {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (slides.length <= 1 || isHovered) return
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [slides.length, isHovered, next])

  if (!slides.length) return null

  const wrapClass = fullPage ? 'ht-slider ht-slider--full' : 'ht-slider'
  const multiSlide = slides.length > 1

  return (
    <div
      className={wrapClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slides.map((slide, i) => (
        <div key={i} className={`ht-slide${i === current ? ' active' : ''}`}>
          <Image
            src={slide.url}
            alt={slide.alt}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'left center' }}
            priority={i === 0}
          />
        </div>
      ))}

      {/* Bottom gradient overlay */}
      <div className="ht-slide-overlay" />

      {/* Prev / Next arrows — only when more than 1 slide */}
      {multiSlide && (
        <>
          <button className="ht-sarr ht-sarr--prev" onClick={prev} aria-label="Previous slide">
            <i className="fas fa-chevron-left" />
          </button>
          <button className="ht-sarr ht-sarr--next" onClick={next} aria-label="Next slide">
            <i className="fas fa-chevron-right" />
          </button>
        </>
      )}

      {/* Dot indicators — only when more than 1 slide */}
      {multiSlide && (
        <div className="ht-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`ht-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
