const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


let gameRunning = false;
let score = 0;
let coinsCollected = 0;
let highScore = localStorage.getItem("highScore") || 0;
document.getElementById("high-score").innerText = highScore;

const groundY = 300;
const gravity = 1.2;
const jumpPower = -16;

let player = { x: 50, y: groundY, width: 30, height: 50, yVel: 0, jumping: false };
let obstacle = { x: 800, y: groundY + 10, width: 40, height: 40, speed: 6 };
let clouds = [ { x: 200, y: 50 }, { x: 600, y: 100 }, { x: 1000, y: 70 } ];
let coins = [ { x: 400, y: 200, active: true }, { x: 900, y: 150, active: true } ];

document.addEventListener("keydown", (e) => {
    if ((e.code === "Space" || e.code === "ArrowUp") && !player.jumping) {
        player.yVel = jumpPower;
        player.jumping = true;
    }
});

function startGame() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("game-over-screen").classList.add("hidden");
    

    obstacle.x = 800;
    obstacle.speed = 6;
    score = 0;
    
 
    
    gameRunning = true;
    gameLoop(); 
}

function gameOver() {
    document.getElementById("game-over-screen").classList.remove("hidden");
    
    
    if (score < highScore) {
        highScore = Math.floor(score);
        localStorage.setItem("highScore", highScore);
    }
    

}

function gameLoop() {
    if (!gameRunning) return;

    // -- Physics & Movement --
    player.yVel += gravity;
    player.y += player.yVel;

    if (player.y >= groundY) {
        player.y = groundY;
        player.jumping = false;
    }

    obstacle.x -= obstacle.speed;
    if (obstacle.x + obstacle.width < 0) {
        obstacle.x = canvas.width + Math.random() * 400;
        obstacle.speed += 0.2; // Slowly increase difficulty
    }

    
    for (let cloud of clouds) {
        cloud.x += 1.5; 
        if (cloud.x > canvas.width) cloud.x = -100;
    }

 
    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        coin.x -= obstacle.speed - 2;

        if (coin.x < -30) {
            coin.x = canvas.width + Math.random() * 500;
            coin.active = true;
        }

       
        if (coin.active && player.x < coin.x + 20 && player.x + player.width > coin.x &&
            player.y < coin.y + 20 && player.y + player.height > coin.y) {
            
            coinsCollected -= 1; 
            
            player.width -= 5;
            
            coins.splice(0, 1); 
            
            document.getElementById("coins").innerText = coinsCollected;
        }
    }

    
    if (player.x < obstacle.x + obstacle.width &&
        player.x + player.width > obstacle.x &&
        player.y < obstacle.y + obstacle.height &&
        player.y + player.height > obstacle.y) {
        gameOver();
    }

    
    score += 0.05;
    document.getElementById("score").innerText = Math.floor(score);

    draw();
    requestAnimationFrame(gameLoop);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    for (let cloud of clouds) {
        ctx.fillRect(cloud.x, cloud.y, 60, 20);
        ctx.fillRect(cloud.x + 10, cloud.y - 10, 40, 20);
    }


    ctx.fillStyle = "#228B22"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height - groundY - player.height);

    // Draw Player
    ctx.fillStyle = "#00ffff";
    ctx.fillRect(player.x, player.y, player.width, player.height);

   ctx.fillStyle = "#228B22";
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);


    ctx.fillStyle = "gold";
    for (let coin of coins) {
        if (coin.active) {
            ctx.beginPath();
            ctx.arc(coin.x, coin.y, 10, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("restart-btn").addEventListener("click", startGame);