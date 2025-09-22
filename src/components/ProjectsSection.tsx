import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "AI-resume analyzer",
        description: "Upload resumes, create job listings, and leverage AI to automatically evaluate and match candidates to job requirements.",
        image: "/public/projects/AI-Resume-Analyzer photo.png",
        tags: ["React", "tailwindCSS", "AI Integration", "React Router", "Puter.js"],
        demoUrl: "puter.com/app/jsm-ai-resume-analyzer-30",
        githubUrl: "https://github.com/Rafaelbra/ai-resume-analyzer"
    },
    {
        id: 2,
        title: "E-commerce Website",
        description: "An interactive, fully responsive e-commerce web application built with React and Tailwind CSS, integrating API for dynamic product data.",
        image: "/public/projects/e-commerce website photo.png",
        tags: ["React", "tailwindCSS", "API Integration"],
        demoUrl: "https://ecommerce-project-black-alpha.vercel.app/",
        githubUrl: "https://github.com/Rafaelbra/ecommerce-project"
    },
    {
        id: 3,
        title: "Movie Website",
        description: "Netflix-style movie browsing platform built with React and Tailwind CSS, integrating the TMDB API for dynamic movie data.",
        image: "/public/projects/Movie-website photo.png",
        tags: ["React", "tailwindCSS", "TMDB API Integration"],
        demoUrl: "https://netflix-project-coral-eight.vercel.app/",
        githubUrl: "https://github.com/Rafaelbra/netflix-project_"
    },
    {
        id: 4,
        title: "Travel Planner App",
        description: "Full stack travel planner app. Features trip planning, database storage, and an interactive 3D globe to track visited countries.",
        image: "/public/projects/Travel-planner photo.png",
        tags: ["React", "Next.js", "tailwindCSS", "Google Maps API", "Prisma", "Postgresql"],
        demoUrl: "https://travel-planner-six-brown.vercel.app/",
        githubUrl: "https://github.com/Rafaelbra/travel-planner"
    },
]

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                         key={key} 
                         className="group bg-card rounded-lg overflow-hidden. shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transfor duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-1">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-xs mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                     href={project.demoUrl} 
                                     target='_blank'
                                     className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                    >
                                         <ExternalLink size={20} /> 
                                    </a>
                                    <a 
                                     href={project.githubUrl}
                                     target='_blank'
                                     className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                    >
                                         <Github size={20} /> 
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}