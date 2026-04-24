import { Palette, Code, Smartphone, Paintbrush, BookOpen, Layers, Terminal, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "UI/UX Designer",
    description: "User-centric design focusing on intuitive interfaces and seamless user experiences for web and mobile applications.",
    icon: Monitor,
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    title: "Graphic Design",
    description: "Creative visual solutions for print and digital media, including posters, brochures, and marketing materials.",
    icon: Palette,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Brand Identity",
    description: "Building cohesive brand worlds through visual strategy, color palettes, and comprehensive brand guidelines.",
    icon: Layers,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Logo Design",
    description: "Memorable and iconic logos that represent your brand's core values and resonate with your audience.",
    icon: Palette,
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    title: "Frontend Development",
    description: "Modern, responsive, and high-performance websites built with React, TypeScript, and Tailwind CSS.",
    icon: Code,
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Web & App Development",
    description: "Full-cycle development of complex web applications and mobile-ready experiences.",
    icon: Smartphone,
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    title: "House Painting",
    description: "Professional interior and exterior painting services with an eye for detail and aesthetic perfection.",
    icon: Paintbrush,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "Tech Training",
    description: "Personalized training sessions in graphic design, web development, and frontend technologies.",
    icon: BookOpen,
    color: "bg-red-500/10 text-red-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Expert Solutions</h2>
          <p className="text-muted-foreground text-lg">
            I offer a wide range of creative and technical services designed to help your brand stand out and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-none bg-background">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}