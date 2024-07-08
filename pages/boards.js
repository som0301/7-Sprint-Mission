import { useRouter } from 'next/router';
import Nav from '@/components/Nav';
import BestPost from '@/components/BestPost';
import Bulletin from '@/components/Bulletin';

export default function Boards() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <>
      <Nav />
      <BestPost />
      <Bulletin />
    </>
  );
}
