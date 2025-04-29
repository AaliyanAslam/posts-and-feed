import React from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../lib/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const AddFeeds = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
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
    <div className=" bg-gray-50 flex items-center justify-center px-2">
      <div className="bg-white shadow-md rounded-xl w-full max-w-sm p-6">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">New Post</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div>
            <input
              type="text"
              placeholder="Title"
              {...register('Title', { required: 'Title is required' })}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.Title && <p className="text-xs text-red-500 mt-1">{errors.Title.message}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Description"
              {...register('Description', { required: 'Description is required' })}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.Description && (
              <p className="text-xs text-red-500 mt-1">{errors.Description.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700 transition"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFeeds;
