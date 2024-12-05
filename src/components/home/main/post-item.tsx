import { useState } from 'react';
import { Heart, Share2, MessageCircle, MoreVertical, ChevronDown, ChevronUp } from 'lucide-react';

interface PostItemProps {
  text: string;
  username?: string;
  userAvatar?: string;
  postImage?: string;
  likes?: number;
  comments?: number;
}

const PostItem = ({
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  username = 'Kalvan Supreme',
  userAvatar = 'http://localhost:8000/images/example.jpg',
  postImage = 'http://localhost:8000/images/example.jpg',
  likes = 0,
  comments = 0
}: PostItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 w-full max-w-full md:max-w-4xl mx-auto mb-6 md:mb-12 transition-all duration-300">
      <div className="flex items-center justify-between p-4 md:p-6 bg-gray-50">
        <div className="flex items-center">
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden mr-3 md:mr-5 border-2 md:border-4 border-white">
            <img 
              src={userAvatar} 
              alt={`${username}'s profile`} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-sm md:text-lg text-gray-800 truncate max-w-[150px] md:max-w-none">
              {username}
            </h3>
            <p className="text-xs md:text-sm text-gray-500">
              Posted 2 hours ago • Public
            </p>
          </div>
        </div>
        <button className="text-gray-600 hover:bg-gray-200 p-1 md:p-2 rounded-full transition-colors">
          <MoreVertical className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <div className="w-full h-48 md:h-[500px] lg:h-[600px] overflow-hidden">
        <img 
          src={postImage} 
          alt="Post content" 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-4 md:p-8">
        <p className={`
          text-sm md:text-lg text-gray-800 
          ${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}
          leading-relaxed mb-4
        `}>
          {text}
        </p>

        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="md:hidden text-blue-600 text-sm flex items-center"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
          {isExpanded 
            ? <ChevronUp className="ml-1 w-4 h-4" /> 
            : <ChevronDown className="ml-1 w-4 h-4" />
          }
        </button>

        <div className="flex flex-wrap gap-2 mt-4">
          {['#Travel', '#Adventure', '#Photography'].map((tag) => (
            <span 
              key={tag} 
              className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs md:text-sm hover:bg-blue-100 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 pb-4 md:px-8 md:pb-8">
        <div className="border-t border-gray-200 pt-4 md:pt-6 flex justify-between items-center">
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="flex items-center text-gray-700 hover:text-red-500 transition-colors group">
              <Heart 
                className="mr-2 md:mr-3 text-gray-400 w-5 h-5 md:w-7 md:h-7 group-hover:fill-red-100 group-hover:text-red-500 transition-all" 
              />
              <span className="text-sm md:text-lg">{likes}</span>
            </button>
            <button className="flex items-center text-gray-700 hover:text-blue-500 transition-colors group">
              <MessageCircle 
                className="mr-2 md:mr-3 text-gray-400 w-5 h-5 md:w-7 md:h-7 group-hover:text-blue-500 transition-all" 
              />
              <span className="text-sm md:text-lg">{comments}</span>
            </button>
          </div>
          <button className="text-gray-700 hover:text-green-500 transition-colors group flex items-center">
            <Share2 
              className="text-gray-400 group-hover:text-green-500 transition-all mr-2 md:mr-3 w-5 h-5 md:w-7 md:h-7" 
            />
            <span className="text-sm md:text-lg hidden md:inline">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;