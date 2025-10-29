// Wait for DOM to load
function isMobileOrTablet() {
    // Check using user agent
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileUA = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
    const isTabletUA = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);
    
    // Check using screen width
    const isSmallScreen = window.innerWidth <= 900;
    
    // Check using touch points
    const hasTouchScreen = navigator.maxTouchPoints > 0;
    
    return (isMobileUA || isTabletUA || (isSmallScreen && hasTouchScreen));
}

document.addEventListener('DOMContentLoaded', () => {
    // Check if device is mobile or tablet
    if (isMobileOrTablet()) {
        const mobileOverlay = document.getElementById('mobileOverlay');
        mobileOverlay.style.display = 'flex';
        return; // Stop further execution on mobile devices
    }

    // Initialize game
    const game = new PacmanGame('gameCanvas');

    // Update high score when wallet connects
    async function updateHighScore() {
        if (walletManager.isConnected()) {
            const highScore = await walletManager.getHighScore();
            document.getElementById('highScore').textContent = highScore;
        }
    }
    // Add visual feedback to control buttons
    const controlButtons = document.querySelectorAll('.control-btn');
    controlButtons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
    // Handle window focus/blur
    window.addEventListener('blur', () => {
        if (game.isGameRunning) {
            game.endGame();
        }
    });
});
