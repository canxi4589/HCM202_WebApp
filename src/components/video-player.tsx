"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster: string;
  title: string;
  subtitle: string;
  className?: string;
}

export default function VideoPlayer({ src, poster, title, subtitle, className = "" }: VideoPlayerProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleVideoMetadata = () => {
    if (videoRef.current) {
      const videoDuration = videoRef.current.duration;
      if (videoDuration && !isNaN(videoDuration) && videoDuration > 0 && videoDuration !== Infinity) {
        setDuration(videoDuration);
      }
    }
  };

  const handleLoadedData = () => {
    if (videoRef.current) {
      const videoDuration = videoRef.current.duration;
      if (videoDuration && !isNaN(videoDuration) && videoDuration > 0 && videoDuration !== Infinity) {
        setDuration(videoDuration);
      }
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current && duration > 0) {
      const percentage = parseFloat(e.target.value);
      const newTime = (percentage / 100) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return "0:00";
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <video
        ref={videoRef}
        preload="metadata"
        className="w-full aspect-video rounded-lg shadow-2xl border-2 border-white/20 object-cover"
        poster={poster}
        muted={isMuted}
        playsInline
        onPlay={() => setIsVideoPlaying(true)}
        onPause={() => setIsVideoPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleVideoMetadata}
        onLoadedData={handleLoadedData}
        onDurationChange={handleVideoMetadata}
        onCanPlay={handleVideoMetadata}
        onError={() => console.log("Video load error")}
      >
        <source src={src} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>
      
      {/* FALLBACK IMAGE */}
      <div className="absolute inset-0 bg-gray-800/80 rounded-lg flex items-center justify-center
                    opacity-0 transition-opacity duration-300"
           style={{
             opacity: videoRef.current?.error ? 1 : 0
           }}>
        <div className="text-center text-white p-4 sm:p-6">
          <Play className="w-12 h-12 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-4 opacity-70" />
          <p className="text-base sm:text-lg opacity-90 mb-1 sm:mb-2">Video</p>
          <p className="text-xs sm:text-sm opacity-70">Cách mạng giải phóng dân tộc</p>
        </div>
      </div>
      
      {/* NÚT PLAY */}
      {!isVideoPlaying && (
        <div className="absolute inset-0 flex items-center justify-center rounded-lg">
          <button
            onClick={toggleVideo}
            className="bg-red-600/90 hover:bg-red-600 text-white p-4 sm:p-6 rounded-full
                       transition-all duration-300 hover:scale-110 backdrop-blur-sm
                       shadow-2xl border-2 sm:border-4 border-white/30 animate-pulse"
            aria-label="Play video"
          >
            <Play className="w-8 h-8 sm:w-12 sm:h-12 ml-1" />
          </button>
        </div>
      )}

      {/* VIDEO LABEL */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/70 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
        📹 Video
      </div>
      
      {/* NÚT PLAY/PAUSE */}
      {isVideoPlaying && !isMobile && (
        <div className="absolute inset-0 flex items-center justify-center 
                      bg-black/20 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 rounded-lg">
          <button
            onClick={toggleVideo}
            className="bg-red-600/90 hover:bg-red-600 text-white p-5 rounded-full
                       transition-all duration-300 hover:scale-110 backdrop-blur-sm
                       shadow-lg"
            aria-label="Pause video"
          >
            <Pause size={36} />
          </button>
        </div>
      )}
      
      {/* CONTROLS CONTAINER */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                    ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} 
                    transition-opacity duration-300 rounded-b-lg p-2 sm:p-4`}>
        
        {/* THANH PROGRESS BAR */}
        <div className="mb-2 sm:mb-3">
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={duration > 0 ? (currentTime / duration) * 100 : 0}
            onChange={handleProgressChange}
            className="w-full h-1 sm:h-2 bg-white/30 rounded-lg appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:w-3 sm:[&::-webkit-slider-thumb]:w-4 
                     [&::-webkit-slider-thumb]:h-3 sm:[&::-webkit-slider-thumb]:h-4 
                     [&::-webkit-slider-thumb]:rounded-full 
                     [&::-webkit-slider-thumb]:bg-red-600
                     [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-webkit-slider-thumb]:shadow-lg
                     [&::-moz-range-thumb]:w-3 sm:[&::-moz-range-thumb]:w-4 
                     [&::-moz-range-thumb]:h-3 sm:[&::-moz-range-thumb]:h-4 
                     [&::-moz-range-thumb]:rounded-full 
                     [&::-moz-range-thumb]:bg-red-600
                     [&::-moz-range-thumb]:cursor-pointer
                     [&::-moz-range-thumb]:border-none
                     [&::-moz-range-thumb]:shadow-lg"
          />
        </div>

        {/* BOTTOM CONTROLS */}
        <div className="flex items-center justify-between">
          {/* TIME DISPLAY */}
          <div className="text-white text-xs sm:text-sm font-medium bg-black/30 px-1 py-0.5 sm:px-2 sm:py-1 rounded">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>

          {/* CONTROL BUTTONS */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Play/Pause Button */}
            {isMobile && (
              <button
                onClick={toggleVideo}
                className="bg-red-600/80 hover:bg-red-600 text-white p-1.5 sm:p-2 rounded-full
                         transition-all duration-300"
                aria-label={isVideoPlaying ? "Pause video" : "Play video"}
              >
                {isVideoPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
            )}

            {/* Volume Button */}
            <button
              onClick={toggleMute}
              className="bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full
                       transition-all duration-300"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Video title overlay */}
      {!isMobile && (
        <div className="absolute top-4 left-4">
          <div className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm opacity-90">{subtitle}</p>
          </div>
        </div>
      )}
    </div>
  );
}