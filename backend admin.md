PROJECT: XB CLOUD TECH — COMPLETE WEBSITE CMS & VISUAL ADMIN PANEL

Project Objective

Build a complete, secure, production-ready website administration system for the existing XB Cloud Tech corporate and software products website.

The admin panel must allow authorized administrators to manage and customize the public-facing website without directly modifying source code.

The system must support:

Visual website customization.

Page and section management.

Drag-and-drop page building.

Product page management.

Campaign landing page management.

Global design system customization.

Media and asset management.

SEO management.

Navigation and footer management.

Blog and content management.

Website form configuration.

Preview, publishing, scheduling, and version history.

User roles and permissions.

Website-wide settings.

This project is an extension of the existing XB Cloud Tech website, not a replacement or a full website rebuild.

The existing React + Vite + TypeScript architecture must be audited and preserved wherever appropriate.

NON-NEGOTIABLE DEVELOPMENT PRINCIPLES

The existing public website must continue working during development.

Admin changes must reflect on the public website through a controlled content-rendering system.

Do not create a separate duplicate website for the admin panel.

Do not hardcode editable website content inside React components.

Separate content data, presentation components, and business logic.

Every editable component must have a validated data schema.

Admin users must not be able to execute arbitrary JavaScript through content fields.

All write operations must be authenticated and authorized server-side.

Publishing must be reversible.

Never expose secret keys, service-account credentials, or privileged database access in frontend code.

Preserve existing SEO URLs and website routes.

Do not claim a feature is complete until it has been tested end-to-end.

PHASE 0 — REPOSITORY & ARCHITECTURE AUDIT

Before development, conduct a complete read-only audit.

Inspect:

Existing React + Vite + TypeScript project.

Current website routes.

Existing product pages.

Corporate pages.

Campaign landing pages.

Shared components.

Existing CSS and design tokens.

Existing Firebase or other backend integrations.

Current hosting and deployment setup.

Existing authentication implementation, if any.

Existing media storage.

Existing forms and integrations.

Existing SEO configuration.

Current build and deployment pipeline.

Identify all public-facing pages, including:

Homepage.

About.

Services.

Products.

Storex ERP.

Purchoon ERP.

CambridgeDesk.

Pharmacy ERP.

Industrial ERP.

Qistmarket ERP.

Custom Enterprise Software.

Portfolio.

Pricing.

Blog.

Contact.

Privacy Policy.

Terms.

Campaign landing pages.

Create a complete page/component inventory.

Required deliverable

Produce:

Current architecture report.

Existing backend and hosting report.

Public route inventory.

Reusable component inventory.

Current content storage assessment.

Admin architecture proposal.

Migration and compatibility plan.

Development risks.

Do not modify the production website during this audit.

PHASE 1 — ADMIN ARCHITECTURE & BACKEND FOUNDATION

Design the admin panel architecture before building the interface.

1.1 Route Architecture

Recommended routes:

/admin/login
/admin/dashboard
/admin/pages
/admin/pages/
/admin/products
/admin/products/
/admin/landing-pages
/admin/navigation
/admin/footer
/admin/design-system
/admin/media
/admin/blog
/admin/seo
/admin/forms
/admin/users
/admin/settings
/admin/activity
/admin/versions

All admin routes must be protected.

The admin panel must not appear in the public website navigation.

1.2 Backend Selection

First inspect the existing backend.

If the existing Firebase project and configuration are suitable, consider:

Firebase Authentication.

Cloud Firestore.

Firebase Storage.

Cloud Functions or a secure backend service for privileged operations.

If a different backend is already established and suitable, preserve it.

If there is no suitable backend, prepare a documented architecture decision before selecting a new backend.

Requirements:

Secure authentication.

Server-side authorization.

Database schema.

Media storage.

Content versioning.

Publishing workflow.

Activity logs.

Secure form submission handling.

Do not mix incompatible backend architectures without a documented reason.

1.3 Content Architecture

Design structured data models for:

Pages.

Page sections.

Reusable components.

Products.

Product features.

Campaign landing pages.

Navigation.

Footer.

Design tokens.

Media assets.

Blog posts.

SEO metadata.

Form configurations.

Website settings.

Users and permissions.

Drafts and published versions.

Activity logs.

Use stable IDs and explicit schemas.

Do not store entire React components or arbitrary executable code in the database.

PHASE 2 — SECURE ADMIN AUTHENTICATION & ACCESS CONTROL

Build a professional admin login experience.

Features:

Email and password authentication.

Secure session handling.

Logout.

Password reset.

Session expiration.

Protected routes.

Login error handling.

Unauthorized access handling.

User roles

Super Admin

Full access.

Manage all website content.

Manage users and permissions.

Publish and restore versions.

Manage global settings.

Website Administrator

Manage pages.

Manage products.

Manage media.

Manage navigation and footer.

Manage SEO and website settings within assigned permissions.

Content Editor

Create and edit content.

Manage blog posts.

Update product descriptions.

Upload permitted media.

Save drafts.

Cannot manage users or sensitive settings.

Marketing Manager

Manage campaign landing pages.

Manage page SEO.

Manage marketing content.

Manage CTA and campaign tracking settings.

View form submissions if explicitly authorized.

Viewer

Read-only access.

Requirements:

Permission-based UI.

Server-side authorization for every protected operation.

Secure Firestore/database rules or equivalent.

Role changes restricted to authorized administrators.

Activity log for important actions.

Do not rely on hiding buttons in the UI as the only security mechanism.

PHASE 3 — ADMIN DASHBOARD

Create a modern, premium administration interface.

Visual direction:

Light theme.

XB Cloud Tech branding.

Primary blue #0B5FFF.

Accent cyan #00D4FF.

Dark navy #0A0F1E.

Clean sidebar.

Responsive layout.

Professional data tables.

Consistent cards and typography.

Dashboard overview

Display:

Total published pages.

Total draft pages.

Total products.

Total landing pages.

Total blog posts.

Recent content changes.

Recent publishing activity.

Pending drafts.

Website health status.

Recent form submissions, only if a real submission backend exists.

Quick actions

Create New Page.

Edit Homepage.

Edit Product Page.

Create Campaign Landing Page.

Upload Media.

Edit Navigation.

Manage SEO.

Preview Website.

Dashboard analytics must use real available data.

Never show invented website traffic, conversion rates, revenue, or leads.

PHASE 4 — COMPLETE VISUAL PAGE BUILDER

This is the most important phase.

Create a visual website page builder that allows administrators to customize public pages without writing code.

4.1 Page Builder Interface

Use a three-panel layout:

LEFT PANEL:

Available components.

Section library.

Layout library.

Saved reusable sections.

CENTER PANEL:

Visual page canvas.

Live layout preview.

Drag-and-drop section ordering.

Responsive viewport preview.

RIGHT PANEL:

Selected component settings.

Content editor.

Style controls.

Spacing.

Typography.

Background.

Borders.

Visibility.

Animation options.

Responsive overrides.

Top toolbar:

Page name.

Save draft.

Undo.

Redo.

Desktop preview.

Tablet preview.

Mobile preview.

Preview website.

Publish.

4.2 Drag-and-Drop Editing

Administrators must be able to:

Add sections.

Remove sections.

Duplicate sections.

Reorder sections.

Hide sections.

Show sections.

Edit section content.

Replace images.

Change layouts.

Save reusable sections.

Restore previous section configuration.

Use stable section IDs.

Preserve component identity when sections are reordered.

4.3 Component Library

Build reusable, schema-driven website sections.

Hero Components

Split Hero.

Centered Hero.

Video Hero.

Dashboard Preview Hero.

Product Hero.

Campaign Hero.

Content Components

Rich Text.

Image + Text.

Two Column Layout.

Three Column Layout.

Feature Grid.

Icon Grid.

Statistics Section.

Benefits Section.

Comparison Section.

Logo Strip.

Testimonials.

Team Section.

Product Components

Product Overview.

Product Features.

Product Screenshots.

Interactive Product Demo.

Product Workflow.

Product Benefits.

Product Modules.

Product Pricing.

Product FAQs.

Conversion Components

CTA Banner.

Demo Request Form.

Contact Form.

WhatsApp CTA.

Newsletter Form.

Media Components

Image Gallery.

Video Section.

Screenshot Gallery.

Image Comparison.

Content Components

Blog Grid.

Blog Categories.

Case Studies.

FAQ Accordion.

Breadcrumbs.

Each component must have:

Defined content schema.

Defined style schema.

Responsive behavior.

Accessibility support.

Validation.

Preview capability.

Only registered and approved component types may be rendered.

4.4 Global Component Controls

Provide editable settings for:

Section width.

Container width.

Padding.

Margin.

Background.

Text color.

Heading size.

Font weight.

Text alignment.

Column count.

Gap.

Border radius.

Border.

Shadow.

Image aspect ratio.

Content alignment.

Visibility per breakpoint.

Support controlled design options rather than arbitrary CSS or JavaScript injection.

PHASE 5 — ADVANCED DESIGN CUSTOMIZATION

Build a complete global design system editor.

5.1 Brand Settings

Allow authorized administrators to manage:

Company logo.

Product logos.

Favicon.

Brand colors.

Typography.

Heading styles.

Body text styles.

Button styles.

Card styles.

Background styles.

5.2 Theme Editor

Support:

Light theme.

Dark theme only where the public website supports it.

Primary color.

Secondary color.

Accent color.

Surface color.

Text color.

Border color.

Use global design tokens.

Changes to global tokens should update all components that reference those tokens.

5.3 Typography Editor

Allow control over:

Heading font.

Body font.

Font sizes.

Font weights.

Line heights.

Letter spacing.

Heading hierarchy.

Use supported, licensed fonts.

5.4 Button & CTA Editor

Manage:

Button labels.

Button styles.

Button sizes.

Button colors.

Border radius.

Hover states.

CTA links.

Target behavior.

Validate internal and external destinations.

5.5 Animation Settings

Provide approved animation presets:

Fade In.

Slide Up.

Slide In.

Scale In.

Staggered Reveal.

Subtle Parallax.

Counter Animation.

Hover Motion.

Allow:

Animation selection.

Duration.

Delay.

Stagger interval.

Trigger behavior.

Respect reduced-motion preferences.

Do not permit arbitrary script injection or uncontrolled animation code.

PHASE 6 — COMPLETE PAGE MANAGEMENT

Create a central Pages module.

Page list should show:

Page name.

Route.

Page type.

Status.

Last updated.

Updated by.

SEO status.

Publish date.

Actions:

Create page.

Edit page.

Duplicate page.

Delete page with confirmation.

Preview page.

Publish page.

Unpublish page.

Restore version.

Page types

Support:

Corporate page.

Product page.

Industry page.

Service page.

Campaign landing page.

Blog page.

Custom content page.

Page creation workflow

Select page type.

Enter page name.

Generate or enter route slug.

Select starting template.

Add sections.

Customize content and design.

Configure SEO.

Preview.

Save draft.

Publish.

Route collision validation is mandatory.

Deleting a page must not silently break existing links. Require confirmation and provide an appropriate redirect or unpublish strategy.

PHASE 7 — PRODUCT MANAGEMENT CMS

Create a complete product management module.

Existing products:

Storex ERP.

Purchoon ERP.

CambridgeDesk.

Pharmacy ERP.

Industrial ERP.

Qistmarket ERP.

Product list

Display:

Product name.

Product logo.

Product category.

Published status.

Product route.

Last updated.

CTA configuration.

Product editor

Allow administrators to manage:

Product Identity

Name.

Short description.

Full description.

Logo.

Cover image.

Product category.

Product status.

Product Hero

Eyebrow.

Headline.

Supporting text.

Primary CTA.

Secondary CTA.

Hero image or dashboard preview.

Features

Feature title.

Feature description.

Icon.

Screenshot.

Display order.

Visibility.

Product Modules

Module name.

Description.

Icon.

Image.

Status.

Product Benefits

Benefit title.

Description.

Visual.

Product Gallery

Screenshots.

Videos.

Captions.

Ordering.

Product Pricing

Pricing model.

Display price.

Billing period.

Feature comparison.

CTA.

Only display actual approved pricing. Provide a hide-pricing option.

Product FAQs

Question.

Answer.

Ordering.

Visibility.

Product SEO

Title.

Description.

Canonical URL.

Open Graph image.

Keywords for editorial reference.

Do not allow unsupported product claims to be published without editorial review.

PHASE 8 — CAMPAIGN LANDING PAGE BUILDER

Create a dedicated marketing landing page module.

It must support independent campaign pages for:

Storex ERP.

Purchoon ERP.

CambridgeDesk.

Pharmacy ERP.

Industrial ERP.

Custom Enterprise Software.

Recommended routes:

/lp/storex-retail/
/lp/purchoon-wholesale/
/lp/cambridgedesk-schools/
/lp/pharmacy-management/
/lp/industrial-erp/
/lp/custom-enterprise-software/

Landing page controls

Campaign name.

Product selection.

Campaign route.

Hero headline.

Hero supporting copy.

Primary CTA.

Secondary CTA.

Feature sections.

Screenshots.

Benefits.

FAQs.

Form.

WhatsApp CTA.

SEO metadata.

Tracking configuration.

Conversion-focused options

Minimal header.

Reduced navigation.

Focused CTA.

Campaign-specific sections.

Lead form placement.

Mobile CTA behavior.

Allow multiple landing page variants without overwriting the main product page.

Never automatically create fake A/B test results.

PHASE 9 — NAVIGATION & FOOTER BUILDER

Build dedicated modules for website navigation and footer.

Header editor

Allow editing:

Logo.

Navigation labels.

Navigation links.

Dropdown menus.

Product menu.

CTA button.

Header layout.

Sticky behavior.

Mobile menu options.

Support:

Add item.

Remove item.

Reorder item.

Nested navigation.

Internal links.

External links.

Footer editor

Allow editing:

Company description.

Logo.

Product links.

Service links.

Contact details.

Social links.

Legal links.

Copyright text.

Newsletter section.

Footer columns.

Provide desktop and mobile preview.

PHASE 10 — MEDIA LIBRARY

Build a central asset management system.

Features

Upload images.

Upload videos where supported.

Upload SVG logos with sanitization.

Organize folders.

Search assets.

Filter by type.

Replace assets.

Delete unused assets.

Copy asset URL.

Preview assets.

Add alt text.

Add captions.

Manage image metadata.

Image optimization

Responsive image variants.

WebP/AVIF where supported.

Compression.

Dimensions.

File-size validation.

Lazy-loading support.

Asset safety

Validate MIME type.

Restrict dangerous file types.

Limit file size.

Sanitize SVG uploads.

Prevent executable file uploads.

Do not allow arbitrary HTML uploads.

Before deleting an asset, check whether it is referenced by a published page.

PHASE 11 — BLOG & CONTENT MANAGEMENT

Build a complete blog CMS.

Blog management

Create post.

Edit post.

Duplicate post.

Save draft.

Publish.

Schedule.

Unpublish.

Archive.

Delete with confirmation.

Blog editor

Support:

Title.

Slug.

Excerpt.

Featured image.

Author.

Category.

Tags.

Rich text content.

Headings.

Lists.

Images.

Links.

Callout blocks.

Related products.

SEO metadata.

The rich-text editor must sanitize HTML and prevent script injection.

Blog categories

Allow:

Create.

Edit.

Delete.

Reorder.

Assign posts.

PHASE 12 — SEO MANAGEMENT CENTER

Build a website-wide SEO control center.

Global SEO

Default title template.

Default meta description.

Favicon.

Default Open Graph image.

Canonical settings.

Robots settings.

Sitemap configuration.

Page-level SEO

SEO title.

Meta description.

Canonical URL.

Open Graph title.

Open Graph description.

Open Graph image.

Index/noindex.

Follow/nofollow.

Structured data selection from approved schemas.

SEO validation

Show warnings for:

Missing title.

Missing description.

Duplicate title.

Missing canonical.

Missing H1.

Multiple H1s where inappropriate.

Missing image alt text.

Broken internal links.

Invalid structured data.

Do not promise search ranking improvements.

Do not generate fake review schema or misleading product claims.

Preserve clean public URLs and ensure published pages can be indexed.

PHASE 13 — FORMS & LEAD SUBMISSION MANAGEMENT

Create a form configuration module.

Manage forms for:

General contact.

Product demo requests.

Campaign landing pages.

Newsletter subscriptions.

Form builder

Allow:

Add field.

Remove field.

Reorder fields.

Set required status.

Select field type.

Configure placeholder.

Configure validation.

Configure success and error messages.

Configure notification destination.

Submission management

If a verified backend exists, show:

Submission date.

Name.

Company.

Email.

Phone.

Source page.

Campaign.

Submission status.

Actions:

View submission.

Mark reviewed.

Export authorized records.

Delete according to retention policy.

Security:

Server-side validation.

Spam protection.

Rate limiting.

Input sanitization.

Data access permissions.

Privacy-conscious retention.

Do not expose submitted personal data to unauthorized roles.

PHASE 14 — PREVIEW, DRAFT, PUBLISH & VERSION CONTROL

This phase is critical.

Implement a proper publishing workflow.

Content states

Draft.

In Review.

Scheduled.

Published.

Archived.

Preview

Allow administrators to preview unpublished content without exposing it publicly.

Use secure, expiring preview access or an authenticated preview mechanism.

Publishing

When an administrator publishes:

Validate the page schema.

Validate required content.

Check route conflicts.

Check referenced assets.

Check SEO requirements.

Save a new published version.

Update public content safely.

Record the publishing user and timestamp.

Version history

For each page:

Version number.

Change summary.

Updated by.

Timestamp.

Published/draft state.

Allow:

View previous version.

Compare versions.

Restore previous version.

Create a new draft from an old version.

Restoring must create a new version rather than silently erasing history.

Scheduling

Allow future publish dates where supported.

Use reliable server-side scheduling, not browser timers.

PHASE 15 — ACTIVITY LOGS & WEBSITE SETTINGS

Activity log

Record:

User login.

Page created.

Page updated.

Page published.

Page unpublished.

Product changed.

Asset uploaded.

Asset deleted.

Navigation updated.

Design token changed.

User permission changed.

Settings changed.

Include:

User.

Action.

Entity.

Timestamp.

Relevant change summary.

Never log passwords, tokens, or secret credentials.

Website settings

Manage:

Company name.

Company description.

Logo.

Favicon.

Verified contact details.

Social media URLs.

WhatsApp URL.

Default CTA.

Footer copyright.

Website timezone.

Default SEO settings.

Analytics configuration status.

Protect sensitive configuration fields.

PHASE 16 — RESPONSIVE ADMIN EXPERIENCE

The admin panel must be responsive.

Desktop:

Full sidebar.

Three-panel visual page builder.

Advanced editing controls.

Tablet:

Collapsible sidebar.

Simplified builder panels.

Touch-friendly controls.

Mobile:

Accessible content editing.

Simplified preview.

Manage drafts and publishing.

Basic media operations.

The visual page builder can prioritize desktop editing, but must not become unusable on mobile.

PHASE 17 — PERFORMANCE, SECURITY & ACCESSIBILITY

Performance

Lazy-load admin modules.

Avoid unnecessarily large bundles.

Optimize image previews.

Use pagination for large lists.

Debounce search.

Avoid excessive database reads.

Cache published public content appropriately.

Avoid refetching every page asset unnecessarily.

Security

Server-side authorization.

Secure session handling.

Database security rules.

Input validation.

Output sanitization.

CSRF protection where applicable.

Rate limiting for sensitive operations.

Secure file uploads.

Audit logging.

No secrets in frontend bundles.

No arbitrary code execution from content.

Accessibility

Keyboard-accessible controls.

Proper labels.

Focus states.

Accessible dialogs.

Color contrast.

Screen-reader-friendly form errors.

Reduced-motion support.

PHASE 18 — PUBLIC WEBSITE INTEGRATION

Connect the existing public XB Cloud Tech frontend to the new CMS.

Required behavior

The public frontend must render content from the published content layer.

Admin changes must be reflected in the relevant public page.

The public site must not read unpublished drafts.

Requirements:

Keep current URLs.

Preserve SEO metadata.

Preserve existing working page functionality.

Use approved component schemas.

Use stable component IDs.

Provide fallback content for missing optional fields.

Handle content loading errors gracefully.

Avoid blank pages when an optional section fails.

Cache public content safely.

Invalidate or refresh cache after publishing.

Critical compatibility rule

Existing public components must be migrated incrementally.

Do not convert all pages to dynamic CMS rendering in one risky deployment.

Start with a pilot page, validate it, then expand.

PHASE 19 — TESTING & QUALITY ASSURANCE

Build a complete testing strategy.

Authentication tests

Login.

Logout.

Password reset.

Session expiration.

Unauthorized access.

Role-based access.

Page builder tests

Add section.

Edit section.

Reorder.

Duplicate.

Hide.

Delete.

Save.

Reload.

Preview.

Publish.

CMS tests

Create page.

Edit page.

Create product.

Edit product.

Upload image.

Edit navigation.

Edit footer.

Create blog post.

Configure SEO.

Submit forms.

Publishing tests

Draft remains private.

Preview works.

Publish updates public website.

Unpublish removes or disables public content safely.

Restore creates a valid new version.

Scheduled publishing works reliably.

Regression tests

Homepage.

All product pages.

Corporate pages.

Landing pages.

Blog.

Contact.

Mobile navigation.

Existing website forms.

Build requirements

Run:

TypeScript typecheck.

Production build.

Unit tests.

Integration tests.

End-to-end tests for critical flows.

Report every failed test.

Do not mark the system production-ready merely because the build succeeds.

PHASE 20 — FINAL ACCEPTANCE CRITERIA

The admin panel is accepted only when:

Authorized users can log in securely.

Role-based access works server-side.

Existing public pages can be managed.

Page sections can be added, edited, reordered, duplicated, hidden, and removed.

Design tokens can be customized.

Product pages can be managed.

Campaign landing pages can be created.

Header and footer can be customized.

Media can be managed securely.

Blog content can be published.

SEO can be configured.

Forms are connected to a verified submission backend.

Drafts are not publicly visible.

Preview works securely.

Publishing updates the actual public website.

Previous versions can be restored.

Activity logs work.

Mobile admin functionality works.

Existing public routes remain functional.

Production build and critical end-to-end tests pass.

DEVELOPMENT EXECUTION STRATEGY

Execute phases in the following order:

PHASE 0: Audit and architecture.
PHASE 1: Backend and content architecture.
PHASE 2: Authentication and permissions.
PHASE 3: Admin dashboard.
PHASE 4: Visual page builder.
PHASE 5: Design system editor.
PHASE 6: Page management.
PHASE 7: Product CMS.
PHASE 8: Campaign landing pages.
PHASE 9: Navigation and footer.
PHASE 10: Media library.
PHASE 11: Blog CMS.
PHASE 12: SEO management.
PHASE 13: Forms management.
PHASE 14: Publishing and version control.
PHASE 15: Activity logs and settings.
PHASE 16: Responsive admin experience.
PHASE 17: Security and performance.
PHASE 18: Public frontend integration.
PHASE 19: QA.
PHASE 20: Production readiness.

IMPLEMENTATION RULE

Do not attempt to implement all phases in a single uncontrolled coding session.

For each phase:

Audit relevant existing code.

Prepare implementation plan.

Implement the phase.

Run tests.

Resolve errors.

Produce a phase completion report.

List incomplete dependencies.

Obtain approval before proceeding to the next major phase.

FINAL PRODUCT VISION

XB Cloud Tech must have a professional website management platform where the founder or authorized marketing team can independently control the public website.

The goal is not simply to create an admin dashboard.

The goal is to build a reliable, secure, extensible CMS and visual website builder that allows XB Cloud Tech to evolve its corporate website, software product pages, campaign landing pages, marketing content, and brand design without depending on developers for routine frontend customization.