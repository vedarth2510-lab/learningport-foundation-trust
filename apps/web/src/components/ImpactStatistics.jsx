
import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, MapPin, Award } from 'lucide-react';
import ImpactStatCard from './ImpactStatCard';

const iconMap = {
  GraduationCap,
  Users,
  MapPin,
  Award
};

function ImpactStatistics() {
  const [stats, setStats] = useState([
    {
      icon: GraduationCap,
      value: '2,847',
      label: 'Students Trained',
      description: 'Across various skill development programs',
    },
    {
      icon: Users,
      value: '1,234',
      label: 'Women Supported',
      description: 'Through empowerment initiatives',
    },
    {
      icon: MapPin,
      value: '47',
      label: 'Villages Reached',
      description: 'In rural Karnataka',
    },
    {
      icon: Award,
      value: '892',
      label: 'Scholarships Provided',
      description: 'For deserving students',
    },
  ]);

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map(item => ({
            icon: iconMap[item.icon] || GraduationCap,
            value: item.value,
            label: item.label,
            description: item.description
          }));
          setStats(mapped);
        }
      })
      .catch(err => console.log('Using static stats fallback', err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <ImpactStatCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
}

export default ImpactStatistics;
