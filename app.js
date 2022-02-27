const allPlayer = () =>{
   const searchValue = document.getElementById('search-box').value;
   const url =(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`)
   fetch(url)
   .then(res => res.json())
   .then(data => showPlayerDetailes(data.player))
};

const showPlayerDetailes = (players) => {
   const parent = document.getElementById('player-container');
   for(const player of players){
      console.log(player);
      const div = document.createElement('div');
   div.innerHTML = `
   <div class="card border p-5 m-5">
            <div class="pro-pic">
               <img class="w-100" src="${player.strThumb}" alt="">
            </div>
            <h2>Name:${player.strPlayer}</h2>
            <h5>Country:${player.strNationality}</h5>
            <p></p>
            <div class="allButton">
               <button class="btn btn-danger">Delete</button>
               <button onclick="detailes('${player.idPlayer}')" class="btn btn-success">Delailes</button>
            </div>
         </div>`
         parent.appendChild(div);
   };
}
const detailes = (playerId) =>{
   console.log('ok boss hoise',playerId);
   const url = (`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`);
      fetch(url)
      .then(res=> res.json())
      .then(data => saveDetailes(data.players[0]))
}

const saveDetailes = (info) =>{
   console.log(info);
}