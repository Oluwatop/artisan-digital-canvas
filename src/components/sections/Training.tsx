import { CheckCircle2, Users, Calendar, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const trainingPrograms = [
  {
    title: "Professional Graphic Design",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    topics: ["Typography", "Layout Design", "Brand Theory", "Adobe Creative Suite"],
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/ef698d84-64d0-4642-ba7a-8cb6f9da5b63/training-workshop-tech-eacb5a3f-1777065914001.webp",
  },
  {
    title: "Frontend Engineering Bootcamp",
    duration: "16 Weeks",
    level: "Intermediate",
    topics: ["React 19", "TypeScript", "Tailwind CSS", "Modern Web Architecture"],
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/ef698d84-64d0-4642-ba7a-8cb6f9da5b63/frontend-dev-ui-93085c68-1777065911950.webp",
  },
  {
    title: "UI/UX & Website Strategy",
    duration: "8 Weeks",
    level: "All Levels",
    topics: ["User Research", "Prototyping", "Design Systems", "Conversion Design"],
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/ef698d84-64d0-4642-ba7a-8cb6f9da5b63/creative-studio-workspace-47cad463-1777065914023.webp",
  },
];

export default function Training() {
  return (
    <section id="training" className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Empowering the Next Generation</h2>
            <p className="text-xl text-primary-foreground/80 mb-12">
              Beyond creating products, I am passionate about sharing knowledge. My training programs are designed to take you from zero to industry-ready.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: Users, text: "Small class sizes for personalized attention" },
                { icon: Calendar, text: "Flexible schedules (Online & Offline)" },
                { icon: Trophy, text: "Real-world project-based curriculum" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" variant="secondary" className="h-14 px-8 text-md">
              Enroll in a Course
            </Button>
          </motion.div>

          <div className="space-y-6">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row gap-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={program.image} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-xl font-bold">{program.title}</h3>
                    <Badge variant="outline" className="text-white border-white/20 whitespace-nowrap">{program.duration}</Badge>
                  </div>
                  <p className="text-primary-foreground/60 text-sm mb-4">{program.level}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {program.topics.map(topic => (
                      <div key={topic} className="flex items-center gap-1 text-xs">
                        <CheckCircle2 className="w-3 h-3 text-green-400" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}