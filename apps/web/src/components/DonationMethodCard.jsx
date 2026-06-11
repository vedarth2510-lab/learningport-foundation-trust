
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function DonationMethodCard({ method }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 rounded-2xl">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          {method.icon && (
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <method.icon className="h-6 w-6 text-primary" />
            </div>
          )}
          <CardTitle className="text-xl">{method.name}</CardTitle>
        </div>
        <CardDescription>{method.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-3 mb-6">
          {method.details && (
            <div className="p-4 bg-muted rounded-lg">
              {Object.entries(method.details).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b last:border-b-0">
                  <span className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="text-sm font-mono">{value}</span>
                </div>
              ))}
            </div>
          )}
          {method.instructions && (
            <div className="text-sm leading-relaxed">
              <p className="font-medium mb-2">Instructions:</p>
              <p className="text-muted-foreground">{method.instructions}</p>
            </div>
          )}
        </div>
        {method.action && (
          <div className="mt-auto">
            <Button
              onClick={method.action}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-200 active:scale-[0.98]"
            >
              {method.actionLabel || 'Proceed'}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default DonationMethodCard;
