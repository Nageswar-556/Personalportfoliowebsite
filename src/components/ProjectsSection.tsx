import { motion } from "motion/react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection() {
  const projects = [
    {
      title: "Smart Inventory & Sales Management System",
      description: "Comprehensive inventory management system with AI-powered demand forecasting capabilities to optimize stock levels and predict future sales trends.",
      image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjM3NzY3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Python", "AI/ML", "Database", "System Design"],
      features: [
        "AI-based demand forecasting",
        "Real-time inventory tracking",
        "Sales analytics dashboard",
        "Automated reorder alerts",
      ],
      company: "OneYes Info Tech Solutions",
    },
    {
      title: "COVID-19 Data Science Project",
      description: "Comprehensive analysis of COVID-19 data using advanced data science techniques, providing insights into pandemic trends and patterns.",
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM3NDk3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Python", "Data Analysis", "Pandas", "Visualization"],
      features: [
        "Multi-dimensional data analysis",
        "Trend prediction models",
        "Interactive visualizations",
        "Statistical insights",
      ],
      company: "IStudio",
    },
    {
      title: "ML Model on Loan Dataset",
      description: "Machine learning model to predict loan approval decisions based on applicant data, improving accuracy and reducing processing time.",
      image: "https://images.unsplash.com/photo-1555209183-8facf96a4349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDF8fHx8MTc2Mzc2NDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Machine Learning", "Python", "Scikit-learn", "Feature Engineering"],
      features: [
        "Predictive modeling",
        "Feature importance analysis",
        "Model optimization",
        "Performance metrics tracking",
      ],
      company: "IStudio",
    },
    {
      title: "Behavioral Security Monitoring System",
      description: "Proactive real-time system for monitoring and analyzing user behavior patterns to detect potential security threats and anomalies.",
      image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjM3MTgzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["AI", "Computer Vision", "Real-time Processing", "Security"],
      features: [
        "Real-time behavioral analysis",
        "Anomaly detection",
        "Automated alerting system",
        "Security dashboard",
      ],
      company: "Eduexpose",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900/50">
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
              My Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl mt-2 mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
            />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all group h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                    <Badge className="absolute top-4 right-4 bg-cyan-500/20 text-cyan-400 border border-cyan-500/50">
                      {project.company}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <p className="text-sm text-cyan-400 mb-2 flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        Key Features
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-slate-400 flex items-start gap-1">
                            <span className="text-cyan-400">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-900/50 text-slate-300 rounded-full text-xs border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
