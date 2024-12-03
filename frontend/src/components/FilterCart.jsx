import React from 'react'


const filterData=[
  {
    filterType:"Location",
    array:["Delhi NCR", "Banglore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType:"Industry",
    array:["FrontEnd Developer", "Backend Developer", "FullStack Developer"]
  },
  {
    filterType:"Salary",
    array:["0-40k","42-1lakh","1lakh to 5lakh"]
  },

]
const FilterCart = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md '>
     <h1 className='font-bold text-lg'>Filter Jobs</h1>
     <hr className='mt-3'/>
     {
      filterData.map((data,index)=>(
        <div>
          <h1 className='font-bold text-lg'>{data.filterType}</h1>
          {
            data.array.map((item,index)=>{
              return (
                <div>
<input type="radio" id="r3"
                 name="role3" 
                 value={item} />
                 <label>{item}</label>
                </div>
              )
            })
          }
        </div>  

      ))
     }
    </div>
  )
}

export default FilterCart
