const DiscountBanner = () => {
  const message = (
    <>
      Obtené un 15% de descuento en tu proyecto viniendo desde la página
      <svg className="w-3 h-3 mx-4 inline-block align-middle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l4 9L5 21l14-9L5 3z" />
      </svg>
    </>
  )

  return (
    <div
      className="w-full text-white overflow-hidden"
      style={{
        background: 'linear-gradient(120deg, #06b6d4 0%, #3b82f6 30%, #4f46e5 55%, #06b6d4 85%, #3b82f6 100%)',
        backgroundSize: '300% 300%',
        animation: 'mesh-move 12s ease-in-out infinite'
      }}
    >
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        <div className="py-1.5 text-xs sm:text-sm font-semibold tracking-wide shrink-0 uppercase">
          {message}
          {message}
        </div>
        <div className="py-1.5 text-xs sm:text-sm font-semibold tracking-wide shrink-0 uppercase">
          {message}
          {message}
        </div>
      </div>
    </div>
  )
}

export default DiscountBanner