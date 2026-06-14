export const CATEGORIES = ['all', 'research', 'creative', 'technical']

export const projects = [
  {
    slug: 'vision-semantics',
    title: `Where's the Edit? Visual Models vs. Local Semantics`,
    category: 'research',
    description:
      'Studying semantic differences between visually similar images with object-level edits by evaluating the performance of CLIP, DINOv2, and Stable Diffusion embeddings in differentiating between such pairs.',
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
      'Benchmarking human-action quality in generative video models by introducing a novel dataset of 100+ videos across 10 action categories',
    image: "/project3.png",
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tags: ['Computer Vision', 'Generative Videos', 'Benchmarking', 'Python'],
    date: '2025',
    externalUrl: 'https://xthomasbu.github.io/video-gen-evals/',
  },
  {
    slug: 'echolens',
    title: 'Echolens',
    category: 'technical',
    description:
      'A cost-friendly, efficient assistive technology for visually impaired individuals that provides real-time contextual information about their surroundings through a wearable device.',
    image: "/echolensCover.png",
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['Custom Hardware', 'Computer Vision', 'Navigation'],
    date: '2025',
  },
  {
    slug: 'livematch',
    title: 'LiveMatch',
    category: 'technical',
    description:
      'Housing finding company for university students looking for off-campus housing',
    image: "/livematchCover.png",
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    tags: ['NextJS'],
    date: '2026',
  },
  {
    slug: 'larp',
    title: 'Linear Algebra Research Project',
    category: 'technical',
    description:
      'An interactive website that teaches linear algebra applications to computer graphics through visualizations and interactive demos built with NextJS.',
    image: "/larpCover.png",
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    tags: ['NextJS', 'Linear Algebra', 'Computer Graphics'],
    date: '2026',
    externalUrl: 'https://larp-computer-graphics.vercel.app/',
  },
  {
    slug: 'chaos-theory',
    title: 'Junior Breakthrough Challenge - Chaos Theory',
    category: 'creative',
    description:
      'An educational video explaining the concept of chaos theory and its applications in various scientific fields, with demonstrations created using Manim and Python.',
    image: "/chaosTheory.png",
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    tags: ['Video Editing', 'Manim', 'Python'],
    date: '2024',
    externalUrl: 'https://www.youtube.com/watch?v=VQJaXdCF3Go',
  },
]
