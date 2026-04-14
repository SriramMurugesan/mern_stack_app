# Module 3: Lab - Build a Landing Page

**Time:** 2:00 PM - 4:15 PM  
**Module Objective:** Apply the morning's knowledge to generate, assemble, and refine a complete landing page using AI prompts.

---

## Lab Project: "TheVibe" Agency Landing Page
*See `/mini_project/index.html` for the target outcome.*

### Step 1: Planning the Structure (30 mins)
*Goal: Wireframe with words before prompting.*

Before touching the AI, students must break down the visual sections of a modern landing page:
1. **Header/Nav:** Sticky, logo on left, links and CTA button on right.
2. **Hero Section:** Full height, background image with dark overlay, large headline, and two CTA buttons.
3. **Services Grid:** 3 cards displaying services (HTML, CSS, AI Prompting), using Flexbox or Grid.
4. **Footer:** Simple copyright and links.

*Student Task:* Write a comprehensive single prompt that outlines these four sections clearly.

### Step 2: The Initial Generation (45 mins)
*Goal: Feed the prompt and analyze the output.*

- **Execute:** Paste the drafted prompt into Antigravity IDE (or AI tool of choice).
- **Instructor Reference:** Show the students the `mini_project/index.html` as the standard they are striving for.
- **Review:** Does the AI output contain semantic tags? (Check for `<header>`, `<main>`, `<section>`). Did it include Tailwind via CDN?

### Step 3: Iterative Refinement & Micro-Prompting (45 mins)
*Goal: Fix bugs and enhance the design using follow-up prompts.*

- Critique the generated code. AI rarely gets it 100% perfect on the first try.
- **Practice Refinement Prompts:**
    - *Aesthetics:* "The hero text is hard to read. Add a darker `bg-black/50` gradient overlay to the hero background image."
    - *Layout Fixes:* "The Services cards are stacking vertically on my laptop. Update the section to use a CSS Grid with 3 columns on large screens."
    - *Interactivity:* "Add a hover effect to the primary buttons that scales them up slightly."

### Step 4: Show, Tell, and Deploy (15 mins)
*Goal: Celebrate the build and debrief.*

- Students open their HTML files in the browser and show off their custom designs.
- **Debrief Discussion:**
    - What did the AI struggle with? (Usually specific spacing or color contrasts).
    - Why is understanding HTML/CSS still crucial? (Because you need the vocabulary to tell the AI how to fix its mistakes).
