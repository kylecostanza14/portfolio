import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const skillCategories = [
  {
    title: "Design Tools",
    skills: ["Figma", "Adobe XD", "Sketch", "Adobe Creative Suite", "Principle", "ProtoPie"]
  },
  {
    title: "Research & Strategy",
    skills: ["User Research", "Usability Testing", "Journey Mapping", "Information Architecture", "Service Design"]
  },
  {
    title: "Development",
    skills: ["HTML/CSS", "React", "Tailwind CSS", "Framer Motion", "Design Systems", "Git"]
  },
  {
    title: "Collaboration",
    skills: ["Design Workshops", "Stakeholder Management", "Agile/Scrum", "Cross-functional Teams", "Mentoring"]
  }
];



export function Skills() {
  return (
    <section className="py-12 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I combine design thinking with technical implementation to create user-centered solutions
          </p>
        </div>



        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}