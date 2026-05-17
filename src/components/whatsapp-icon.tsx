import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface WhatsAppIconProps {
  className?: string;
  size?: number;
}

export function WhatsAppIcon({ className, size = 36 }: WhatsAppIconProps) {
  return (
    <Image
      src="/images/whatsapp-icon.webp"
      alt="WhatsApp"
      width={size}
      height={size}
      className={cn("object-contain brightness-0 invert", className)}
    />
  );
}
