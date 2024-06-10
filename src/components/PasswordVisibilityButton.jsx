import visibilityOnImg from '../image-resource/btn-visibility-on.svg';
import visibilityOffImg from '../image-resource/btn-visibility-off.svg';

const visibility = {
  on: visibilityOnImg,
  off: visibilityOffImg,
};
export default function PasswordVisibilityButton() {
  return (
    <img
      className="absolute bottom-8 right-6"
      src={visibility.on}
      alt="비밀번호 보기/가리기"
    />
  );
}
