import Navbar from '../../Components/Navbar';
import Banner from '../../Components/Banner';
import Card from '../../Components/Card';

import { imageList } from '../../constant/cardImage';

const Home = () => {
  return (
    <div
      className='min-h-screen w-screen'
      style={{
        background:
          'linear-gradient(to top, rgba(2,0,36,0.48082983193277307) 0%, rgba(237,166,174,0.2959558823529411) 0%, rgba(0,212,255,0) 100%)',
      }}
    >
      <Banner>
        <Navbar />
      </Banner>
      <div className='w-full px-20 flex flex-row items-center justify-center -mt-32'>
        {imageList.map((i) => {
          return <Card title={i.title} image={i.image} subtitle={i.subtitle} />;
        })}
      </div>
    </div>
  );
};

export default Home;
