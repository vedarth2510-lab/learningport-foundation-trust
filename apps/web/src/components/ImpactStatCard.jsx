
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

function ImpactStatCard({ stat }) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">
          {stat.icon && (
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <stat.icon className="h-7 w-7 text-primary" />
            </div>
          )}
        </div>
        <div className="text-4xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {stat.value}
        </div>
        <p className="text-sm font-medium text-foreground">{stat.label}</p>
        {stat.description && (
          <p className="text-xs text-muted-foreground mt-2">{stat.description}</p>
        )}
      </CardContent>
    </Card>
  );
}

export default ImpactStatCard;
