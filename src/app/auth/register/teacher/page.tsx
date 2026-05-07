import { Metadata } from "next";
import { TeacherRegistrationView } from "@/modules/auth/register/views/teacher-registration-view";

export const metadata: Metadata = {
  title: "Registro de Profesor | IMS Platform",
  description: "Crea tu cuenta de profesor en la plataforma IMS para gestionar tus clases e idiomas.",
};

export default function TeacherRegistrationPage() {
  return <TeacherRegistrationView />;
}
