"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Lock, Phone, Eye, EyeOff, ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/shared/components/ui/button";
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/shared/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "@/shared/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Spinner } from "@/shared/components/ui/spinner";

import {
  registrationSchema,
  RegistrationFormValues,
} from "../schemas/registration.schema";
import { registrationService } from "../services/registration.service";
import { PasswordStrengthMeter } from "./password-strength-meter";

export function TeacherRegistrationForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema as any),
    defaultValues: {
      fullName: "",
      email: "",
      specialty: "",
      phone: "",
      password: "",
      terms: false,
    },
  });

  const passwordValue = watch("password");
  const termsValue = watch("terms");

  const onSubmit = async (data: RegistrationFormValues) => {
    setIsPending(true);
    try {
      await registrationService.registerTeacher(data);
      toast.success("¡Registro exitoso!", {
        description: "Su cuenta de profesor ha sido creada correctamente.",
      });
      // Aquí se podría redirigir o mostrar una vista de éxito
    } catch (error: any) {
      toast.error("Error al registrarse", {
        description: error.response?.data?.message || "Ocurrió un error inesperado.",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-5">
        {/* Nombre Completo */}
        <Field>
          <FieldLabel className="font-heading text-xs font-normal tracking-[0.05em] text-label uppercase">
            Nombre Completo
          </FieldLabel>
          <InputGroup className="h-10 rounded-md">
            <InputGroupAddon>
              <User className="size-4 text-muted-foreground/60" />
            </InputGroupAddon>
            <InputGroupInput
              {...register("fullName")}
              placeholder="Ej. Juan Pérez"
              className="text-sm"
            />
          </InputGroup>
          <FieldError errors={[errors.fullName]} />
        </Field>

        {/* Email Institucional */}
        <Field>
          <FieldLabel className="font-heading text-xs font-normal tracking-[0.05em] text-label uppercase">
            Email Institucional
          </FieldLabel>
          <InputGroup className="h-10 rounded-md">
            <InputGroupAddon>
              <Mail className="size-4 text-muted-foreground/60" />
            </InputGroupAddon>
            <InputGroupInput
              {...register("email")}
              type="email"
              placeholder="correo@decolegio.edu.co"
              className="text-sm"
            />
          </InputGroup>
          <FieldError errors={[errors.email]} />
        </Field>

        {/* Especialidad y Teléfono en Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field>
            <FieldLabel className="font-heading text-xs font-normal tracking-[0.05em] text-label uppercase">
              Especialidad
            </FieldLabel>
            <Select onValueChange={(value) => setValue("specialty", value, { shouldValidate: true })}>
              <SelectTrigger className="data-[size=default]:h-10 w-full text-sm rounded-md">
                <SelectValue placeholder="Seleccione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ingles-general">Inglés General</SelectItem>
                <SelectItem value="examenes">Preparación de Exámenes (IELTS/TOEFL)</SelectItem>
                <SelectItem value="negocios">Inglés de Negocios</SelectItem>
                <SelectItem value="kids">Inglés para Niños</SelectItem>
                <SelectItem value="conversacional">Inglés Conversacional</SelectItem>
                <SelectItem value="gramatica">Gramática y Redacción</SelectItem>
              </SelectContent>
            </Select>
            <FieldError errors={[errors.specialty]} />
          </Field>

          <Field>
            <FieldLabel className="font-heading text-xs font-normal tracking-[0.05em] text-label uppercase">
              Teléfono (COL)
            </FieldLabel>
            <InputGroup className="h-10 rounded-md">
              <InputGroupAddon className="bg-muted/10 px-3 border-r h-full">
                <span className="text-xs font-medium text-muted-foreground">+57</span>
              </InputGroupAddon>
              <InputGroupInput
                {...register("phone")}
                placeholder="300 000 0000"
                className="text-sm h-full"
              />
            </InputGroup>
            <FieldError errors={[errors.phone]} />
          </Field>
        </div>

        {/* Contraseña */}
        <Field>
          <FieldLabel className="font-heading text-xs font-normal tracking-[0.05em] text-label uppercase">
            Contraseña
          </FieldLabel>
          <InputGroup className="h-10 rounded-md">
            <InputGroupAddon>
              <Lock className="size-4 text-muted-foreground/60" />
            </InputGroupAddon>
            <InputGroupInput
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="text-sm"
              style={{ WebkitTextSecurity: showPassword ? "none" : "disc" } as React.CSSProperties}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                size="icon-xs"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-foreground/60 hover:text-foreground"
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <PasswordStrengthMeter password={passwordValue} />
          <FieldError errors={[errors.password]} />
        </Field>

        {/* Términos y Condiciones */}
        <div className="flex items-center gap-2 pt-2">
          <Checkbox
            id="terms"
            checked={termsValue}
            onCheckedChange={(checked) => setValue("terms", !!checked, { shouldValidate: true })}
          />
          <label
            htmlFor="terms"
            className="text-xs text-muted-foreground leading-snug cursor-pointer select-none"
          >
            Acepto los{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              términos y condiciones
            </a>{" "}
            de la institución.
          </label>
        </div>
        <FieldError errors={[errors.terms]} />
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full h-11 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-200 group"
      >
        {isPending ? (
          <Spinner className="mr-2 size-4" />
        ) : (
          <>
            Registrarse
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </Button>

      {/* Social Register Placeholder */}
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-muted/60"></span>
        </div>
        <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest">
          <span className="bg-background px-4 text-muted-foreground/60">O registrarse con</span>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        ¿Ya tiene una cuenta?{" "}
        <a href="/auth/login" className="text-primary hover:underline font-semibold">
          Inicie sesión aquí
        </a>
      </p>
    </form>
  );
}
