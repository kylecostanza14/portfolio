import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Skills } from './components/Skills';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { BulkServicePage } from './components/BulkServicePage';
import { CompassClientHomePage } from './components/CompassClientHomePage';
import { ArrowProductDetailPage } from './components/ArrowProductDetailPage';
import { MobileBankingSecurityPage } from './components/MobileBankingSecurityPage';
import { HealthcareProviderPortalPage } from './components/HealthcareProviderPortalPage';
import { AILearningPlatformPage } from './components/AILearningPlatformPage';
import { Menu, X, Mail, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

type Page = 'home' | 'about' | 'projects' | 'bulk-service' | 'compass-client-home' | 'arrow-product-detail' | 'mobile-banking-security' | 'healthcare-provider-portal' | 'ai-learning-platform';

function Navigation({ currentPage, onNavigate }: { currentPage: Page; onNavigate: (page: Page) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: 'home', label: 'Home', page: 'home' as Page },
    { href: 'about', label: 'About', page: 'about' as Page },
    { href: 'projects', label: 'Projects', page: 'projects' as Page },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    onNavigate(link.page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="font-bold text-xl cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            Kyle Costanza
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link)}
                className={`transition-colors relative ${
                  currentPage === link.page
                    ? 'text-foreground font-bold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                {currentPage === link.page && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-500 -mb-4"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link)}
                  className={`transition-colors text-left relative ${
                    currentPage === link.page
                      ? 'text-foreground font-bold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {currentPage === link.page && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-500 -mb-2"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "kylecostanza14@gmail.com",
    href: "mailto:kylecostanza14@gmail.com",
    description: "Best for project inquiries"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/kyle-costanza-b402668/",
    href: "https://www.linkedin.com/in/kyle-costanza-b402668/",
    description: "Let's connect professionally"
  }
];

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Contact Methods Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities and creative challenges. Let's create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={method.label}>
                  <Card className="h-full hover:shadow-md transition-shadow duration-300 bg-primary-foreground text-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold mb-1">{method.label}</h3>
                          <p className="text-primary break-all mb-2">{method.value}</p>
                          <p className="text-sm opacity-70">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-primary-foreground/20 pt-8">
          <div className="text-center md:text-left">
            <div className="font-bold text-xl mb-2">Kyle Costanza</div>
            <p className="opacity-90">UX/Product Designer crafting meaningful digital experiences</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
              Privacy
            </a>
            <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
              Terms
            </a>
            <span className="opacity-70">© 2024 Kyle Costanza</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage({ onNavigateToCaseStudy, onNavigate }: { onNavigateToCaseStudy?: (projectId: number) => void; onNavigate?: (page: Page) => void }) {
  return (
    <main>
      <div id="home">
        <Hero onNavigate={onNavigate} />
      </div>
      
      <div id="work">
        <FeaturedProjects onNavigateToCaseStudy={onNavigateToCaseStudy} />
      </div>
      
      <div id="skills">
        <Skills />
      </div>
    </main>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigateToCaseStudy = (projectId: number) => {
    // Map project IDs to their respective pages
    const projectMap: Record<number, Page> = {
      1: 'bulk-service',
      2: 'compass-client-home',
      3: 'arrow-product-detail',
      4: 'mobile-banking-security',
      5: 'healthcare-provider-portal',
      6: 'ai-learning-platform',
    };
    
    const targetPage = projectMap[projectId];
    if (targetPage) {
      setCurrentPage(targetPage);
    }
  };

  const handleBackToProjects = () => {
    setCurrentPage('projects');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage onNavigateToCaseStudy={handleNavigateToCaseStudy} />;
      case 'bulk-service':
        return <BulkServicePage onBack={handleBackToProjects} />;
      case 'compass-client-home':
        return <CompassClientHomePage onBack={handleBackToProjects} />;
      case 'arrow-product-detail':
        return <ArrowProductDetailPage onBack={handleBackToProjects} />;
      case 'mobile-banking-security':
        return <MobileBankingSecurityPage onBack={handleBackToProjects} />;
      case 'healthcare-provider-portal':
        return <HealthcareProviderPortalPage onBack={handleBackToProjects} />;
      case 'ai-learning-platform':
        return <AILearningPlatformPage onBack={handleBackToProjects} />;
      case 'home':
      default:
        return <HomePage onNavigateToCaseStudy={handleNavigateToCaseStudy} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {renderPage()}
      
      <Footer />
    </div>
  );
}