import React, { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';
// import { limit } from 'firebase/firestore';

const ShowFeeds = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const getFeeds = async () => {
      const q = query(collection(db, 'feeds'));
      onSnapshot(q, (querySnapshot) => {
        const feeds = [];
        querySnapshot.forEach((doc) => {
          feeds.push({ id: doc.id, ...doc.data() });
        });
        setPostData(feeds.sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds));
      });
    };
    getFeeds();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Feed</h1>
      <div className="w-full max-w-2xl flex flex-col gap-6">
        {postData.length > 0 ? (
          postData.map((item, index) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-md">
                {index + 1}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full font-semibold">
                  {item.Email?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div className="ml-3">
                  <p className="text-gray-800 font-semibold">{item.Title || 'Unknown User'}</p>
                  <p className="text-gray-400 text-sm">
                    {item.createdAt?.toDate().toLocaleString() || 'Unknown Date'}
                  </p>
                </div>
              </div>
              <p className="text-gray-700">{item.Description || 'No content'}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No posts yet...</p>
        )}
      </div>
    </div>
  );
};

export default ShowFeeds;
