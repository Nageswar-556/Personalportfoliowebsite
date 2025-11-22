import { motion } from "motion/react";
import { Trophy, Award } from "lucide-react";
import { Card } from "./ui/card";

export function Recognition() {
  const achievements = [
    {
      title: "Certification of Appreciation",
      description: "National Level Technical Symposium",
      organization: "College",
      icon: Trophy,
    },
    {
      title: "Participation Certificates",
      description: "Multiple Quiz Attempts",
      organization: "Mygov",
      icon: Award,
    },
  ];

  return (
    <section id="recognition" className="py-20 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-900">
            Recognition & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-blue-50 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl text-slate-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-slate-700 mb-2">
                        {achievement.description}
                      </p>
                      <p className="text-sm text-blue-600">
                        {achievement.organization}
                      </p>
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
