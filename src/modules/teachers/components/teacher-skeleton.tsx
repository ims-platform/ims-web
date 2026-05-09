import { Skeleton } from '@/shared/components/ui/skeleton';
import { Card, CardContent } from '@/shared/components/ui/card';

export function TeacherSkeleton() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500">
      {/* Stats Skeleton */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        <Card className="col-span-2 border border-border bg-white rounded-card md:col-span-2">
          <CardContent className="px-6 py-4">
            <Skeleton className="h-3 w-24 mb-3" />
            <Skeleton className="h-9 w-48 mb-6" />
            <div className="flex items-center gap-3">
              <Skeleton className="h-[62px] w-[76px] rounded-xs" />
              <Skeleton className="h-5 w-32" />
            </div>
          </CardContent>
        </Card>
        
        {[1, 2].map((i) => (
          <Card key={i} className="col-span-1 border border-border bg-white rounded-card">
            <CardContent className="px-6 py-4 flex flex-col justify-between h-full">
              <div>
                <Skeleton className="h-3 w-20 mb-4" />
                <Skeleton className="h-[65px] w-full max-w-[260px] rounded-xs" />
              </div>
              <Skeleton className="h-0.5 w-full mt-6" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters Skeleton */}
      <div className="flex h-[73px] items-center justify-between gap-4 border border-border bg-white px-4 rounded-card">
        <Skeleton className="h-10 w-full max-w-md" />
        <div className="flex gap-3">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="rounded-card border bg-white overflow-hidden">
        <div className="h-11 bg-sidebar border-b flex items-center px-6 gap-4">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-32 mx-auto" />
          <Skeleton className="h-3 w-20 mx-auto" />
          <Skeleton className="h-3 w-16 mx-auto" />
          <Skeleton className="h-3 w-8 ml-auto" />
        </div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-[72px] border-b last:border-0 flex items-center px-6 gap-4">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-40" />
              </div>
            </div>
            <Skeleton className="h-6 w-[121px] rounded-pill mx-auto" />
            <Skeleton className="h-7 w-[104px] rounded-xs mx-auto" />
            <Skeleton className="h-6 w-24 rounded-full mx-auto" />
            <Skeleton className="h-8 w-8 rounded-full ml-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
