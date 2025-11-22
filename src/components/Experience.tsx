import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "OneYes Info Tech Solutions",
      location: "Chennai",
      duration: "2 Months (Up to Dec 2024)",
      type: "On-site",
      description: "Focus on software development lifecycle and system creation.",
      project: "Developed the Smart Inventory & Sales Management System with AI Demand Forecasting.",
      technologies: ["Software Development", "System Design", "AI Integration"],
    },
    {
      title: "Data Science Intern",
      company: "IStudio",
      location: "Remote",
      duration: "4 Months",
      type: "Hybrid Mode",
      description: "Applied Machine Learning and data science methodologies.",
      project: "COVID-19 Data Science Project and Machine Learning Model Application on Loan Data Set.",
      technologies: ["Machine Learning", "Data Analysis", "Python"],
    },
    {
      title: "AI Intern",
      company: "Eduexpose",
      location: "Hyderabad",
      duration: "3 Months",
      type: "On-site",
      description: "Focused on real-time security and behavioral analysis.",
      project: "Proactive Real Time Behavioral Security Monitoring System.",
      technologies: ["AI", "Security Systems", "Behavioral Analysis"],
    },
    {
      title: "Campus Ambassador",
      company: "Rinex.ai",
      location: "Remote",
      duration: "2 Terms",
      type: "Part-time",
      description: "Engaged in outreach and representation for the AI organization.",
      project: "Promoted AI initiatives and engaged with student community.",
      technologies: ["Community Building", "AI Advocacy", "Networking"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-900">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`mb-12 md:flex ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                <div className="md:w-1/2 md:px-8">
                  <Card className="p-6 hover:shadow-xl transition-shadow bg-white">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl text-slate-900 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-blue-600 mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700">
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-slate-700 mb-3">{exp.description}</p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <p className="text-sm text-slate-600 mb-1">Key Project:</p>
                      <p className="text-slate-800">{exp.project}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-12 h-12 items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
