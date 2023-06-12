
import { FaComments } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Review = () => {

  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className="  w-full text-orange-500">
      <div className='my-5'>
        
        <p className='font-bold text-center my-2 text-4xl text-orange-500' style={{ fontFamily: ['Lucida Bright'] }}>Reviews</p>
        <hr className='w-1/2 mx-auto' />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center">
        
        {/* client one message */}
        <div className="border-2 border-dotted rounded-xl w-full min-h-[50vh] mx-auto flex flex-col justify-center items-center gap-5">
          <div className="avatar mt-5">
            <div className="w-24 mask mask-hexagon" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
              <img src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9LCJ0b0Zvcm1hdCI6ImF2aWYifX0=" />
            </div>
          </div>
          <div>
            <FaComments className='text-orange-600 h-10 w-10'></FaComments>
          </div>
          <p className='text-center px-3 md:px-5 pb-3'>Instructor was great at explaining the Zoom controls and was successful in getting them all engaged in the subject. Benji is incredibly shy, but by the end of the class he was having a great time. Instructor built a friendly community in a very short time— great job!My kids love all of their drawing Chelsea T. </p>
          <div className='flex flex-col justify-center items-center mb-5 relative'>
            <p className='text-2xl tracking-widest z-10'>Chelsea Tails</p>
            
          </div>
        </div>
        {/* client two message */}
        <div className="border-2 border-dotted rounded-xl w-full min-h-[50vh] mx-auto flex flex-col justify-center items-center gap-5">
          <div className="avatar mt-5" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            <div className="w-24 mask mask-hexagon">
              <img src="https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg" />
            </div>
          </div>
          <div>
            <FaComments className='text-orange-600 h-10 w-10'></FaComments>
          </div>
          <p className='text-center px-3 md:px-5 pb-3'>Loi did a great job with the kids!  His patience, problem solving skills and enthusiasm really kept them engaged.  Whatever you pay him, you should double it! Cade looks forward to having another class with him! The tech support team was fantastic helping us work through getting programs. -Kristin O.</p>
          <div className='flex flex-col justify-center items-center mb-5 relative'>
            <p className='text-2xl tracking-widest z-10'>Kristin Omy</p>
            
          </div>
        </div>
        <div className="border-2 border-dotted rounded-xl w-full min-h-[50vh] mx-auto flex flex-col justify-center items-center gap-5">
          <div className="avatar mt-5">
            <div className="w-24 mask mask-hexagon" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsu34yqIKdjK5cAWEcuUq3ryD30iiqd2ArQ&usqp=CAU" />
            </div>
          </div>
          <div>
            <FaComments className='text-orange-600 h-10 w-10'></FaComments>
          </div>
          <p className='text-center px-3 md:px-5 pb-3'>My son is a beginner at computers but is interested in computer animation, and this course really motivated him. His instructor was great at explaining things and got my son even more excited to explore animation. This was just what we needed to keep my son (and us parents). Thank you!!  -Barbara B.</p>
          <div className='flex flex-col justify-center items-center mb-5 relative'>
            <p className='text-2xl tracking-widest z-10'>Barbara Bali</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;