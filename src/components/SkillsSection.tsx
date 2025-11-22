import { motion } from "motion/react";
import { Code, Database, Brain, Cloud, Wrench, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Data Science & AI",
      icon: Brain,
      color: "cyan",
      skills: [
        { name: "Data Annotation", level: 90 },
        { name: "AI Model Training", level: 85 },
        { name: "Machine Learning", level: 88 },
        { name: "Data Analysis", level: 92 },
        { name: "MS Excel", level: 85 },
      ],
    },
    {
      category: "Programming Languages",
      icon: Code,
      color: "blue",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java SE 11", level: 85 },
        { name: "SQL", level: 88 },
      ],
    },
    {
      category: "Cloud & Platforms",
      icon: Cloud,
      color: "purple",
      skills: [
        { name: "Oracle APEX Cloud", level: 80 },
        { name: "Alibaba Cloud Big Data", level: 75 },
        { name: "Cloud Services", level: 78 },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: Wrench,
      color: "green",
      skills: [
        { name: "Git & Version Control", level: 85 },
        { name: "Operating Systems", level: 82 },
        { name: "Database Management", level: 88 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { gradient: string; text: string; bg: string }> = {
      cyan: { gradient: "from-cyan-500 to-blue-500", text: "text-cyan-400", bg: "bg-cyan-500/20" },
      blue: { gradient: "from-blue-500 to-purple-500", text: "text-blue-400", bg: "bg-blue-500/20" },
      purple: { gradient: "from-purple-500 to-pink-500", text: "text-purple-400", bg: "bg-purple-500/20" },
      green: { gradient: "from-green-500 to-emerald-500", text: "text-green-400", bg: "bg-green-500/20" },
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="skills" className="py-20 px-6">
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
              What I Know
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl mt-2 mb-4"
            >
              Technical Skills
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
            />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const colors = getColorClasses(category.color);
              
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <Card className="p-6 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all h-full">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${colors.bg} border border-slate-700`}>
                        <category.icon className={`h-6 w-6 ${colors.text}`} />
                      </div>
                      <h3 className="text-xl text-white">{category.category}</h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-slate-300">{skill.name}</span>
                            <span className={`text-sm ${colors.text}`}>{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2 }}
                              className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <Card className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700">
              <h3 className="text-xl text-white mb-6">Additional Proficiencies</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Full-stack Development",
                  "System Design",
                  "Algorithm Design",
                  "Data Visualization",
                  "Problem Solving",
                  "Team Collaboration",
                  "Agile Methodologies",
                  "Technical Documentation",
                  "Code Review",
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="flex items-center gap-2 text-slate-300"
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
