// import React from 'react';
// import Banner from '../Banner/Banner';
// import PopularInstructors from '../PopularInstructors/PopularInstructors';
// import Offer from '../Offer/Offer';
// import Testimonial from '../Testimonial/Testimonial';

// const Home = () => {
//     return (
//         <div>
//             <Banner/>
//             <PopularInstructors/>
//             <Offer></Offer>
//             <Testimonial></Testimonial>
//         </div>
//     );
// };

// export default Home;

import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import PopularClasses from '../PopularClasses/PopularClasses';

import Offer from '../Offer/Offer';
import Testimonial from '../Testimonial/Testimonial';
const Home = () => {
    return (
        <div className='flex flex-col'>
            <Banner/>
            <PopularClasses/>
            <PopularInstructors/>
            <Offer></Offer>
           
            <Testimonial></Testimonial>
                    </div>
    );
};

export default Home;