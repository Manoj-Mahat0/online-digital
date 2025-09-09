# email_utils.py
import os
import smtplib
from email.message import EmailMessage
from email.utils import formatdate, make_msgid
from dotenv import load_dotenv

load_dotenv()

MAIL_HOST = os.getenv("MAIL_HOST")
MAIL_PORT = int(os.getenv("MAIL_PORT", "465"))
MAIL_USERNAME = os.getenv("MAIL_USERNAME")
MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
MAIL_FROM_ADDRESS = os.getenv("MAIL_FROM_ADDRESS", MAIL_USERNAME)
MAIL_FROM_NAME = os.getenv("MAIL_FROM_NAME", "")
UNSUBSCRIBE_URL = os.getenv("UNSUBSCRIBE_URL", "")

def _format_from():
    if MAIL_FROM_NAME:
        return f'{MAIL_FROM_NAME} <{MAIL_FROM_ADDRESS}>'
    return MAIL_FROM_ADDRESS

def build_email_message(to_email: str, registration: dict) -> EmailMessage:
    """
    Build an EmailMessage object with emoji-rich responsive HTML and plain fallback.
    Logo support removed per request.
    """
    from_header = _format_from()
    domain = MAIL_FROM_ADDRESS.split("@")[-1]
    msg = EmailMessage()
    msg["From"] = from_header
    msg["To"] = to_email
    msg["Subject"] = "🎉 GST Registration Received — E Digital India"
    msg["Reply-To"] = from_header
    msg["Date"] = formatdate(localtime=True)
    msg["Message-ID"] = make_msgid(domain=domain)
    msg["X-Mailer"] = "E-Digital-Registration/2.0"
    if UNSUBSCRIBE_URL:
        msg["List-Unsubscribe"] = f"<{UNSUBSCRIBE_URL}>"

    full_name = registration.get("full_name") or "Friend"
    business = registration.get("business_name") or "N/A"
    btype = registration.get("business_type") or "N/A"
    mobile = registration.get("mobile_number") or "N/A"
    pan = registration.get("pan_number") or "N/A"
    state = registration.get("state") or "N/A"
    district = registration.get("district") or "N/A"

    # Plain text fallback
    plain = f"""🎉 Hi {full_name},

Thanks — we received your GST registration request. Our team will contact you shortly.

📄 Details
- Business: {business}
- Type: {btype}
- Mobile: {mobile}
- PAN: {pan}
- State: {state}
- District: {district}

If you didn't request this, reply to {MAIL_FROM_ADDRESS}

— E Digital India
🌐 https://onlinedigitalindia.com
"""

    # HTML template (responsive, emoji rich)
    html = f"""\
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      body {{ background: #f6f9fc; margin: 0; padding: 0; font-family: -apple-system, Roboto, "Segoe UI", "Helvetica Neue", Arial; }}
      .container {{ max-width: 680px; margin: 20px auto; padding: 20px; background: #ffffff; border-radius: 12px; box-shadow: 0 2px 12px rgba(20,30,60,0.06); }}
      .title {{ font-size:20px; margin:0; color:#0f172a; }}
      .subtitle {{ font-size:14px; color:#475569; margin:6px 0 0; }}
      .card {{ background: linear-gradient(90deg,#ffffff,#fafafa); padding:14px; border-radius:10px; margin-top:16px; border:1px solid #f0f3f7; }}
      .row {{ display:flex; gap:12px; align-items:center; }}
      .label {{ color:#64748b; font-size:13px; min-width:110px; }}
      .value {{ color:#0f172a; font-weight:600; font-size:14px; }}
      .cta {{ display:inline-block; margin-top:16px; padding:10px 16px; background:#0ea5a4; color:white; text-decoration:none; border-radius:8px; }}
      .footer {{ font-size:12px; color:#94a3b8; margin-top:18px; text-align:center; }}
      .small {{ font-size:12px; color:#94a3b8; }}
      @media (max-width:520px) {{
        .row {{ flex-direction:column; align-items:flex-start; gap:6px; }}
        .label {{ min-width:unset; }}
      }}
    </style>
  </head>
  <body>
    <div class="container" role="article" aria-label="GST Registration Confirmation">
      <div style="text-align:left;">
        <h1 class="title">🎉 Registration Received</h1>
        <p class="subtitle">Thanks {full_name} — we got your GST registration request.</p>
      </div>

      <div class="card" role="region" aria-label="Registration details">
        <p style="margin:0 0 8px;font-size:13px;color:#475569;">Here are the details we received — we’ll contact you shortly.</p>

        <div style="margin-top:8px;">
          <div class="row"><div class="label">📛 Name</div><div class="value">{full_name}</div></div>
          <div class="row"><div class="label">🏢 Business</div><div class="value">{business}</div></div>
          <div class="row"><div class="label">📝 Type</div><div class="value">{btype}</div></div>
          <div class="row"><div class="label">📞 Mobile</div><div class="value">{mobile}</div></div>
          <div class="row"><div class="label">🆔 PAN</div><div class="value">{pan}</div></div>
          <div class="row"><div class="label">📍 State</div><div class="value">{state}</div></div>
          <div class="row"><div class="label">📍 District</div><div class="value">{district}</div></div>
        </div>

        <a class="cta" href="https://onlinedigitalindia.com/contact" target="_blank" rel="noopener">📞 Contact Support</a>
      </div>

      <p class="footer">
        ✅ Need to change details? Reply to this email or contact <a href="mailto:{MAIL_FROM_ADDRESS}">{MAIL_FROM_ADDRESS}</a>.<br/>
        <span class="small">E Digital India • <a href="https://onlinedigitalindia.com">onlinedigitalindia.com</a></span>
      </p>

      <p class="small" style="text-align:center;margin-top:12px;color:#9aa8bd;">
        If you didn't request this, please <a href="mailto:{MAIL_FROM_ADDRESS}">let us know</a>. {('• <a href="'+UNSUBSCRIBE_URL+'">Unsubscribe</a>' if UNSUBSCRIBE_URL else '')}
      </p>
    </div>
  </body>
</html>
"""

    msg.set_content(plain)
    msg.add_alternative(html, subtype="html")
    return msg

def send_confirmation_email(to_email: str, registration: dict) -> bool:
    """
    Sends the message using implicit SSL (SMTP_SSL). Uses MAIL_USERNAME as envelope-from.
    Returns True on success, False on failure.
    """
    if not (MAIL_HOST and MAIL_USERNAME and MAIL_PASSWORD):
        print("SMTP not configured; skipping email send.")
        return False

    msg = build_email_message(to_email, registration)

    try:
        with smtplib.SMTP_SSL(MAIL_HOST, MAIL_PORT, timeout=30) as smtp:
            smtp.login(MAIL_USERNAME, MAIL_PASSWORD)
            smtp.send_message(msg, from_addr=MAIL_USERNAME, to_addrs=[to_email])
        print("✅ Email sent to", to_email)
        return True
    except Exception as e:
        print("❌ Email send failed:", repr(e))
        return False
