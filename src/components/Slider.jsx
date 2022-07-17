// import React from 'react'
// import './slider.css'
// import { useState } from "react";
// import { sliderItems } from "../data";
// import { mobile } from "../responsive"
// import { ArrowLeftOutlined } from '@mui/icons-material';




// const Slider = () => {
//     const [slideIndex, setSlideIndex] = useState(0);
//     const handleClick = (direction) => {
//         if (direction === "left") {
//             setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
//         } else {
//             setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
//         }
//     };

//   return (
//     <div className="slidercontainer">
//         <div className="slidercontainer-arrow" direction="left" onClick={() => handleClick("left")}>
//             <ArrowLeftOutlined />
//         </div>

//         <div className="wrapper" slideIndex={slideIndex}>
//             {sliderItems.map((item) => (
                
//             ))}
//         </div>
//     </div>
//   )
// }

// export default Slider