import React from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../lib/firebase';
import { addDoc, collection , serverTimestamp } from 'firebase/firestore';
import { useSelector } from 'react-redux';

const AddFeeds = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      
      await addDoc(collection(db, 'feeds'), {
        Title: data.Title,
        Description: data.Description,
        createdAt: serverTimestamp(),
      });
      alert('Post added successfully!');
    } catch (e) {
      alert('Error adding document: ' + e.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add New Post</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-600 mb-1">Enter Title</label>
            <input
              type="title"
              placeholder="Enter your Title"
              {...register('Title', { required: 'Title is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.Title && <span className="text-red-500 text-sm">{errors.Title.message}</span>}
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Enter Description</label>
            <input
              type="Description"
              placeholder="Description"
              {...register('Description', { required: 'Description is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.Description && <span className="text-red-500 text-sm">{errors.Description.message}</span>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFeeds;
