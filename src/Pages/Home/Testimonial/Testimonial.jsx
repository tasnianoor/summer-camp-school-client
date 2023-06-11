// import React from "react";
// import Rating from "react-rating";
// import { AiFillStar } from "react-icons/ai";
// import { FaQuoteRight } from "react-icons/fa";
// import Marquee from "react-fast-marquee";

// const testimonialData = [
//   {
//     id: "11",
//     name: "Wendy Kim",
//     rating: 4,
//     image:
//       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     message:
//       "instructor was very engaging and took time to answer questions. She spent time working with each child and was very patient. Her enthusiasm for the topic was helpful and Michael has been spending time working on his stories/drawing this entire weekend. He is so excited about learning more about this area.  -Wendy K. I'm so glad I found this website! They have such a great selection of toys, and the prices are really reasonable. My kids love all of their new toys, and I'm so happy that I was able to find them here.",
//   },
//   {
//     id: "22",
//     name: "Chelsea Tails",
//     rating: 4.3,
//     image:
//       "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9LCJ0b0Zvcm1hdCI6ImF2aWYifX0=",
//     message:
//       "Instructor was great at explaining the Zoom controls and was successful in getting them all engaged in the subject. Benji is incredibly shy, but by the end of the class he was having a great time. Instructor built a friendly community in a very short time— great job!  - Chelsea T. I'm so glad I found this website! They have such a great selection of toys, and the prices are really reasonable. My kids love all of their new toys, and I'm so happy that I was able to find them here. ",
//   },
//   {
//     id: "33",
//     name: "Kristin Omy",
//     rating: 4.5,
//     image:
//       "https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg",
//     message:
//       "Loi did a great job with the kids!  His patience, problem solving skills and enthusiasm really kept them engaged.  Whatever you pay him, you should double it! Cade looks forward to having another class with him! The tech support team was fantastic helping us work through getting programs installed on Sunday before camp.  It made a big difference having everything ready to go ahead of the camp.  -Kristin O.",
//   },
//   {
//     id: "44",
//     name: "Barbara Ben",
//     rating: 5,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsu34yqIKdjK5cAWEcuUq3ryD30iiqd2ArQ&usqp=CAU",
//     message:
//       "My son is a beginner at computers but is interested in computer animation, and this course really motivated him. His instructor was great at explaining things and got my son even more excited to explore animation. This was just what we needed to keep my son (and us parents) from losing our minds during lock-down homeschooling. Thank you!!  -Barbara B.",
//   },
// ];

// const Testimonial = () => {
//   return (
//     <div className="my-16">
//       <h2 className="text-center text-3xl tracking-wide">Guardiants Reviews</h2>
//       <p className="text-center text-blue-500 mb-10">We'll explore the benefits of drawing for skills acquisition and mental health and the importance of incorporating them into students' educational journeys. With few drawing classes, kids may unleash their inner Picasso and create their own magic.</p>
//       <Marquee pauseOnHover>
//         {testimonialData.map((singleTestimonial) => (
//           <div
//             key={singleTestimonial.id}
//             className="w-[600px] bg-[#F8F8F8] p-6 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md ml-8">
//             <div className="flex justify-between">
//               <div className="flex items-center gap-3 mb-3">
//                 <img
//                   className="w-16 h-16 object-cover rounded-full"
//                   src={singleTestimonial.image}
//                   alt={singleTestimonial.name}
//                 />
//                 <div>
//                   <h2 className="font-semibold tracking-wide">
//                     {singleTestimonial.name}
//                   </h2>
//                   <Rating
//                     placeholderRating={singleTestimonial.rating}
//                     emptySymbol={<AiFillStar className="text-xl" />}
//                     placeholderSymbol={
//                       <AiFillStar className="text-xl text-yellow-500" />
//                     }
//                     fullSymbol={
//                       <AiFillStar className="text-xl text-violet-500" />
//                     }
//                   />
//                 </div>
//               </div>
//               <FaQuoteRight />
//             </div>
//             <p>{singleTestimonial.message}</p>
//           </div>
//         ))}
//       </Marquee>
//     </div>
//   );
// };

// export default Testimonial;



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