import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Image 
        src="https://files.catbox.moe/bsfpti.png" 
        alt="Veterinária Santa Tereza Logo" 
        width={300} 
        height={100} 
        className="h-20 md:h-24 w-auto object-contain"
        priority
      />
    </Link>
  );
}
