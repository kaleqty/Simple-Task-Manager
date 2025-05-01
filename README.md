Simple Task Management App (React + CSS)

A clean and beginner-friendly Task Manager built using React and plain CSS. Below is the guide, tech stack, key learnings, challenges, and future improvements.

---

##  Tech Stack Used

- **React** – For building the frontend UI  
- **CSS** – For styling the components (no Tailwind used)  
- *(Optional enhancements)*:
  - **LocalStorage** – To persist tasks between sessions
  - **React Context / Redux** – For advanced state management

---

##  Key Learnings

- **State Management with `useState`**  
  Learned how to manage task lists and input fields using React hooks effectively.

- **Component Design**  
  Gained experience in building modular, reusable components such as `TaskManager`.

- **CSS Styling**  
  Improved layout and responsive design skills by using plain CSS (no utility frameworks).

- **Event Handling**  
  Practiced handling input events (e.g., pressing Enter, clicking buttons) to improve user experience.

---

##  Challenges Encountered

- **Handling Empty Input Submissions**  
  Preventing empty tasks from being added by trimming input strings and checking for blank entries.

- **Task Completion Toggle Logic**  
  Needed to avoid direct state mutation by creating updated copies of the task list.

- **Component Cleanup**  
  Simplifying the `create-react-app` boilerplate required careful file management.

---

##  What I Would Improve

- **Add Local Storage Support**  
  Persist tasks even after browser refresh using `localStorage`.

- **Implement Filters**  
  Add task filters like “All”, “Completed”, and “Pending”.

- **Task Prioritization**  
  Allow users to assign low/medium/high priority levels to tasks.

- **UI/UX Enhancements**  
  Add animations, transitions, and accessibility improvements.

- **Form Validation Enhancements**  
  Include character limits, helper messages, or integrate with form validation libraries like Formik for scaling.

---

Would you like help implementing any of these improvements, like local storage or filtering?
