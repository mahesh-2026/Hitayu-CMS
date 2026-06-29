'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const SERVICE_OPTIONS = [
  { label: '— Select a Service —', value: '' },
  { label: 'Cloud Hosting', value: 'cloud-hosting' },
  { label: 'Managed AWS', value: 'managed-aws' },
  { label: 'Web Development', value: 'web-development' },
  { label: 'IT Consulting', value: 'it-consulting' },
  { label: 'DevOps / CI-CD', value: 'devops' },
  { label: 'Other', value: 'other' },
]

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({})

  const markClean = (field: string) =>
    setFieldErrors((prev) => ({ ...prev, [field]: false }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)

    const name = `${(fd.get('first') as string || '').trim()} ${(fd.get('last') as string || '').trim()}`.trim()
    const email = (fd.get('email') as string || '').trim()
    const message = (fd.get('message') as string || '').trim()

    // Client-side validation
    const errs: Record<string, boolean> = {}
    if (!fd.get('first')?.toString().trim()) errs.first = true
    if (!email) errs.email = true
    if (!message) errs.message = true
    if (Object.keys(errs).length) {
      setFieldErrors(errs)
      return
    }

    setState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: fd.get('phone') || undefined,
          company: fd.get('company') || undefined,
          service: fd.get('service') || undefined,
          message,
        }),
      })

      const json = await res.json()
      if (res.ok && json.success) {
        setState('success')
        form.reset()
      } else {
        setState('error')
        setErrorMsg(json.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setState('error')
      setErrorMsg('Network error. Please check your connection and try again.')
    }
  }

  const errStyle = { borderColor: '#EF4444', boxShadow: '0 0 0 3px rgba(239,68,68,.12)' }

  if (state === 'success') {
    return (
      <div className="ht-cform">
        <div className="ht-fsuc">
          <div className="ht-oi">✅</div>
          <h3>Message Sent!</h3>
          <p>Our team will reach out within 24 hours to schedule your consultation.</p>
          <button
            type="button"
            className="ht-btn ht-btn-od"
            style={{ marginTop: 20 }}
            onClick={() => setState('idle')}
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <form className="ht-cform" onSubmit={handleSubmit} noValidate>
      <div className="ht-ftitle">Request a Free Consultation</div>

      {state === 'error' && (
        <div className="ht-ferr">
          <i className="fas fa-exclamation-circle" /> {errorMsg}
        </div>
      )}

      <div className="ht-ff">
        <div className="ht-frow">
          <div className="ht-fg">
            <label htmlFor="cf-first">First Name <span className="ht-freq">*</span></label>
            <input
              id="cf-first"
              type="text"
              name="first"
              placeholder="First name"
              style={fieldErrors.first ? errStyle : {}}
              onChange={() => markClean('first')}
            />
            {fieldErrors.first && <span className="ht-ferr-msg">Required</span>}
          </div>
          <div className="ht-fg">
            <label htmlFor="cf-last">Last Name</label>
            <input id="cf-last" type="text" name="last" placeholder="Last name" />
          </div>
        </div>

        <div className="ht-frow">
          <div className="ht-fg">
            <label htmlFor="cf-email">Work Email <span className="ht-freq">*</span></label>
            <input
              id="cf-email"
              type="email"
              name="email"
              placeholder="you@company.com"
              style={fieldErrors.email ? errStyle : {}}
              onChange={() => markClean('email')}
            />
            {fieldErrors.email && <span className="ht-ferr-msg">Required</span>}
          </div>
          <div className="ht-fg">
            <label htmlFor="cf-phone">Phone</label>
            <input id="cf-phone" type="tel" name="phone" placeholder="+91 98765 43210" />
          </div>
        </div>

        <div className="ht-frow">
          <div className="ht-fg">
            <label htmlFor="cf-company">Company</label>
            <input id="cf-company" type="text" name="company" placeholder="Your company name" />
          </div>
          <div className="ht-fg">
            <label htmlFor="cf-service">Service Interested In</label>
            <select id="cf-service" name="service">
              {SERVICE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="ht-fg">
          <label htmlFor="cf-message">Message <span className="ht-freq">*</span></label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            placeholder="Tell us about your project, challenges, and timeline..."
            style={fieldErrors.message ? errStyle : {}}
            onChange={() => markClean('message')}
          />
          {fieldErrors.message && <span className="ht-ferr-msg">Required</span>}
        </div>

        <button type="submit" className="ht-fsub" disabled={state === 'loading'}>
          {state === 'loading' ? (
            <>Sending… <i className="fas fa-spinner fa-spin" /></>
          ) : (
            <>Send Message <i className="fas fa-paper-plane" /></>
          )}
        </button>
      </div>
    </form>
  )
}
