export type TeacherStatus = 'Activo' | 'Pendiente' | 'Inactivo';

export interface Teacher {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  mainSubject: string;
  employeeId: string;
  status: TeacherStatus;
}

export interface TeacherStats {
  total: number;
  active: number;
  pending: number;
}
