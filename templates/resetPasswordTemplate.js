const template = `<!-- Preheader: use this text as the email preheader (some clients show it next to subject) -->
<!-- preheader: Reset your password — link expires in {{expiryMinutes}} minutes -->

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Password Reset</title>
  <style>
    /* Basic mobile tweaks (many email clients support simple media queries) */
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; padding: 24px !important; }
      .hero { padding: 28px 20px !important; }
      .btn { width: 100% !important; display: block !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:linear-gradient(135deg,#ccadeb,#b285e0);font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color:#0f1724;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <!-- Outer card -->
        <table class="container" width="600" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;max-width:100%;background:#ffffff;border-radius:12px;box-shadow:0 6px 18px rgba(15,23,36,0.08);overflow:hidden;">
          <tr>
            <td style="padding:28px 32px;" class="hero">
              <!-- Header / Logo area -->
              <table width="100%" role="presentation">
                <tr>
                  <td style="font-size:18px;font-weight:600;color:#0f1724;">
                    <!-- Optional: replace with inline <img> for logo -->
                    FemFit
                  </td>
                  <td align="right" style="color:#94a3b8;font-size:13px;">
                    Security
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <div style="height:1px;background:#eef2f7;margin:20px 0;border-radius:1px;"></div>

              <!-- Greeting -->
              <p style="margin:0 0 16px 0;font-size:16px;color:#0f1724;">
                Hi {{userName}},
              </p>

              <!-- Message -->
              <p style="margin:0 0 24px 0;color:#334155;line-height:1.5;font-size:15px;">
                We received a request to reset your password. Click the button below to choose a new password. This link will expire in <strong>{{expiryMinutes}} minutes</strong>.
              </p>

              <!-- CTA -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 22px 0;">
                <tr>
                  <td align="center">
                    <a class="btn" href="{{resetUrl}}" target="_blank" rel="noopener" style="background:linear-gradient(135deg,#ccadeb,#b285e0);color:#fff;padding:12px 22px;border-radius:8px;text-decoration:none;font-weight:600;font-size:15px;display:inline-block;box-shadow:0 4px 12px rgba(3,105,161,0.12);">
                      Reset password
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Fallback link -->
              <p style="margin:0 0 12px 0;color:#64748b;font-size:13px;">
                If the button doesn't work, copy and paste this link into your browser:
              </p>
              <p style="margin:0 0 20px 0;word-break:break-all;font-size:13px;color:#b285e0;">
                <a href="{{resetUrl}}" target="_blank" rel="noopener" style="color:#b285e0;text-decoration:underline;">{{resetUrl}}</a>
              </p>

              <!-- Notice -->
              <p style="margin:0 0 12px 0;color:#94a3b8;font-size:13px;">
                If you didn't request a password reset, you can safely ignore this email — no changes were made to your account.
              </p>

              <!-- Divider -->
              <div style="height:1px;background:#eef2f7;margin:22px 0;border-radius:1px;"></div>

              <!-- Footer small -->
              <table width="100%" role="presentation">
                <tr>
                  <td style="font-size:12px;color:#94a3b8;">
                    Need help? Reply to this email or visit our support page.
                  </td>
                  <td align="right" style="font-size:12px;color:#94a3b8;">
                    © {{currentYear}} FemFit
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

module.exports = template;