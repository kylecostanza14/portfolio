import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Clock, Users, Target, TrendingUp, CheckCircle, ArrowRight, Star, Eye, MessageSquare, BarChart3, Zap, Shield, User, Smartphone, Lock, Fingerprint } from 'lucide-react';

interface MobileBankingSecurityPageProps {
  onBack: () => void;
}

export function MobileBankingSecurityPage({ onBack }: MobileBankingSecurityPageProps) {
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
          <h1 className="text-5xl font-bold mb-6">Mobile Banking Security Enhancement</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Enhanced mobile banking security through biometric authentication and intelligent fraud detection while maintaining a frictionless user experience for everyday banking tasks.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Timeline</span>
              </div>
              <p className="text-muted-foreground">16 Weeks</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">My Role</span>
              </div>
              <p className="text-muted-foreground">Senior UX Designer</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Platform</span>
              </div>
              <p className="text-muted-foreground">iOS & Android</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Security UX</Badge>
            <Badge variant="secondary">Biometric Design</Badge>
            <Badge variant="secondary">Mobile UX</Badge>
            <Badge variant="secondary">User Research</Badge>
            <Badge variant="secondary">Financial Services</Badge>
          </div>
        </div>

        {/* Problem and Goal Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rising mobile banking fraud incidents required enhanced security measures, but traditional security implementations created friction that drove customers away from mobile banking services.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Goal</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Design advanced security features that protect customers from fraud while maintaining the convenience and speed that makes mobile banking appealing for daily financial tasks.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">Security Challenges</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    15% increase in mobile fraud attempts
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Complex password requirements causing abandonment
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    SMS-based 2FA vulnerable to SIM swapping
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Lengthy authentication flows
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">User Experience Issues</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    25% of users abandoned mobile banking setup
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Frequent authentication timeouts
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Confusion about security features
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Low adoption of security features
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">1. Security & UX Research</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <CardHeader className="p-0 pb-4">
                <h3 className="font-semibold">User Research</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">25 Customer Interviews</p>
                      <p className="text-sm text-muted-foreground">Active mobile banking users</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Security Analysis</p>
                      <p className="text-sm text-muted-foreground">Fraud pattern analysis</p>
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
                      "I want my banking to be secure, but I also need to check my balance quickly."
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      "Biometrics feel more secure than passwords, and they're definitely faster."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">2. Enhanced Security Design</h2>
          
          <h4 className="text-xl font-semibold mb-4">Intelligent Biometric Authentication</h4>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Implemented adaptive security that adjusts authentication requirements based on risk assessment, user behavior patterns, and transaction types.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Security Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Fingerprint className="w-5 h-5 text-primary" />
                    <span className="text-sm">Multi-modal biometric authentication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-primary" />
                    <span className="text-sm">Behavioral fraud detection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-primary" />
                    <span className="text-sm">Risk-based authentication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm">Transaction monitoring alerts</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Impact Metrics</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">80% reduction in fraud incidents</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">60% faster authentication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">40% increase in mobile adoption</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">95% user satisfaction with security</span>
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
                <div className="text-3xl font-bold text-primary mb-2">80%</div>
                <div className="text-sm text-muted-foreground">Reduction in Fraud</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <div className="text-sm text-muted-foreground">Faster Authentication</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Mobile Adoption Increase</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Security Satisfaction</div>
              </CardContent>
            </Card>
          </div>

          <Card className="p-8 bg-secondary/50">
            <CardContent className="p-0">
              <h3 className="font-semibold mb-4">Key Learnings</h3>
              <p className="text-muted-foreground leading-relaxed">
                This project proved that security and usability don't have to be at odds. By implementing intelligent, adaptive security measures and prioritizing user education, we created a solution that actually improved both security and user experience simultaneously.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}