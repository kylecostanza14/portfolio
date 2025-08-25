import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onNavigate?: (page: 'home' | 'about' | 'projects' | 'bulk-service') => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight font-[Roboto]">
              Hi, I'm Kyle Costanza
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground">
              UX | Product Designer
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            I've driven business growth across hospitality, eComm, B2B, B2C, and SaaS; Building out 0-1 products and enhancing existing experiences. Boosted Arrow’s online revenue in 2.5 years by ~5000%, increasing AOV by 300%, and improving client-agent engagement on Compass’ platform by 20%.
          </p>
          
          <div className="flex gap-4">
            <Button size="lg" onClick={() => onNavigate?.('projects')} className="text-[rgba(255,255,255,1)] bg-[rgba(2,102,102,1)]">
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download Resume
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative w-full max-w-md mx-auto">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
              alt="Kyle Costanza - UX |Product Designer"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />          
          </div>
        </div>
      </div>
    </section>
  );
}