import { useState, useEffect, useRef } from 'react'

const TypewriterTitle = ({ ready }) => {
  const [step, setStep] = useState(0)
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const ref = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!ready || step !== 0) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          setStep(1)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ready, step])

  useEffect(() => {
    if (step !== 1) return
    const text = 'Desarrollo web '
    let i = 0
    const interval = setInterval(() => {
      i++
      setLine1(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(interval)
        setTimeout(() => setStep(2), 400)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [step])

  useEffect(() => {
    if (step !== 2) return
    const text = 'de alto impacto'
    let i = 0
    const interval = setInterval(() => {
      i++
      setLine2(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(interval)
        setTimeout(() => setStep(3), 300)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [step])

  const cursor = () => (
    <span className="inline-block w-[2px] h-[1em] bg-cyan-400 ml-0.5 align-middle animate-pulse" />
  )

  return (
    <h1 ref={ref} className="text-[1.75rem] sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-3 sm:mb-6 tracking-tight break-words whitespace-normal">
      {line1}
      {step === 1 && cursor()}
      {step >= 2 && <br />}
      {step >= 2 && (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          {line2}{cursor()}
        </span>
      )}
    </h1>
  )
}

export default TypewriterTitle