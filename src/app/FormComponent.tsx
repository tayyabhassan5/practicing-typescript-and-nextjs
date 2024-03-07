"use client"
import React, { useState } from 'react';

export const FormComponent = () => {
  const [formData, setFormData] = useState({
    fullName: 'Jane Doe',
    password: '',
    newsletter: false,
  });

  const formElements = [
    {
      id: 'inline-full-name',
      label: 'Full Name',
      type: 'text',
      value: formData.fullName,
    },
    
    
    {
      id: 'inline-password',
      label: 'Password',
      type: 'password',
      placeholder: '******************',
      value: formData.password,
    },
  ];

  const handleInputChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [id.label]: value,
    }));
  };
  

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <form className="w-full bg-slate-400 p-8 h-[1000px] max-w-sm">
      {formElements.map((element) => (
        <div key={element.id} className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor={element.id}
            >
              {element.label}
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id={element.id}
              type={element.type}
              value={element.value}
              placeholder={element.placeholder}
              onChange={(e) => handleInputChange(element.id, e.target.value)}
            />
          </div>
        </div>
      ))}

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};
