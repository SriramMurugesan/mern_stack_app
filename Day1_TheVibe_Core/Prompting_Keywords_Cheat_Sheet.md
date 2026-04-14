# AI Prompting Keywords Cheat Sheet

Understanding exactly what keywords to use is the secret to controlling AI output. Provide this cheat sheet to students so they know **what** words to use, **when** to use them, and **where** they fit in a prompt.

---

### 1. The Persona Setup: `"Act as a..."`
- **When to use:** At the very beginning of your very first prompt.
- **Why to use it:** It forces the AI to elevate its coding standard from "basic" to "professional". 
- **Example:** *"**Act as a Senior Frontend Developer** with expertise in modern UI/UX design. Create a..."*

### 2. The Skeleton Enforcer: `"Strict Semantic HTML5"`
- **When to use:** Always, whenever you ask the AI to generate a layout or a new section.
- **Why to use it:** AI by default gets lazy and uses `<div>` for everything. This forces the AI to write clean, accessible code.
- **Example:** *"Build the page structure utilizing **strict Semantic HTML5** tags (like `<header>`, `<main>`, `<article>`)."*

### 3. The Styling Shortcut: `"Tailwind CSS via CDN"`
- **When to use:** When setting up a new project or HTML file that needs to look good instantly.
- **Why to use it:** Prevents the AI from writing messy inline styles (`style="..."`) or creating complex external `.css` files.
- **Example:** *"Style the entire page using exclusively **Tailwind CSS via CDN**."*

### 4. The Layout Controllers: `"CSS Flexbox"` or `"CSS Grid"`
- **When to use:** When asking for elements to be aligned next to each other (like nav links, feature cards, or image galleries).
- **Why to use it:** If you don't specify, the AI might use outdated float layouts.
  - *Use Flexbox* for aligning items in a single row or column.
  - *Use Grid* for 2D layouts (like a gallery of 3 columns and 2 rows).
- **Example:** *"Align the navigation links to the right using **CSS Flexbox**, and make the core features section a **3-column CSS Grid**."*

### 5. The Responsiveness Trigger: `"Mobile-first / Responsive breakpoints"`
- **When to use:** When ensuring the design doesn't break on a phone.
- **Why to use it:** AI focuses on desktop views first unless reminded.
- **Example:** *"Make the hero layout **mobile-first**, stacking vertically by default, but using `md:` **responsive breakpoints** to display side-by-side on laptops."*

### 6. The Polish Keywords: `"Micro-interactions" / "Hover states"`
- **When to use:** In the refinement stage (after the structure is built) to make the UI look premium.
- **Why to use it:** Adds the "wow" factor through smooth CSS transitions.
- **Example:** *"Add subtle **micro-interactions** to the buttons, ensuring they use **hover states** to smoothly scale up (`scale-105`) over `300ms`."*

### 7. The Refinement Commands: `"Modify... / Constrain... / Ensure..."`
- **When to use:** When the AI makes a mistake, NEVER rewrite the whole prompt. Just give targeted feedback.
- **Why to use it:** It acts as surgical precision to fix only what is broken.
- **Example:** *"**Modify** the hero section background to be darker. **Ensure** the text remains white."*
