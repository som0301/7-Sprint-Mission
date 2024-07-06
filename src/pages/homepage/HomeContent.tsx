interface Props {
  image: string;
  banner: string;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
}

function HomeContent({
  image,
  banner,
  title1,
  title2,
  description1,
  description2,
}: Props) {
  return (
    <div className='container home-content'>
      <img src={image} alt='홈 이미지' className='home-img' />
      <div className='home-text-div'>
        <div className='home-text'>
          <p className='home-banner'>{banner}</p>
          <h2 className='home-title'>
            <span className='new-line'>{title1} </span>
            <span className='new-line'>{title2}</span>
          </h2>
          <p className='home-description'>
            {description1}
            <br />
            {description2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
