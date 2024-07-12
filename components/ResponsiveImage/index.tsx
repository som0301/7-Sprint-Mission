import cx from 'clsx';
import styles from './index.module.scss';
import Image from 'next/image';
import { responsiveImage } from '@/types/responsive-image.d';

interface Props {
  mobileImg: responsiveImage;
  tabletImg: responsiveImage;
  desktopImg: responsiveImage;
  className?: string;
  alt: string;
  unoptimized: boolean;
}

const ResponsiveImage = ({
  mobileImg,
  tabletImg,
  desktopImg,
  className,
  alt,
  unoptimized,
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
      />
      <Image
        src={tabletImg.src}
        width={tabletImg.width}
        height={tabletImg.height}
        alt={alt}
        className={cx(styles.tabletImg, className)}
        unoptimized={unoptimized}
      />
      <Image
        src={mobileImg.src}
        width={mobileImg.width}
        height={mobileImg.height}
        alt={alt}
        className={cx(styles.mobileImg, className)}
        unoptimized={unoptimized}
      />
    </>
  );
};

export default ResponsiveImage;
