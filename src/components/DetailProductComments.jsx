import iconProfile from '/src/assets/ic_profile.svg';
import imageEmpty from '/src/assets/Img_inquiry_empty.svg';
import { ContentText, FlexWrapper } from './common/CommonComponents';
import { styled } from 'styled-components';
import { Text } from './common/CommonComponents';
import Kebab from './Kebab';

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
    <FlexWrapper className='comment' $col $gap='24'>
      <ContentText>{content}</ContentText>
      <FlexWrapper $gap='8'>
        <ProfileImage src={image ?? iconProfile} alt='profile' />
        <FlexWrapper $gap='4' $col $center>
          <Text $SIZE='14' $WEIGHT='400' $COLOR='600'>
            {nickname}
          </Text>
          <Text $SIZE='12' $WEIGHT='400' $COLOR='400'>
            {detailDate(updatedAt)}
          </Text>
        </FlexWrapper>
        <Kebab />
      </FlexWrapper>
    </FlexWrapper>
  );
}
// TODO: 댓글 컴포넌트의 이름이 list.. 이거 참고
// TODO: 댓글들 여백 주기.. 여기말고 DetailProductComments를 불러오는 곳에 div를 씌워서 해야할듯

function EmptyComments() {
  return (
    <FlexWrapper $col className='comment-empty'>
      <img width='200' height='224' src={imageEmpty} alt='empty' />
      <Text $SIZE='16' $WEIGHT='400' $COLOR='400'>
        아직 문의가 없습니다.
      </Text>
    </FlexWrapper>
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
