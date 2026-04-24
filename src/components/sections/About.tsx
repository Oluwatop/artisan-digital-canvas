import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, ExternalLink } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Graphic Design", level: 95 },
    { name: "Brand Strategy", level: 90 },
    { name: "Frontend Dev", level: 92 },
    { name: "UI/UX Design", level: 88 },
    { name: "Mobile Apps", level: 85 },
    { name: "Commercial Painting", level: 98 },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-accent">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ef698d84-64d0-4642-ba7a-8cb6f9da5b63/creative-studio-workspace-47cad463-1777065914023.webp" 
                alt="About Me" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-primary-foreground text-4xl font-bold">10+</p>
              <p className="text-primary-foreground/80 font-medium">Years Experience</p>
            </div>
          </motion.div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Design. Build. Inspire.</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I am a visionary creator who believes that good design is about more than just aesthetics—it's about functionality, resonance, and impact. Whether I'm crafting a brand's digital presence or transforming a physical space with precision painting, I bring the same level of dedication and detail to every project.
            </p>

            <div className="space-y-6 mb-10">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-accent rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-xl border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}