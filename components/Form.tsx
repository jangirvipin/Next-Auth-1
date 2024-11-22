"use client"
import axios from "axios";
import { log } from "console";
import React, { useState } from "react";


const MyForm = () => {
    
   

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    ZIP:"",
    option: "",
    
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    const result =await axios.post("http://localhost:3000/api/handler", formData);
    const result1= await result.data;
    console.log(result1);
    
  };

  return (
    <form className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
     
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter your title"
        />
      </div>

      
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Description
        </label>
        <input
          type="text"
          id="Description"
          name="Description"
          
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter your Description"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
        location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter your Location"
        />
      </div>

      
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="ZIP">
        ZIP
        </label>
        <input
          type="text"
          id="ZIP"
          name="ZIP"
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter your ZIP"
        />
      </div>

      
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="option">
          Select an Option
        </label>
        <select
          id="option"
          name="option"
          value={formData.option}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="">Choose an option</option>
          <option value="option1">Circket</option>
          <option value="option2">Basketball</option>
          <option value="option3">Hockey</option>
          <option value="option4">Football</option>
          <option value="option5">Tennis</option>
        </select>
      </div>

   
      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default MyForm;
