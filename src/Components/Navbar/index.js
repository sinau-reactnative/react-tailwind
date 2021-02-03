import HaloLogo from '../../assets/images/halodoc-logo.png';

const Navbar = () => {
  return (
    <div className='flex justify-center items-center py-6'>
      <div className='flex flex-row justify-between items-center p-9 bg-white w-11/12 shadow-md rounded'>
        <img src={HaloLogo} alt='Halo Logo' className='w-44 min-h-full' />
        <div className='flex flex-row justify-around'>
          <p className='px-8 font-sans text-xl'>Artikel</p>
          <p className='px-8 font-sans text-xl'>Obat & Vitamin</p>
          <p className='px-8 font-sans text-xl'>Tanya Dokter</p>
          <p className='px-8 font-sans text-xl'>Rumah Sakit</p>
          <p className='px-8 font-sans text-xl'>Cari Dokter</p>
          <p className='px-8 font-sans text-xl'>Aplikasi</p>
        </div>
        <span className='rounded-lg text-pink-500 py-2 px-10 border border-pink-500'>
          LOGIN
        </span>
      </div>
    </div>
  );
};

export default Navbar;
