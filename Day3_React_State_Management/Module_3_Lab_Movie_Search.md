# Module 3 Lab: Movie Search App 🎬

Today's project is building a **Dynamic Movie Gallery**. We will start with a static design and slowly add React "magic" to make it interactive.

## Phase 1: The Setup ⚙️
1. Open your terminal in the `Day3_React_State_Management/lab_movie_search` folder.
2. Initialize a new Vite project:
   ```bash
   npm create vite@latest ./ -- --template react
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

---

## Phase 2: Static Components (The UI) 🖼️
Before adding logic, let's build the visual structure.
1. Create a `components/` folder.
2. Build a `MovieCard.jsx` that takes a movie object as a **Prop** and displays its title, year, and poster.
3. Build a `MovieGrid.jsx` that maps through a list of movies and shows multiple cards.

---

## Phase 3: State & Interactive Search 🔍
Now, we make it come alive.
1. In `App.jsx`, create a state called `searchQuery` using `useState("")`.
2. Add a search input. Connect its value to `searchQuery`.
3. Use `onChange` to update the state as the user types.

---

## Phase 4: Mock Data & Filtering 🧪
Instead of a live API (which can be flaky), we will use a local data file first.
1. Create a `data/movies.js` file with a list of movie objects.
2. Import this data into `App.jsx`.
3. Create a **Filtered List**:
   ```javascript
   const filteredMovies = movies.filter(movie => 
     movie.title.toLowerCase().includes(searchQuery.toLowerCase())
   );
   ```
4. Pass `filteredMovies` to your `MovieGrid` instead of the original list.

**Result**: As you type, the grid updates instantly! (Re-render Cycle in action).

---

## Phase 5: Premium Styling (Vanilla CSS) ✨
Let's make it look like Netflix.
1. Use **Gradients** for backgrounds.
2. Add **Hover Effects** to the movie cards (e.g., scale up slightly).
3. Use a **Dark Theme** for a premium feel.

---

## 🎁 Bonus: Switching to Live API
Once everything works, you can try fetching real data from OMDb or TMDB inside a `useEffect` hook!

> **Teacher Tip**: Remind students that `useEffect` is where we put our API calls so they don't run on every single re-render.
