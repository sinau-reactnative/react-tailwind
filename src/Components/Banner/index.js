import Bg from '../../assets/images/halodoc-banner.svg';

const Banner = ({ children }) => {
  return (
    <div
      className='h-4/5 shadow-xl'
      style={{
        backgroundImage: `url(${Bg})`,
        height: '600px',
        width: '100%',
        backgroundSize: 'cover',
        padding: '20px 16px',
        clipPath: 'ellipse(100vh 90% at 50% 10%)',
      }}
    >
      {children}
      <div className='w-full flex justify-center items-center flex-col'>
        <p className='text-pink-500 text-5xl font-semibold py-8 pt-24'>
          Solusi Kesehatan Terlengkap di Indonesia
        </p>
        <p className='font-light text-xl'>
          Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update
          informasi seputar kesehatan,
        </p>
        <p className='font-light text-xl'>semua bisa di Halodoc!</p>
      </div>
    </div>
  );
};

export default Banner;
