'use client';

import * as React from 'react';

import { TeacherRegistrationForm } from '../components/teacher-registration-form';

export function TeacherRegistrationView() {
  return (
    <div className="bg-sidebar flex min-h-screen items-center justify-center p-4 py-12">
      <div className="border-border shadow-primary/5 w-full max-w-[480px] rounded-xl border bg-white p-8 shadow-xl sm:p-10">
        <div className="mb-8 text-center sm:text-left">
          <h1 className="font-heading text-foreground text-2xl font-normal tracking-tight">Registro de Profesores</h1>
          <p className="font-heading text-muted-foreground mt-2 text-sm font-normal">
            Complete los campos para crear su cuenta administrativa.
          </p>
        </div>

        <TeacherRegistrationForm />
      </div>
    </div>
  );
}
