var nbResults = 24;
var url = 'https://api.punkapi.com/v2/beers?page=5&per_page=' + nbResults;
var urlCompter = 'https://api.punkapi.com/v2/beers';
var request = new XMLHttpRequest();
// var requestCompter = new XMLHttpRequest();
// var nbBieres = 0;
// requestCompter.open('GET',urlCompter);
// requestCompter.responseType = 'json';
// requestCompter.send();
// requestCompter.onload = function(){
//   var dataCompter = requestCompter.response;
//   nbBieres = dataCompter.length;
//   console.log(dataCompter);
// }

request.open('GET',url);
request.responseType = 'json';
request.send();

function creePagination(i) {
  var listItem = document.createElement("li");
  listItem.className = "itemNav";
  var lien = document.createElement("a");
  lien.id = i;
  lien.textContent = i;
  listItem.appendChild(lien);
  var footer = document.getElementsByClassName("listeNav");
  footer[0].appendChild(listItem);
}

window.onload = function(){
  for (let i = 1; i < 11; i++) {
    creePagination(i);
  }
  var li = document.createElement("li");
  li.className = "itemNav";
  var a = document.createElement("a");
  a.className = "lien";
  a.id = "rightArrow";
  a.href = "#";
  a.textContent = ">";
  li.appendChild(a);
  var footer = document.getElementsByClassName("listeNav");
  footer[0].appendChild(li);
}

request.onload = function(){
  var data = request.response;
  var longueur = data.length;
  console.log(data);
  for (let i = 0; i < longueur; i++) {

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
    if (beerName.length> 35) {
      beerName = beerName.substring(0,26) + " ...";
    }
    pName.textContent = beerName;
    pName.title = data[i].name;
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
