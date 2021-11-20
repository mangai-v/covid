

let searchInput = document.getElementById('search');
let template = document.getElementById('template');
searchInput.addEventListener('keyup',e =>{
    if(e.key==='Enter'){
        let searchText = e.target.value;
        GitUser(searchText);
    }
})


async function GitUser(searchValue){
    let URL = "https://api.covid19api.com/country"
    let DATA = await window.fetch(`${URL}/${searchValue}`);
    let JSON = await DATA.json();
    let {Date,Deaths,Country,Confirmed,Active} = JSON[JSON.length-1];
template.innerHTML =`
<main>
    <div >
       <h2 class="userName"> ${Country} </h2>
    
    
    <p class="userName">Positive: ${Confirmed}</p>
    <p class="userName">Deaths: ${Deaths}</p>
    
    <div class="retro">
       <p class="userName">Active: ${Active}</p>
       <p class="userName">Date: ${Date}</p>

    </div>   
    </div>
</main>
`
}
