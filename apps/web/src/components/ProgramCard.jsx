
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MapPin, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function ProgramCard({ program }) {
  // Map program names to their detail page URLs
  const programUrls = {
    'Cloud Computing Training': '/cloud-computing-training-in-btm-layout',
    'Skill Development Programs': '/skill-development-programs',
    'Women Empowerment Initiatives': '/women-empowerment-initiatives',
    'Rural Student Support': '/rural-student-support',
    'Scholarship Programs': '/scholarship-programs',
    'Digital Literacy Programs': '/digital-literacy-programs',
    'Career Guidance Seminars': '/career-guidance-seminars',
    'Internship & Placement Support': '/internship-placement-support'
  };

  const detailPageUrl = programUrls[program.name];
  const hasDetailPage = !!detailPageUrl;

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden">
      {program.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={program.image}
            alt={program.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {program.category && (
            <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
              {program.category}
            </Badge>
          )}
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{program.name}</CardTitle>
        <CardDescription className="text-sm">{program.objective}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-3 mb-6">
          {program.beneficiaries && (
            <div className="flex items-start space-x-2">
              <Target className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span className="text-sm">{program.beneficiaries}</span>
            </div>
          )}
          {program.location && (
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span className="text-sm">{program.location}</span>
            </div>
          )}
          {program.beneficiaryCount && (
            <div className="flex items-start space-x-2">
              <Users className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span className="text-sm font-medium">{program.beneficiaryCount} beneficiaries</span>
            </div>
          )}
        </div>
        {program.successStory && (
          <div className="mt-auto pt-4 border-t">
            <p className="text-sm italic text-muted-foreground">"{program.successStory}"</p>
          </div>
        )}
        {hasDetailPage && (
          <div className="mt-4">
            <Link to={detailPageUrl}>
              <Button className="w-full" variant="default">
                Learn More
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ProgramCard;
