import { PawPrint } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <PawPrint className="h-8 w-8 text-accent" />
      <span className="text-xl font-bold tracking-tight text-primary">
        Veterinária Santa Tereza
      </span>
    </Link>
  );
}
