import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1655036387197-566206c80980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNjM3OTEyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Data Science Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/90 to-purple-900/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
              <div className="bg-white rounded-full p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                  <span className="text-4xl">NB</span>
                </div>
              </div>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl mb-4 text-white">
            Nageswar Bellamkonda
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-blue-200 mb-6">
              Aspiring Data Scientist & Software Engineer
            </p>
            
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              B.Tech CSE AI Student (2023-2027) | Chennai
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <a href="mailto:nageswarbellamkonda56@gmail.com">
                <Button variant="default" className="bg-white text-blue-900 hover:bg-blue-50">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </Button>
              </a>
              <a href="https://github.com/Nageswar548" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/nageswar-bellamkonda-0ab6302a0" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn (3.2k+)
                </Button>
              </a>
              <a href="tel:+917893389556">
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Me
                </Button>
              </a>
            </div>

            <div className="flex gap-3 justify-center flex-wrap text-sm text-blue-200">
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                Python
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                Java
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                Data Science
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                AI Model Training
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-blue-200 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown className="h-8 w-8" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
