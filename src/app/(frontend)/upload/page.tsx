'use client'

import { useState, useRef, useEffect } from 'react'

type Provider = 'blob' | 'cloudinary'
type ProviderStatus = { blob: boolean; cloudinary: boolean }
type UploadState = 'idle' | 'uploading' | 'done' | 'error'
type Mode = 'file' | 'url'

const PROVIDERS: { id: Provider; label: string; color: string; envVars: string[] }[] = [
  {
    id: 'blob',
    label: 'Vercel Blob',
    color: '#000',
    envVars: ['BLOB_READ_WRITE_TOKEN'],
  },
  {
    id: 'cloudinary',
    label: 'Cloudinary',
    color: '#3448C5',
    envVars: ['CLOUDINARY_CLOUD_NAME', 'CLOUDINARY_API_KEY', 'CLOUDINARY_API_SECRET'],
  },
]

export default function UploadPage() {
  const [mode, setMode] = useState<Mode>('file')
  const [providerStatus, setProviderStatus] = useState<ProviderStatus | null>(null)
  const [activeProvider, setActiveProvider] = useState<Provider>('blob')
  const [uploadState, setUploadState] = useState<UploadState>('idle')
  const [resultUrl, setResultUrl] = useState('')
  const [directInput, setDirectInput] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetch('/api/storage-status')
      .then((r) => r.json())
      .then((data: ProviderStatus) => {
        setProviderStatus(data)
        if (!data.blob && data.cloudinary) setActiveProvider('cloudinary')
      })
      .catch(() => setProviderStatus({ blob: false, cloudinary: false }))
  }, [])

  function reset() {
    setUploadState('idle')
    setResultUrl('')
    setError('')
    setCopied(false)
    if (inputRef.current) inputRef.current.value = ''
  }

  function switchMode(m: Mode) {
    setMode(m)
    reset()
    setDirectInput('')
  }

  async function handleFile(file: File) {
    setUploadState('uploading')
    setError('')
    setResultUrl('')
    setCopied(false)

    const form = new FormData()
    form.append('file', file)

    try {
      const res = await fetch(`/api/upload?provider=${activeProvider}`, {
        method: 'POST',
        body: form,
      })
      const json = await res.json()
      if (res.ok && json.success) {
        setResultUrl(json.url)
        setUploadState('done')
      } else {
        setError(json.error || 'Upload failed.')
        setUploadState('error')
      }
    } catch {
      setError('Network error. Try again.')
      setUploadState('error')
    }
  }

  function handleDirectUrl() {
    const url = directInput.trim()
    if (!url) return
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      setError('Please enter a valid URL starting with http:// or https://')
      return
    }
    setError('')
    setResultUrl(url)
    setUploadState('done')
  }

  function copy() {
    navigator.clipboard.writeText(resultUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const currentProvider = PROVIDERS.find((p) => p.id === activeProvider)!
  const isConfigured = providerStatus ? providerStatus[activeProvider] : null

  const TAB: React.CSSProperties = {
    flex: 1,
    padding: '10px 0',
    fontWeight: 700,
    fontSize: '0.9rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all .15s',
    borderRadius: 10,
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f6f9fd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: 20,
          boxShadow: '0 8px 40px rgba(0,0,0,.10)',
          padding: '40px 48px',
          maxWidth: 560,
          width: '100%',
        }}
      >
        <h1 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#252b6e', marginBottom: 4 }}>
          Image / Media Uploader
        </h1>
        <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: 24 }}>
          Upload a file to cloud storage, or paste a URL directly.
        </p>

        {/* Mode tabs */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            background: '#f1f5f9',
            borderRadius: 12,
            padding: 4,
            marginBottom: 24,
          }}
        >
          <button
            onClick={() => switchMode('file')}
            style={{
              ...TAB,
              background: mode === 'file' ? '#fff' : 'transparent',
              color: mode === 'file' ? '#252b6e' : '#64748b',
              boxShadow: mode === 'file' ? '0 1px 4px rgba(0,0,0,.10)' : 'none',
            }}
          >
            Upload from Computer
          </button>
          <button
            onClick={() => switchMode('url')}
            style={{
              ...TAB,
              background: mode === 'url' ? '#fff' : 'transparent',
              color: mode === 'url' ? '#252b6e' : '#64748b',
              boxShadow: mode === 'url' ? '0 1px 4px rgba(0,0,0,.10)' : 'none',
            }}
          >
            Use Direct URL
          </button>
        </div>

        {/* ── FILE UPLOAD MODE ── */}
        {mode === 'file' && (
          <>
            {/* Storage provider selector */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              {PROVIDERS.map((p) => {
                const configured = providerStatus ? providerStatus[p.id] : null
                const isActive = activeProvider === p.id
                return (
                  <button
                    key={p.id}
                    onClick={() => { setActiveProvider(p.id); reset() }}
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      borderRadius: 12,
                      border: isActive ? `2px solid ${p.color}` : '2px solid #e2e8f0',
                      background: isActive ? `${p.color}0d` : '#f8fafc',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        color: isActive ? p.color : '#475569',
                        marginBottom: 4,
                      }}
                    >
                      {p.label}
                    </div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: 20,
                        background: configured === null ? '#f1f5f9' : configured ? '#dcfce7' : '#fee2e2',
                        color: configured === null ? '#94a3b8' : configured ? '#15803d' : '#b91c1c',
                      }}
                    >
                      {configured === null ? '…' : configured ? '✓ Active' : '✗ Not configured'}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Not configured warning */}
            {isConfigured === false && (
              <div
                style={{
                  background: '#fff7ed',
                  border: '1px solid #fed7aa',
                  borderRadius: 10,
                  padding: '12px 16px',
                  marginBottom: 18,
                  fontSize: '0.83rem',
                  color: '#92400e',
                }}
              >
                <strong>{currentProvider.label} not configured.</strong> Add to <code>.env</code>:
                <ul style={{ margin: '6px 0 0', paddingLeft: 18 }}>
                  {currentProvider.envVars.map((v) => (
                    <li key={v}><code style={{ fontSize: '0.78rem' }}>{v}</code></li>
                  ))}
                </ul>
              </div>
            )}

            {/* Drop zone */}
            {uploadState !== 'done' && (
              <div
                onClick={() => isConfigured && uploadState !== 'uploading' && inputRef.current?.click()}
                onDrop={(e) => { e.preventDefault(); if (isConfigured) { const f = e.dataTransfer.files[0]; if (f) handleFile(f) } }}
                onDragOver={(e) => e.preventDefault()}
                style={{
                  border: `2px dashed ${uploadState === 'uploading' ? '#93c5fd' : '#dde6f0'}`,
                  borderRadius: 14,
                  padding: '40px 24px',
                  textAlign: 'center',
                  cursor: isConfigured && uploadState !== 'uploading' ? 'pointer' : 'default',
                  background: uploadState === 'uploading' ? '#f0f9ff' : '#f6f9fd',
                  opacity: isConfigured === false ? 0.5 : 1,
                  marginBottom: 16,
                }}
              >
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*,video/*,application/pdf"
                  style={{ display: 'none' }}
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
                />
                {uploadState === 'uploading' ? (
                  <>
                    <div style={{ fontSize: '2rem', marginBottom: 8 }}>⏳</div>
                    <p style={{ color: '#3b82f6', fontWeight: 700 }}>
                      Uploading to {currentProvider.label}…
                    </p>
                  </>
                ) : (
                  <>
                    <div style={{ fontSize: '2.2rem', marginBottom: 8 }}>📁</div>
                    <p style={{ fontWeight: 700, color: '#252b6e' }}>Click or drag a file here</p>
                    <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: 4 }}>
                      Images, PDF, Video — max 10 MB
                    </p>
                  </>
                )}
              </div>
            )}
          </>
        )}

        {/* ── DIRECT URL MODE ── */}
        {mode === 'url' && uploadState !== 'done' && (
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: 8 }}>
              Paste your image or media URL
            </label>
            <div style={{ display: 'flex', gap: 10 }}>
              <input
                type="url"
                value={directInput}
                onChange={(e) => { setDirectInput(e.target.value); setError('') }}
                onKeyDown={(e) => e.key === 'Enter' && handleDirectUrl()}
                placeholder="https://example.com/image.jpg"
                style={{
                  flex: 1,
                  padding: '11px 14px',
                  border: '1.5px solid #dde6f0',
                  borderRadius: 10,
                  fontSize: '0.85rem',
                  color: '#252b6e',
                  outline: 'none',
                  minWidth: 0,
                }}
              />
              <button
                onClick={handleDirectUrl}
                disabled={!directInput.trim()}
                style={{
                  padding: '11px 20px',
                  background: directInput.trim() ? '#252b6e' : '#94a3b8',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: directInput.trim() ? 'pointer' : 'default',
                  flexShrink: 0,
                }}
              >
                Use URL
              </button>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: 6 }}>
              Paste any hosted image, video, or file URL — no upload needed.
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div
            style={{
              background: '#FEF2F2',
              border: '1px solid #FECACA',
              color: '#B91C1C',
              borderRadius: 10,
              padding: '10px 14px',
              marginBottom: 16,
              fontSize: '0.85rem',
            }}
          >
            ❌ {error}
          </div>
        )}

        {/* Result — shared by both modes */}
        {uploadState === 'done' && resultUrl && (
          <div>
            <p style={{ fontWeight: 700, color: '#15803d', marginBottom: 10, fontSize: '0.9rem' }}>
              {mode === 'file' ? `✅ Uploaded to ${currentProvider.label}!` : '✅ URL ready!'} Copy it below:
            </p>

            <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
              <input
                readOnly
                value={resultUrl}
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  border: '1.5px solid #dde6f0',
                  borderRadius: 10,
                  fontSize: '0.75rem',
                  color: '#252b6e',
                  background: '#f6f9fd',
                  outline: 'none',
                  minWidth: 0,
                }}
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <button
                onClick={copy}
                style={{
                  padding: '10px 18px',
                  background: copied ? '#15803d' : '#252b6e',
                  color: '#fff',
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  border: 'none',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                {copied ? '✓ Copied!' : 'Copy URL'}
              </button>
            </div>

            {/* Preview (image only) */}
            {/\.(jpg|jpeg|png|gif|webp|svg|avif)(\?.*)?$/i.test(resultUrl) ||
            resultUrl.includes('cloudinary.com') ||
            resultUrl.includes('blob.vercel-storage.com') ? (
              <div
                style={{
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '1.5px solid #dde6f0',
                  marginBottom: 14,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resultUrl}
                  alt="Preview"
                  style={{ width: '100%', maxHeight: 200, objectFit: 'cover', display: 'block' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
            ) : null}

            <button
              onClick={reset}
              style={{
                color: '#009bb5',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.83rem',
              }}
            >
              {mode === 'file' ? 'Upload another →' : 'Use another URL →'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
