/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from "axios";
console.log('check out axios: \n \n', axios);
const cardEntry = document.querySelector('.cards');
axios
.get('https://api.github.com/users/emperk')
.then(res => {
  console.log(res);
  const card = cardMaker(res.data);
  cardEntry.appendChild(card);
})
.catch((drama) => {
  console.log(drama);
});

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell", "markperk"];

followersArray.forEach(follower => {
  axios
    .get(`https://api.github.com/users/${follower}`)
    .then(response => {
      console.log(response);
      const card = cardMaker(response.data);
      cardEntry.appendChild(card);
    })
    .catch(error => {
      console.log("Error is here: ", error);
    })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">                                                                  //mainCard
      <img src={image url of user} />                                                     //mainImg
      <div class="card-info">                                                             //cardInfoDiv
        <h3 class="name">{users name}</h3>                                                  //usersNameTitle
        <p class="username">{users user name}</p>                                           //userNameText
        <p>Location: {users location}</p>                                                   //locationText
        <p>Profile:                                                                         //profileText
          <a href={address to users github page}>{address to users github page}</a>           //userAddressText
        </p>
        <p>Followers: {users followers count}</p>                                           //followersText
        <p>Following: {users following count}</p>                                           //followingText
        <p>Bio: {users bio}</p>                                                             //bioText
      </div>
    </div>
*/

// function cardMaker({obj}) {
//   const mainCard = document.createElement("div");
//   const userImg = document.createElement("img");
//   const cardInfoDiv = document.createElement("div");
//   const usersNameTitle = document.createElement("h3");
//   const userNameText = document.createElement("p");
//   const locationText = document.createElement("p");
//   const profileText = document.createElement("p");
//   const userAddressText = document.createElement("a");
//   const followersText = document.createElement("p");
//   const followingText = document.createElement("p");
//   const bioText = document.createElement("p");

//   userImg.src = obj.avatar_url;
//   userAddressText.setAttribute('href', obj.html_url);
  
//   mainCard.classList.add("card");
//   cardInfoDiv.classList.add("card-info");
//   usersNameTitle.classList.add("name");
//   userNameText.classList.add("username");
  
//   usersNameTitle.innerText = obj.name;
//   userNameText.innerText = obj.login;
//   location.innerText = ('Location: ' + obj.location);
//   profileText.innerText = ('Profile: ');
//   userAddressText.innerText = 'GitHub Profile';
//   followersText.innerText = ('Followers: ' + obj.followers);
//   followingText.innerText = ('Following: ' + obj.following);
//   bioText.innerText = ('Bio' + obj.bio);
  
//   mainCard.appendChild(userImg);
//   mainCard.appendChild(cardInfoDiv);
//   cardInfoDiv.appendChild(usersNameTitle);
//   cardInfoDiv.appendChild(userNameText);
//   cardInfoDiv.appendChild(locationText);
//   cardInfoDiv.appendChild(profileText);
//   profileText.appendChild(userAddressText);
//   cardInfoDiv.appendChild(followersText);
//   cardInfoDiv.appendChild(followingText);
//   cardInfoDiv.appendChild(bioText);

//   return mainCard;
  

// }

function cardMaker (obj) {
  const mainCard = document.createElement('div');
  const userImg = document.createElement('img');
  const infoDiv = document.createElement('div');
  const usersNameTitle = document.createElement('h3');
  const userNameText = document.createElement('p');
  const locationText = document.createElement('p');
  const profileText = document.createElement('p');
  const userAddress = document.createElement('a');
  const followingText = document.createElement('p');
  const followersText = document.createElement('p');
  const bioText = document.createElement('p');

  userImg.src = obj.avatar_url;
  userAddress.setAttribute('href', obj.html_url);  
  
  mainCard.classList.add('card');  
  infoDiv.classList.add('card-info');  
  usersNameTitle.classList.add('name');
  userNameText.classList.add('username');

  usersNameTitle.innerText = obj.name;  
  userNameText.innerText = obj.login;
  locationText.innerText = ('Location: ' + obj.location);  
  profileText.innerText = ('Profile: ');  
  userAddress.innerText = ('Github Profile');
  followingText.innerText = ('Following: ' + obj.following);
  followersText.innerText = ('Followers: ' + obj.followers);
  bioText.innerText = ('Bio: ' + obj.bio);

  mainCard.appendChild(userImg);
  mainCard.appendChild(infoDiv);
  infoDiv.appendChild(usersNameTitle);
  infoDiv.appendChild(userNameText);
  infoDiv.appendChild(locationText);
  infoDiv.appendChild(profileText);
  infoDiv.appendChild(followingText);
  infoDiv.appendChild(followersText);
  infoDiv.appendChild(bioText);
  profileText.appendChild(userAddress);

  return mainCard

}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
