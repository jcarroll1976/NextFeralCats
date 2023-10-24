
import Image from 'next/image';
import Banner from './(home)/Banner';
import Help from '../app/(home)/Help';

export default function Home() {

  return (
    <main>
      <Banner />
      <div>
        <Help/>
      </div>
    </main>
  )
}
