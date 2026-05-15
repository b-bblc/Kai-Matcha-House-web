import { useCallback, useEffect, useRef, useState } from 'react'
import heroVideo from '../../assets/videos/A027_06101456_C093_2.mp4'

/** Optional: progressive JPEG первого кадра → public/videos/hero-poster.jpg (см. README) */
const POSTER_PUBLIC_PATH = '/videos/hero-poster.jpg'

/**
 * Полноширинный фон hero: видео в loop, без контролов.
 * Пока грузится видео: размытый постер (если файл есть) или градиент → плавный crossfade к видео.
 */
export default function HeroVideoBackground() {
  const videoRef = useRef(null)
  const [videoReady, setVideoReady] = useState(false)
  const [posterStatus, setPosterStatus] = useState('checking') // checking | ok | missing
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => setPosterStatus('ok')
    img.onerror = () => setPosterStatus('missing')
    img.src = POSTER_PUBLIC_PATH
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const onVideoReady = useCallback(() => {
    setVideoReady(true)
  }, [])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (el.readyState >= 3) {
      setVideoReady(true)
    }
  }, [])

  useEffect(() => {
    const el = videoRef.current
    if (!el || !reduceMotion) return
    const freeze = () => {
      try {
        el.pause()
        el.currentTime = 0
      } catch {
        /* ignore */
      }
    }
    el.addEventListener('loadeddata', freeze)
    if (el.readyState >= 1) freeze()
    return () => el.removeEventListener('loadeddata', freeze)
  }, [reduceMotion])

  const showGradientFallback =
    (posterStatus === 'missing' || posterStatus === 'checking') && !videoReady

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-matcha-900">
      {/* Размытый постер (JPEG), пока видео не готово */}
      {posterStatus === 'ok' && (
        <div
          className={`absolute inset-0 z-[1] transition-opacity duration-1000 ease-out ${
            videoReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          aria-hidden
        >
          <img
            src={POSTER_PUBLIC_PATH}
            alt=""
            className={`absolute inset-0 h-full w-full scale-110 object-cover transition-[filter] duration-1000 ease-out motion-reduce:transition-none ${
              videoReady ? 'blur-none' : 'blur-2xl md:blur-3xl'
            }`}
          />
          <div className="absolute inset-0 bg-matcha-950/25" />
        </div>
      )}

      {/* Пока постер не проверен или файла нет */}
      {showGradientFallback && (
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-br from-matcha-200 via-cream-200 to-matcha-100 transition-opacity duration-1000 ease-out"
          aria-hidden
        />
      )}

      <video
        ref={videoRef}
        className={`absolute inset-0 z-0 h-full w-full min-w-full object-cover transition-opacity duration-[1200ms] ease-out ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
        src={heroVideo}
        autoPlay={!reduceMotion}
        muted
        loop={!reduceMotion}
        playsInline
        preload="auto"
        poster={posterStatus === 'ok' ? POSTER_PUBLIC_PATH : undefined}
        controls={false}
        disablePictureInPicture
        onLoadedData={onVideoReady}
        onCanPlay={onVideoReady}
        onError={() => setVideoReady(true)}
      />

      {/* Контраст для текста поверх видео */}
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-b from-matcha-950/50 via-matcha-950/40 to-matcha-950/55"
        aria-hidden
      />
    </div>
  )
}
