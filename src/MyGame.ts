// MyGame - Example implementation of Game interface

import { Game, GameFramework } from "./index.js";

class MyGame extends Game {
    private x: number = 0;
    private y: number = 0;
    private vx: number = 100;
    private vy: number = 100;
    private size = 300;
    private img = new Image();
    private loaded = false;

    init(): void {
        this.img.onload = () => (this.loaded = true);
        this.img.src = "assets/Maier.png"; // Pfad anpassen
    }

    update(deltaTime: number): void {
        this.x += this.vx * deltaTime;
        this.y += this.vy * deltaTime;

        if (this.x <= 0) {
            this.x = 0;
            this.vx = Math.abs(this.vx);
        } else if (this.x + this.size >= 800) {
            this.x = 800 - this.size;
            this.vx = -Math.abs(this.vx);
        }

        if (this.y <= 0) {
            this.y = 0;
            this.vy = Math.abs(this.vy);
        } else if (this.y + this.size >= 600) {
            this.y = 600 - this.size;
            this.vy = -Math.abs(this.vy);
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(0, 0, 800, 600);
        if (this.loaded) {
            ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
        }
    }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600, "canvas");
framework.start();
