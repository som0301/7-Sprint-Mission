import { StaticImageData } from 'next/image';

export interface responsiveImage {
  src: string | StaticImageData;
  width?: number;
  height?: number;
}
