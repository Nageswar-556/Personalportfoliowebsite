import { motion } from "motion/react";
import { GraduationCap, Target, Lightbulb, Users } from "lucide-react";
import { Card } from "./ui/card";

export function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in Computer Science Engineering with specialization in Artificial Intelligence",
    },
    {
      icon: Target,
      title: "Focus Areas",
      description: "Data Science, Machine Learning, AI Model Training & Software Engineering",
    },
    {
      icon: Lightbulb,
      title: "Expertise",
      description: "Python, Java, SQL, Data Annotation & Full-stack Development",
    },
    {
      icon: Users,
      title: "Community",
      description: "Active tech community member with 3.2k+ LinkedIn connections",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-cyan-400 text-sm uppercase tracking-wider"
            >
              Get to know me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl mt-2 mb-4"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
            />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  I am a <span className="text-cyan-400">pre-final year B.Tech CSE AI student</span> based 
                  in Chennai, driven by a strong passion for{" "}
                  <span className="text-cyan-400">Artificial Intelligence, Data Science, and Software Engineering</span>.
                </p>
                <p>
                  With hands-on experience from <span className="text-cyan-400">multiple internships</span>, 
                  I specialize in Data Annotation, AI Model Training, and full-stack development. My technical 
                  expertise spans across Python, SQL, and Java, complemented by practical experience with cloud 
                  platforms and modern development tools.
                </p>
                <p>
                  I actively engage with the tech community and maintain a strong professional network. 
                  My goal is to leverage cutting-edge technology to solve real-world problems and contribute 
                  to innovative projects in the field of AI and Data Science.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Python", "Java", "SQL", "Machine Learning", "Data Science", "AI"].map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-cyan-400"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Right - Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Card className="p-6 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all h-full">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg w-fit mb-4">
                      <item.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700">
              <h3 className="text-xl mb-6 flex items-center gap-2">
                <span className="text-cyan-400">🗣️</span>
                Languages
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-xl">
                    🇬🇧
                  </div>
                  <div>
                    <div className="text-white">English</div>
                    <div className="text-sm text-slate-400">Professional Working Proficiency</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-xl">
                    🇮🇳
                  </div>
                  <div>
                    <div className="text-white">Telugu</div>
                    <div className="text-sm text-slate-400">Native Speaker</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
