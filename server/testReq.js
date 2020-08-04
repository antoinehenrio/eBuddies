var nbResults = 24;
var url = 'https://api.punkapi.com/v2/beers?per_page=' + nbResults;

function clearBeers(id) {
  var n = document.getElementById(id);
  console.log(n.firstChild);
  while (n.firstChild){
    n.removeChild(n.firstChild);
 }
}


function getPage(j) {
  $('.conteneur').empty();
  var urlPage = url + '&page=' + j;
  var requestPage = new XMLHttpRequest();
  requestPage.open('Get',urlPage);
  requestPage.responseType = 'json';
  requestPage.onload = function(){
    var data = requestPage.response;
    var longueur = data.length;
    for (let i = 0; i < longueur; i++) {
      renderBeer(data,i);
    }
  }
  requestPage.send();
}

function creePagination() {
  for (let i = 1; i < 11; i++) {
    var listItem = document.createElement("li");
    listItem.className = "itemNav";
    var lien = document.createElement("a");
    // lien.addEventListener("click", function(){getPage(i)}, false);
    lien.onclick = function() { getPage(i) };
    lien.id = i;
    lien.textContent = i;
    listItem.appendChild(lien);
    var footer = document.getElementsByClassName("listeNav");
    footer[0].appendChild(listItem);
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

function renderBeer(data,i) {
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

window.onload = function(){
  creePagination();
  getPage(1);
  var element = document.getElementById("conteneurCards");
}
