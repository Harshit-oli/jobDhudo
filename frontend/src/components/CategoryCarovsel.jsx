import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel} from 'react-responsive-carousel';
const category=[
  "FrontEnd Developer",
  "BackEnd Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
]

const CategoryCarovsel = () => {
  return (
    <div>
      <Carousel className='w-full max-w-xl mx-auto my-20'>
        {/* <CarouselContent> */}
          {
            category.map((cat,index)=>(
              <div className=' bg-slate-200 py-8'>
                  <button className='bg-black text-white p-3 rounded-md'>{cat}</button>
              </div>
            ))
          }
        {/* </CarouselContent> */}
      </Carousel>
    </div>
  )
}

export default CategoryCarovsel
