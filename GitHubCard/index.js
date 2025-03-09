import axios from 'axios';
console.log('check out axios: \n \n', axios);
// const result = axios.get(https://api.github.com/users/emperk);
//console.log(result);
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
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

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
const followersArray = ["markperk", "markeperk","tetondan","dustinmyers","justsml","luishrd","bigknell", "em4444xyz"];

followersArray.forEach(follower => 
  axios
  .get(`https://api.github.com/users/${follower}`)
  .then(response => {
    console.log(response);
    const card = cardMaker(response.data);
    cardEntry.appendChild(card);
  })
  .catch(error => {
    console.log("Error is here: ", error);
  }))

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker (obj) {
  const cardDiv = document.createElement('div');
  const userImg = document.createElement('img');
  const infoDiv = document.createElement('div');
  const h3 = document.createElement('h3');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const aTag = document.createElement('a');
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');
  const p6 = document.createElement('p');

  userImg.src = obj.avatar_url;
  aTag.setAttribute('href', obj.html_url);  
  
  cardDiv.classList.add('card');  
  infoDiv.classList.add('card-info');  
  h3.classList.add('card-info');
  p1.classList.add('username');

  h3.innerText = obj.name;  
  p1.innerText = obj.login;
  p2.innerText = ('Location: ' + obj.location);  
  p3.innerText = ('Profile: ');  
  aTag.innerText = ('Github Profile');
  p4.innerText = ('Following: ' + obj.following);
  p5.innerText = ('Bio: ' + obj.bio);
  p6.innerText = ('Bio: ' + obj.bio);

  cardDiv.appendChild(userImg);
  cardDiv.appendChild(infoDiv);
  infoDiv.appendChild(h3);
  infoDiv.appendChild(p1);
  infoDiv.appendChild(p2);
  infoDiv.appendChild(p3);
  infoDiv.appendChild(p4);
  infoDiv.appendChild(p5);
  infoDiv.appendChild(p6);
  p3.appendChild(aTag);

  return cardDiv

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
