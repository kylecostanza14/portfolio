import image_18ae11d0dd4f9c552005fafa9c9df3d6f458492a from 'figma:asset/18ae11d0dd4f9c552005fafa9c9df3d6f458492a.png';
import image_70755e7ca00e9476a472b43e279e83cebcb696d1 from 'figma:asset/70755e7ca00e9476a472b43e279e83cebcb696d1.png';
import image_f1e40ccae6391e13f5dc838088a04eb82ddbed33 from 'figma:asset/f1e40ccae6391e13f5dc838088a04eb82ddbed33.png';
import image_1b7373c65cd3e489278a1f8aa919f480d4181053 from 'figma:asset/1b7373c65cd3e489278a1f8aa919f480d4181053.png';
import image_1b7373c65cd3e489278a1f8aa919f480d4181053 from 'figma:asset/1b7373c65cd3e489278a1f8aa919f480d4181053.png';
import image_f1e40ccae6391e13f5dc838088a04eb82ddbed33 from 'figma:asset/f1e40ccae6391e13f5dc838088a04eb82ddbed33.png';
import image_7862b610c42b42fb3a49ed476f37ec9e405d80b5 from 'figma:asset/7862b610c42b42fb3a49ed476f37ec9e405d80b5.png';
import image_e076afe16bfedeb43c9ffdbdbcc58d1a1dc4e517 from 'figma:asset/e076afe16bfedeb43c9ffdbdbcc58d1a1dc4e517.png';
import image_dd7b2ee359b3f7ad508c869444a7eae5284a7e68 from 'figma:asset/dd7b2ee359b3f7ad508c869444a7eae5284a7e68.png';
import image_3eb1e932b5a55b5857c9773fd3a11932b1875970 from 'figma:asset/3eb1e932b5a55b5857c9773fd3a11932b1875970.png';
import image_22b3ca37ae7399c1897e201557622b029994a9e9 from 'figma:asset/22b3ca37ae7399c1897e201557622b029994a9e9.png';
import image_3eb1e932b5a55b5857c9773fd3a11932b1875970 from 'figma:asset/3eb1e932b5a55b5857c9773fd3a11932b1875970.png';
import image_f819f6a8583288fd7196995656d069ddb77cca3c from 'figma:asset/f819f6a8583288fd7196995656d069ddb77cca3c.png';
import image_9e2b784581ee838d48db7f4bd4f744e1f5370748 from 'figma:asset/9e2b784581ee838d48db7f4bd4f744e1f5370748.png';
import image_dcd5ae19f952ef933fc95e90916a726c14cea462 from 'figma:asset/dcd5ae19f952ef933fc95e90916a726c14cea462.png';
import image_35ddaccadf85c696fd9d9910ce2f8cf624420497 from 'figma:asset/35ddaccadf85c696fd9d9910ce2f8cf624420497.png';
import image_c668073e542aadb4869a7c641ee51b82eb2b1dd8 from 'figma:asset/c668073e542aadb4869a7c641ee51b82eb2b1dd8.png';
import image_9d98009ee63e64340a420a2066a08008dcf4403f from 'figma:asset/9d98009ee63e64340a420a2066a08008dcf4403f.png';
import image_28d2f48c68fe66f6d3f1c0c01818d4184f359813 from 'figma:asset/28d2f48c68fe66f6d3f1c0c01818d4184f359813.png';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Clock, Users, Target, TrendingUp, CheckCircle, ArrowRight, Star, Eye, MessageSquare, BarChart3, Zap, Shield, User, ShoppingCart, Package, Cpu } from 'lucide-react';

interface ArrowProductDetailPageProps {
  onBack: () => void;
}

export function ArrowProductDetailPage({ onBack }: ArrowProductDetailPageProps) {
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
          <h1 className="text-5xl font-bold mb-6">Product Detail Page at Arrow Electronics</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Redesigned the product detail experience for engineers and procurement professionals to streamline component selection and accelerate purchasing decisions in the electronics industry.
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
              <p className="text-muted-foreground">UX Designer</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Platform</span>
              </div>
              <p className="text-muted-foreground"> Responsive Web Application</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">User Research</Badge>
            <Badge variant="secondary">E-commerce UX</Badge>
            <Badge variant="secondary">Information Architecture</Badge>
            <Badge variant="secondary">Interaction Design</Badge>
            <Badge variant="secondary">B2C & B2B Experience</Badge>
          </div>
        </div>

         {/* Problem Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Problem</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Excessive buying options, poor data organization, and unclear messaging make the PDP experience confusing, contributing to a 71% abandonment rate, despite being one of the most visited pages on Arrow.com.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Goal</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Increased user confidence on the product detail page, reducing time on page, session length, and abandonment rate, while driving higher revenue and average order value (AOV).
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop"
                alt="PDP Final"
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
                <h3 className="font-semibold mb-3">1. Buying Options</h3>
                <p className="space-y-2 text-muted-foreground flex items-start gap-2">
                 The industry standard is to offer a single, streamlined buying option. But Arrow shows multiple options in separate buckets, even including ones that can't be purchased, which is a big miss in e-commerce. It's all based on how the inventory was acquired.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">2. Product Details</h3>
                <p className="space-y-2 text-muted-foreground flex items-start gap-2">
                 The visual hierarchy of the product details places more emphasis on the labels than the data itself. Additionally, the datasheet is visually prominent but difficult for users to interpret.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">3. Above the Fold</h3>
                <p className="space-y-2 text-muted-foreground flex items-start gap-2">
                  The most important information for potential customers is being pushed below the fold because the product details section occupies too much space.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mb-8">
            <ImageWithFallback
              src={image_3eb1e932b5a55b5857c9773fd3a11932b1875970}
              alt="PDP Issues"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
        {/* Buying Example */}
        <section className="mb-16">
          <div className="grid md:grid-cols-8 gap-8 items-start">
            <div className="space-y-6 md:col-span-6">
              <h2 className="text-3xl font-bold">1. Three types of "buy" options.</h2>
              <div>
                <h4 className="text-xl font-semibold mb-2">Competitive Analysis</h4>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                 In this particular example, three different buying journeys are presented to the user: In-stock (Buy), No-Stock (backorder), and Request Quote (call for price), all of which are separate inventories displaying their own data, individual experiences, and design hierarchy. Currently, arrow.com presents all potential buying options, and SKU's to the frontend based on the data coming from the inventory feeds, which is creating confusion, large abandonment rate, and an overall bad experience.
                </p>
                <p className="text-muted-foreground leading-relaxed"> 
                To further confusion, "backorder," and "call for price" CTA's are the same experience, a form sent to customer service. The process is lengthy and convoluted.
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <ImageWithFallback
                src={image_22b3ca37ae7399c1897e201557622b029994a9e9}
                alt="PDP example of buying options"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Discovery & Research Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">1. Discovery & Research</h2>
          <h4 className="text-xl font-semibold mb-2">Competitive Analysis</h4>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            The research phase began with a competitive analysis of other eCommerce component distribution sites, including Digi-Key, Mouser, Avnet, Octopart, Newark Element 14, and Premier Farnell. While these platforms shared similar themes and content, it was important to identify differences in the user experience, particularly in how users purchase and source components.
          </p>
          
          <div className="mb-8">
            <h5 className="font-semibold mb-4">Notable Takeaways</h5>
            <hr className="border-t border-border mb-4" />
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Product Detail Pages should be clean and uncluttered.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Reduce the friction of selecting a product and making a purchase.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Providing the user with the accurate data in order to promote user confidence.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Eliminate all distractions during the sourcing/purchasing process.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Align purchasing journeys across all regions.
              </li>
            </ul>
          
            <div className="mt-3">
              <ImageWithFallback
                src={image_7862b610c42b42fb3a49ed476f37ec9e405d80b5}
                alt="Competitive analysis PDP"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          <h4 className="text-xl font-semibold mb-2 mt-12 pt-[24px] pr-[0px] pb-[0px] pl-[0px]">Buying Scenarios</h4>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            Being tasked to update a purchasing journey can be complicated. As part of my process, I like to diagram all use cases in order to drive a proper strategy and approach under the constraints of the current system and data being fed to the user on the frontend. After validating all use cases, I pulled GA data to provide weight to each use case. This provides the team and stakeholders opportunity for prioritization if time and/or money becomes an issue.
          </p>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            Below are the various purchasing scenarios, along with the various types (request/call & limited stock/potential) of a-typical buying experiences and data supported, which can be due to legacy systems, bad data or business rules. Working with various stakeholders created an understanding of knowledge and paths forward to limit confusing and friction on the frontend.
          </p>
          <div className="mt-4">
              <ImageWithFallback
                src={image_e076afe16bfedeb43c9ffdbdbcc58d1a1dc4e517}
                alt="Buy Scenarios"
                className="w-full h-auto rounded-lg shadow-lg"
              />
          </div>
          <h4 className="text-xl font-semibold mb-2 mt-12 pt-[24px] pr-[0px] pb-[0px] pl-[0px]">Availability Message Codes: Data VS Buying Experience</h4>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            Below is an example of all the message codes that Aegis and Unity, arrow.com’s inventory management system, housed for part and pricing information. Some of which were presented to the frontend and some weren’t. One of the biggest challenges I faced was trying to align the data being fed to the user to create a consistent journey.
          </p>
          <div className="mt-4">
              <ImageWithFallback
                src={image_dd7b2ee359b3f7ad508c869444a7eae5284a7e68}
                alt="Message Codes"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
        </section>

        {/* Design Exploration Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">2. Design Exploration</h2>
          <h4 className="text-xl font-semibold mb-2">Sketching</h4>
          <div className="mb-8">
            <h5 className="font-semibold mb-4">Questions to Explore</h5>
            <hr className="border-t border-border mb-4" />
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                How can I arrange the data to be most effceint to scan and validate?
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                What happens with backorder situations?
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                What is primary vs secondary info?
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Can I reduce the part & datasheet image?
              </li>
            </ul>
            
           <div className="mt-6">
              <ImageWithFallback
                src={image_f1e40ccae6391e13f5dc838088a04eb82ddbed33}
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
        
        {/* Research Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">3. User Research</h2>
          <p className="text-muted-foreground mb-3 leading-relaxed">
          Bringing together business goals and proper UX strategy shaped the iterative MVP approach by creating primary and secondary purchasing experiences. In a 3-phase approach, below is an example of phase 2 of the product detail page implementation on Arrow.com.
          </p>
          <h4 className="text-xl font-semibold mb-2">Un-moderated User Testing </h4>
          <div className="mb-8">
            <h5 className="font-semibold mb-4">Findings</h5>
            <hr className="border-t border-border mb-4" />
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                100% of user found the new Single Buying Options (SBO) purchasing process more intuitive, efficient and effective when purchasing parts.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                1/3 of users were confused whether to click on the packing type checkbox first or enter a quantity in, especially when two packing types were present. Though, once the users were familiar with the purchasing process it became a natural experience.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                When user's landed on a PDP that has both package types, cut strips and reels, 60% of user's do not see reels. Therefore, the user would not see the interactions happening below when adding that package type (reel) to cart in the single buying options section.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                Another behavioral tendency I found interesting was around 50% of our users rendered their attention to the product details/spec table to find answers regarding part specific purchasing information. This could be due to prior expectations, learned behavior from our competitors, and/or unfamiliarity with Arrow.com.
              </li>
            </ul>
            <div className="grid md:grid-cols-2 gap-8 mb-8 pt-[24px] pr-[0px] pb-[0px] pl-[0px]">
            <Card className="p-6">
              <CardHeader className="p-0 pb-4">
                <h3 className="font-semibold">Most Important Info</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-3">
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      Ships out by/delivery date
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      Able to fulfill order
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      Quality (made in America)
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      Description, Category, Specs & Datasheet
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
             <Card className="p-6">
              <CardHeader className="p-0 pb-4">
                <h3 className="font-semibold">Least Important Info</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-3">
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      Date Code
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      Lead time, unless it is backorder scenario
                    </p>
                  </div>
                   <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      Inventory
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-sm text-muted-foreground">
                      Pipeline on 'In Stock' products
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
           <div className="mt-6">
              <ImageWithFallback
                src={image_1b7373c65cd3e489278a1f8aa919f480d4181053}
                alt="user research"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
        
        {/* Phase 1 Solution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">4. MVP Solution</h2>
          <div className="mt-6">
              <ImageWithFallback
                src={image_70755e7ca00e9476a472b43e279e83cebcb696d1}
                alt="mvp solution"
                className="w-full h-auto rounded-lg shadow-lg"
              />
          </div>
        </section>

        {/* Regional Inventory */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">5. Regional Inventory (phase 2)</h2>
          <p className="text-muted-foreground mb-3 leading-relaxed"> 
          In previous research sessions, users indicated that location of inventory served as a direct signal of product quality. I wanted to explore this insight further.
          </p>
          <h4 className="text-xl font-semibold mb-4">User Testing to A/B Test</h4>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I met with 7 users to further validate the perception of quality correlates to location of goods. It was confirmed and would build out two designs to A/B test which performs better.
          </p>
           <div className="mt-6">
              <ImageWithFallback
                src={image_18ae11d0dd4f9c552005fafa9c9df3d6f458492a}
                alt="ab"
                className="w-full h-auto rounded-lg shadow-lg"
              />
          </div> 
        </section>

        {/* Results Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">A/B Test Results</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">Ships by</div>
                <div className="text-sm text-muted-foreground">Winner of A/B test</div>
              </CardContent>
            </Card>
          </div>

          <Card className="p-8 bg-secondary/50">
            <CardContent className="p-0">
              <h3 className="font-semibold mb-4">Key Learnings</h3>
              <p className="text-muted-foreground leading-relaxed">
                This project demonstrated the importance of understanding technical users' specific needs. By prioritizing functionality over aesthetics and focusing on the information engineers actually need, we created a more efficient purchasing experience that benefited both users and the business.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}