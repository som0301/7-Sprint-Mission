interface Props {
  link: string;
  image: string;
  alt: string;
}

function SNS({ link, image, alt }: Props) {
  return (
    <a href={link} target='_blank'>
      <img src={image} alt={alt} />
    </a>
  );
}

export default SNS;
