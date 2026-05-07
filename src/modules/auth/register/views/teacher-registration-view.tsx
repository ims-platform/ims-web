"use client";

import * as React from "react";
import { TeacherRegistrationForm } from "../components/teacher-registration-form";

export function TeacherRegistrationView() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-sidebar p-4 py-12">
      <div className="w-full max-w-[480px] rounded-xl border border-border bg-white p-8 shadow-xl shadow-primary/5 sm:p-10">
        <div className="mb-8 text-center sm:text-left">
          <h1 className="font-heading text-2xl font-normal tracking-tight text-foreground">
            Registro de Profesores
          </h1>
          <p className="mt-2 font-heading text-sm font-normal text-muted-foreground">
            Complete los campos para crear su cuenta administrativa.
          </p>
        </div>

        <TeacherRegistrationForm />
      </div>
    </div>
  );
}
