import iconProfile from '/src/assets/ic_profile.svg';
import imageEmpty from '/src/assets/Img_inquiry_empty.svg';
import { ContentText, DisplayContainer } from './common/CommonComponents';
import { styled } from 'styled-components';

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
`;

function Comment({ comment }) {
  const { content, createdAt, updatedAt, writer } = comment;
  const { image, nickname } = writer;

  const detailDate = (a) => {
    const createdSeconds = new Date(a);
    const milliSeconds = new Date() - createdSeconds;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };

  return (
    <DisplayContainer className='comment' $col $gap='24'>
      <ContentText>{content}</ContentText>
      <DisplayContainer gap='8'>
        <ProfileImage src={image ?? iconProfile} alt='profile' />
        <div>
          <p>{nickname}</p>
          <p>{detailDate(createdAt)}</p>
        </div>
      </DisplayContainer>
    </DisplayContainer>
  );
}

function EmptyComments() {
  return (
    <div>
      <img src={imageEmpty} alt='empty' />
      <p>아직 문의가 없습니다.</p>
    </div>
  );
}

function DetailProductComments({ comments }) {
  return comments.length === 0 ? (
    <EmptyComments />
  ) : (
    comments.map((comment, idx) => {
      return <Comment comment={comment} key={idx} />;
    })
  );
}

export default DetailProductComments;
