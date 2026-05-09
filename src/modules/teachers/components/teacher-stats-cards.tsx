import { Card, CardContent } from '@/shared/components/ui/card';
import { TeacherStats } from '../types/teacher.types';

interface Props {
  stats: TeacherStats;
}

export function TeacherStatsCards({ stats }: Props) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      <Card className="col-span-2 border border-border bg-white rounded-card md:col-span-2">
        <CardContent className="px-6 py-4">
          <p className="text-label font-heading text-xs font-medium uppercase tracking-wider">Total de docentes</p>
          <h2 className="text-primary font-heading mt-2 text-[30px] font-normal">Personal Académico</h2>
          <div className="mt-6 flex items-end gap-3">
            <div className="bg-data-beige border-border flex h-[62px] w-[76px] items-center justify-center rounded-xs border">
              <span className="text-warning-accent font-heading text-2xl font-medium leading-none text-center">{stats.total}</span>
            </div>
            <span className="text-label font-heading text-sm font-normal pb-2">Miembros activos</span>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 border border-border bg-white rounded-card">
        <CardContent className="px-6 py-4 flex flex-col justify-between h-full">
          <div>
            <p className="text-label font-heading text-xs font-medium uppercase tracking-wider">Estado Activo</p>
            <div className="mt-4">
              <div className="bg-data-beige border-border flex h-[65px] w-full max-w-[260px] items-center justify-start px-4 rounded-xs border">
                <span className="text-warning-accent font-heading text-2xl font-medium leading-none">{stats.active}</span>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-muted h-[2px] w-full rounded-full overflow-hidden">
            <div 
              className="bg-primary h-full rounded-full transition-all duration-1000" 
              style={{ width: `${(stats.active / stats.total) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 border border-border bg-white rounded-card">
        <CardContent className="px-6 py-4 flex flex-col justify-between h-full">
          <div>
            <p className="text-label font-heading text-xs font-medium uppercase tracking-wider">Pendientes</p>
            <div className="mt-4">
              <div className="bg-data-beige border-border flex h-[65px] w-full max-w-[260px] items-center justify-start px-4 rounded-xs border">
                <span className="text-warning-accent font-heading text-2xl font-medium leading-none">{stats.pending.toString().padStart(2, '0')}</span>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-muted h-[2px] w-full rounded-full overflow-hidden">
            <div 
              className="bg-warning-dark h-full rounded-full transition-all duration-1000" 
              style={{ width: `${(stats.pending / stats.total) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
