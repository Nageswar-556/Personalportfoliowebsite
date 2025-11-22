import { motion } from "motion/react";
import { Trophy, Award, Star } from "lucide-react";
import { Card } from "./ui/card";

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "Certification of Appreciation",
      description: "Recognized at National Level Technical Symposium for outstanding technical contribution and innovation.",
      organization: "College",
      date: "2024",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/20",
    },
    {
      icon: Award,
      title: "Participation Certificates",
      description: "Successfully participated in multiple quiz competitions organized by Government of India.",
      organization: "MyGov India",
      date: "2023-2024",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/20",
    },
  ];

  const highlights = [
    { icon: "🎓", label: "Academic Excellence", value: "B.Tech AI Specialization" },
    { icon: "💼", label: "Industry Experience", value: "3+ Internships" },
    { icon: "🌐", label: "Professional Network", value: "3.2k+ Connections" },
    { icon: "🚀", label: "Ambassador Role", value: "Rinex.ai (2 Terms)" },
  ];

  return (
    <section className="py-20 px-6">
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
              Recognition
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl mt-2 mb-4"
            >
              Achievements & Awards
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
            />
          </div>

          {/* Main Achievements */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all group h-full">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${achievement.bgColor} group-hover:scale-110 transition-transform`}>
                      <achievement.icon className={`h-8 w-8 bg-gradient-to-br ${achievement.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                          {achievement.title}
                        </h3>
                        <span className="text-sm text-slate-400">{achievement.date}</span>
                      </div>
                      
                      <p className="text-slate-300 mb-3">
                        {achievement.description}
                      </p>

                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${achievement.bgColor} border border-slate-700`}>
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-white text-sm">{achievement.organization}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30">
              <h3 className="text-2xl text-white mb-6 text-center">Additional Highlights</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl mb-3">{highlight.icon}</div>
                    <div className="text-sm text-slate-400 mb-2">{highlight.label}</div>
                    <div className="text-white">{highlight.value}</div>
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
