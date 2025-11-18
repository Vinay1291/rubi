# Rubi Technologies Design Guidelines

## Design Approach
**Reference-Based Approach**: Enterprise IT aesthetic inspired by nipun-it.com, with modern corporate professionalism. Clean, futuristic, and trustworthy visual language suitable for B2B technology services.

## Typography System
- **Primary Font**: Inter or DM Sans for headings (weights: 600-800)
- **Body Font**: Inter or System UI (weights: 400-500)
- **Headings**: Bold, generous sizing (H1: 3.5-4rem, H2: 2.5-3rem, H3: 1.75-2rem)
- **Body**: 1rem base, 1.125rem for hero/feature descriptions

## Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-8, mb-16, py-20)
- Section padding: py-20 to py-24 desktop, py-12 mobile
- Container: max-w-7xl with px-6
- Card spacing: gap-6 to gap-8 in grids

## Color Palette Direction
Professional corporate IT theme with blue dominance, dark accents, white backgrounds for clean sections, subtle grays for backgrounds/cards.

## Component Library

### Navigation Bar
- Sticky with backdrop blur effect
- Transparent initially, solid background on scroll
- Logo left-aligned, horizontal menu center, CTA button right
- Desktop: horizontal menu items, Mobile: hamburger menu

### Hero Section (Full-width Slider)
- Three auto-rotating slides with smooth transitions
- Each slide: Full-width background with overlay gradient
- Bold headline (H1), supporting tagline, dual CTAs
- Right-aligned or centered content with left/right image graphics
- Height: 85-90vh, includes subtle slide indicators

### Product Carousel
- Horizontal auto-scrolling slider with manual controls
- Cards: Rounded corners (rounded-2xl), shadow-lg
- Each card: Product image top, title, short description, subtle hover lift
- Desktop: 3-4 visible, Mobile: 1 card with swipe

### Services Grid
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Cards: Large icons/graphics, service title, brief description, arrow/link indicator
- Equal height cards with hover effects (subtle scale/shadow)
- Clear visual hierarchy with icon prominence

### Industries Section
- 6-column grid reducing to 3/2/1 responsively
- Circular or square icon containers
- Industry name below icon
- Minimal, professional icons (line-style preferred)

### About Section
- Two-column layout (50/50 split desktop)
- Left: Large representative image/illustration
- Right: Heading, multi-paragraph content, mission/vision statements
- Generous whitespace between elements

### Clients Grid
- 4-6 columns of logo containers
- Grayscale logos with subtle hover color restoration
- Equal-sized containers with centered logos
- Clean grid spacing (gap-8)

### Mega Footer
- Multi-column layout (5-6 columns desktop, stacking mobile)
- Grouped by: Products (Microsoft, Adobe, Autodesk, Corel), Services, Company, Contact
- Hierarchical headings with link lists
- Contact details prominently displayed
- Bottom bar with copyright and social links

## Images

**Hero Section Images**: 
- 3 professional IT/technology images showing: modern office technology, cloud infrastructure visualization, digital transformation concepts
- High-quality, professional photography or clean 3D illustrations
- Aspect ratio: 16:9 or wider, optimized for full-width display
- Placement: Background or right-side of each hero slide with gradient overlay

**Product Carousel Images**:
- Project/product screenshots or mockups
- Consistent aspect ratio (4:3 or 16:9)
- Professional presentation with device frames or clean screenshots
- 6-8 product images minimum

**About Section Image**:
- Modern office environment, diverse team collaboration, or technology infrastructure
- Placement: Left column, full-height coverage

**Industry Icons**:
- Minimal line icons for each industry sector
- Consistent style across all 6 industries

## Animations & Interactions
- Hero slider: Auto-advance every 5-6 seconds with fade transitions
- Product carousel: Smooth horizontal auto-scroll with pause on hover
- Navigation: Smooth scroll-triggered opacity/background change
- Cards: Subtle hover lift (translate-y-2) and shadow enhancement
- Buttons: Clean hover states with scale and color shifts
- Page transitions: Smooth scroll behavior for anchor links

## Design Principles
- **Trust & Professionalism**: Clean lines, generous whitespace, premium feel
- **Visual Hierarchy**: Clear content organization with consistent spacing
- **Accessibility**: High contrast ratios, readable font sizes, clear CTAs
- **Responsiveness**: Desktop-first optimization with graceful mobile adaptation
- **Performance**: Optimized images, smooth animations without jank

## Key Visual Patterns
- Rounded cards with subtle shadows (rounded-2xl, shadow-lg)
- Section alternation: white backgrounds alternating with subtle gray/blue tints
- Consistent CTA button styling: primary (solid) and secondary (outline)
- Icon-first approach for services and industries
- Premium photography with overlay gradients in hero
- Monochrome client logos for professional look