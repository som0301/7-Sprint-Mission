import { StaticImageData } from 'next/image';

export interface ResponsiveImage {
  src: string | StaticImageData;
  width?: number;
  height?: number;
}
