# WordPress Deployment Guide (Elementor)

This guide explains how to deploy the ERPP site on WordPress using Elementor. The `site/` HTML files in this folder are starter templates and can be used as reference content you recreate inside Elementor pages.

## Prerequisites

- A WordPress site (self-hosted or hosted by IT)
- Administrator access to the WordPress dashboard
- Elementor plugin installed (Elementor Free is sufficient for basic pages; Elementor Pro gives more template/control options)
- Recommended theme: a lightweight, Elementor-friendly theme like Astra or Hello Elementor

## Recommended plugins

- Elementor (page builder)
- Site Kit by Google (analytics & Search Console)
- A security plugin per IT policy
- (Optional) WPForms or Gravity Forms if you prefer native forms instead of Microsoft Forms

## Quick deployment steps

1. Install WordPress and set up a development/staging site.
2. Install your chosen theme (Astra or Hello Elementor) and activate it.
3. Install and activate Elementor.
4. Create pages (Home, Workshops, Services, AI & Resources, Registration, People).
5. For each page:
   - Open the page in the Elementor editor.
   - Use the HTML content from the corresponding file in `/ERPPwebsite/site/` as a reference for headings, sections and copy.
   - Recreate the layout using Elementor blocks (Heading, Text Editor, Icon Box, Buttons, etc.).
   - For custom HTML snippets (for example the Microsoft Forms iframe), add an "HTML" widget in Elementor and paste the iframe code.
6. Registration embedding (Microsoft Forms):
   - In your Microsoft Form, click "Share" → "Embed" and copy the iframe code.
   - In Elementor, add an "HTML" widget to the Registration page and paste the iframe. Adjust height/width as needed.
   - Alternatively, use a native WordPress form plugin and embed it with a shortcode.
7. Menus: create the primary menu in Appearance → Menus and add the pages.
8. Homepage: set the Home page as the static front page in Settings → Reading.
9. User roles: create editor accounts for the coordinator and contributors.
10. Analytics & reporting: connect Site Kit or paste tracking code, then test that page view data is received.

## Notes on Microsoft Forms and privacy

- Embedding MS Forms keeps responses in Microsoft's servers. If you need to store or forward responses, configure Power Automate or download CSVs manually.
- Check institutional privacy policy before collecting student personal data.
- If your institution blocks embeds, use a native WordPress form plugin.

## Styling and assets

- The `css/styles.css` and `js/script.js` files in `/site/` are minimal starter files you can use to produce a consistent design. In Elementor you can reproduce these styles via the Theme Styles panel or add the CSS to the Customizer.
- If you prefer a fully custom theme, export design elements or use Elementor Theme Builder (requires Pro) to build header/footer templates.

## Backup and version control

- Maintain a copy of important assets and copy (images, PDFs, HTML snippets) in your GitHub repo for backup.
- Use a staging site to test changes before publishing to production.

## Post-deploy checklist

- Verify MS Forms embeds load correctly and test submission.
- Verify mobile responsiveness.
- Confirm analytics is recording visits.
- Create a short process for monthly enrolment/export reporting for the Graduate School.

---

If you'd like, I can:

- Provision a local WordPress dev site (Docker-based) and pre-create the pages, and add Elementor, or
- Draft the Home and Workshops content directly into ready-to-paste HTML blocks for Elementor's "HTML" widget.

Tell me which you'd prefer.