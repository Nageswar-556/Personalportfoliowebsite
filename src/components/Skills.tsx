import { motion } from "motion/react";
import { Code, Database, Brain, Cloud, Award, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Skills() {
  const skillCategories = [
    {
      category: "Data Science",
      icon: Brain,
      skills: [
        "Data Annotation",
        "AI Model Training",
        "Machine Learning (ML)",
        "Data Analysis",
        "MS Excel"
      ],
    },
    {
      category: "Programming",
      icon: Code,
      skills: [
        "Python",
        "Java SE 11",
        "SQL",
      ],
    },
    {
      category: "Platforms & Tools",
      icon: Cloud,
      skills: [
        "Oracle APEX Cloud",
        "Alibaba Cloud Big Data",
        "Operating Systems",
      ],
    },
  ];

  const certifications = [
    {
      title: "Oracle Certified Professional: Java SE 11 Developer",
      issuer: "Oracle",
      category: "Programming"
    },
    {
      title: "Oracle Database SQL Certified Specialist",
      issuer: "Oracle",
      category: "Database"
    },
    {
      title: "Oracle APEX Cloud Developer Certified Professional",
      issuer: "Oracle",
      category: "Cloud"
    },
    {
      title: "Introduction to Data Analysis using Microsoft Excel",
      issuer: "Coursera",
      category: "Data Science"
    },
    {
      title: "Introduction to Copilot for Startups",
      issuer: "Simplelearn",
      category: "AI"
    },
    {
      title: "Introduction to Alibaba Cloud Big Data",
      issuer: "Alibaba Cloud",
      category: "Cloud"
    },
    {
      title: "Operating Systems Basics",
      issuer: "Cisco",
      category: "Systems"
    },
    {
      title: "English for IT 1",
      issuer: "Cisco",
      category: "Professional"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cisco",
      category: "Data Science"
    },
  ];

  const languages = [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Telugu", level: "Native" },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-900">
            Technical Skills & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />

          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="skills">Core Skills</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>

            <TabsContent value="skills">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full hover:shadow-xl transition-shadow bg-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                          <category.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl text-slate-900">
                          {category.category}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className="flex items-start gap-2 text-slate-700"
                          >
                            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
                <h3 className="text-xl text-slate-900 mb-4 flex items-center gap-2">
                  <Database className="h-6 w-6 text-blue-600" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Badge className="bg-blue-600 text-white">
                        {lang.name}
                      </Badge>
                      <span className="text-slate-600">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="certifications">
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow bg-white h-full">
                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h4 className="text-slate-900 mb-2">
                            {cert.title}
                          </h4>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-slate-600">
                              {cert.issuer}
                            </p>
                            <Badge variant="outline" className="text-xs">
                              {cert.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
