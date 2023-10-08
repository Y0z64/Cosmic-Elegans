import React, { useEffect, useRef } from 'react';

interface Props {
    src: string,
}

function AutoPlayVideo(props: Props) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Play the video when the component mounts
    videoRef.current.play();
  }, []);

  return (
    <div className='h-full w-full flex justify-center relative items-center'>
      <video
        ref={videoRef}
        src={props.src} // Specify the path to your local video file
        width="100%" // Set the width of the video
        height="auto" // Set the height of the video (auto scales the height based on the aspect ratio)
        controls={false} // Hide video controls
        autoPlay
        loop={true} // Automatically play the video on load
        muted
        className='absolute bottom-0' // Mute the video to avoid autoplay restrictions in some browsers
      />
    </div>
  );
}

export default AutoPlayVideo;