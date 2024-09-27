import React from 'react'

function Read() {
  return (
   <>
   {/* <div className='flex flex-wrap'>
    <div className='w-full'>
        <table className='table-auto w-full border border-gray-300 odd:bg-gray-200 bg-gray-800 text-white hover:bg-gray-100'>
            <thead>
                <tr>ID</tr>
                <tr>NAME</tr>
                <tr>AGE</tr>
                <tr>EMAIL</tr>
                <tr>EDIT</tr>
                <tr>DELETE</tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <th>neha</th>
                    <th>24</th>
                    <th>edit</th>
                    <th>DELETE</th>
                </tr>
                <tr>
                    <th>1</th>
                    <th>neha</th>
                    <th>24</th>
                    <th>edit</th>
                    <th>DELETE</th>
                </tr>
                <tr>
                    <th>1</th>
                    <th>neha</th>
                    <th>24</th>
                    <th>edit</th>
                    <th>DELETE</th>
                </tr>
            </tbody>
        </table>

    </div>
    
   </div>


   <div className='row'>
    <div className='col-md-12'>
        <table className='table table-bordered table-striped table-hover table-dark'>
        <thead>
                <tr>ID</tr>
                <tr>NAME</tr>
                <tr>AGE</tr>
                <tr>EMAIL</tr>
                <tr>EDIT</tr>
                <tr>DELETE</tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <th>neha</th>
                    <th>24</th>
                    <th>edit</th>
                    <th>DELETE</th>
                </tr>
                <tr>
                    <th>1</th>
                    <th>neha</th>
                    <th>24</th>
                    <th>edit</th>
                    <th>DELETE</th>
                </tr>
                <tr>
                    <th>1</th>
                    <th>neha</th>
                    <th>24</th>
                    <th>edit</th>
                    <th>DELETE</th>
                </tr>
            </tbody>
        </table>
    </div>
   </div> */}
   <div className="grid grid-cols-1">
  <div className="w-full">
    <table className="table-auto border-collapse border border-gray-800 w-full">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="border border-gray-600 px-4 py-2">ID</th>
          <th className="border border-gray-600 px-4 py-2">NAME</th>
          <th className="border border-gray-600 px-4 py-2">AGE</th>
          <th className="border border-gray-600 px-4 py-2">EMAIL</th>
          <th className="border border-gray-600 px-4 py-2">EDIT</th>
          <th className="border border-gray-600 px-4 py-2">DELETE</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-700 text-white hover:bg-gray-600">
          <td className="border border-gray-600 px-4 py-2">1</td>
          <td className="border border-gray-600 px-4 py-2">Neha</td>
          <td className="border border-gray-600 px-4 py-2">24</td>
          <td className="border border-gray-600 px-4 py-2">neha@example.com</td>
          <td className="border border-gray-600 px-4 py-2 text-blue-400 hover:text-blue-600">Edit</td>
          <td className="border border-gray-600 px-4 py-2 text-red-400 hover:text-red-600">Delete</td>
        </tr>
        <tr className="bg-gray-700 text-white hover:bg-gray-600">
          <td className="border border-gray-600 px-4 py-2">2</td>
          <td className="border border-gray-600 px-4 py-2">Rahul</td>
          <td className="border border-gray-600 px-4 py-2">28</td>
          <td className="border border-gray-600 px-4 py-2">rahul@example.com</td>
          <td className="border border-gray-600 px-4 py-2 text-blue-400 hover:text-blue-600">Edit</td>
          <td className="border border-gray-600 px-4 py-2 text-red-400 hover:text-red-600">Delete</td>
        </tr>
        <tr className="bg-gray-700 text-white hover:bg-gray-600">
          <td className="border border-gray-600 px-4 py-2">3</td>
          <td className="border border-gray-600 px-4 py-2">Sita</td>
          <td className="border border-gray-600 px-4 py-2">30</td>
          <td className="border border-gray-600 px-4 py-2">sita@example.com</td>
          <td className="border border-gray-600 px-4 py-2 text-blue-400 hover:text-blue-600">Edit</td>
          <td className="border border-gray-600 px-4 py-2 text-red-400 hover:text-red-600">Delete</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

   </>
  )
}

export default Read

