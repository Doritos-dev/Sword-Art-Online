const config = {
    redirectUrl: './src/html/sao.html', // The URL to redirect to after the video
    keyEvent: 'keydown', // The event type to listen for on desktop
    touchEvent: 'touchstart' // The event type to listen for on mobile
};

// Function to handle video play and redirection
function playLinkStartVideo() {
    const videoOverlay = document.getElementById('video-overlay');
    const video = document.getElementById('link-start-video');

    // Show the video overlay
    videoOverlay.classList.remove('hidden');
    video.play();
    video.volume = 0.1;

    // Redirect to the new page when the video ends
    video.onended = () => {
        window.location.href = config.redirectUrl;
    };
}

// Detect if the user is on a mobile device or a desktop
const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
};

// Add event listener to start the video when a key or touch event happens
if (isMobile()) {
    document.addEventListener(config.touchEvent, playLinkStartVideo);
} else {
    document.addEventListener(config.keyEvent, playLinkStartVideo);
}
