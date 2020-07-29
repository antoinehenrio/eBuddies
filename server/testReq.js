var url = 'https://api.punkapi.com/v2/beers';
var request = new XMLHttpRequest();
request.open('GET',url);
request.responseType = 'json';
request.send();

request.onload = function(){
  // console.log(request.response);
  var starship;
  var data = request.response;
  var longueur = data.length;
  console.log(data);
  for (let i = 0; i < longueur; i++) {
      // console.log(longueur);
    var conteneur = document.getElementById('conteneurCards');
    var card =  document.createElement("li");
    card.className = "buddy";
    var p = document.createElement("p");
    p.className="buddyPicture";
    var img = document.createElement("img");
    img.className = "imgBuddy";
    img.src = data[i].image_url;
    img.width = "100";
    img.height = "100";
    var div = document.createElement("div");
    div.className = "buddyDetails";
    var pName = document.createElement("p");
    pName.className = "buddyName";
    var beerName = data[i].name;
    if (beerName.length> 27) {
      beerName = beerName.substring(0,26) + " ...";
    }
    pName.textContent = beerName;
    var pAge = document.createElement("p");
    pAge.className = "buddyAge";
    pAge.textContent = data[i].abv + "°";
    div.appendChild(pName);
    div.appendChild(pAge);
    p.appendChild(img);
    card.appendChild(p);
    card.appendChild(div);
    conteneur.appendChild(card);
  }
}
