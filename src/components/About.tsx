import { motion } from "motion/react";
import { Briefcase, GraduationCap, Users, Award } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const stats = [
    { icon: GraduationCap, label: "B.Tech CSE AI", value: "2023-2027" },
    { icon: Briefcase, label: "Internships", value: "3+ Completed" },
    { icon: Users, label: "LinkedIn Network", value: "3.2k+" },
    { icon: Award, label: "Certifications", value: "10+" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-900">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-shadow bg-white">
                  <stat.icon className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                  <p className="text-slate-600 mb-1">{stat.label}</p>
                  <p className="text-slate-900">{stat.value}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="p-8 md:p-12 bg-white/80 backdrop-blur-sm">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I am a <span className="text-blue-600">pre-final year B.Tech CSE AI student</span> based in Chennai, 
              driven by a strong focus on <span className="text-blue-600">Artificial Intelligence, Data Science, and Software Engineering</span>. 
              I possess hands-on experience gained through multiple internships, specializing in Data Annotation, 
              AI Model Training, and full-stack development.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I am highly skilled in <span className="text-blue-600">Python, SQL, and Java</span>, and actively engage with 
              the tech community through my extensive LinkedIn network of over 3,200 connections. With a passion for solving 
              real-world problems using cutting-edge technology, I am seeking opportunities to contribute to innovative 
              projects in data science and software engineering.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
