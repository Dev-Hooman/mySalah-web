import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const TYPE_LABELS = {
  bug: '🐛 Bug Report',
  ui: '🎨 UI / Design Feedback',
  feature: '✨ Feature Request',
  other: '💬 Other',
};

export async function POST(request) {
  try {
    const formData = await request.formData();

    const userEmail = (formData.get('email') || '').trim();
    const type = (formData.get('type') || '').trim();
    const subject = (formData.get('subject') || '').trim();
    const message = (formData.get('message') || '').trim();
    const attachment = formData.get('attachment'); // File | null

    /* ── Validation ── */
    if (!userEmail || !type || !message) {
      return NextResponse.json(
        { error: 'Email, feedback type, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    if (!TYPE_LABELS[type]) {
      return NextResponse.json({ error: 'Invalid feedback type.' }, { status: 400 });
    }

    /* ── Build nodemailer attachments ── */
    const attachments = [];
    if (attachment && attachment.size > 0) {
      const MAX_BYTES = 10 * 1024 * 1024; // 10 MB
      if (attachment.size > MAX_BYTES) {
        return NextResponse.json(
          { error: 'Attachment must be under 10 MB.' },
          { status: 400 }
        );
      }
      const buffer = Buffer.from(await attachment.arrayBuffer());
      attachments.push({
        filename: attachment.name,
        content: buffer,
        contentType: attachment.type || 'application/octet-stream',
      });
    }

    /* ── Email HTML ── */
    const safeMessage = message
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br/>');

    const subjectLine = subject
      ? `[My Salah] ${TYPE_LABELS[type]}: ${subject}`
      : `[My Salah] ${TYPE_LABELS[type]} from ${userEmail}`;

    const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f5f5f0;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:32px auto;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.10);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#808000 0%,#606000 100%);padding:28px 32px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:8px;display:inline-block;">
          <span style="font-size:24px;">🕌</span>
        </div>
        <div>
          <h1 style="color:#fff;margin:0;font-size:20px;font-weight:700;letter-spacing:-0.3px;">My Salah</h1>
          <p style="color:rgba(255,255,255,0.75);margin:2px 0 0;font-size:13px;">New Feedback Received</p>
        </div>
      </div>
    </div>

    <!-- Meta strip -->
    <div style="background:#fffef7;border-bottom:1px solid #e8e4d4;padding:20px 32px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:6px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;width:110px;">Type</td>
          <td style="padding:6px 0;">
            <span style="background:rgba(128,128,0,0.1);color:#606000;font-size:12px;font-weight:700;padding:3px 10px;border-radius:999px;letter-spacing:0.5px;">
              ${TYPE_LABELS[type]}
            </span>
          </td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">From</td>
          <td style="padding:6px 0;font-size:14px;">
            <a href="mailto:${userEmail}" style="color:#808000;text-decoration:none;font-weight:600;">${userEmail}</a>
          </td>
        </tr>
        ${subject ? `
        <tr>
          <td style="padding:6px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Subject</td>
          <td style="padding:6px 0;font-size:14px;color:#333;font-weight:600;">${subject}</td>
        </tr>` : ''}
        ${attachment && attachment.size > 0 ? `
        <tr>
          <td style="padding:6px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Attachment</td>
          <td style="padding:6px 0;font-size:13px;color:#555;">
            📎 ${attachment.name} &nbsp;<span style="color:#aaa;">(${(attachment.size / 1024).toFixed(1)} KB)</span>
          </td>
        </tr>` : ''}
      </table>
    </div>

    <!-- Message body -->
    <div style="background:#fff;padding:28px 32px;">
      <h2 style="font-size:13px;text-transform:uppercase;letter-spacing:2px;color:#aaa;margin:0 0 14px;font-weight:700;">Message</h2>
      <div style="background:#f9f8f3;border:1px solid #ede9d8;border-left:3px solid #808000;border-radius:0 6px 6px 0;padding:18px 20px;font-size:14px;line-height:1.75;color:#333;">
        ${safeMessage}
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#f5f5f0;padding:16px 32px;text-align:center;border-top:1px solid #e8e4d4;">
      <p style="margin:0;color:#aaa;font-size:12px;">
        My Salah Feedback System &nbsp;·&nbsp;
        <a href="mailto:${userEmail}" style="color:#808000;text-decoration:none;">Reply to sender</a>
      </p>
    </div>
  </div>
</body>
</html>`;

    /* ── Send email ── */
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"My Salah Feedback" <${process.env.FROM_EMAIL}>`,
      to: process.env.EMAIL_USER,
      replyTo: userEmail,
      subject: subjectLine,
      html,
      attachments,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('[feedback] send error:', err);
    return NextResponse.json(
      { error: 'Failed to send feedback. Please try again later.' },
      { status: 500 }
    );
  }
}
