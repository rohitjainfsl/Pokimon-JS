const wrapper = document.querySelector("#wrapper");
async function pokimon(url){
    const response = await fetch(url);
    const result = await response.json();
    return result;
    // console.log(result);
}

const image = [];
const saveUrl = [];
window.addEventListener("load",async() =>{
    const saveData =  await pokimon("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
    // console.log(saveData)

    saveData.results.forEach(data => {
       const final =  pokimon(data.url);
       saveUrl.push(final);
    //    console.log(saveUrl);
        
    });
    const data = await Promise.all(saveUrl);
    console.log(data);



});



