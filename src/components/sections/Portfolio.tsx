import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "UI/UX", "Branding", "Web Dev", "Logo", "Painting"];

const projects = [
  {
    title: "SaaS Dashboard Redesign",
    category: "UI/UX",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/ef698d84-64d0-4642-ba7a-8cb6f9da5b63/ui-ux-design-showcase-f5ee4bb4-1777066369797.webp",
  },
  {
    title: "Urban Minimalist Identity",
    category: "Branding",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/ef698d84-64d0-4642-ba7a-8cb6f9da5b63/brand-identity-showcase-758fd5db-1777065912888.webp",
  },
  {
    title: "E-Commerce Fintech App",
    category: "Web Dev",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/ef698d84-64d0-4642-ba7a-8cb6f9da5b63/frontend-dev-ui-93085c68-1777065911950.webp",
  },
  {
    title: "Modern Tech Logo Set",
    category: "Logo",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/ef698d84-64d0-4642-ba7a-8cb6f9da5b63/logo-design-collection-47e56577-1777065912130.webp",
  },
  {
    title: "Luxury Residence Interior",
    category: "Painting",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/ef698d84-64d0-4642-ba7a-8cb6f9da5b63/house-painting-pro-768922b2-1777065914134.webp",
  },
  {
    title: "Creative Agency Platform",
    category: "Web Dev",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/ef698d84-64d0-4642-ba7a-8cb6f9da5b63/app-development-mobile-0dd44084-1777065913879.webp",
  },
  {
    title: "Editorial Design Series",
    category: "Branding",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/ef698d84-64d0-4642-ba7a-8cb6f9da5b63/graphic-design-hero-b6724ae9-1777065912602.webp",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              A curated selection of my favorite projects across various disciplines.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-accent hover:bg-accent/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-accent"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <Badge className="w-fit mb-3">{project.category}</Badge>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}