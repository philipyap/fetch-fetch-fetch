 
 const body = document.querySelector('body');
 
 fetch ('https://pokeapi.co/api/v2/pokemon/eevee')

 .then (response => {
     return response.json();
 })

 .then(data => {
     console.log(data);
     let sprites = data.sprites;
     //console.log(sprites);
     
     let profileImage = sprites.front_shiny;
     //console.log(profileImage);

     let pokeName = data.name;
     //console.log(pokeName);

     let height = data.height;
     let weight = data.weight;
     //console.log(height);

     let moves = data.moves;
     //console.log(moves);

     let doubleTeam = moves[14].move.name;
     //console.log(doubleTeam);

     let types = data.types[0].type.name;
     //console.log(types);

     const card = document.createElement('div');
     card.classList.add('card');
     card.style.width = '18rem';
     console.log(card);

     const image = document.createElement('img');
     image.src = profileImage;
     image.classList.add('card-img-top');
     image.alt = pokeName;
     console.log(image);

     const cardBody = document.createElement('div');
     cardBody.classList.add('card-body');
     console.log(cardBody);

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    let firstLetter = pokeName.charAt([0]).toUpperCase();
    let otherLetter = pokeName.slice(1);
    let finalName = firstLetter + otherLetter;
    //console.log(finalName);
    console.log(cardTitle)
    ;cardTitle.textContent = finalName; //pokeName.charAt([0]).toUpperCase()+ pokeName.slice(1,5);

    


    const cardWeight = document.createElement('p');
    const cardHeight = document.createElement('p');
    const cardMove = document.createElement('p');
    const cardType = document.createElement('p');

    cardWeight.classList.add('card-text');
    cardHeight.classList.add('card-text');
    cardMove.classList.add('card-text');
    cardType.classList.add('card-text');

    cardWeight.textContent = 'Weight: ' + weight;
    cardHeight.textContent = 'Height: ' + height;
    cardMove.textContent = 'Move: ' + doubleTeam;
    cardType.textContent = 'Type: ' + types;

    console.log(cardWeight);
    console.log(cardHeight);
    console.log(cardMove);
    console.log(cardType);

    cardBody.appendChild(cardTitle);
    cardBody.append(cardWeight);
    cardBody.appendChild(cardHeight);
    cardBody.appendChild(cardMove);
    cardBody.appendChild(cardType);

    console.log(cardBody);

    card.appendChild(image);
    card.appendChild(cardBody);

    console.log(card);

    body.appendChild(card);

 })