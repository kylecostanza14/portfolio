import image_9ae820c7495cb9ef48f9be67be2054a9ac386f08 from 'figma:asset/9ae820c7495cb9ef48f9be67be2054a9ac386f08.png';
import image_8abd06550c98bb4fe9da6b5bac8d21411c6d17dc from 'figma:asset/8abd06550c98bb4fe9da6b5bac8d21411c6d17dc.png';
import image_c668073e542aadb4869a7c641ee51b82eb2b1dd8 from 'figma:asset/c668073e542aadb4869a7c641ee51b82eb2b1dd8.png';
import image_6ac078fdd9250699185db18409b52efe9dca9eb4 from 'figma:asset/6ac078fdd9250699185db18409b52efe9dca9eb4.png';
import image_a7a982e25952a076f32226bc8ab345dd427fb3ff from 'figma:asset/a7a982e25952a076f32226bc8ab345dd427fb3ff.png';
import image_35ddaccadf85c696fd9d9910ce2f8cf624420497 from 'figma:asset/35ddaccadf85c696fd9d9910ce2f8cf624420497.png';
import image_28d2f48c68fe66f6d3f1c0c01818d4184f359813 from 'figma:asset/28d2f48c68fe66f6d3f1c0c01818d4184f359813.png';
import image_9d98009ee63e64340a420a2066a08008dcf4403f from 'figma:asset/9d98009ee63e64340a420a2066a08008dcf4403f.png';
import image_9e2b784581ee838d48db7f4bd4f744e1f5370748 from 'figma:asset/9e2b784581ee838d48db7f4bd4f744e1f5370748.png';
import image_dcd5ae19f952ef933fc95e90916a726c14cea462 from 'figma:asset/dcd5ae19f952ef933fc95e90916a726c14cea462.png';
import image_f819f6a8583288fd7196995656d069ddb77cca3c from 'figma:asset/f819f6a8583288fd7196995656d069ddb77cca3c.png';
import image_5fee4a40bbac29c432f1eb29b2d2704c193fd1f5 from 'figma:asset/5fee4a40bbac29c432f1eb29b2d2704c193fd1f5.png';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Clock, Users, Target, TrendingUp, CheckCircle, ArrowRight, Star, Eye, MessageSquare, BarChart3, Zap, Shield, User, Home, Search, Heart } from 'lucide-react';
import image_f124c1ac7919d1dddd1523ef988d09e14ee4961f from '../assets/image_f124c1ac7919d1dddd1523ef988d09e14ee4961f.png';

interface CompassClientHomePageProps {
  onBack: () => void;
}

export function CompassClientHomePage({ onBack }: CompassClientHomePageProps) {
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
          <h1 className="text-5xl font-bold mb-6">Client Home at Compass Real Estate</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Redesigned the client home dashboard to improve property discovery and enhance the relationship between real estate agents and their clients through personalized experiences.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Deliverable</span>
              </div>
              <p className="text-muted-foreground">Competitive Analysis, Wireframes, Prototypes, Final Comps</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">My Role</span>
              </div>
              <p className="text-muted-foreground">Senior Product Designer</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Platform</span>
              </div>
              <p className="text-muted-foreground">iOS, Android & Responsive Web</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            <Badge variant="secondary">0-1</Badge>
            <Badge variant="secondary">Listing Card Redesign</Badge>
            <Badge variant="secondary">The Feed</Badge>
            <Badge variant="secondary">Prototyping</Badge>
            <Badge variant="secondary">Native App & Responsive Web</Badge>
          </div>
        </div>

        {/* Problem Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Problem</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Compass clients struggled to efficiently browse and track properties of interest. The existing client portal lacked personalization and made it difficult for agents to understand client preferences and engagement patterns.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Goal</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Create an intuitive, personalized client home experience that facilitates property discovery, improves client-agent communication, and provides valuable insights into client behavior and preferences.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop"
                alt="Real estate client and agent collaboration challenges"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

      
        {/* Fragmented Experiences Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Fragmented Experiences</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">1. Saved Items</h3>
                <p className="space-y-2 text-muted-foreground flex items-start gap-2">
                 "Collections," "Saved Searches," and "Saved Buildings" can be created by either a client or an agent. The available collaborative features and visibility depend on who creates the space.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">2. Device Misalignment</h3>
                <p className="space-y-2 text-muted-foreground flex items-start gap-2">
                 One of the biggest friction points is the transition from a native iOS or Android experience to desktop, due to inconsistent navigation, labeling, and organization of information.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">3. Content</h3>
                <p className="space-y-2 text-muted-foreground flex items-start gap-2">
                  There is significant inconsistency in how we communicate with clients and agents across different devices and products.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mb-8">
            <ImageWithFallback
              src={image_f819f6a8583288fd7196995656d069ddb77cca3c}
              alt="User testing session with real estate agents and clients"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Discovery & Research Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">1. Discovery & Research</h2>
          <h4 className="text-xl font-semibold mb-2">Competitive Analysis</h4>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            Following the initial kickoff, my first design artifact was a competitive analysis, which Compass refers to as LFR: Learn From Reality. This research offered valuable insight into how direct and indirect competitors approached similar experiences. The full list is seen here: Redfin, Zillow, Realator.com, StreetEasy, Opendoor, Homesnap, Trullia, Real scout, Home Depot, Disney & Airbnb
          </p>
          
          <div className="mb-8">
            <h5 className="font-semibold mb-4">Notable Takeaways</h5>
            <hr className="border-t border-border mb-4" />
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Competitors have similar overall structure, features, and services provided of current Compass experience.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                There is some nuance on content & labeling.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Opportunity to shake up the market with a new approach.
              </li>
            </ul>
            
            <div className="mt-3">
              <ImageWithFallback
                src={image_9e2b784581ee838d48db7f4bd4f744e1f5370748}
                alt="Competitive analysis interface comparison showing multiple application interfaces"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          <h4 className="text-xl font-semibold mb-2 mt-12 pt-[24px] pr-[0px] pb-[0px] pl-[0px]">Jobs to be Done</h4>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            Leveraging previous research, the buy-side team held a design session to update "Jobs to be Done" artifact which led into the prioritization and strategy behind what the Client Home would be for MVP (milestone 0).
          </p>
          <div className="mt-4">
              <ImageWithFallback
                src={image_dcd5ae19f952ef933fc95e90916a726c14cea462}
                alt="Jobs to be Done"
                className="w-full h-auto rounded-lg shadow-lg"
              />
          </div>
          <h4 className="text-xl font-semibold mb-2 mt-12 pt-[24px] pr-[0px] pb-[0px] pl-[0px]">Project Scope</h4>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            I ran a design session with my team to determine what was in scope for the project to set expectations for our MVP.
          </p>
          <div className="mt-4">
              <ImageWithFallback
                src={image_35ddaccadf85c696fd9d9910ce2f8cf624420497}
                alt="project scope"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
        </section>

        {/* Design Exploration Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">2. Design Exploration</h2>
          <div className="mt-6 mb-8">
              <ImageWithFallback
                src={image_c668073e542aadb4869a7c641ee51b82eb2b1dd8}
                alt="flow"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          <h4 className="text-xl font-semibold mb-2">Sketching</h4>
          <div className="mb-8">
            <h5 className="font-semibold mb-4">Questions to Explore</h5>
            <hr className="border-t border-border mb-4" />
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Should "client home" and "feed" be separate or integrated experiences?
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                How will clients know what thier daily tasks are and how to complete them? What if they don't engage?
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                What if the "feed" becomes stale? Who and how should we engage to refine home search changes?
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                How will the existing products like Saved Searches and favorites function alongside client home?
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                What does the favorite home refinement process look like?
              </li>
            </ul>
           <div className="mt-6">
              <ImageWithFallback
                src={image_9d98009ee63e64340a420a2066a08008dcf4403f}
                alt="sketching"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <h4 className="text-xl font-semibold mb-2 pt-[24px] pr-[0px] pb-[0px] pl-[0px]">Wireframes</h4> 
          <div className="mb-8">
            <h5 className="font-semibold mb-4">Questions to Explore</h5>
            <hr className="border-t border-border mb-4" />
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                How should the "feed" function?
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                How do we handle 'maybes', items that only partially meet the criteria?
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Is the feed a widget inside client home or its own product in the nav
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                How can clients efficiently access tour notes for review?
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                How do we inform what is most important tasks to be done?
              </li>
            </ul>
            <div className="mt-6">
              <ImageWithFallback
                src={image_28d2f48c68fe66f6d3f1c0c01818d4184f359813}
                alt="wireframes"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* User Research Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">3. User Research</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            In the first round of testing, the 'Client Home' and 'Feed' were visibly separate products; each had their own place within the navigation. The hypothesis was that these products had their separate work streams, finding it easier to manage their home search activities.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="p-6">
              <CardHeader className="p-0 pb-4">
                <h3 className="font-semibold">Moderated User Research</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Generative Research</p>
                      <p className="text-sm text-muted-foreground">Exploring user needs, validate assumptions and reduce risk.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">8 Interviews</p>
                      <p className="text-sm text-muted-foreground">6 Clients and 2 Agents</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:col-span-2">
              <CardHeader className="p-0 pb-4">
                <h3 className="font-semibold">Key Insights</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-3">
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      1. Users saw Client Home as a straightforward summary of their home search that met expectations. The proposed experience was well received, with participants rating it equal to or better than competitor apps.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      2. Participants were unclear about the 'Feed,' mistaking it for all or saved listings. It wasn't clearly differentiated from Client Home nor the notification that led them to the 'feed'.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      3. Listing card triage options were generally sufficient. Some participants wanted a 'maybe' option to aid decision-making, while others used a two step process, first filtering out 'no' listings and then ranking the rest, making 'maybe' unnecessary.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      4. In-app communication was once again viewed as especially valuable and a key differentiator.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mb-8">
            <ImageWithFallback
              src={image_a7a982e25952a076f32226bc8ab345dd427fb3ff}
              alt="User testing session round one"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Research/Pivot Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">4. MVP Pivot</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The previously agreed upon solution for MVP (M0) doesn't scale for multiple transactions or align with industry standards. I proposed an updated IA structure to the Mobile team that would better fit users' needs and scalability.
          </p>
         <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">1. Multiple Transactions</h3>
                <p className="space-y-2 text-muted-foreground flex items-start gap-2">
                 For clients working with multiple agents or buying and selling multiple properties simultaneously, the Client Home must account for these scenarios.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">2. 'Saved' in Navigation</h3>
                <p className="space-y-2 text-muted-foreground flex items-start gap-2">
                 Due to a large number of agents still using 'Collections' within 'Saved' and engineering needing a significant amount of time to sunset it properly, 'Saved' will be maintained for MVP.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">3. Agent Connection Experience</h3>
                <p className="space-y-2 text-muted-foreground flex items-start gap-2">
                  The proposal for greater transparency around data ownership in agent-client connections was acknowledged, but priorities remain focused on agent needs.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mb-8">
            <ImageWithFallback
              src={image_8abd06550c98bb4fe9da6b5bac8d21411c6d17dc}
              alt="IA"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
         {/* Research 2 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">5. User Research</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            After the initial round of testing that surfaced great user feedback along with stakeholder input, Client Home has become an all-inclusive task-oriented atmosphere. The image below is the iteration from the previous tested design.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="p-6">
              <CardHeader className="p-0 pb-4">
                <h3 className="font-semibold">Moderated User Research</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Generative Research</p>
                      <p className="text-sm text-muted-foreground">Exploring user needs, validate assumptions and reduce risk.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">10 Interviews</p>
                      <p className="text-sm text-muted-foreground">10 Clients familiar with Compass</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:col-span-2">
              <CardHeader className="p-0 pb-4">
                <h3 className="font-semibold">Key Insights</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-3">
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      1. The new proposed combined Client Home & feed experience was better received than last round of testing.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      2. Participants questioned the redundancy between the 'Saved' section and parts of the 'Home' experience.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      3. The majority of test subjects pointed out the agent branding and was well received. It brings in a more personalized experience where my agent is always there to help when I need him/her.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      4. Positive feedback around in-app communication and 2-step triaging came up again.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mb-8">
            <ImageWithFallback
              src={image_9ae820c7495cb9ef48f9be67be2054a9ac386f08}
              alt="User testing session round one"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Solution</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
             The goal of creating a space where clients and agents can easily collaborate, stay aligned, and find their dream home is one step closer with the Client Home phase one implementation. You can reference the images below of what I created for the buy-side Client Home journey. 
            Another project that I worked on and is directly tied to the Client Home is the Listing Feed. Please go to this project and see the iteration of the buy-side improvements for the Client Home phase three.
          </p>
          <div className="mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop"
              alt="Final"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop"
              alt="Final"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop"
              alt="Final"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>
    </div>
  );
}