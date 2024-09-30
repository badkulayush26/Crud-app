import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios
      .get("https://66f642bd436827ced97664a4.mockapi.io/crud")
      .then((response) => {
        console.log(response.data);
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 place-items-center">
        <div className="w-full">
          <div className="my-3">
            <Link to="/create">
              <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-600">
                Create New Data
              </button>
            </Link>
          </div>
          <table className="table-auto border-collapse border border-gray-800 w-full mx-auto">
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
              {formData.length > 0 ? (
                formData.map((items) => (
                  <tr
                    className="bg-gray-700 text-white hover:bg-gray-500"
                    key={items.id}
                  >
                    <td className="border border-gray-600 px-4 py-2">
                      {items.id}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      {items.e_name}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      {items.e_age}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      {items.e_email}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      <button className="bg-blue-500 w-full text-white font-bold px-4 py-2 rounded hover:bg-blue-600">
                        Edit
                      </button>
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      <button className="bg-red-500 text-white w-full font-bold px-4 py-2 rounded hover:bg-red-600">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="bg-gray-700 text-white">
                  <td
                    colSpan="6"
                    className="border border-gray-600 px-4 py-2 text-center"
                  >
                    No data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Read;
