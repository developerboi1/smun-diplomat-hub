import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Scale, Gavel, Megaphone, FileText, Trophy } from 'lucide-react';

const Committees = () => {
  const committees = [
    {
      icon: Users,
      name: 'UN Women',
      agenda: 'Combating Gender-Based Violence in Conflict Zones',
      description: 'Addressing the critical issue of protecting women and girls in areas affected by armed conflict.',
      learningOutcomes: ['Gender equality advocacy', 'International humanitarian law', 'Conflict resolution'],
      recommendedGrades: 'Grades 9-12 & UG',
      difficulty: 'Intermediate',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Scale,
      name: 'UNODC',
      agenda: 'Tackling the Global Drug Crisis',
      description: 'Comprehensive strategies to combat drug trafficking and address its socio-economic impacts.',
      learningOutcomes: ['Criminal justice systems', 'International cooperation', 'Policy development'],
      recommendedGrades: 'Grades 10-12 & UG',
      difficulty: 'Advanced',
      color: 'from-blue-500 to-teal-500',
    },
    {
      icon: Gavel,
      name: 'Lok Sabha',
      agenda: 'Constitutional Reforms in Modern India',
      description: 'Deliberating on crucial constitutional amendments for contemporary Indian democracy.',
      learningOutcomes: ['Indian polity', 'Legislative processes', 'Democratic governance'],
      recommendedGrades: 'Grades 8-12 & UG',
      difficulty: 'Intermediate',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Megaphone,
      name: "Influencers' Summit",
      agenda: 'Digital Responsibility and Social Impact',
      description: 'Revolutionary committee format exploring the role of social media influencers in society.',
      learningOutcomes: ['Digital citizenship', 'Media ethics', 'Social responsibility'],
      recommendedGrades: 'Grades 6-12',
      difficulty: 'Beginner',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FileText,
      name: 'International Press',
      agenda: 'Covering Global Affairs',
      description: 'Experience journalism by reporting on committee proceedings and global events.',
      learningOutcomes: ['Journalistic writing', 'Media analysis', 'Communication skills'],
      recommendedGrades: 'Grades 7-12 & UG',
      difficulty: 'Intermediate',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Trophy,
      name: 'IPL Committee',
      agenda: 'Strategic Management in Sports',
      description: 'Unique crisis committee simulating the high-stakes world of cricket team management.',
      learningOutcomes: ['Strategic thinking', 'Crisis management', 'Sports business'],
      recommendedGrades: 'Grades 8-12 & UG',
      difficulty: 'Advanced',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="committees" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary text-balance">
              Our Committees
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Six diverse committees offering unique perspectives on global challenges and diplomatic solutions
            </p>
          </div>

          {/* Committees Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((committee, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 luxury-shadow hover:glow-shadow overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${committee.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <committee.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge className={getDifficultyColor(committee.difficulty)}>
                      {committee.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-serif text-primary group-hover:text-accent transition-colors duration-300">
                    {committee.name}
                  </CardTitle>
                  <div className="text-sm font-medium text-muted-foreground">
                    {committee.recommendedGrades}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Agenda</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {committee.agenda}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-foreground leading-relaxed">
                      {committee.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Learning Outcomes</h4>
                    <div className="flex flex-wrap gap-2">
                      {committee.learningOutcomes.map((outcome, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {outcome}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Committee Selection Info */}
          <div className="bg-gradient-to-r from-accent/10 to-saffron-50 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-4">
              Committee Allocation
            </h3>
            <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              During registration, you'll be able to select your first and second committee preferences. 
              Our experienced secretariat will ensure optimal allocation based on your interests and experience level.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Beginner Friendly</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Intermediate Level</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Advanced Track</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committees;