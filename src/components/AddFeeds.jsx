import React , {useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../lib/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import Loader from './Loader';


const AddFeeds = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await addDoc(collection(db, 'feeds'), {
        Title: data.Title,
        Description: data.Description,
        createdAt: serverTimestamp(),
      });
      // alert('Post added successfully!');
      setLoading(false);
      document.getElementById('my_modal_3').close()
      reset();
      
    } catch (e) {
      alert('Error adding document: ' + e.message);
      setError(true);
    }finally{
      setLoading(false);
      // setError(false);
      
    }
  };



  return (

    <>
<div className='flex items-center justify-center '>

<button className="btn w-70 text-gray-600 text-sm md:text-base lg:text-lg rounded-3xl md:w-150 lg:w-200 xl:w-250" onClick={()=>document.getElementById('my_modal_3').showModal()}>Create New Post</button>

</div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" className="flex flex-col gap-3">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    
    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">Create Post</h1>
    <div className="  flex items-center justify-center px-2">
      <div className="bg-white shadow-md rounded-xl w-full max-w-sm p-6">
     
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3"  >
          <div>
            <input
              type="text"
              placeholder="Title"
              {...register('Title', { required: 'Title is required' })}
              className="w-full text-black px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.Title && <p className="text-xs text-red-500 mt-1">{errors.Title.message}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Description"
              {...register('Description', { required: 'Description is required' })}
              className="w-full text-black px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.Description && (
              <p className="text-xs text-red-500 mt-1">{errors.Description.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 font-medium text-white py-2 rounded-md text-sm hover:bg-blue-700 transition"
          >
           {loading ? <Loader /> : 'Post'}
          </button>
  
    
        </form>
      </div>
    </div>
  </div>
</dialog>
    
    </>
   
  );
};

export default AddFeeds;
