import CardConsts from './CardConsts'

const heads = [
    { img: 'https://img.52z.com/upload/news/image/20180227/20180227090735_72419.jpg'},
    { img: 'http://m.360buyimg.com/pop/jfs/t23434/230/1763906670/10667/55866a07/5b697898N78cd1466.jpg'},
    { img: 'http://img0.imgtn.bdimg.com/it/u=533012005,1605503981&fm=26&gp=0.jpg'},
]
class Game {
    constructor() {
        const canvas = document.querySelector('#canvas')
        this.canvas = canvas
        this.canvas.width = window.innerWidth / 2
        this.canvas.height = window.innerHeight / 2
        this.ctx = this.canvas.getContext('2d');
    }

    init() {
        this.ctx.fillStyle = '#df2e24'
        this.ctx.fillRect(0,0,window.innerWidth,window.innerHeight)
        this.ctx.fillStyle = '#FFF'
        this.ctx.fontSize = 20
        this.ctx.fillText('经典斗地主', 10, 40);
        this.drawCard();
    }

    drawHeader() {
        const left = { x: 10, y: 10 };
        const right = { x: this.canvas.width - 40, y: 10};
        const bottom = { x: 10,y: this.canvas.height -40}
        heads && heads.forEach((item, index) => {
            const image = document.createElement('img')
            image.src = item.img;
            image.onload = () => {
                if (index === 0) {
                    this.ctx.drawImage(image,left.x, left.y, 50, 50);
                }
                if (index === 1) {
                    this.ctx.drawImage(image,right.x, right.y, 50, 50);
                }
                if (index === 2) {
                    this.ctx.drawImage(image,bottom.x, bottom.y, 50, 50);
                }
            }
        });
    }

    drawCard() {
        CardConsts.forEach((item, index) => {
            this.drawCardRect(index * 60 + 24 + 30, window.innerHeight / 2 - 90, {
                fillStyle: `#${parseInt(Math.random() * 10, 16)}${parseInt(Math.random() * 16, 16)}1`,
                fontSize: 20,
            });
            this.drawCardText(item,index * 60 + 24 + 24, window.innerHeight / 2 - 45, {
                fillStyle: '#fff',
                fontSize: 20,
            });
        })
        this.drawHeader();
    }

    drawCardRect(x, y,options) {
        for( let attr in options) {
            this.ctx[attr] = options[attr]
        }
        this.ctx.fillRect(x,y,60, 80)
    }

    drawCardText(text, x, y,options) {
        for( let attr in options) {
            this.ctx[attr] = options[attr]
        }
        this.ctx.fillText(text, x, y);
    }
}
export default Game
