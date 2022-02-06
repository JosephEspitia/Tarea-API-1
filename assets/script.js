let pokeball = document.getElementById("poke");
pokeball.addEventListener("click", starPoke);

function starPoke() {
  let pokeball = document.querySelector(".pokeball");
  pokeball.classList.add("animate__backOutUp");
  let miPromesa = new Promise((resolved, rejected)=> {
      let info =fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (151 - 1)) + 1}`)
      if (info) {
        resolved(
            info
            .then((response) => response.json())
            .then((data) => newPoke(data)))  
      } else {
        rejected(alert('se produjo un error'))
      }
      
});

}

function newPoke(data) {
  document.getElementById("cards").innerHTML = `
    <div class="card mb-2 animate__animated animate__pulse style="width: 15rem;"">
    <img src="${data.sprites.other.dream_world.front_default}" class="card-img-top"/>
    <div class="card-body">
      <h5 class="card-title">Nombre: ${data.name}</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Tipo: ${data.types[0].type.name}</li>
      <li class="list-group-item">Estadisticas base: ${data.stats[0].base_stat}</li>
      <li class="list-group-item">Habilidad: ${data.stats[0].stat.name}</li>
    </ul>
    </div>
</div>
    `;
}




