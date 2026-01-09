import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const directoryPath = path.join(process.cwd(), 'public/animais');
    
    // Check if directory exists
    if (!fs.existsSync(directoryPath)) {
      return NextResponse.json({ images: [] });
    }

    const files = fs.readdirSync(directoryPath);

    // Filter for image files
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)
    );

    return NextResponse.json({ images: imageFiles });
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return NextResponse.json({ error: 'Failed to load images' }, { status: 500 });
  }
}
