import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, age, email });
    await axios.post('https://66f642bd436827ced97664a4.mockapi.io/crud',{
        e_name:name,
        e_age:age,
        e_email:email
    }).then(()=>{
        navigate('/');

    })
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-1/3">
          <form onSubmit={handleSubmit}>
            <div className="bg-blue-700 text-center p-4">
              <h1 className="text-4xl">Create data</h1>
              <br />
            </div>
            <br />
            <div className="space-y-2 mb-2">
              <label>Enter Name:</label>
              <input
                className="border border-gray-300 rounded p-2 w-full"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="space-y-2 mb-2">
              <label>Enter Age:</label>
              <input
                className="border border-gray-300 rounded p-2 w-full"
                type="text"
                placeholder="Age"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
            <div className="space-y-2 mb-2">
              <label>Enter Email:</label>
              <input
                className="border border-gray-300 rounded p-2 w-full"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <br />
            <div className="">
            <input
              className="inline-block w-full text-center px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600"
              value="Submit"
              type="submit"
            />
          </div>
          </form>
         
        </div>
      </div>
    </>
  );
}

export default Create;
