'use client';

import { useState, useRef } from 'react';

const TYPES = [
  { value: 'bug',     label: 'Bug Report',        icon: 'bug_report',      desc: 'Something is broken' },
  { value: 'ui',      label: 'UI / Design',        icon: 'palette',         desc: 'Visual or UX feedback' },
  { value: 'feature', label: 'Feature Request',    icon: 'auto_awesome',    desc: 'Something new to add' },
  { value: 'other',   label: 'Other',              icon: 'chat_bubble',     desc: 'Anything else' },
];

const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB

function FieldLabel({ htmlFor, children, optional }) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: 'block',
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--text)',
        marginBottom: 8,
        letterSpacing: '0.2px',
      }}
    >
      {children}
      {optional && (
        <span style={{ fontWeight: 400, color: 'var(--subtext)', marginLeft: 6, fontSize: 12 }}>
          (optional)
        </span>
      )}
    </label>
  );
}

function Input({ id, type = 'text', placeholder, value, onChange, required, ...rest }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        width: '100%',
        padding: '12px 16px',
        borderRadius: 10,
        border: `1.5px solid ${focused ? 'var(--primary)' : 'var(--border)'}`,
        background: 'var(--background)',
        color: 'var(--text)',
        fontSize: 14,
        fontFamily: 'var(--font-jakarta), sans-serif',
        outline: 'none',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        boxShadow: focused ? '0 0 0 3px var(--primary-10)' : 'none',
        boxSizing: 'border-box',
      }}
      {...rest}
    />
  );
}

function Textarea({ id, placeholder, value, onChange, required, rows = 5 }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        width: '100%',
        padding: '12px 16px',
        borderRadius: 10,
        border: `1.5px solid ${focused ? 'var(--primary)' : 'var(--border)'}`,
        background: 'var(--background)',
        color: 'var(--text)',
        fontSize: 14,
        fontFamily: 'var(--font-jakarta), sans-serif',
        outline: 'none',
        resize: 'vertical',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        boxShadow: focused ? '0 0 0 3px var(--primary-10)' : 'none',
        lineHeight: 1.65,
        boxSizing: 'border-box',
      }}
    />
  );
}

export default function FeedbackForm() {
  const [type,       setType]       = useState('');
  const [email,      setEmail]      = useState('');
  const [subject,    setSubject]    = useState('');
  const [message,    setMessage]    = useState('');
  const [file,       setFile]       = useState(null);
  const [fileError,  setFileError]  = useState('');
  const [dragOver,   setDragOver]   = useState(false);
  const [status,     setStatus]     = useState('idle'); // idle | loading | success | error
  const [errorMsg,   setErrorMsg]   = useState('');
  const fileRef = useRef(null);

  const handleFile = (f) => {
    setFileError('');
    if (!f) { setFile(null); return; }
    if (f.size > MAX_FILE_BYTES) {
      setFileError('File must be under 10 MB.');
      setFile(null);
      return;
    }
    setFile(f);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) handleFile(dropped);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!type) { setErrorMsg('Please select a feedback type.'); return; }
    setStatus('loading');
    setErrorMsg('');

    const fd = new FormData();
    fd.append('email',   email);
    fd.append('type',    type);
    fd.append('subject', subject);
    fd.append('message', message);
    if (file) fd.append('attachment', file);

    try {
      const res  = await fetch('/api/feedback', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  /* ── Success state ── */
  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '24px 0' }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: 'var(--primary-10)',
            border: '1px solid var(--primary-20)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 36, color: 'var(--primary)', lineHeight: 1 }}
            aria-hidden="true"
          >
            check_circle
          </span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 28,
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: 12,
          }}
        >
          Feedback sent!
        </h2>
        <p style={{ fontSize: 15, color: 'var(--subtext)', lineHeight: 1.7, maxWidth: 380, margin: '0 auto 28px' }}>
          JazakAllah Khair — your message has been received. We&apos;ll review it
          and get back to you if needed.
        </p>
        <button
          onClick={() => {
            setType(''); setEmail(''); setSubject('');
            setMessage(''); setFile(null); setStatus('idle');
          }}
          className="btn-secondary"
          style={{ fontSize: 14 }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>

      {/* Feedback type selector */}
      <div style={{ marginBottom: 28 }}>
        <FieldLabel>Feedback type</FieldLabel>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: 10,
          }}
          role="radiogroup"
          aria-label="Feedback type"
        >
          {TYPES.map((t) => {
            const active = type === t.value;
            return (
              <button
                key={t.value}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setType(t.value)}
                style={{
                  padding: '14px 12px',
                  borderRadius: 12,
                  border: `1.5px solid ${active ? 'var(--primary)' : 'var(--border)'}`,
                  background: active ? 'var(--primary-10)' : 'var(--background)',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                  transform: active ? 'translateY(-1px)' : 'none',
                  boxShadow: active ? '0 4px 12px var(--primary-10)' : 'none',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: 22,
                    color: active ? 'var(--primary)' : 'var(--subtext)',
                    display: 'block',
                    marginBottom: 6,
                    lineHeight: 1,
                    transition: 'color 0.2s ease',
                  }}
                  aria-hidden="true"
                >
                  {t.icon}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: active ? 'var(--primary)' : 'var(--text)',
                    display: 'block',
                    letterSpacing: '0.1px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {t.label}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: 'var(--subtext)',
                    display: 'block',
                    marginTop: 2,
                  }}
                >
                  {t.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Email */}
      <div style={{ marginBottom: 20 }}>
        <FieldLabel htmlFor="fb-email">Your email</FieldLabel>
        <Input
          id="fb-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
      </div>

      {/* Subject */}
      <div style={{ marginBottom: 20 }}>
        <FieldLabel htmlFor="fb-subject" optional>Subject</FieldLabel>
        <Input
          id="fb-subject"
          placeholder="Brief summary of your feedback"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      {/* Message */}
      <div style={{ marginBottom: 20 }}>
        <FieldLabel htmlFor="fb-message">Message</FieldLabel>
        <Textarea
          id="fb-message"
          placeholder="Describe the bug, suggest a feature, or share anything on your mind..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
        />
        <p style={{ marginTop: 6, fontSize: 12, color: 'var(--subtext)' }}>
          {message.length} characters
        </p>
      </div>

      {/* Attachment */}
      <div style={{ marginBottom: 28 }}>
        <FieldLabel htmlFor="fb-attachment" optional>
          Attachment
        </FieldLabel>

        {/* Drop zone */}
        <div
          onClick={() => fileRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          role="button"
          tabIndex={0}
          aria-label="Upload attachment"
          onKeyDown={(e) => e.key === 'Enter' && fileRef.current?.click()}
          style={{
            border: `2px dashed ${dragOver ? 'var(--primary)' : file ? 'var(--primary)' : 'var(--border)'}`,
            borderRadius: 12,
            padding: '24px 16px',
            textAlign: 'center',
            cursor: 'pointer',
            background: dragOver
              ? 'var(--primary-05)'
              : file
              ? 'var(--primary-05)'
              : 'var(--background)',
            transition: 'all 0.2s ease',
          }}
        >
          {file ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 22, color: 'var(--primary)', lineHeight: 1 }}
                aria-hidden="true"
              >
                attach_file
              </span>
              <div style={{ textAlign: 'left' }}>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>
                  {file.name}
                </p>
                <p style={{ margin: '2px 0 0', fontSize: 11, color: 'var(--subtext)' }}>
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setFile(null); if (fileRef.current) fileRef.current.value = ''; }}
                aria-label="Remove attachment"
                style={{
                  marginLeft: 8,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--subtext)',
                  padding: 4,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18, lineHeight: 1 }} aria-hidden="true">
                  close
                </span>
              </button>
            </div>
          ) : (
            <>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 28, color: 'var(--subtext)', display: 'block', marginBottom: 8, lineHeight: 1 }}
                aria-hidden="true"
              >
                cloud_upload
              </span>
              <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>
                Drop a file here, or click to browse
              </p>
              <p style={{ margin: '4px 0 0', fontSize: 12, color: 'var(--subtext)' }}>
                Screenshots, screen recordings, logs — up to 10 MB
              </p>
            </>
          )}
        </div>

        <input
          ref={fileRef}
          id="fb-attachment"
          type="file"
          accept="image/*,video/*,.pdf,.txt,.log,.zip"
          style={{ display: 'none' }}
          onChange={(e) => handleFile(e.target.files?.[0] || null)}
        />

        {fileError && (
          <p style={{ marginTop: 6, fontSize: 12, color: 'var(--error)' }}>
            {fileError}
          </p>
        )}
      </div>

      {/* Error banner */}
      {(status === 'error' || errorMsg) && (
        <div
          style={{
            marginBottom: 20,
            padding: '12px 16px',
            borderRadius: 10,
            background: 'rgba(244, 67, 54, 0.08)',
            border: '1px solid rgba(244, 67, 54, 0.2)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
          }}
          role="alert"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 18, color: 'var(--error)', lineHeight: 1.3, flexShrink: 0 }}
            aria-hidden="true"
          >
            error
          </span>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--error)', lineHeight: 1.5 }}>
            {errorMsg || 'Something went wrong. Please try again.'}
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary"
        style={{
          width: '100%',
          justifyContent: 'center',
          fontSize: 15,
          padding: '15px 24px',
          opacity: status === 'loading' ? 0.75 : 1,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
        }}
      >
        {status === 'loading' ? (
          <>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 18, lineHeight: 1, animation: 'spin 1s linear infinite' }}
              aria-hidden="true"
            >
              progress_activity
            </span>
            Sending…
          </>
        ) : (
          <>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 18, lineHeight: 1 }}
              aria-hidden="true"
            >
              send
            </span>
            Send Feedback
          </>
        )}
      </button>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </form>
  );
}
