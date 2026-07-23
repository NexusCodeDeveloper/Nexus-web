import { useRef, useEffect, useState } from 'react'

const AnimateOnView = ({ children, delay = 0, className = '', tag = 'div' }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = tag

  return (
    <Tag
      ref={ref}
      className={`${isVisible ? 'animate-in' : 'animate-out'} ${className}`}
      data-delay={delay}
    >
      {children}
    </Tag>
  )
}

export default AnimateOnView