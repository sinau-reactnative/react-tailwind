const Card = ({ image, title, subtitle }) => {
  return (
    <div className='w-72 h-80 p-2 rounded-md flex flex-col justify-center items-center z-10 m-3 bg-white shadow-lg hover:shadow-2xl cursor-pointer transition ease-in-out duration-150'>
      <img src={image} className='w-5/12 h-auto' />
      <p className='text-xl pt-6 text-blue-900'>{title}</p>
      <p className='text-lg pt-6 px-6 text-center'>{subtitle}</p>
    </div>
  );
};

export default Card;
