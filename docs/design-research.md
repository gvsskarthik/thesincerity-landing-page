# Sincerity website: design research and implementation

Reviewed 22 October 2026. This is an independent design assessment, not a claim that a particular layout has a monetary value.

## What was weakening the previous design

1. **The page repeated the same pitch.** Similar headline-and-paragraph sections did little to advance a visitor’s understanding. The typography was large, but the underlying information hierarchy was shallow.
2. **The homepage lacked consistent proportions.** A very large first product card made the laboratory product seem like the whole company. The remaining products received a different treatment. Several fixed sizes and large gaps did not adapt well between desktop and mobile.
3. **The product pages concealed their strongest material.** A screenshot selector displayed one application screen at a time. Visitors could miss registration, reporting, accounts, clients, and chatbot workflows entirely.
4. **Small screenshots did not explain the product.** A complete desktop interface reduced to a phone width cannot communicate its details without a useful enlargement interaction and accompanying explanation.
5. **Generic descriptions weakened credibility.** “Thoughtful” or “purposeful” alone does not explain what software does. Specific workflows and real interfaces provide information visitors can assess.
6. **Adding more decorative elements would not resolve those issues.** Extra gradients, animations, badges, and invented numbers would increase visual activity without helping someone choose a product.

## Reference research

### Apple: product collection and dedicated product storytelling

Sources: [Mac](https://www.apple.com/mac/), [MacBook Pro](https://www.apple.com/macbook-pro/).

Observed approach: the collection offers short product introductions and paths to learn more. The dedicated page develops individual capabilities through substantial visual sections, with concise headings and a clear next action.

Application to Sincerity: keep the homepage as a product collection. Give each product a proper destination. Use a short introduction, a large application overview, individual workflow chapters, capability details, questions, and an enquiry action. Preserve Sincerity’s own identity rather than copying Apple’s layout or claims.

### Linear: make the software itself the presentation

Source: [Linear](https://linear.app/).

Observed approach: actual product concepts and interfaces are central to the explanation. Sections move from a general introduction into distinct kinds of work rather than repeatedly restating the brand promise.

Application: OptiMediCare now shows five screens and explains how registration, patients, reporting, and accounts connect. WACentral shows three screens and explains client management, chatbot routing, and its integration path. The real interfaces remain identifiable as demonstration data. Some previews crop empty portions of a screen to emphasise the interface detail; the viewer always opens the complete original image.

### Nielsen Norman Group: visual hierarchy

Source: [Visual Hierarchy in UX: Definition](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/).

Guidance: scale, contrast, and grouping direct attention. Similar visual weight across everything makes the reading order harder to understand.

Application: establish a limited title scale, keep body copy readable, group related information, distinguish overview from detail, and reserve strong dark surfaces for an important change in the narrative. Avoid giving every paragraph an oversized heading.

### Google web.dev: responsive design

Source: [Responsive web design basics](https://web.dev/articles/responsive-web-design-basics).

Guidance: respond to content and available space rather than designing only for named devices. Layouts must change as the viewport changes; images must fit their containers.

Application: fluid outer gutters and section spacing, three/two/one-column product layouts, deliberate tablet compositions, stacked product stories on smaller screens, and a zoomable screenshot viewer. Test narrow phones, intermediate widths, tablets, and large desktops.

## The resulting design system

- **Identity:** existing Sincerity logo and wordmark; the supplied OptiMediCare microscope icon; existing product artwork.
- **Palette:** near-white backgrounds, charcoal text, restrained warm gold details, and a deep green surface for connected workflows. Colour supports hierarchy rather than competing for attention.
- **Typography:** one established sans-serif family, a small number of clear heading sizes, less aggressive letter spacing, restrained label tracking, and body copy with comfortable line height.
- **Layout:** a shared 1,240px maximum content width, fluid gutters, consistent component radii, and a fluid section spacing scale.
- **Homepage:** compact brand-led white hero; two division links immediately below; balanced product collection; clear services; company introduction; contact; complete footer.
- **Product narrative:** identity and clear benefit → real application overview → two illustrated workflow chapters → supporting screens where applicable → connected process → capabilities → questions → walkthrough enquiry.
- **Interactions:** screenshots open in a native modal, can zoom to their original size, support keyboard scrolling, close with Escape, and restore focus. FAQ items expand independently. Buttons and links describe the next action.
- **Mobile:** product collection changes from three columns to two with a wide third item, then one column. Product stories become text-before-image. Product navigation keeps the product name and primary action. Large screenshots can be opened and panned rather than forcing tiny text to serve as the explanation.

## Content and trust rules

Show the real product and explain verified capabilities. Keep availability and beta status explicit. Preserve careers, hiring, support, privacy, contact, and all product links. Do not invent customer logos, testimonials, user counts, awards, security certifications, performance guarantees, or filmed demos. Genuine customer evidence and professionally recorded product footage can strengthen future releases when those materials are available.

The protected product repositories `/srv/ssdc` and `/srv/wa-central` remain read-only. The website reuses the previously captured real interfaces with synthetic demonstration records; this redesign does not change either application.

## Validation scope

Production build and lint; browser checks at 320, 390, 540, 768, 820, 1024, 1280, 1440, and 1920px; desktop and phone visual review; automated WCAG A/AA checks; image loading; screenshot modal zoom and keyboard behaviour; enquiries with intercepted requests; footer and mobile navigation; and verification of the protected application source/build files against the existing read-only baseline.

## Follow-up refinements

The homepage background is now pure white as requested. Technologies and Services sit side by side on wider screens and stack on phones. Product cards stack vertically at every width and retain distinct backgrounds (blue, deep green, and soft violet). The dedicated `/services/` page explains all four service areas with code-native concept illustrations, relevant icons, the project process, FAQs, and contextual enquiry actions. These illustrations are explicitly labelled concepts, not delivered projects or product screenshots.

Scroll entrance animations progressively enhance homepage cards, services chapters, and product workflows. Content is visible before animation support is detected, each entrance runs once, and `prefers-reduced-motion` disables the effect. No animation library or external tracking dependency was added.
