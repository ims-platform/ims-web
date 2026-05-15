'use client';

import * as React from 'react';

import { cn } from '@/shared/lib/utils';

interface PasswordStrengthMeterProps {
  password?: string;
}

export function PasswordStrengthMeter({ password = '' }: PasswordStrengthMeterProps) {
  const getStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 8) strength += 1;
    if (/[A-Z]/.test(pass)) strength += 1;
    if (/[0-9]/.test(pass)) strength += 1;
    if (/[^A-Za-z0-9]/.test(pass)) strength += 1;
    return strength;
  };

  const strength = getStrength(password);

  const levels = [
    { label: 'Muy débil', color: 'bg-destructive/40', text: 'text-destructive' },
    { label: 'Débil', color: 'bg-destructive', text: 'text-destructive' },
    { label: 'Media', color: 'bg-warning', text: 'text-warning' },
    { label: 'Fuerte', color: 'bg-success', text: 'text-success' },
    { label: 'Muy fuerte', color: 'bg-success/80', text: 'text-success' },
  ];

  const currentLevel = levels[Math.min(strength, levels.length - 1)];

  return (
    <div className="mt-2 space-y-1">
      <div className="flex h-1 gap-1">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={cn(
              'h-full flex-1 rounded-full transition-colors duration-300',
              i < strength ? currentLevel.color : 'bg-muted',
            )}
          />
        ))}
      </div>
      <div className="text-xxs flex justify-between font-medium tracking-wider uppercase">
        <span className={cn('transition-colors', password ? currentLevel.text : 'text-muted-foreground')}>
          {password ? `Contraseña ${currentLevel.label}` : 'Introduce una contraseña'}
        </span>
        <span className="text-muted-foreground">Mín. 8 caracteres</span>
      </div>
    </div>
  );
}
