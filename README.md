# Pacman Game

A modern remake of the classic Pac-Man arcade game built with pure JavaScript and HTML5 Canvas. Features stunning neon visuals, smooth animations, intelligent ghost AI, and faithful maze design.

Play the game online: https://echo-terminal.github.io/Pacman/

## Features

- **Classic Pacman Gameplay** - Authentic arcade experience with maze navigation
- **Modern Neon Aesthetics** - Beautiful glowing effects with retro gaming feel
- **Intelligent Ghost AI** - 8 ghosts with strategic pathfinding behavior
- **Smooth Animations** - 60 FPS gameplay with interpolated character movement
- **Dynamic Camera** - Camera follows Pacman through the maze
- **Progressive Difficulty** - Map resets and continues after collecting all pellets
- **High Score Tracking** - Your best score is saved locally
- **Sound Effects** - Background music and death sound effects
- **Lives System** - 3 lives to complete your run
- **Keyboard Controls** - WASD or Arrow key controls
- **Visual Control Panel** - Interactive button display with key press feedback
- **Pause on Blur** - Game automatically pauses when window loses focus
- **Desktop Only** - Optimized experience for PC gaming

## Gameplay

Navigate Pacman through the maze to collect all the pellets while avoiding the colorful ghosts. Each pellet collected awards 2 points.

### Game Mechanics

- **Pellet Collection**: Collect all white pellets in the maze to score points
- **Ghost Avoidance**: Avoid collision with 8 different colored ghosts
- **Tunnel Teleportation**: Use the side tunnels to teleport to the opposite side
- **Map Reset**: After collecting 310 pellets (620 points), the map regenerates
- **Lives System**: Start with 3 lives - lose a life on ghost collision
- **Animated Pacman**: Classic chomping animation that responds to movement direction
- **Smart Ghosts**: Ghosts have directional AI that avoids backtracking

## Controls

- **W / Up Arrow** - Move up
- **S / Down Arrow** - Move down
- **A / Left Arrow** - Move left
- **D / Right Arrow** - Move right
- **Space** - Start/Restart game
- **Window Blur** - Automatically pauses game

You can also use the visual control buttons on the right side panel!

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Desktop computer (mobile devices are blocked)

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Open `index.html` in your web browser

No build process or dependencies required - just open and play!

### Or play online

You can also play this game online: https://echo-terminal.github.io/Pacman/

## Project Structure

```
Pacman/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles and animations
├── js/
│   ├── game.js         # Core game logic and mechanics
│   └── app.js          # Application initialization
├── bit.mp3             # Background music
└── Dead.mp3            # Death sound effect
```

## Technical Highlights

### Canvas Rendering
- Custom rounded rectangle polyfill for older browsers
- Smooth 60 FPS gameplay using requestAnimationFrame
- Interpolated movement for fluid character animation
- Dynamic camera system that follows Pacman

### Responsive Design
- Dynamic canvas scaling based on container size
- Maintains 28:31 aspect ratio (authentic Pacman maze dimensions)
- Scales all game elements proportionally
- Centered camera with boundary constraints

### Game Engine
- Grid-based collision detection system
- Pathfinding AI for ghost movement
- Direction queue system for responsive controls
- Tunnel teleportation mechanics

### State Management
- Lives system with continue/game over handling
- Level progression with map regeneration
- High score persistence using localStorage
- Pause/resume functionality with overlay system

### Character AI
- 8 unique colored ghosts with individual behaviors
- Smart pathfinding that avoids walls
- Random direction selection with weighted preferences
- Prevention of 180-degree turns for natural movement

## Maze Design

The game features a 28x31 grid maze with:
- Classic Pac-Man style corridors
- Ghost home in the center
- Side tunnels for teleportation
- Strategic pellet placement
- 310 collectible pellets per level

## Customization

### Changing Ghost Colors

Edit the `colors.ghosts` array in `game.js` to modify ghost colors:

```javascript
this.colors = {
    ghosts: ['#F7931A', '#3C3C3D', '#2AABEE', '#F4B728', 
             '#008C76', '#345D9D', '#E84142', '#A6A6A6']
};
```

### Adjusting Game Difficulty

Modify the `moveInterval` in `game.js` to change game speed:

```javascript
this.moveInterval = 300; // Lower = faster, Higher = slower
```

### Changing Pellet Values

Edit the pellet collection score in the `updatePacman()` method:

```javascript
this.score += 2; // Change this value for different points per pellet
```

## Ghost Behavior

Each ghost has:
- **Unique Color**: 8 different colors for easy identification
- **Random Movement**: Strategic pathfinding with randomized choices
- **Wall Avoidance**: Smart navigation around obstacles
- **Directional Memory**: Prevents instant direction reversals
- **Tunnel Support**: Can use side tunnels like Pacman

## Known Issues

- Mobile devices are intentionally blocked from playing
- Game requires modern browser with Canvas API support
- Audio autoplay may be blocked by some browsers

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Inspired by the original Pac-Man by Namco (1980)
- Font: Press Start 2P for authentic retro gaming feel
- Icons: Font Awesome for UI elements
