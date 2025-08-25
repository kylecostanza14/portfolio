import image_b105dd2eb066d740b2cd8661e44f17da2b18eb78 from 'figma:asset/b105dd2eb066d740b2cd8661e44f17da2b18eb78.png';
import image_0aef5cab9b1798ca2f468c5453cc9cc390178437 from 'figma:asset/0aef5cab9b1798ca2f468c5453cc9cc390178437.png';
import image_b632b7796311b981f7a55e413eb000207fcb269e from 'figma:asset/b632b7796311b981f7a55e413eb000207fcb269e.png';
import image_3f5e6ecb1af4c6540e2d81cfedf3ee12b5a2473a from 'figma:asset/3f5e6ecb1af4c6540e2d81cfedf3ee12b5a2473a.png';
import image_74a740d95656c3885a35ed1777aeba0c6e56ef2f from 'figma:asset/74a740d95656c3885a35ed1777aeba0c6e56ef2f.png';
import image_04f03235e0aa2a267bae7733036a64cb512c7937 from 'figma:asset/04f03235e0aa2a267bae7733036a64cb512c7937.png';
import image_0aa51e71c11ca1acc9a7b6f41fe8479b5f260b1b from 'figma:asset/0aa51e71c11ca1acc9a7b6f41fe8479b5f260b1b.png';
import image_5fee4a40bbac29c432f1eb29b2d2704c193fd1f5 from 'figma:asset/5fee4a40bbac29c432f1eb29b2d2704c193fd1f5.png';
import image_f124c1ac7919d1dddd1523ef988d09e14ee4961f from 'figma:asset/f124c1ac7919d1dddd1523ef988d09e14ee4961f.png';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Clock, Users, Target, TrendingUp, CheckCircle, ArrowRight, Star, Eye, MessageSquare, BarChart3, Zap, Shield, User } from 'lucide-react';

interface BulkServicePageProps {
  onBack: () => void;
}

export function BulkServicePage({ onBack }: BulkServicePageProps) {
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
          <h1 className="text-5xl font-bold mb-6">Bulk Service at Hilton</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Streamlined corporate users' workflows by improving efficiency and standardization while enabling Hilton Hotels to scale the Add-ons program globally.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Deliverable</span>
              </div>
              <p className="text-muted-foreground">Requirements Gathering, Research, Ideation, & Design Comps</p>
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
              <p className="text-muted-foreground">Responsive Web Application</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">UX Research</Badge>
            <Badge variant="secondary">Interaction Design</Badge>
            <Badge variant="secondary">Prototyping</Badge>
            <Badge variant="secondary">Usability Testing</Badge>
            <Badge variant="secondary">Enterprise UX</Badge>
          </div>
        </div>

        {/* Problem and Goal Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Before the Bulk Service Project, Hilton corporate users managed the Add-ons program one hotel at a time due to a lack of standardization. Simple updates to align with brand or regional standards took months to implement.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Goal</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Design a streamlined solution that enables corporate users to manage and execute large-scale updates across multiple hotel properties, supporting the global scale-up of the Add-ons program.
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <ImageWithFallback
              src={image_f124c1ac7919d1dddd1523ef988d09e14ee4961f}
              alt="Modern hotel management dashboard interface"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">Pain Points Identified</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Time-consuming individual property updates
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    High error rates due to manual processes
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Lack of standardization across regions
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    No progress tracking for bulk operations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">Business Impact</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Inability to scale globally
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Increased operational costs
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Delayed program rollouts
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    Inconsistent guest experiences
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Opportunity Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">The Opportunity</h2>
          <div>
            <p className="text-lg leading-relaxed mb-6 text-left">
              By creating a comprehensive bulk service system, we could transform Hilton's operational efficiency and enable true global scalability for their add-ons program. These workflows can now be applied across other programs within Prodigy to scale operations more broadly.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Efficiency</h3>
                <p className="text-sm text-muted-foreground">Reduce manual work</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Accuracy</h3>
                <p className="text-sm text-muted-foreground">Minimize errors through automation</p>
              </div>
              <div className="text-center">
                <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Scalability</h3>
                <p className="text-sm text-muted-foreground">Enable global program expansion</p>
              </div>
            </div>
          </div>
        </section>

        {/* User Research Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">1. Research</h2>
          
          <h4 className="text-xl font-semibold mb-4">Competitive Analysis</h4>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            For larger projects, I begin by researching and analyzing how comparable applications manage similar processes to help inform and guide my design direction.
          </p>
          
          <div className="mb-8">
            <h5 className="font-semibold mb-4">Notable Takeaways</h5>
            <hr className="border-t border-border mb-4" />
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                The majority of competitors leveraged bulk processing as a feature within a product.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Competitors are more contextual to the outcome vs Hilton's vision.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Competitors process is simple and straightforward.
              </li>
            </ul>
            
            <div className="mt-6">
              <ImageWithFallback
                src={image_5fee4a40bbac29c432f1eb29b2d2704c193fd1f5}
                alt="Competitive analysis interface comparison showing multiple application interfaces"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

        </section>

        {/* Design Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">2. Design Process</h2>
          
          <h4 className="text-xl font-semibold mb-4">User Flows</h4>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The Bulk Service must go through an approval process to run the job. This means the setup of an approval group must be complete first before a job request is submitted. Otherwise, the job might fail due to a lack of person(s) to approve the request.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            User Flow: Setup Approver Group → Create Bulk Request → Approver Request in Bulk Manager.
          </p>
          
          <div className="mb-8">
            <ImageWithFallback
              src={image_0aa51e71c11ca1acc9a7b6f41fe8479b5f260b1b}
              alt="User flow diagram showing the approval process workflow from setup to execution"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Wireframes Section */}
        <section className="mb-16">
          <h4 className="text-xl font-semibold mb-4">Wireframes</h4>
          <div className="mb-8">
            <ImageWithFallback
              src={image_04f03235e0aa2a267bae7733036a64cb512c7937}
              alt="Wireframes showing the bulk service interface design structure and layout"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">3. User Research</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            A comprehensive bulk service system that streamlines hotel add-on management through intelligent automation, batch processing, and standardized workflows.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <CardHeader className="p-0 pb-4">
                <h3 className="font-semibold">Generative research</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Moderated Study</p>
                      <p className="text-sm text-muted-foreground">7 Participants</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium"> Participants</p>
                      <p className="text-sm text-muted-foreground">Global Distribution Management Team (GDM)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Goal</p>
                      <p className="text-sm text-muted-foreground">Understand current state of attributes for capabilities across Hilton ecosystems.</p>
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
                      "I would only want to see my own individual stuff because I would get confused. Maybe if there was like a filter to see just my name?"
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      "Regional standards should have a place that they can be housed, built from or compared against."
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      "I like to see things in a spreadsheet format in my head. It's how my brain works."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Research Images */}
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback
                src={image_3f5e6ecb1af4c6540e2d81cfedf3ee12b5a2473a}
                alt="UX research wireframes and sketches"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback
                src={image_74a740d95656c3885a35ed1777aeba0c6e56ef2f}
                alt="User interface design mockups"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback
                src={image_b632b7796311b981f7a55e413eb000207fcb269e}
                alt="User testing session documentation"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback
                src={image_0aef5cab9b1798ca2f468c5453cc9cc390178437}
                alt="Design prototypes and iterations"
                className="w-full h-auto"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">4. Feedback to implementation</h2>
          
          <h4 className="text-xl font-semibold mb-4">Bulk Manager</h4>
          <p className="text-muted-foreground mb-8 leading-relaxed font-normal">
            Reduced time on task, & Increased overall workflow efficiency.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            When the Bulk Manager loads, a search is executed using the user's ID. This helps the GDM team manage their bulk tasks more efficiently.
          </p>
          
          <div className="mb-8">
            <ImageWithFallback
              src={image_b105dd2eb066d740b2cd8661e44f17da2b18eb78}
              alt="Bulk Manager interface showing improved workflow efficiency"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <h4 className="text-xl font-semibold mb-4">Bulk Templates</h4>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Reduced time on task, Ensured clean and consistent data, & Increased overall workflow efficiency.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Templates help the GDM team establish standardization and consistency across regions while improving efficiency in the bulk request process.
          </p>
          
          <div className="mb-8">
            <ImageWithFallback
              src={image_0aef5cab9b1798ca2f468c5453cc9cc390178437}
              alt="Bulk Templates interface showing standardized template creation and management"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Core Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Bulk selection and filtering</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Template-based configurations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Real-time progress tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Intelligent error handling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Approval workflows</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Audit trail and rollback</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">User Experience Improvements</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">95% reduction in task completion time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">Intuitive interface requiring minimal training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">Clear progress visibility and feedback</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">Consistent experience across regions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">Mobile-responsive design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">Contextual help and guidance</span>
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
                <div className="text-3xl font-bold text-primary mb-2">82,000+</div>
                <div className="text-sm text-muted-foreground">Hotels Updated</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">20,506</div>
                <div className="text-sm text-muted-foreground">Hours Saved</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">User Satisfaction</div>
              </CardContent>
            </Card>
          </div>

          <Card className="p-8 bg-secondary/50">
            <CardContent className="p-0">
              <h3 className="font-semibold mb-4">Business Impact</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The bulk service system has fundamentally transformed Hilton's operational efficiency, enabling global scalability while maintaining quality and consistency across all properties.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Operational Benefits</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Enabled global program rollouts</li>
                    <li>• Standardized processes across regions</li>
                    <li>• Reduced training requirements by 60%</li>
                    <li>• Improved compliance and audit capabilities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Strategic Benefits</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Accelerated time-to-market for new programs</li>
                    <li>• Enhanced guest experience consistency</li>
                    <li>• Improved competitive positioning</li>
                    <li>• Scalable foundation for future growth</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Learnings Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Enterprise Scale Requires Different Thinking</h3>
                    <p className="text-muted-foreground">Designing for thousands of properties simultaneously taught me the importance of robust error handling, progress tracking, and rollback capabilities that aren't typically needed in smaller applications.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">User Mental Models Shape Interface Design</h3>
                    <p className="text-muted-foreground">The spreadsheet-style interface resonated with users because it matched their existing mental model of bulk data operations, proving that familiar patterns can accelerate adoption.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Standardization Enables Scale</h3>
                    <p className="text-muted-foreground">Creating templates and standardized workflows was crucial for ensuring consistency across global operations while reducing the cognitive load on individual users.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}