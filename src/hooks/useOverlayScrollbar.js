import { useEffect } from 'react'

const ACTIVE_CLASS = 'scrollbar-active'
/** Через сколько без скролла скрыть дорожку (как в Finder — ~1–1.5s) */
const HIDE_AFTER_MS = 1200

/**
 * Overlay-скроллбар: класс на <html> пока идёт скролл / жест,
 * убирается после паузы — см. index.css
 */
export function useOverlayScrollbar() {
  useEffect(() => {
    let hideTimer

    const activate = () => {
      document.documentElement.classList.add(ACTIVE_CLASS)
      window.clearTimeout(hideTimer)
      hideTimer = window.setTimeout(() => {
        document.documentElement.classList.remove(ACTIVE_CLASS)
      }, HIDE_AFTER_MS)
    }

    // scroll — фактическое движение страницы
    window.addEventListener('scroll', activate, { passive: true })
    // wheel / touch — полоса появляется до или во время жеста (как overlay)
    window.addEventListener('wheel', activate, { passive: true })
    window.addEventListener('touchstart', activate, { passive: true })
    window.addEventListener('touchmove', activate, { passive: true })

    return () => {
      window.clearTimeout(hideTimer)
      document.documentElement.classList.remove(ACTIVE_CLASS)
      window.removeEventListener('scroll', activate)
      window.removeEventListener('wheel', activate)
      window.removeEventListener('touchstart', activate)
      window.removeEventListener('touchmove', activate)
    }
  }, [])
}
