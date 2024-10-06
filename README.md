# English Excellence - Landing Page

This repository contains the source code for the "English Excellence" landing
page. The page is responsive and designed for different devices (desktop,
tablet, mobile). It promotes English learning services with various packages and
a user-friendly interface.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [File Structure](#file-structure)
4. [Installation](#installation)
5. [Features](#features)
6. [Responsive Design](#responsive-design)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [License](#license)

## Project Overview

The "English Excellence" landing page is designed to provide information about
English language lessons. It includes details about the services, prices,
teachers, and a form for users to submit applications.

### Main Sections:

- **Header Section**: Contains navigation links for quick access to different
  sections
- **Hero Section**: An introduction to the service with a call to action button.
- **About Us**: Brief description of the platform and its key advantages.
- **Our Lessons**: Pricing and description of the various lesson packages.
- **Power of English**: Highlights the benefits of the learning package.
- **Meet Our Teachers**: Introduction to the teachers on the platform.
- **Leave an Application**: A form for potential students to submit their
  contact details.
- **Reviews**: Feedback from previous students.
- **Footer**: Links to social media and contact information.

## Technologies Used

- **HTML5**: Markup language for structuring the page.
- **CSS3**: Styling the layout, including Flexbox and Grid for responsiveness.
- **JavaScript**: For basic interactions and functionality.
- **Responsive Design**: Media queries for adapting to desktop, tablet, and
  mobile devices.

## File Structure

```bash
English-Excellence/
├── index.html                    # Main HTML file
├── css/                          # Main CSS folder for styling
│   ├── about.css                 # Styles for the "About" section
│   ├── animations.css            # CSS animations
│   ├── application.css           # Styles for the application form
│   ├── back-link.css             # Styles for the back link
│   ├── badges.css                # Styles for badges and awards
│   ├── base.css                  # Base styles and resets
│   ├── burger.css                # Styles for the burger menu
│   ├── container.css             # Layout container styles
│   ├── effects.css               # Visual effects
│   ├── fonts.css                 # Font styles and imports
│   ├── footer.css                # Styles for the footer section
│   ├── header.css                # Styles for the header and navigation
│   ├── hero.css                  # Styles for the Hero section
│   ├── lesson.css                # Styles for the lesson section
│   ├── proposals.css             # Styles for proposals and offers
│   ├── reset.css                 # CSS reset for consistent styling
│   ├── reviews.css               # Styles for the reviews section
│   ├── teachers.css              # Styles for the teachers' section
│   ├── vite-promo.css            # Styles for Vite promotion section
│   └── styles.css                # Main CSS file for styling
├── img/                          # Image assets
│   ├── about/                    # Images for the "About" section
│   ├── application/              # Images for the application form
│   ├── footer/                   # Images for the footer section
│   ├── hero-background/          # Background images for the Hero section
│   ├── proposals/                # Images for proposals and offers
│   ├── reviews/                  # Images for the reviews section
│   ├── teachers/                 # Images for teachers' section
│   ├── webp/                     # WebP format images
│   ├── javascript.svg            # JavaScript logo
│   ├── sprite.svg                # SVG sprite for icons
│   ├── vite-logo.png             # Vite logo image
│   └── logo.svg                  # Website logo
├── public/                       # Public assets
│   └── favicon.ico               # Website favicon
├── partials/                     # HTML partials for modular content
│   ├── about.html                # HTML partial for the "About" section
│   ├── application.html          # HTML partial for the application form
│   ├── back-link.html            # HTML partial for the back link
│   ├── badges.html               # HTML partial for badges and awards
│   ├── burger.html               # HTML partial for the burger menu
│   ├── footer.html               # HTML partial for the footer section
│   ├── header.html               # HTML partial for the header and navigation
│   ├── hero.html                 # HTML partial for the Hero section
│   ├── lesson.html               # HTML partial for the lessons section
│   ├── proposals.html            # HTML partial for proposals and offers
│   ├── reviews.html              # HTML partial for the reviews section
│   ├── teachers.html             # HTML partial for the teachers' section
│   └── vite-promo.html           # HTML partial for Vite promotion section
└── main.js                       # Optional JavaScript file for interactivity
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/English-Excellence.git
   ```

2. Ensure that the LTS version of Node.js is installed on your computer.
   Download and install it if necessary.

3. Install the project dependencies by running the following command in the
   terminal:

   ```bash
   npm install
   ```

4. Start the development server by running:

```bash
 npm run dev
```

5. Open your browser and navigate to http://localhost:5173. The page will
   automatically reload as you make changes to the project files.

## Features

- **Call to Action (CTA):** Clear and easy-to-click button for leaving an
  application.
- **Responsive Layout:** Adapts to different screen sizes, including desktop,
  tablet, and mobile devices.
- **Interactive Elements:** Smooth scroll navigation to different sections of
  the page.
- **Teacher Profiles:** Displays information about the available teachers.
- **Application Form:** Allows users to submit their details for lesson
  registration.

## Responsive Design

The design is optimized for three main breakpoints:

- **Desktop:** 1280px and above.
- **Tablet:** Between 768px and 1280px.
- **Mobile:** 768px and below.

Adjustments include:

- Resizing images and content blocks.
- Stacking elements vertically on smaller screens.
- Navigation menu changing to a collapsible format on mobile and tablet.
- Image optimization (JPEG, WebP, 2x for high resolution screens)

## Deployment

To deploy this project, you can host it on any static web hosting service, such
as GitHub Pages

### Steps for GitHub Pages:

1. Push the repository to GitHub.
2. In the repository settings, go to the "Pages" section.
3. Select the main branch for deployment.
4. The page will be available at
   `https://yourusername.github.io/English-Excellence/`.

## Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/NewFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

### Vanilla App Template

This project was created using Vite. For getting started and configuring
additional features, please [refer to the documentation](https://vitejs.dev/).
