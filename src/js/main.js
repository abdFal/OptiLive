// Animate Make Clients Happy count
var clientsCount = document.getElementById("clients-count");
var clientsCounter = 0;
var clientsInterval = setInterval(function () {
  clientsCounter++;
  clientsCount.innerHTML = clientsCounter;
  if (clientsCounter == 15000) {
    clearInterval(clientsInterval);
  }
}, 5);

// Animate Our Clients count
var ourClientsCount = document.getElementById("our-clients-count");
var ourClientsCounter = 0;
var ourClientsInterval = setInterval(function () {
  ourClientsCounter++;
  ourClientsCount.innerHTML = ourClientsCounter;
  if (ourClientsCounter == 80000) {
    clearInterval(ourClientsInterval);
  }
}, 10);
