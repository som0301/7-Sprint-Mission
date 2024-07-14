import cx from 'clsx';
import styles from './index.module.scss';
import Image from 'next/image';
import { ResponsiveImage as ResponsiveImageType } from '@/types/responsive-image.d';

interface Props {
  mobileImg: ResponsiveImageType;
  tabletImg: ResponsiveImageType;
  desktopImg: ResponsiveImageType;
  className?: string;
  alt: string;
  unoptimized: boolean;
  priority: boolean;
}

const ResponsiveImage = ({
  mobileImg,
  tabletImg,
  desktopImg,
  className,
  alt,
  unoptimized,
  priority,
}: Props) => {
  return (
    <>
      <Image
        src={desktopImg.src}
        width={desktopImg.width}
        height={desktopImg.height}
        alt={alt}
        className={cx(styles.desktopImg, className)}
        unoptimized={unoptimized}
        priority={priority}
      />
      <Image
        src={tabletImg.src}
        width={tabletImg.width}
        height={tabletImg.height}
        alt={alt}
        className={cx(styles.tabletImg, className)}
        unoptimized={unoptimized}
        priority={priority}
      />
      <Image
        src={mobileImg.src}
        width={mobileImg.width}
        height={mobileImg.height}
        alt={alt}
        className={cx(styles.mobileImg, className)}
        unoptimized={unoptimized}
        priority={priority}
      />
    </>
  );
};

export default ResponsiveImage;
