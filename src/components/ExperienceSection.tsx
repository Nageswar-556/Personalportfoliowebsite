import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "OneYes Info Tech Solutions",
      location: "Chennai",
      duration: "2 Months (Up to Dec 2024)",
      type: "On-site",
      description: "Focused on complete software development lifecycle and system architecture design.",
      keyProject: "Smart Inventory & Sales Management System with AI Demand Forecasting",
      responsibilities: [
        "Developed full-stack inventory management system",
        "Implemented AI-based demand forecasting algorithms",
        "Designed and optimized database architecture",
        "Collaborated with cross-functional teams",
      ],
      technologies: ["Python", "AI/ML", "System Design", "Database Management"],
      color: "cyan",
    },
    {
      title: "Data Science Intern",
      company: "IStudio",
      location: "Hybrid",
      duration: "4 Months",
      type: "Hybrid Mode",
      description: "Applied advanced Machine Learning techniques and data science methodologies to real-world problems.",
      keyProject: "COVID-19 Data Analysis & ML Model Application on Loan Dataset",
      responsibilities: [
        "Conducted comprehensive COVID-19 data analysis",
        "Developed ML models for loan approval prediction",
        "Performed data cleaning and feature engineering",
        "Created data visualizations and insights reports",
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "Data Visualization"],
      color: "blue",
    },
    {
      title: "AI Intern",
      company: "Eduexpose",
      location: "Hyderabad",
      duration: "3 Months",
      type: "On-site",
      description: "Specialized in real-time security systems and behavioral analysis using AI technologies.",
      keyProject: "Proactive Real-Time Behavioral Security Monitoring System",
      responsibilities: [
        "Developed real-time behavioral analysis algorithms",
        "Implemented security monitoring system",
        "Trained AI models for anomaly detection",
        "Created automated alert mechanisms",
      ],
      technologies: ["AI", "Computer Vision", "Security Systems", "Real-time Processing"],
      color: "purple",
    },
    {
      title: "Campus Ambassador",
      company: "Rinex.ai",
      location: "Remote",
      duration: "2 Terms",
      type: "Part-time",
      description: "Represented AI organization and engaged with student community to promote AI initiatives.",
      keyProject: "Community Building & AI Awareness Programs",
      responsibilities: [
        "Organized AI workshops and tech talks",
        "Built and managed student tech community",
        "Promoted AI learning initiatives",
        "Coordinated with multiple stakeholders",
      ],
      technologies: ["Community Management", "Event Organization", "AI Advocacy"],
      color: "green",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; text: string; gradient: string }> = {
      cyan: {
        border: "border-cyan-500/50",
        bg: "bg-cyan-500/20",
        text: "text-cyan-400",
        gradient: "from-cyan-500/20 to-blue-500/20",
      },
      blue: {
        border: "border-blue-500/50",
        bg: "bg-blue-500/20",
        text: "text-blue-400",
        gradient: "from-blue-500/20 to-purple-500/20",
      },
      purple: {
        border: "border-purple-500/50",
        bg: "bg-purple-500/20",
        text: "text-purple-400",
        gradient: "from-purple-500/20 to-pink-500/20",
      },
      green: {
        border: "border-green-500/50",
        bg: "bg-green-500/20",
        text: "text-green-400",
        gradient: "from-green-500/20 to-emerald-500/20",
      },
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="experience" className="py-20 px-6">
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
              My Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl mt-2 mb-4"
            >
              Professional Experience
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative mb-16 md:flex ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`md:w-[calc(50%-2rem)] ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className={`p-6 bg-slate-800/50 border-slate-700 hover:${colors.border} transition-all group`}>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl text-white mb-2 group-hover:${colors.text} transition-colors">
                            {exp.title}
                          </h3>
                          <p className={`text-lg ${colors.text} mb-3`}>
                            {exp.company}
                          </p>
                        </div>
                        <Badge className={`${colors.bg} ${colors.text} border-0`}>
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 mb-4">{exp.description}</p>

                      {/* Key Project */}
                      <div className={`p-4 rounded-lg bg-gradient-to-br ${colors.gradient} border ${colors.border} mb-4`}>
                        <p className="text-sm text-slate-400 mb-1">🎯 Key Project:</p>
                        <p className="text-white">{exp.keyProject}</p>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-4">
                        <p className="text-sm text-slate-400 mb-2">Key Responsibilities:</p>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start gap-2 text-slate-300 text-sm">
                              <ArrowRight className={`h-4 w-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-900/50 text-slate-300 rounded-full text-xs border border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-0 w-16 h-16 items-center justify-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.gradient} border-4 border-slate-950 flex items-center justify-center shadow-lg`}>
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
