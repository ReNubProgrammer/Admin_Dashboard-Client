import Moment from 'react-moment'

function Time() {
  
  return (
    <div className="fixed z-10 right-0 pt-10 pr-10 font-bold text-[30px] font-montserrat">
        <Moment className='px-3' local format='D MMM YYYY'></Moment>
        <Moment className='text-white bg-black px-3 py-0.5' format='k:mm' interval={10000}></Moment>
    </div>
  );
}

export default Time;
