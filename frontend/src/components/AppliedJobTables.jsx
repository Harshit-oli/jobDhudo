import React from 'react'

const AppliedJobTables = () => {
  return (
    <div>
      <table className="table-auto border-collapse border border-gray-200">
        <tr>
            <th className="border border-gray-300 px-16 py-2">Date</th>
            <th className="border border-gray-300 px-16 py-2">Job Role</th>
            <th className="border border-gray-300 px-16 py-2">Company</th>
            <th className="border border-gray-300 px-16 py-2">Status</th>
        </tr>

            {
                [1,2].map((item,index)=>(
                    <tr key={index}>
                        <td className="border border-gray-300 px-16 py-2">30-07-2024</td>
                        <td className="border border-gray-300 px-16 py-2">FrontEnd Developer    </td>
                        <td className="border border-gray-300 px-16 py-2">Google</td>
                        <td className="border border-gray-300 px-16 py-2"><button className='bg-black text-white p-1 rounded-xl'>selected</button></td>
                    </tr>
                ))
            }
      </table>
    </div>
  )
}

export default AppliedJobTables
