# Interview Preparation: TheVibe Core (Day 1) 🎤

Master these questions to demonstrate your foundational knowledge of modern web development and AI-assisted workflows.

---

## 🟢 Level 1: Basic (Web Fundamentals)

### 1. What is Semantic HTML5 and why is it important?
**Answer**: Semantic HTML5 refers to tags that clearly describe their meaning in a human- and machine-readable way (e.g., `<header>`, `<main>`, `<article>`, `<footer>`). It is important for:
- **SEO**: Helps search engines understand your content.
- **Accessibility**: Helps screen readers navigate the page.
- **Maintainability**: Makes code easier for developers to read.

### 2. What is the difference between a `<div>` and a `<section>`?
**Answer**: A `<div>` is a generic container for styling purposes and has no semantic meaning. A `<section>` represents a standalone section of a document or application (e.g., "About Us" or "Features"), which typically has its own heading.

### 3. What is the CSS Box Model?
**Answer**: Every element in CSS is considered a box. The Box Model consists of:
- **Content**: The actual text or image.
- **Padding**: Space between the content and the border (inside).
- **Border**: A line around the padding and content.
- **Margin**: Space outside the border, separating the element from others.

---

## 🟡 Level 2: Intermediate (Styling & AI Tooling)

### 4. What is Tailwind CSS and how does it differ from traditional CSS?
**Answer**: Tailwind is a **Utility-First** CSS framework. Instead of writing custom CSS rules in a separate file, you apply pre-defined classes (like `flex`, `pt-4`, `text-center`) directly to your HTML elements. It speeds up design and ensures consistency without leaving your HTML file.

### 5. Why do we use CDN-based Tailwind for quick prototypes?
**Answer**: A CDN (Content Delivery Network) allows us to include Tailwind via a single `<script>` tag. This eliminates the need for build tools like Webpack or Vite.

### 6. What makes an "Effective AI Prompt" for coding?
**Answer**: An effective prompt includes:
- **Role**: (e.g., "Act as a Senior Web Developer")
- **Task**: Clear description of what to build.
- **Constraints**: (e.g., "Use semantic HTML5", "Use Tailwind dark mode")
- **Context**: Explaining where the code will be used.

---

## 🔴 Level 3: Advanced (UI/UX & AI Iteration)

### 7. What is "Flexbox" and describe its core axis?
**Answer**: Flexbox (Flexible Box Layout) is a one-dimensional layout model. It has a **Main Axis** (defined by `flex-direction`) and a **Cross Axis**. It is excellent for aligning items in a row or column and distributing space dynamically.

### 8. How do you handle AI hallucinations in code?
**Answer**: Always review and test the generated code. Use modular prompting (asking for small pieces at a time) and verify the syntax. In Antigravity, you can use the IDE features to catch errors that the AI might have missed.

### 9. Describe the "Mobile-First" design approach.
**Answer**: Mobile-First involves designing the smallest screen version of a site first and then using CSS Media Queries (or Tailwind prefixes like `md:`) to add complexity and space for larger screens. This ensures the site is lean and performant on mobile devices.
