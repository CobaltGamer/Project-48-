class Player { 
    constructor(player) {
        this.player = player; 
        this.x = player.x;
        this.y = player.y;
    }
    update(i,j){
        var player = "players/"+this.player;
        database.ref(player).set({
          x:this.x + i,
          y:this.y + j,
        });
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value",(data)=>{
            PC = data.val();
           // this.x = PC.x;
            // this.y = PC.y;
        })
      }
    updateState(state) {
        gameState = state
        database.ref("/").update({
            gameState:state
        })
    }
}