import carpe1 from "../assets/project1/carpe1.png";
import carpe2 from "../assets/project1/carpe2.png";
import carpe3 from "../assets/project1/carpe3.png";
import carpe4 from "../assets/project1/carpe4.png";
import carpe5 from "../assets/project1/carpe5.png";
import carpe6 from "../assets/project1/carpe6.png";
import portofolio from "../assets/project2/portofolio.png";

export const projects = [
  {
    id: 1,
    title: "Carpe Rescue Website",
    description:
      "A full-stack rescue shelter web application built with React, Node.js, and PostgreSQL, showcasing animals available for adoption, shelter projects, and articles, with a secure admin dashboard for content management.",
    details: [
      "Frontend developed with React using a component-based architecture, reusable UI components, and protected routes for admin-only views",
      "Backend implemented with Express.js and JavaScript, following a layered structure with routes, controllers, and services",
      "RESTful API design with clear separation of concerns and standardized HTTP status codes",
      "JWT-based authentication system with role-based access control to secure sensitive admin functionality",
      "Hidden admin dashboard accessible only to authorized users via middleware-protected routes",
      "Full CRUD operations for animal profiles, articles, and shelter projects, handled through secure API endpoints",
      "PostgreSQL relational database with normalized schemas and structured relationships between entities",
      "Server-side input validation and centralized error handling to ensure data integrity and application stability",
      "Asynchronous communication between frontend and backend using fetch/axios for real-time data updates",
      "Clear separation between public-facing content and administrative features for improved security and maintainability",
    ],
    tech: [
      "React",
      "React Router",
      "JavaScript (ES6+)",
      "CSS",
      "Fetch API / Axios",
      "Node.js",
      "Express",
      "REST API",
      "JWT",
      "Middleware",
      "PostgreSQL",
      "SQL",
    ],
    images: [carpe1, carpe2, carpe3, carpe4, carpe5, carpe6],
    link: "https://carperescue.ro/",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "A modern personal portfolio web application built with React and Express, designed to showcase projects, skills, and contact information. The application includes client-side routing, a responsive UI, and a functional contact form with email delivery handled on the server side.",
    details: [
      "Frontend developed with React, using functional components and React Router for smooth client-side navigation",
      "Programmatic navigation implemented with useNavigate for improved user flow and interactive UI behavior",
      "Responsive layout styled with CSS to ensure a consistent experience across different screen sizes",
      "Reusable UI components created to keep the codebase clean and maintainable",
      "Backend built with Node.js and Express.js to handle API requests and server-side logic",
      "CORS configured to enable secure communication between frontend and backend",
      "Environment variables managed with dotenv to protect sensitive configuration data",
      "Contact form functionality implemented using Nodemailer to send emails securely from the server",
      "PostgreSQL database connection managed via a connection pool for efficient and scalable data access",
      "Separation of concerns between frontend presentation and backend services for better maintainability",
      "Clean project structure and clear routing logic to support future feature expansion",
    ],
    tech: [
      "React",
      "React Router",
      "CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Nodemailer",
    ],
    images: [portofolio],
    link: "https://carperescue.ro/",
  },
];
