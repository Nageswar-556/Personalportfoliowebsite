import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function CertificationsSection() {
  const certifications = [
    {
      title: "Oracle Certified Professional: Java SE 11 Developer",
      issuer: "Oracle",
      category: "Programming",
      level: "Professional",
      icon: "☕",
      color: "red",
    },
    {
      title: "Oracle Database SQL Certified Specialist",
      issuer: "Oracle",
      category: "Database",
      level: "Specialist",
      icon: "🗄️",
      color: "blue",
    },
    {
      title: "Oracle APEX Cloud Developer Certified Professional",
      issuer: "Oracle",
      category: "Cloud Development",
      level: "Professional",
      icon: "☁️",
      color: "purple",
    },
    {
      title: "Introduction to Data Analysis using Microsoft Excel",
      issuer: "Coursera",
      category: "Data Analysis",
      level: "Certificate",
      icon: "📊",
      color: "green",
    },
    {
      title: "Introduction to Copilot for Startups",
      issuer: "Simplelearn",
      category: "AI Tools",
      level: "Certificate",
      icon: "🤖",
      color: "cyan",
    },
    {
      title: "Introduction to Alibaba Cloud Big Data",
      issuer: "Alibaba Cloud",
      category: "Big Data",
      level: "Certificate",
      icon: "💾",
      color: "orange",
    },
    {
      title: "Operating Systems Basics",
      issuer: "Cisco",
      category: "Systems",
      level: "Certificate",
      icon: "💻",
      color: "blue",
    },
    {
      title: "English for IT 1",
      issuer: "Cisco",
      category: "Professional Skills",
      level: "Certificate",
      icon: "🗣️",
      color: "purple",
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cisco",
      category: "Data Science",
      level: "Certificate",
      icon: "🔬",
      color: "cyan",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; text: string }> = {
      red: { border: "border-red-500/50", bg: "bg-red-500/20", text: "text-red-400" },
      blue: { border: "border-blue-500/50", bg: "bg-blue-500/20", text: "text-blue-400" },
      purple: { border: "border-purple-500/50", bg: "bg-purple-500/20", text: "text-purple-400" },
      green: { border: "border-green-500/50", bg: "bg-green-500/20", text: "text-green-400" },
      cyan: { border: "border-cyan-500/50", bg: "bg-cyan-500/20", text: "text-cyan-400" },
      orange: { border: "border-orange-500/50", bg: "bg-orange-500/20", text: "text-orange-400" },
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section className="py-20 px-6 bg-slate-900/50">
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
              Credentials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl mt-2 mb-4"
            >
              Certifications & Training
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 max-w-2xl mx-auto"
            >
              10+ Professional certifications from industry-leading organizations
            </motion.p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const colors = getColorClasses(cert.color);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className={`p-6 bg-slate-800/50 border-slate-700 hover:${colors.border} transition-all group h-full flex flex-col`}>
                    {/* Icon & Level Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`text-4xl p-3 rounded-lg ${colors.bg}`}>
                        {cert.icon}
                      </div>
                      <Badge className={`${colors.bg} ${colors.text} border-0 text-xs`}>
                        {cert.level}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className={`text-white mb-3 group-hover:${colors.text} transition-colors flex-1`}>
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <div className="mb-3">
                      <p className="text-sm text-slate-400 mb-1">Issued by</p>
                      <p className={`${colors.text}`}>{cert.issuer}</p>
                    </div>

                    {/* Category */}
                    <div className="pt-3 border-t border-slate-700">
                      <span className="text-xs text-slate-400">{cert.category}</span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid md:grid-cols-4 gap-6"
          >
            {[
              { icon: "🏆", label: "Total Certifications", value: "10+" },
              { icon: "🎯", label: "Oracle Certified", value: "3" },
              { icon: "🌐", label: "Cisco Certified", value: "3" },
              { icon: "📚", label: "Online Learning", value: "4" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
