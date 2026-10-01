import { useEffect } from 'react'
import '@/components/ScrollReveal/ScrollReveal.css'

function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let initialized = false
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          entry.target.classList.remove('is-pending')
          observer.unobserve(entry.target)
        } else {
          entry.target.classList.add('is-pending')
        }
      })
      if (!initialized) {
        initialized = true
        document.documentElement.classList.add('reveal-ready')
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' })

    document.querySelectorAll('main > .section, .project-card, .timeline__item, .cert-card, .info-card, .skill-group').forEach((element, index) => {
      element.classList.add('reveal-target')
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 55}ms`)
      observer.observe(element)
    })
    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('reveal-ready')
    }
  }, [])

  return null
}

export default ScrollReveal
