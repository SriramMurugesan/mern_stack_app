# Module 2: Structure & Style (Semantic HTML5 & CSS)

**Time:** 11:15 AM - 1:15 PM  
**Module Objective:** Teach the foundational building blocks of the web so students can prompt effectively and debug AI-generated code.

---

## 1. Semantic HTML5 (40 mins)
*Goal: Learn the vocabulary of web structure.*

- **Why Semantics?**
    - Web Accessibility (screen readers), SEO, and maintainable code.
- **Core Semantic Tags to Master:**
    - `<header>`, `<nav>` - For top-level navigation.
    - `<main>`, `<section>`, `<article>` - For content hierarchy.
    - `<footer>` - Bottom-level information.
- **AI Prompting Tip:** Always explicitly instruct the AI: *"Use strict semantic HTML5 markers."* This prevents the AI from just spitting out endless `<div>` soup.

## 2. The CSS Box Model & Layouts (40 mins)
*Goal: Understand how the browser calculates space.*

- **The Box Model:**
    - **Content:** The actual text/image.
    - **Padding:** Space *inside* the border.
    - **Border:** The edge of the box.
    - **Margin:** Space *outside* the border (between other elements).
- **Flexbox Introduction (1D Layout):**
    - The hero of modern web design. Used for aligning rows or columns.
    - `display: flex;`
    - `justify-content` (main axis spacing - e.g., center, space-between).
    - `align-items` (cross axis alignment - e.g., center, stretch).
    - `flex-direction` (row vs. column).

## 3. CSS Frameworks & Tailwind via Prompts (40 mins)
*Goal: Using utility-first CSS to speed up AI generation.*

- **What is Tailwind CSS?**
    - A utility-first framework that applies styling directly via class names (e.g., `bg-blue-500`, `px-4`, `flex`).
    - *Why it's perfect for AI:* The AI doesn't need to create separate `.css` files, avoiding context confusion. It styles directly in the HTML.
- **Prompting for Responsiveness in Tailwind:**
    - Tailwind is mobile-first. 
    - Teach how to prompt for breakpoints: *"Make the layout vertical by default, but use a 3-column grid on `md: ` and larger screens."*
- **Instructor Demo:** 
    - Prompt the AI to generate a Flexbox navigation bar. Read through the generated Tailwind classes (`flex`, `justify-between`, `items-center`) to connect the concepts to the code.
