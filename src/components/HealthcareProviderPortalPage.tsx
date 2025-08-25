import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Clock, Users, Target, TrendingUp, CheckCircle, ArrowRight, Star, Eye, MessageSquare, BarChart3, Zap, Shield, User, Activity, Heart, FileText } from 'lucide-react';

interface HealthcareProviderPortalPageProps {
  onBack: () => void;
}

export function HealthcareProviderPortalPage({ onBack }: HealthcareProviderPortalPageProps) {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Back Button */}
        <div>
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="flex items-center gap-2 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Button>
        </div>

        {/* Hero Section */}
        <div className="mb-16">
          <Badge variant="outline" className="mb-4">UX Case Study</Badge>
          <h1 className="text-5xl font-bold mb-6">Healthcare Provider Portal</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Designed a comprehensive provider portal that streamlines patient management, reduces administrative burden, and improves care coordination for healthcare professionals.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Timeline</span>
              </div>
              <p className="text-muted-foreground">20 Weeks</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">My Role</span>
              </div>
              <p className="text-muted-foreground">Lead UX Designer</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Platform</span>
              </div>
              <p className="text-muted-foreground">Web Application</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Healthcare UX</Badge>
            <Badge variant="secondary">Electronic Health Records</Badge>
            <Badge variant="secondary">Workflow Design</Badge>
            <Badge variant="secondary">HIPAA Compliance</Badge>
            <Badge variant="secondary">Clinical Research</Badge>
          </div>
        </div>

        {/* Problem and Goal Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Healthcare providers were spending excessive time on administrative tasks, struggling with fragmented systems, and experiencing provider burnout due to inefficient workflows and poor user experiences in existing EHR systems.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Goal</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Create an intuitive provider portal that consolidates patient information, streamlines clinical workflows, and reduces administrative burden while maintaining strict HIPAA compliance and security standards.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">Provider Pain Points</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Fragmented patient information across systems
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Time-consuming documentation processes
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Difficulty accessing patient history quickly
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Poor care coordination between specialists
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">System Issues</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Legacy EHR systems with poor usability
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Lack of mobile accessibility
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Inconsistent user interfaces
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Limited interoperability between systems
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">1. Clinical Research & Discovery</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <CardHeader className="p-0 pb-4">
                <h3 className="font-semibold">Clinical Research</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">18 Provider Interviews</p>
                      <p className="text-sm text-muted-foreground">Physicians, nurses, specialists</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Workflow Observations</p>
                      <p className="text-sm text-muted-foreground">Clinical environment shadowing</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0 pb-4">
                <h3 className="font-semibold">Key Insights</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-3">
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      "I spend more time clicking through screens than I do talking to patients."
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      "The most important information should be visible without scrolling or clicking."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">2. Clinical-First Design Solution</h2>
          
          <h4 className="text-xl font-semibold mb-4">Unified Patient Dashboard</h4>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Designed a comprehensive portal that consolidates patient information, streamlines clinical workflows, and provides intelligent alerts to support better patient care decisions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Core Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="text-sm">Unified patient record view</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <span className="text-sm">Clinical decision support tools</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <span className="text-sm">Secure provider messaging</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <span className="text-sm">Care analytics and reporting</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Clinical Impact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">50% reduction in documentation time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">35% improvement in care coordination</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">40% faster patient information access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">25% increase in provider satisfaction</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">50%</div>
                <div className="text-sm text-muted-foreground">Documentation Time Saved</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">35%</div>
                <div className="text-sm text-muted-foreground">Better Care Coordination</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Faster Information Access</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <div className="text-sm text-muted-foreground">Provider Satisfaction Increase</div>
              </CardContent>
            </Card>
          </div>

          <Card className="p-8 bg-secondary/50">
            <CardContent className="p-0">
              <h3 className="font-semibold mb-4">Key Learnings</h3>
              <p className="text-muted-foreground leading-relaxed">
                Working in healthcare taught me the critical importance of understanding complex clinical workflows and regulatory requirements. Every design decision had to balance usability with patient safety and HIPAA compliance. The key was involving healthcare professionals throughout the design process to ensure the solution truly supported their work.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}