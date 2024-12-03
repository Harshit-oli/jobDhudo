// import { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// export default function({children:category}){
//     const [curr,setCurr]=useState(0);

//     const prev=()=>
//         setCurr((curr)=>(curr===0 ? category.length-1:curr-1))

//     const next=()=>
//         setCurr((curr)=>(curr=== category.length-1 ? 0:curr+1))
//     return(
//         <div className="overflow-hidden relative">
//             <div className="flex transition-transform ease-out duration-500"
//             style={{transform:`translateX(-${curr * 100}%)`}}
//             >{category}</div>
//             <div className="absolute inset-0 flex items-center justify-between p-4">
//                 <button
//                 onClick={prev}
//                  className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
//                     <FaChevronLeft/>
//                 </button>
//                 <button
//                  onClick={prev}
//                  className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
//                         <FaChevronRight/>
//                 </button>
//             </div>
        // </div>
    // )
// }
