"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale"
  delay?: number
  threshold?: number
}

export function AnimatedSection({ 
  children, 
  className = "", 
  animation = "fade-up",
  delay = 0,
  threshold = 0.1
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  const animationClass = {
    "fade-up": "animate-fade-in-up",
    "fade-left": "animate-fade-in-left", 
    "fade-right": "animate-fade-in-right",
    "scale": "animate-scale-in"
  }[animation]

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
