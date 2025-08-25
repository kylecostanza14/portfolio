import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Clock, Users, Target, TrendingUp, CheckCircle, ArrowRight, Star, Eye, MessageSquare, BarChart3, Zap, Shield, User, Brain, BookOpen, Lightbulb } from 'lucide-react';

interface AILearningPlatformPageProps {
  onBack: () => void;
}

export function AILearningPlatformPage({ onBack }: AILearningPlatformPageProps) {
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
          <h1 className="text-5xl font-bold mb-6">AI-Powered Learning Platform</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Designed an adaptive learning platform that uses AI to personalize educational content, track learning progress, and provide intelligent recommendations for optimal learning outcomes.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Timeline</span>
              </div>
              <p className="text-muted-foreground">14 Weeks</p>
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
              <p className="text-muted-foreground">Web & Mobile</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">AI/ML UX</Badge>
            <Badge variant="secondary">Educational Technology</Badge>
            <Badge variant="secondary">Adaptive Design</Badge>
            <Badge variant="secondary">Learning Analytics</Badge>
            <Badge variant="secondary">Gamification</Badge>
          </div>
        </div>

        {/* Problem and Goal Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Traditional e-learning platforms use a one-size-fits-all approach that doesn't account for individual learning styles, pace, or knowledge gaps, leading to poor engagement and learning outcomes.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Goal</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Create an intelligent learning platform that adapts to each learner's needs, provides personalized learning paths, and uses AI to optimize content delivery for maximum educational impact.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">Learning Challenges</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Low engagement with static content
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Different learning paces not accommodated
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Lack of personalized feedback
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    No adaptive content difficulty
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">Platform Limitations</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Linear learning progression
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Limited analytics on learning effectiveness
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    No knowledge gap identification
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Poor retention tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">1. Educational Research & AI Analysis</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <CardHeader className="p-0 pb-4">
                <h3 className="font-semibold">Learning Research</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">22 Learner Interviews</p>
                      <p className="text-sm text-muted-foreground">Students and professionals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Learning Science Research</p>
                      <p className="text-sm text-muted-foreground">Cognitive load theory analysis</p>
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
                      "I learn better when the system adapts to how quickly I grasp concepts."
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      "I want to see my progress and understand what I need to focus on next."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">2. Adaptive AI Learning Design</h2>
          
          <h4 className="text-xl font-semibold mb-4">Personalized Learning Experience</h4>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Developed an AI-driven platform that continuously adapts content difficulty, recommends personalized learning paths, and provides intelligent insights to optimize each learner's educational journey.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">AI Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-primary" />
                    <span className="text-sm">Adaptive content difficulty engine</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <span className="text-sm">Personalized learning recommendations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <span className="text-sm">Real-time learning analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-sm">Knowledge gap identification</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Learning Outcomes</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">70% improvement in learning retention</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">50% faster skill acquisition</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">85% increase in course completion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">60% higher engagement rates</span>
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
                <div className="text-3xl font-bold text-primary mb-2">70%</div>
                <div className="text-sm text-muted-foreground">Better Learning Retention</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">50%</div>
                <div className="text-sm text-muted-foreground">Faster Skill Acquisition</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Course Completion Increase</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <div className="text-sm text-muted-foreground">Higher Engagement</div>
              </CardContent>
            </Card>
          </div>

          <Card className="p-8 bg-secondary/50">
            <CardContent className="p-0">
              <h3 className="font-semibold mb-4">Key Learnings</h3>
              <p className="text-muted-foreground leading-relaxed">
                Designing for AI-powered systems required a deep understanding of both machine learning capabilities and human learning psychology. The key was creating transparent AI interactions that felt helpful rather than intrusive, while ensuring the system could effectively adapt to diverse learning styles and preferences.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}