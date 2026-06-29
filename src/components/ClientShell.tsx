'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ClientShell() {
  const pathname = usePathname()

  useEffect(() => {
    // ── Loader ──
    const loader = document.getElementById('ht-loader')
    if (loader) {
      setTimeout(() => loader.classList.add('gone'), 400)
    }

    // ── Scroll progress + navbar + back-to-top ──
    const spbar = document.getElementById('ht-spbar')
    const nav = document.querySelector('.ht-nav') as HTMLElement | null
    const btt = document.getElementById('ht-btt')

    function onScroll() {
      const h = document.documentElement
      const pct = (window.scrollY / (h.scrollHeight - h.clientHeight)) * 100
      if (spbar) spbar.style.width = Math.min(pct, 100) + '%'
      if (nav) nav.classList.toggle('stuck', window.scrollY > 60)
      if (btt) btt.classList.toggle('show', window.scrollY > 400)

      // Active nav link
      let current = ''
      document.querySelectorAll<HTMLElement>('section[id]').forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      document.querySelectorAll<HTMLElement>('.ht-na').forEach((a) => {
        const href = a.getAttribute('href')
        a.classList.toggle('active', !!href && href === '#' + current)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // ── Mobile menu ──
    const ham = document.getElementById('ht-ham')
    const mob = document.getElementById('ht-mob')
    if (ham && mob) {
      const toggle = () => {
        ham.classList.toggle('open')
        mob.classList.toggle('open')
        document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : ''
      }
      ham.addEventListener('click', toggle)
      mob.querySelectorAll('a').forEach((a) =>
        a.addEventListener('click', () => {
          ham.classList.remove('open')
          mob.classList.remove('open')
          document.body.style.overflow = ''
        }),
      )
    }

    // ── Particles ──
    const ptcl = document.getElementById('ht-ptcl')
    if (ptcl) {
      for (let i = 0; i < 32; i++) {
        const p = document.createElement('div')
        p.className = 'ht-p'
        const s = Math.random() * 3 + 1
        p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random() * 100}%;animation-duration:${Math.random() * 12 + 8}s;animation-delay:${Math.random() * 12}s;opacity:${Math.random() * 0.55 + 0.1}`
        ptcl.appendChild(p)
      }
    }

    // ── Static text + blinking cursor ──
    const typeEl = document.getElementById('ht-typeEl')
    if (typeEl) {
      const text = typeEl.textContent?.trim() || 'Unleash Cloud Power'
      const wrap = document.createElement('span')
      const cur = document.createElement('span')
      cur.className = 'ht-type-cursor'
      wrap.textContent = text
      typeEl.textContent = ''
      typeEl.appendChild(wrap)
      typeEl.appendChild(cur)
    }

    // ── Mouse parallax (hero orbs) ──
    const orbs = document.querySelectorAll<HTMLElement>('.ht-orb')
    const fcs = document.querySelectorAll<HTMLElement>('.ht-fc')
    const onMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18
      const y = (e.clientY / window.innerHeight - 0.5) * 12
      orbs.forEach((o, i) => {
        const f = (i + 1) * 0.4
        o.style.transform = `translate(${x * f}px,${y * f}px)`
      })
      fcs.forEach((c, i) => {
        const f = (i % 2 === 0 ? 1 : -1) * 0.5
        c.style.transform = `translate(${x * f}px,${y * f}px)`
      })
    }
    document.addEventListener('mousemove', onMouse, { passive: true })

    // ── Scroll reveal ──
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('ht-in')
            ro.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )
    document.querySelectorAll('.ht-reveal').forEach((el) => ro.observe(el))

    // ── Counter ──
    function easeOut(t: number) {
      return 1 - Math.pow(1 - t, 3)
    }
    function animCounter(el: HTMLElement) {
      const target = parseInt(el.dataset.t || '0')
      const dur = 1800
      let start: number | null = null
      const step = (ts: number) => {
        if (!start) start = ts
        const prog = Math.min((ts - start) / dur, 1)
        el.textContent = Math.floor(easeOut(prog) * target).toString()
        if (prog < 1) requestAnimationFrame(step)
        else el.textContent = target.toString()
      }
      requestAnimationFrame(step)
    }
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animCounter(e.target as HTMLElement)
            co.unobserve(e.target)
          }
        })
      },
      { threshold: 0.5 },
    )
    document.querySelectorAll<HTMLElement>('.ht-counter').forEach((el) => co.observe(el))

    // ── Smooth scroll anchors ──
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', function (e) {
        const href = this.getAttribute('href')
        if (!href) return
        const target = document.querySelector(href)
        if (!target) return
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    })

    // ── Newsletter button ──
    const newsBtn = document.querySelector<HTMLButtonElement>('.ht-fnf button')
    if (newsBtn) {
      newsBtn.addEventListener('click', () => {
        const inp = newsBtn.previousElementSibling as HTMLInputElement
        if (!inp?.value.trim()) {
          inp.style.borderColor = '#EF4444'
          return
        }
        newsBtn.textContent = '✓'
        newsBtn.style.background = '#16a34a'
        inp.value = ''
      })
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mousemove', onMouse)
      ro.disconnect()
      co.disconnect()
    }
    // Re-run on every route change so newly mounted pages (e.g. /contact)
    // get their .ht-reveal / .ht-counter elements observed too — otherwise
    // they stay stuck at opacity:0 since the layout doesn't remount on navigation.
  }, [pathname])

  return null
}
