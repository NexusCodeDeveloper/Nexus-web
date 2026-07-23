import { useState, useEffect, useRef } from 'react'

const TypingText = ({ text, className = '', speed = 45, delay = 0, tag = 'h1' }) => {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)
  const ref = useRef(null)
  const Tag = tag

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setTimeout(() => setStarted(true), delay * 100)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [started, delay])

  useEffect(() => {
    if (!started) return

    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [started, text, speed])

  return (
    <Tag ref={ref} className={className}>
      {displayed}
      <span className="inline-block w-[2px] h-[1em] bg-cyan-400 ml-1 align-middle animate-pulse" />
    </Tag>
  )
}

export default TypingText