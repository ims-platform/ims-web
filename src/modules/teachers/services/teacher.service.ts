import { Teacher, TeacherStats } from '../types/teacher.types';

const MOCK_TEACHERS: Teacher[] = [
  {
    id: '1',
    name: 'Dr. Roberto Sánchez',
    email: 'roberto.s@micolegio.edu',
    avatar: 'https://i.pravatar.cc/150?u=1',
    mainSubject: 'Inglés A1',
    employeeId: '#EDU-2045',
    status: 'Activo',
  },
  {
    id: '2',
    name: 'Mtra. Elena Gómez',
    email: 'elena.g@micolegio.edu',
    avatar: 'https://i.pravatar.cc/150?u=2',
    mainSubject: 'Gramática',
    employeeId: '#EDU-3112',
    status: 'Pendiente',
  },
  {
    id: '3',
    name: 'Ing. Carlos Ruiz',
    email: 'carlos@micolegio.edu',
    avatar: 'https://i.pravatar.cc/150?u=3',
    mainSubject: 'Practica oral',
    employeeId: '#EDU-1098',
    status: 'Activo',
  },
  {
    id: '4',
    name: 'Dra. Marta Valls',
    email: 'marta.v@micolegio.edu',
    avatar: 'https://i.pravatar.cc/150?u=4',
    mainSubject: 'Inglés A2',
    employeeId: '#EDU-5521',
    status: 'Activo',
  },
];

export const TeacherService = {
  getTeachers: async (): Promise<Teacher[]> => {
    // Simulating API delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    return MOCK_TEACHERS;
  },

  getStats: async (): Promise<TeacherStats> => {
    return {
      total: 42,
      active: 38,
      pending: 4,
    };
  },
};
