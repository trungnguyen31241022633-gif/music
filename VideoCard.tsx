
import React from 'react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  return (
    <div 
      className="flex flex-col gap-3 group cursor-pointer"
      onClick={() => onClick(video)}
    >
      <div className="relative aspect-video rounded-xl overflow-hidden bg-[#272727]">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-medium">
          {video.duration}
        </div>
      </div>
      
      <div className="flex gap-3 px-1">
        <div className="flex-shrink-0 mt-1">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-sm">
            {video.channel.charAt(0)}
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-bold line-clamp-2 leading-tight group-hover:text-white transition-colors">
            {video.title}
          </h3>
          <p className="text-sm text-gray-400 mt-1 hover:text-white transition-colors">
            {video.channel}
          </p>
          <div className="flex text-sm text-gray-400">
            <span>{video.views}</span>
            <span className="mx-1">•</span>
            <span>{video.postedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
