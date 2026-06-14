export const CATEGORIES = ['all', 'research', 'creative', 'technical']

export const projects = [
  {
    slug: 'vision-semantics',
    title: `Where's the Edit? Visual Models vs. Local Semantics`,
    category: 'research',
    description:
      'Fine-tuning transformer models for cross-lingual sentiment classification on low-resource languages using limited labeled data.',
    image: "/project2.png",
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tags: ['Computer Vision', 'CLIP', 'DinoV2','Diffusion Models', 'Python'],
    date: '2025',
  },
  {
    slug: 'generative-tell-tales',
    title: 'Generative Action Tell-Tales: Assessing Human Motion in Synthesized Videos',
    category: 'research',
    description:
      'A creative coding project exploring algorithmic art generation using mathematical patterns, noise functions, and emergent systems.',
    image: null,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tags: ['p5.js', 'JavaScript', 'Creative Coding'],
    date: '2025',
    externalUrl: 'https://xthomasbu.github.io/video-gen-evals/',
  },
  {
    slug: 'echolens',
    title: 'Echolens',
    category: 'technical',
    description:
      'A collection of productivity-boosting command-line tools that automate repetitive development workflows and reduce context switching.',
    image: null,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['Python', 'CLI', 'Automation'],
    date: '2024',
  },
  {
    slug: 'livematch',
    title: 'LiveMatch',
    category: 'technical',
    description:
      'Implementing and optimizing YOLO-based models for real-time object detection on resource-constrained edge devices.',
    image: null,
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    tags: ['PyTorch', 'Computer Vision', 'Edge AI'],
    date: '2026',
  },
  {
    slug: 'larp',
    title: 'Linear Algebra Research Project',
    category: 'technical',
    description:
      'An interactive data visualization exploring 50 years of global climate data using D3.js and custom scroll-driven animations.',
    image: null,
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    tags: ['D3.js', 'React', 'Data Viz'],
    date: '2023',
  },
  {
    slug: 'api-gateway',
    title: 'Junior Breakthrough Challenge - Chaos Theory',
    category: 'creative',
    description:
      'A scalable API gateway with rate limiting, JWT authentication, and distributed tracing built on Go microservices.',
    image: "/chaosTheory.png",
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    tags: ['Video Editing', 'Manim', 'Python'],
    date: '2024',
    externalUrl: 'https://www.youtube.com/watch?v=VQJaXdCF3Go',
  },
]
