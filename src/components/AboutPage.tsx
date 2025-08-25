import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Calendar, Award, Heart } from 'lucide-react';

const experience = [
  {
    company: "TechFlow Solutions",
    role: "Senior UX Designer",
    period: "2022 - Present",
    description: "Leading design initiatives for B2B SaaS products, managing design system, and mentoring junior designers.",
    highlights: [
      "Led redesign of core platform resulting in 40% increase in user engagement",
      "Established and maintained comprehensive design system used across 3 product teams", 
      "Mentored 4 junior designers and conducted UX workshops for cross-functional teams"
    ]
  },
  {
    company: "StartupLabs",
    role: "Product Designer", 
    period: "2020 - 2022",
    description: "Designed user experiences for multiple early-stage startups, focusing on mobile-first design and rapid prototyping.",
    highlights: [
      "Designed mobile apps for 8 different startups from concept to launch",
      "Reduced user onboarding time by 60% through iterative UX improvements",
      "Conducted user interviews and usability testing for product validation"
    ]
  },
  {
    company: "Creative Agency Co",
    role: "UX Designer",
    period: "2019 - 2020",
    description: "Worked on diverse client projects ranging from e-commerce to healthcare, developing skills in user research and testing.",
    highlights: [
      "Delivered UX solutions for 15+ client projects across various industries",
      "Improved e-commerce conversion rates by 25% through checkout flow optimization",
      "Developed user research methodologies adopted agency-wide"
    ]
  }
];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating meaningful digital experiences that make a positive impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  I'm a UX/Product Designer with over 10 years of experience creating digital experiences that solve real-world problems. My journey began in college, where I studied industrial design and developed a strong foundation in blending form with function through UX-focused coursework. Over time, I discovered my true passion: understanding user behavior and transforming insights into intuitive, impactful interfaces.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Great design is invisible. It should feel effortless and natural to all people. My approach is an iterative, user-centered process involving research, ideation, problem definition and validation, ensuring alignment with user needs and business goals to deliver meaningful, effective solutions that scale with business growth.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Denver, CO</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span>1 Design Award</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-primary" />
                  <span>Outdoor & Bonsai Enthusiast</span>
                </div>
              </div>
            </div>

            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&h=600&fit=crop"
                alt="Kyle working on design"
                className="w-full h-96 object-cover rounded-2xl mb-8"
              />
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-lg mb-2">{job.role}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium text-primary">{job.company}</p>
                      <span className="text-sm text-muted-foreground">{job.period}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{job.description}</p>
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}