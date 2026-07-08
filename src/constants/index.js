import {
  backend,
  github,
  mysql,
  python,
  linux,
  gochanakya,
  suvidha,
  bnp,
} from '../assets';

import {
  Facebook,
  Gamepad2,
} from 'lucide-react';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const profileLinks = [
  
  {
    name: 'Github',
    icon: github,
    website: 'https://www.github.com/ABDUL1-LAM',
  },
];

const services = [
  {
    title: 'Software Engineer',
    icon: backend,
  },
  {
    title: 'Full Stack Developer',
    icon: backend,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'ELEGANCE TECH HUB',
    icon: gochanakya,
    iconBg: '#E6DEDD',
    date: 'July 2026 - Present',
    points: [
      'Created my first full-stack web application and a game called "ABDULGAME".',
    ],
  },
  {
    title: 'FRONTEND DEVELOPER',
    company_name: 'ELEGANCE TECH HUB',
    icon: gochanakya,
    iconBg: '#E6DEDD',
    date: 'Jun 2023 - May 2024',
    points: [
      'Developed a responsive frontend for a web application using React and Tailwind CSS.',
    ],
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  
  {
    name: 'SQL',
    icon: mysql,
  },

  {
    name: 'Linux',
    icon: linux,
  },
];

const projects = [
  {
    name: 'CLONE FACEBOOK PAGE',
    description:
      'Developed a Facebook clone web application with user authentication, real-time chat, and post management features, utilizing React for the frontend and Firebase for backend services.',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Firebase', color: 'green-text-gradient' },
    ],
    icon: Facebook,
  },
  {
    name: 'ABDULGAMES',
    description: 'Created my own game called "ABDULGAME" using css and javascript',
    tags: [
      { name: 'JavaScript', color: 'blue-text-gradient' },
      { name: 'CSS', color: 'pink-text-gradient' },
    ],
    icon: Gamepad2
  },
];

export { services, technologies, experiences, projects, profileLinks };
