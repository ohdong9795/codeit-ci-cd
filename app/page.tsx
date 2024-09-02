import Counter from '@/components/Counter';
import Hero from '@/components/Hero';
import MoveRight from '@/components/MoveRight';
import Navbar from '@/components/Navbar';
import Reviews from '@/components/Reviews';
import Spin from '@/components/Spin';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Reviews />
      <MoveRight />
      <Spin />
      <Counter />
    </>
  );
}
