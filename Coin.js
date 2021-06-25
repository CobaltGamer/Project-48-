class Coin{
    constructor(x,y){
        this.coin = createSprite(x,y,20,20);
        this.coin.addImage(coinImage);
        this.coin.scale = 0.09;
        coinGroup.add(this.coin);
        
    }
}