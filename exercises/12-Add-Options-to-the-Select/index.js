let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

let lista = document.getElementById("mySelect");

for(let i=0;i<countries.length;i++){ 
    
    pais = countries[i]
    let element = document.createElement("option");
    element.value = pais;
    element.text = pais;
    lista.appendChild(element);
 }
 
function selectCountry () {
    let lista = document.getElementById("mySelect");

    alert (lista.value);
}

lista.addEventListener("change", selectCountry);