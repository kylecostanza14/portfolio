import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Calendar, Award, Heart } from 'lucide-react';

const experience = [
  {
    company: "TechFlow Solutions",
    role: "Senior UX Designer",
    period: "2022 - Present",
    description: "Leading design initiatives for B2B SaaS products, managing design system, and mentoring junior designers."
  },
  {
    company: "StartupLabs",
    role: "Product Designer",
    period: "2020 - 2022",
    description: "Designed user experiences for multiple early-stage startups, focusing on mobile-first design and rapid prototyping."
  },
  {
    company: "Creative Agency Co",
    role: "UX Designer",
    period: "2019 - 2020",
    description: "Worked on diverse client projects ranging from e-commerce to healthcare, developing skills in user research and testing."
  }
];

export function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences that make a positive impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                I'm a UX/Product Designer with over 5 years of experience crafting digital experiences that solve real-world problems. My journey began in graphic design, but I found my true calling in understanding user behavior and translating insights into intuitive interfaces.
              </p>
              
              <p className="text-lg leading-relaxed">
                I believe great design is invisible – it should feel effortless and natural to users. My approach combines empathy-driven research with systematic design thinking to create solutions that are both beautiful and functional.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-primary" />
                <span>3 Design Awards</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-primary" />
                <span>Coffee Enthusiast</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&h=600&fit=crop"
              alt="Alex working on design"
              className="w-full h-96 object-cover rounded-2xl mb-8"
            />
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="font-semibold text-lg">{job.role}</h4>
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                  </div>
                  <p className="font-medium text-primary mb-2">{job.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}