import React from "react";

function Create() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-1/3">
          <form>
            <div className="space-y-2 mb-2">
              <label>Enter Name:</label>
              <input
                className="border border-gray-300 rounded p-2 w-full"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="space-y-2 mb-2">
              <label>Enter Age:</label>
              <input
                className="border border-gray-300 rounded p-2 w-full"
                type="text"
                placeholder="Age"
              />
            </div>
            <div className="space-y-2 mb-2">
              <label>Enter Email:</label>
              <input
                className="border border-gray-300 rounded p-2 w-full"
                type="text"
                placeholder="Email"
              />
            </div>
            <br />
            <input
              className="inline-block px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600"
              value='Submit'
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
