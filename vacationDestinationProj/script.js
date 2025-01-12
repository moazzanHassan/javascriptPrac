(function(){
    "use strict"
    var detail = document.getElementById("destination_details_form");

detail.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const destName = evt.target.elements['name'].value;
    const loc = evt.target.elements['location'].value;
    const phot = evt.target.elements['photo'].value;
    const des = evt.target.elements['description'].value;

    // Clear form inputs
    for (var i = 0; i < detail.length; i++) {
        detail.elements[i].value = '';
    }

    const destCard = createDestinationCard(destName, loc, phot, des);

    // Append card to container
    const wishListContainer = document.getElementById("destinations_container");
    if (wishListContainer.children.length === 0) {
        document.getElementById("title").innerHTML = "My Wish List";
    }
    document.querySelector("#destinations_container").appendChild(destCard);
});

function createDestinationCard(name, location, photoURL, description) {
    const card = document.createElement("div");
    card.className = 'card';

    const img = document.createElement('img');
    img.setAttribute("alt", name);
    const constantPhotoUrl = 'images/signpost.jpg';
    img.setAttribute('src', photoURL.length === 0 ? constantPhotoUrl : photoURL);
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h3");
    cardTitle.innerHTML = name;
    cardBody.appendChild(cardTitle);

    const cardSubtitle = document.createElement("h4");
    cardSubtitle.innerHTML = location;
    cardBody.appendChild(cardSubtitle);

    if (description.length !== 0) {
        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    const cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerText = "Remove";
    cardDeleteBtn.addEventListener("click", function (evt) {
        const card = evt.target.parentElement.parentElement;
        card.remove();
    });
    cardBody.appendChild(cardDeleteBtn);
    card.appendChild(cardBody);

    return card;
}

}())