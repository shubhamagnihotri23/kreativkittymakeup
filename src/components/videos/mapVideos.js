import React, { useRef, useState, useEffect } from 'react';

const Video = ({ src }) => {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle video visibility
    const handleVideoVisibility = () => {
        if (videoRef.current) {
            const { top, bottom } = videoRef.current.getBoundingClientRect();
            const isVisible = top < window.innerHeight && bottom >= 0;
            setIsVisible(isVisible);
        }
    };

    // Event listener to check video visibility on scroll
    useEffect(() => {
        const handleScroll = () => {
            handleVideoVisibility();
        };

        window.addEventListener('scroll', handleScroll);
        handleVideoVisibility(); // Initial check on component mount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Play or pause the video based on visibility
    useEffect(() => {
        if (isVisible && videoRef.current && videoRef.current.paused) {
            videoRef.current.play();
        } else if (!isVisible && videoRef.current && !videoRef.current.paused) {
            //   videoRef.current.pause();
        }
    }, [isVisible]);

    const handleVideoClick = () => {
        // Open the video URL in a new tab
        window.open(src, '_blank');
    };

    return (
        <div ref={videoRef} onClick={handleVideoClick}>
            <video className='mb-3' muted autoPlay loop width="100%" >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Video;
