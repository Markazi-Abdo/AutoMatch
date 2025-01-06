import { useState, useEffect } from 'react';
import FullScreenStyle from './FullScreen.module.css'
export default function FullScreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    // Check if the browser supports the fullscreen API
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  };

  const handleExitFullscreen = () => {
    // Check if the browser is in fullscreen mode and exit it
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
  };

  // Detect fullscreen changes
  useEffect(() => {
    const fullscreenChangeHandler = () => {
      setIsFullscreen(
        document.fullscreenElement || 
        document.webkitFullscreenElement || 
        document.mozFullScreenElement || 
        document.msFullscreenElement
      );
    };

    // Listen for fullscreen change events
    document.addEventListener('fullscreenchange', fullscreenChangeHandler);
    document.addEventListener('webkitfullscreenchange', fullscreenChangeHandler);
    document.addEventListener('mozfullscreenchange', fullscreenChangeHandler);
    document.addEventListener('MSFullscreenChange', fullscreenChangeHandler);

    // Clean up event listeners when the component unmounts
    return () => {
      document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
      document.removeEventListener('webkitfullscreenchange', fullscreenChangeHandler);
      document.removeEventListener('mozfullscreenchange', fullscreenChangeHandler);
      document.removeEventListener('MSFullscreenChange', fullscreenChangeHandler);
    };
  }, []);

  return (
    <div>
      {isFullscreen ? (
        <button onClick={handleExitFullscreen} className={FullScreenStyle.btnFull}>Exit Fullscreen</button>
      ) : (
        <button onClick={handleFullscreen} className={FullScreenStyle.btnFull}>Go Fullscreen</button>
      )}
    </div>
  );
}
