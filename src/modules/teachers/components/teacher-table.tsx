import { MoreVertical } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar';
import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table';
import { Teacher } from '../types/teacher.types';

interface Props {
  teachers: Teacher[];
}

export function TeacherTable({ teachers }: Props) {
  return (
    <div className="rounded-card border bg-white">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-none h-11 bg-sidebar">
            <TableHead className="text-label font-heading text-xs font-semibold uppercase tracking-wider pl-6">Docente</TableHead>
            <TableHead className="text-label font-heading text-xs font-semibold uppercase tracking-wider text-center">Materia Principal</TableHead>
            <TableHead className="text-label font-heading text-xs font-semibold uppercase tracking-wider text-center">ID Empleado</TableHead>
            <TableHead className="text-label font-heading text-xs font-semibold uppercase tracking-wider text-center">Estado</TableHead>
            <TableHead className="text-label font-heading text-xs font-semibold uppercase tracking-wider text-right pr-6">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.id} className="group transition-colors hover:bg-muted/30 border-muted/50">
              <TableCell className="py-4 pl-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarImage src={teacher.avatar} alt={teacher.name} className="rounded-lg" />
                    <AvatarFallback className="rounded-lg font-bold text-xs bg-muted/50 font-heading">{teacher.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-heading text-base font-medium text-foreground">{teacher.name}</span>
                    <span className="font-heading text-label text-sm font-normal">{teacher.email}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Badge variant="secondary" className="bg-subject-badge text-primary border-none w-[121px] h-[26px] font-normal hover:bg-subject-badge-hover rounded-pill font-heading flex items-center justify-center mx-auto text-sm">
                  {teacher.mainSubject}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <div className="bg-data-beige text-warning-accent inline-flex items-center justify-center w-[104px] h-[28px] rounded-xs border border-border font-heading text-sm font-medium">
                  #{teacher.employeeId.replace('#', '')}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className={`
                  inline-flex items-center gap-2 px-3 py-1 rounded-full font-heading text-sm font-medium
                  ${teacher.status === 'Activo' ? 'bg-success/10 text-success-dark' : ''}
                  ${teacher.status === 'Pendiente' ? 'bg-warning/10 text-warning-dark' : ''}
                  ${teacher.status === 'Inactivo' ? 'bg-muted text-label' : ''}
                `}>
                  <div className={`h-1.5 w-1.5 rounded-full ${teacher.status === 'Activo' ? 'bg-success' : teacher.status === 'Pendiente' ? 'bg-warning' : 'bg-label'}`} />
                  {teacher.status}
                </div>
              </TableCell>
              <TableCell className="text-right pr-6">
                <Button variant="ghost" size="icon" className="text-label hover:bg-muted rounded-full">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between border-t p-4 text-sm text-label bg-sidebar rounded-b-card">
        <p>Mostrando <span className="font-medium text-foreground">1-{teachers.length}</span> de <span className="font-medium text-foreground">42</span> profesores</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="h-8 w-8 p-0" disabled>
            &lt;
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            &gt;
          </Button>
        </div>
      </div>
    </div>
  );
}
