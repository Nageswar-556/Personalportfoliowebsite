import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "nageswarbellamkonda56@gmail.com",
      link: "mailto:nageswarbellamkonda56@gmail.com",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7893389556",
      link: "tel:+917893389556",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      link: null,
      color: "from-purple-400 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Nageswar548",
      link: "https://github.com/Nageswar548",
      color: "hover:text-slate-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "3.2k+ Connections",
      link: "https://www.linkedin.com/in/nageswar-bellamkonda-0ab6302a0",
      color: "hover:text-blue-400",
    },
  ];

  const handleDownload = () => {
    window.print();
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/50">
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
              Let's Connect
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl mt-2 mb-4"
            >
              Get In Touch
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
              className="text-slate-400 text-lg max-w-2xl mx-auto"
            >
              I'm actively seeking opportunities in Data Science and Software Engineering. 
              Let's discuss how we can work together!
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700">
                <h3 className="text-2xl text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {method.link ? (
                        <a
                          href={method.link}
                          className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors group"
                        >
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color} bg-opacity-20`}>
                            <method.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-slate-400 mb-1">{method.label}</p>
                            <p className="text-white group-hover:text-cyan-400 transition-colors break-all">
                              {method.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color} bg-opacity-20`}>
                            <method.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-slate-400 mb-1">{method.label}</p>
                            <p className="text-white">{method.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-8 bg-slate-800/50 border-slate-700">
                <h3 className="text-xl text-white mb-6">Social Media</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className={`flex items-center gap-4 p-4 rounded-lg bg-slate-900/50 hover:bg-slate-700/50 transition-all group ${social.color}`}
                    >
                      <social.icon className="h-6 w-6 text-slate-400 group-hover:scale-110 transition-transform" />
                      <div className="flex-1">
                        <p className="text-white group-hover:text-cyan-400 transition-colors">
                          {social.label}
                        </p>
                        <p className="text-sm text-slate-400">{social.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Right Column - CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 flex flex-col justify-center">
                <div className="text-center mb-8">
                  <div className="inline-block p-4 bg-cyan-500/20 rounded-full mb-6">
                    <Send className="h-12 w-12 text-cyan-400" />
                  </div>
                  <h3 className="text-3xl text-white mb-4">Ready to Start a Project?</h3>
                  <p className="text-slate-300 text-lg mb-8">
                    I'm available for internships, full-time positions, and freelance projects. 
                    Let's build something amazing together!
                  </p>
                </div>

                <div className="space-y-4">
                  <a href="mailto:nageswarbellamkonda56@gmail.com" className="block">
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-6 text-lg">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Me an Email
                    </Button>
                  </a>
                  
                  <Button
                    onClick={handleDownload}
                    variant="outline"
                    className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 py-6 text-lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </div>

                {/* Availability Status */}
                <div className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    </div>
                    <div>
                      <p className="text-white">Currently Available</p>
                      <p className="text-sm text-slate-400">Open to new opportunities</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 bg-slate-800/50 border-slate-700">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                {[
                  { icon: "⚡", label: "Response Time", value: "< 24 hours" },
                  { icon: "🌍", label: "Time Zone", value: "IST (UTC+5:30)" },
                  { icon: "💬", label: "Languages", value: "English, Telugu" },
                  { icon: "📍", label: "Based In", value: "Chennai, India" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-sm text-slate-400 mb-1">{item.label}</div>
                    <div className="text-white">{item.value}</div>
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
