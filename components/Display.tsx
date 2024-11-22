import React from 'react';

const Card = ({ post }:any) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <img className="w-full h-48 object-cover" src={post.image} alt={post.title} />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700 text-base mb-4">{post.Description}</p>
        <p>{post.location}</p>
        <a
          href={post.link}
          className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
