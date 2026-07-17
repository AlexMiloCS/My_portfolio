# Alexandros Milonakis - Portfolio

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Welcome to the source code of my personal portfolio and professional website.

This portfolio is built to showcase my experience, projects, and academic research in **Artificial Intelligence, Machine Learning, and Software Engineering**. It features a modern, glassmorphic UI, responsive design, and dynamic background animations.

## Tech Stack

This project is built using modern web development tools:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React](https://react.dev/) 19
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **Icons:** 
  - [Lucide React](https://lucide.dev/) (UI icons)
  - [Simple Icons](https://simpleicons.org/) (Brand & tech icons)
- **Deployment:** Vercel (Recommended)

## AI Methodology & Tools

This project was engineered using Next.js and Tailwind CSS. To accelerate development, boilerplate generation, and UI ideation, I utilized Antigravity IDE powered by the Gemini 3.1 Pro model, demonstrating modern AI-assisted software engineering workflows.

## Features

- **Animated Neural Network Background:** A custom-built, lightweight SVG animation (`NeuralNet.jsx`) simulating data flow through network layers.
- **Component-Driven Architecture:** Cleanly abstracted UI components (`HeroSection`, `ExpertiseSection`, `ProjectCard`, etc.).
- **Dynamic Content:** Projects and experience are mapped from a local JSON-like data structure, making it easy to add new achievements.
- **Responsive Design:** Fully responsive layouts that look great on both mobile devices and large desktop monitors.
- **Glassmorphism UI:** Heavy use of Tailwind's backdrop-blur and semi-transparent colors for a premium feel.

##  Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AlexMiloCS/my_portfolio.git
   cd my_portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the app:**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##  Project Structure

- `src/app/`: Next.js App Router pages (`/`, `/projects`, `/thesis`, `/contact`, `/work_experience`).
- `src/components/`: Reusable UI components.
  - `home/`: Components specifically abstracted for the main landing page.
- `src/data/`: Static data files containing project information and work history.
- `public/`: General static assets (e.g., SVG icons). 
  - *Note: Personal assets like CVs and profile pictures are deliberately excluded from this public repository and are instead hosted externally via Cloudinary and Google Drive to protect personal data.*

##  Contact & Networking

If you are a recruiter, engineer, or researcher looking to collaborate, feel free to reach out:
- **Email:** alexmilcs@gmail.com
- **LinkedIn:** [Alexandros Milonakis](https://linkedin.com/in/alexandros-milonakis)
- **GitHub:** [AlexMiloCS](https://github.com/AlexMiloCS)

---
*Designed and built by Alexandros Milonakis.*
