import image_807f3392c20ac0d797698235be5e04452e2202b7 from 'figma:asset/807f3392c20ac0d797698235be5e04452e2202b7.png';
import image_bd4a2b7051d2f1dde0b1e15ee82df0fd034cdbc1 from 'figma:asset/bd4a2b7051d2f1dde0b1e15ee82df0fd034cdbc1.png';
import image_f124c1ac7919d1dddd1523ef988d09e14ee4961f from 'figma:asset/f124c1ac7919d1dddd1523ef988d09e14ee4961f.png';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChartNoAxesCombined } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Bulk Service at Hilton",
    description: "Streamlined corporate users' workflows by improving efficiency and standardization while enabling Hilton Hotels to scale the Add-ons program globally.",
    image: image_f124c1ac7919d1dddd1523ef988d09e14ee4961f,
    tags: ["Responsive Web", "SaaS", "End-to-End", "0-1"],
    duration: ["82,000+ hotels updated", "20,506 hours saved"],
    team: ["Figma", "Figjam"],
    year: "2024"
  },
  {
    id: 2,
    title: "Client Home at Compass Real Estate",
    description: "Enabling better collaboration between clients and agents in the home buying and selling process through an innovative new dashboard experience, a 2025 Inman Innovator Awards finalist.",
    image: image_bd4a2b7051d2f1dde0b1e15ee82df0fd034cdbc1,
    tags: ["Evolving Dashboard", "Real Estate", "iOS & Android"],
    duration: "4 months",
    team: "6 people",
    year: "2022"
  },
  {
    id: 3,
    title: "Product Detail Page at Arrow Electronics",
    description: "Building consumer confidence by addressing user needs and advancing business goals, guided by user research and A/B testing.",
    image: image_807f3392c20ac0d797698235be5e04452e2202b7,
    tags: ["E-commerce", "Responsive Web", "End-to-End"],
    duration: ["E-commerce", "Responsive Web", "End-to-End"],
    team: ["Sketch", "Usertesting.com"],
    year: "2018"
  },
  {
    id: 4,
    title: "Mobile Banking Security Enhancement",
    description: "Redesigned authentication flow and security features for a major banking app, reducing user dropout by 35% while maintaining top-tier security standards.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["FinTech", "Mobile Design", "Security"],
    duration: ["6 months", "Live with 2M+ users"],
    team: ["Figma", "Principle"],
    year: "2023"
  },
  {
    id: 5,
    title: "Healthcare Provider Portal",
    description: "Created a comprehensive patient management system for healthcare providers, improving appointment scheduling efficiency by 50% and patient satisfaction scores.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    tags: ["Healthcare", "B2B", "Dashboard Design"],
    duration: ["8 months", "HIPAA compliant"],
    team: ["Sketch", "InVision"],
    year: "2021"
  },
  {
    id: 6,
    title: "AI-Powered Learning Platform",
    description: "Designed an adaptive learning interface that personalizes content delivery based on user behavior, increasing engagement by 60% and completion rates by 40%.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    tags: ["EdTech", "AI/ML", "Responsive Web"],
    duration: ["10 months", "500K+ students"],
    team: ["Figma", "Maze"],
    year: "2023"
  }
];

interface ProjectsPageProps {
  onNavigateToCaseStudy?: (projectId: number) => void;
}

export function ProjectsPage({ onNavigateToCaseStudy }: ProjectsPageProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">All Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive collection of my design work spanning various industries and user needs
            </p>
          </div>
          
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <div key={project.id}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="grid lg:grid-cols-2">
                    <div className="order-2 lg:order-1">
                      <CardHeader className="p-8">
                        <div className="mb-4">
                          <Badge variant="outline">{project.year}</Badge>
                        </div>
                        
                        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                          <div className="flex items-center gap-2">
                            <ChartNoAxesCombined className="w-4 h-4" />
                            {Array.isArray(project.duration) ? project.duration.join(" • ") : project.duration}
                          </div>
                        </div>
                        
                        <Button 
                          className="w-full lg:w-auto"
                          onClick={() => onNavigateToCaseStudy?.(project.id)}
                        >
                          View Case Study
                        </Button>
                      </CardHeader>
                    </div>
                    
                    <div className="order-1 lg:order-2">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover p-[0px]"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}