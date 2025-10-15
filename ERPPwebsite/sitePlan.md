# ERPP Website - Site Plan

This document outlines a practical plan to set up and run the ERPP (English for Research Publication Purposes) website. It translates the notes in `planERPPsite.md` into a concrete site structure, tech choices, content map, implementation steps, and next actions for launch and maintenance.

## Goals and audience

- Promote the ERPP programme to research postgraduate (RPg) students and supervisors.
- Provide easy registration for workshops and services.
- Showcase workshop content, AI-in-research resources, and student/testimony highlights.
- Gather basic analytics (visits, sign-ups) and periodic enrolment reports for the Graduate School.

Primary audience: RPg students, peer tutors, supervisors, Graduate School administrators.

## High-level site structure (content map)

- Home / Overview
  - Short description of ERPP and coordinator contact
  - Quick highlights (7-year history, revitalisation, AI focus)
  - Call-to-action (Register / Workshops)
- Workshops
  - List of upcoming workshops (title, date/time, short blurb, how to register)
  - Workshop archive (past events and materials)
- Services
  - 1:1 consultations
  - Peer-tutoring and student supports
- AI & Research Writing (Blog / Resources)
  - Practical guides on using LLMs for research writing
  - Mini-tutorials and example prompts
  - Corpus & data-driven approaches
- Registration
  - Embedded form or link to Office Forms (current shortlink noted in `planERPPsite.md`)
- People / Contacts
  - Coordinator and team members with short bios and contact details
- Reports / Metrics (admin-only page or downloadable reports)
- About / Policies
  - Accessibility, privacy, and data usage (esp. if using forms)

## Technical choices (recommended)

Note: the website will be on WordPress (CMS) as requested. Below are WordPress-friendly technical recommendations and alternatives.

- Platform: WordPress (self-hosted or hosted by your institution)
- Hosting: institutional web hosting or a managed WordPress host (e.g., WP Engine, SiteGround) depending on policy and budget
- Theme: pick a lightweight, accessible theme (Astra, Twenty Twenty-Three, or a university-provided theme)
- Page builder: use the native Gutenberg editor for simple pages or a visual builder (Elementor, Beaver Builder) if you need drag-and-drop editing
- Forms: Microsoft Forms can be embedded in WordPress pages (see section below); alternatively use a WordPress native form plugin (WPForms, Gravity Forms, Contact Form 7) if you need tighter integration with the site or webhooks
- Analytics: Google Analytics via a plugin (Site Kit) or Matomo depending on institutional requirements
- Version control / content staging: keep design and content updates in a development/staging site before publishing; maintain a copy of core assets in GitHub for backup if desired

## WordPress-specific setup

1. Provision hosting and a WordPress install (ask IT for a subsite or use managed hosting).
2. Choose and install a theme (prefer an accessible, lightweight theme).
3. Install recommended plugins:
  - Site Kit (Google Analytics, Search Console) or an analytics plugin preferred by the university
  - SEO plugin (Yoast or Rank Math) if allowed
  - A caching plugin (WP Super Cache or WP Rocket) if needed
  - Security plugin (Wordfence or equivalent) as per institutional policy
  - Optional: a forms plugin (WPForms) if you prefer native forms over Microsoft Forms
4. Create the pages from the content map: Home, Workshops, Services, AI & Resources, Registration, People, Reports, About
5. Use Gutenberg blocks or a page builder to add layout, CTAs, and the registration embed
6. Set up roles and editors: coordinator (editor) and content contributors (authors)

## Embedding Microsoft Forms in WordPress

Yes — you can embed Microsoft Forms into WordPress pages. Microsoft Forms provides an embed snippet (iframe) that you can paste into a "Custom HTML" block in the Gutenberg editor or into a template.

Steps to embed:

1. Open your Microsoft Form, click "Share", choose "Embed" and copy the provided iframe code. It will look like:

  <iframe src="https://forms.office.com/Pages/ResponsePage.aspx?id=YOUR_FORM_ID&embed=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

2. In WordPress, edit the target page and add a "Custom HTML" block (or use the Text tab in Classic Editor) then paste the iframe code. Save and preview.

Notes and alternatives:
- If your Microsoft Form only gives a short link, add `&embed=true` to the full form URL before wrapping in an iframe.
- Embedding keeps responses in Microsoft Forms (no personal data stored on WordPress). If you need responses routed to other systems, use Power Automate to forward responses to email, a spreadsheet, or a webhook.
- If your institution blocks iframes or external embeds, consider hosting a native WordPress form and exporting/submitting responses to wherever required.
- Check privacy rules for collecting student personal data when embedding external forms.

## Alternatives for tighter integration

- Use a WordPress form plugin (WPForms/Gravity) to store responses in WordPress and optionally forward them to MS Forms or email. This gives more control (export CSV, notifications, confirmations).
- Use Microsoft Power Automate to bridge Microsoft Forms responses to a Google Sheet, SharePoint list, or to call a webhook that your WordPress site can consume.

## Minimal required files and structure

ERPPwebsite/
- index.html (home)
- workshops.html
- services.html
- ai-resources.html
- registration.html (or a section on index)
- people.html
- css/styles.css
- js/script.js (for small UI interactions)
- images/ (programme logo, photos)
- data/ (optional: JSON for workshop entries)

Note: The existing `researchTeamWebsite/` folder can be used as a lightweight template — copy patterns for layout, CSS and navigation.

## Accessibility & content notes

- Ensure clear headings, semantic HTML, and alt text for images.
- Provide text alternatives for embedded forms and external links.
- Keep privacy considerations in mind when collecting student data; check institutional rules for storing personal data.

## Implementation steps (with estimated effort)

1. Prepare content and assets (1-2 days)
   - Finalise programme description, coordinator bio, workshop list, and cover image.
   - Decide whether to embed Microsoft Forms or host a local contact form.
2. Create site scaffold (0.5 day)
   - Create `index.html`, `css/styles.css`, `js/script.js` and navigation partials.
   - Copy basic styles from `researchTeamWebsite/css/styles.css` if desired.
3. Implement pages and registration (1 day)
   - Add workshops, services, people pages, and embed the registration form link.
4. Accessibility check and review (0.5 day)
   - Run basic a11y checks and fix issues.
5. Deploy (0.5 day)
   - Push to GitHub and enable GitHub Pages or upload to institutional server.
6. Analytics and reporting (0.5 day)
   - Install analytics and set up monthly enrolment reporting process to Graduate School.

Total: ~4 days (can be compressed if only a basic static site is needed)

## Tips for content and promotion

- Use clear CTAs: "Register" buttons on multiple pages.
- Keep a short mailing list or announce via the Graduate School channels.
- Use short testimonials and workshop photos to increase engagement.
- Tag pages with metadata and keywords for search engines.

## Admin & maintenance

- Assign a coordinator to update workshop listings and to export enrolment numbers monthly.
- Keep the repo updated and use PRs for content changes if multiple editors are involved.

## Next steps (actions)

- [ ] Confirm hosting choice and whether IT will provision WordPress (institutional host) or you prefer managed hosting.
- [ ] Confirm whether to embed Microsoft Forms (recommended for quick setup) or use a WordPress-native form plugin.
- [ ] Draft the copy for the Home page and Workshops page.
- [ ] Provision a development WordPress site and create the initial pages and roles.
- [ ] Implement the registration page and embed the Microsoft Form or configure the native form.

---

Generated from notes in `planERPPsite.md`. For the next step I can create the initial scaffold (index.html, styles, scripts) in `ERPPwebsite/` and copy useful assets from `researchTeamWebsite/` if you want. Let me know which deployment option you prefer (GitHub Pages or institutional server) and whether embedding Microsoft Forms is acceptable.