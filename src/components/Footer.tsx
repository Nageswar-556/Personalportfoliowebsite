import { motion } from "motion/react";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Nageswar548",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nageswar-bellamkonda-0ab6302a0",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:nageswarbellamkonda56@gmail.com",
      label: "Email",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              NB.
            </h3>
            <p className="text-slate-400 mb-4">
              Aspiring Data Scientist & Software Engineer passionate about AI, Machine Learning, and innovative solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="mailto:nageswarbellamkonda56@gmail.com" className="hover:text-cyan-400 transition-colors">
                  nageswarbellamkonda56@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917893389556" className="hover:text-cyan-400 transition-colors">
                  +91 7893389556
                </a>
              </li>
              <li>Chennai, India</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
            <p>
              © {currentYear} Nageswar Bellamkonda. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Built with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
