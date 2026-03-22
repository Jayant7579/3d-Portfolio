import type { Project } from './types'

export const projects = [
  {
    title: 'Brain Tumor Detection Model (AI Healthcare Hackathon)',
    description:
      'Built a VGG16-based model in Keras with preprocessing and augmentation, achieving 70.2% test accuracy.',
    tech: ['Python', 'Machine Learning', 'Keras', 'VGG16'],
  },
  {
    title: 'E-Book Store Hackathon 3.0',
    description:
      'Developed a full-stack web application with React.js and Node.js, integrating an analytics dashboard to monitor user behavior.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    title: 'Intell-i-Green Hackathon (Parul University)',
    description:
      'Built agriculture chatbots and a leaf-infection classifier using Python, AI, and OpenCV for fast diagnosis.',
    tech: ['Python', 'Artificial Intelligence', 'OpenCV'],
  },
] satisfies Project[]
