# Dhyuthi 7.0 — Project Documentation

## 1. Project Overview

Dhyuthi 7.0 is a responsive event website developed for IEEE SCT SB. The website is designed to present the event, its technical tracks, schedule, venue, contact information, and registration information through a futuristic and technology-oriented interface.

The website was developed as part of the Dhyuthi 7.0 Website Design & Development selection task.

---

## 2. Design Concept

The visual concept of the website is based on a futuristic cyber-inspired environment.

The primary design elements include:

- Black and dark backgrounds
- Teal highlights and glowing elements
- Perspective grid effects
- Minimal animations
- Geometric layouts
- Technical typography
- Structured event information

Orbitron is used primarily for futuristic headings, while Rajdhani provides readable supporting text.

The goal was to create a distinctive technology-event identity while maintaining usability and readability.

---

## 3. Website Structure

The website follows a single-page structure with the following major sections:

### Hero Section

Introduces Dhyuthi 7.0 with the event name, tagline, dates, organizer information, and an Explore Events call-to-action.

### Event Statistics

Provides a quick overview of the event:

- 3 Days
- 4 Tracks
- Infinite Possibilities

### Tracks

The website contains four technical tracks:

1. NEXUS — Robotics & Intelligent Systems
2. SYNAPSE — Artificial Intelligence & Web
3. HELIX — Biotechnology & Bio-Innovation
4. FORGE — Mechanical Engineering

Each track contains an interactive Explore Track option that reveals additional information about its workshop and competition.

### Schedule

An interactive three-day schedule allows visitors to switch between Day 1, Day 2, and Day 3.

Each schedule entry displays:

- Time
- Event category
- Event name
- Short description

### About Dhyuthi

This section introduces Dhyuthi 7.0 and explains the idea behind the three-day technology experience.

It also visually highlights the event edition, number of days, number of tracks, and IEEE SCT SB.

### Contact and Venue

The contact section contains:

- Event venue
- College address
- Contact email
- Contact person
- Embedded Google Map

### Registration

The final call-to-action presents the event dates, venue, and registration area.

Registration details are currently marked as coming soon and can be updated when official registration information becomes available.

### Footer

The footer provides quick navigation and basic event information.

---

## 4. Technologies Used

The website was developed using:

- React
- JavaScript
- JSX
- CSS
- Vite
- Google Fonts
- Google Maps Embed

React is used to manage interactive components such as track expansion, schedule switching, and responsive navigation.

CSS is used for the visual system, responsive layouts, animations, grid effects, and device-specific adjustments.

---

## 5. Interactive Features

The website includes several interactive elements.

### Expandable Track Information

Selecting Explore Track opens additional information about the selected technical track.

### Interactive Schedule

Visitors can switch between the three event days without reloading the page.

### Responsive Navigation

The desktop navigation transforms into a mobile menu on smaller displays.

### Smooth Navigation

Navigation links allow users to move directly between different sections of the single-page website.

### Hover Effects and Animations

Subtle hover effects, glowing elements, transitions, and animations reinforce the futuristic visual theme without overwhelming the content.

---

## 6. Responsive Design

The website was designed to work across different screen sizes.

Layouts were tested and adjusted for representative widths including:

- 320px — small mobile
- 390px — mobile
- 768px — tablet
- 1024px — laptop/tablet landscape
- 1440px — desktop

CSS media queries are used to reorganize layouts, resize typography, modify spacing, and change navigation behavior according to the available screen width.

---

## 7. Project Structure

```text
Dhyuthi-7.0/
├── Doc/
│   └── PROJECT_DOCUMENTATION.md
├── public/
│   └── logos/
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js