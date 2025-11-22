import { motion } from "motion/react";
import { Mail, Phone, Github, Linkedin, MapPin, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nageswarbellamkonda56@gmail.com",
      link: "mailto:nageswarbellamkonda56@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7893389556",
      link: "tel:+917893389556",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Nageswar548",
      link: "https://github.com/Nageswar548",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nageswar-bellamkonda",
      link: "https://www.linkedin.com/in/nageswar-bellamkonda-0ab6302a0",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-900">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />

          <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl mb-4">
                Let's Work Together
              </h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                I'm actively seeking opportunities in Data Science and Software Engineering. 
                Feel free to reach out for collaborations, internships, or full-time positions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      <Card className="p-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all border-white/20 h-full">
                        <info.icon className="h-8 w-8 mb-3 text-white" />
                        <p className="text-sm text-blue-100 mb-1">{info.label}</p>
                        <p className="text-white break-words">{info.value}</p>
                      </Card>
                    </a>
                  ) : (
                    <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 h-full">
                      <info.icon className="h-8 w-8 mb-3 text-white" />
                      <p className="text-sm text-blue-100 mb-1">{info.label}</p>
                      <p className="text-white">{info.value}</p>
                    </Card>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:nageswarbellamkonda56@gmail.com">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/20 w-full sm:w-auto"
                onClick={() => window.print()}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </Card>

          {/* Footer */}
          <div className="text-center mt-12 text-slate-600">
            <p>© 2024 Nageswar Bellamkonda. All rights reserved.</p>
            <p className="text-sm mt-2">
              Built with React & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
