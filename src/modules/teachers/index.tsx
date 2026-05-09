'use client';

import { useEffect, useState } from 'react';
import { Filter, FileUp, Search, UserPlus } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { TeacherSkeleton } from './components/teacher-skeleton';
import { TeacherStatsCards } from './components/teacher-stats-cards';
import { TeacherTable } from './components/teacher-table';
import { TeacherService } from './services/teacher.service';
import { Teacher, TeacherStats } from './types/teacher.types';

export function TeacherListModule() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [stats, setStats] = useState<TeacherStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [teachersData, statsData] = await Promise.all([
          TeacherService.getTeachers(),
          TeacherService.getStats(),
        ]);
        setTeachers(teachersData);
        setStats(statsData);
      } catch (err) {
        setError('Error al cargar la información de los profesores.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return <TeacherSkeleton />;
  }

  if (error) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <div className="bg-destructive/10 text-destructive rounded-full p-3">
          <Filter className="h-8 w-8" />
        </div>
        <h3 className="font-heading text-xl font-bold">¡Ups! Algo salió mal</h3>
        <p className="text-label max-w-xs">{error}</p>
        <Button onClick={() => window.location.reload()}>Reintentar</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 pb-20">
      {/* Header stats */}
      {stats && <TeacherStatsCards stats={stats} />}

      {/* Filters and Search */}
      <div className="flex flex-col gap-4 border border-border bg-white p-4 rounded-card md:h-[73px] md:flex-row md:items-center md:justify-between md:px-4 md:py-0">
        <div className="relative w-full md:max-w-md">
          <Search className="text-label absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
          <Input 
            placeholder="Buscar profesor por nombre o materia..." 
            className="pl-10 h-10 bg-white border border-border rounded-[4px] focus-visible:ring-primary font-heading text-sm w-full"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button variant="outline" className="flex-1 h-10 gap-2 bg-white border border-border rounded-[4px] hover:bg-muted font-heading text-sm font-medium md:flex-none">
            <Filter className="h-4 w-4" />
            Filtrar
          </Button>
          <Button variant="outline" className="flex-1 h-10 gap-2 bg-white border border-border rounded-[4px] hover:bg-muted font-heading text-sm font-medium md:flex-none">
            <FileUp className="h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Main Table */}
      {teachers.length > 0 ? (
        <TeacherTable teachers={teachers} />
      ) : (
        <div className="flex flex-col items-center justify-center py-20 bg-card rounded-xl border border-dashed shadow-sm">
          <div className="bg-muted p-4 rounded-full mb-4">
            <Search className="h-8 w-8 text-label/30" />
          </div>
          <h3 className="font-heading text-lg font-bold text-foreground">No se encontraron profesores</h3>
          <p className="text-label mt-1">Intenta con otros términos de búsqueda o agrega uno nuevo.</p>
        </div>
      )}

      {/* Floating Action Button */}
      <Button 
        size="icon" 
        className="fixed bottom-8 right-8 h-14 w-14 rounded-2xl shadow-xl shadow-primary/20 transition-transform hover:scale-110 active:scale-95"
      >
        <UserPlus className="h-6 w-6" />
      </Button>
    </div>
  );
}
