import React from 'react';
import { FiThumbsUp, FiShare, FiDownload, FiMoreHorizontal } from 'react-icons/fi';
import { formatDistanceToNow } from 'date-fns';

const HomePage = () => {
  // Sample video data
  const videos = [
    {
      id: 1,
      title: "Building a YouTube Clone with React & Tailwind CSS",
      channel: "Code Master",
      views: "120K",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      duration: "15:42",
      thumbnail: "https://picsum.photos/id/1/320/180"
    },
    {
      id: 2,
      title: "Learn React Hooks in 30 Minutes",
      channel: "React Tutorials",
      views: "85K",
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      duration: "30:15",
      thumbnail: "https://picsum.photos/id/2/320/180"
    },
    {
      id: 3,
      title: "Tailwind CSS Crash Course",
      channel: "Web Dev Simplified",
      views: "210K",
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
      duration: "42:28",
      thumbnail: "https://picsum.photos/id/3/320/180"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map(video => (
            <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-48 object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-900 line-clamp-2">{video.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{video.channel}</p>
                <div className="flex text-gray-600 text-sm mt-1">
                  <span>{video.views} views</span>
                  <span className="mx-1">•</span>
                  <span>{formatDistanceToNow(video.timestamp, { addSuffix: true })}</span>
                </div>
                <div className="flex justify-between mt-3 text-gray-500">
                  <button className="flex items-center space-x-1 hover:text-gray-700">
                    <FiThumbsUp size={18} />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-gray-700">
                    <FiShare size={18} />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-gray-700">
                    <FiDownload size={18} />
                    <span>Download</span>
                  </button>
                  <button className="hover:text-gray-700">
                    <FiMoreHorizontal size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;