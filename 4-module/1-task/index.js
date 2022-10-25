function makeFriendsList(friends) {
  let ul = document.createElement("ul");
  ul.innerHTML = friends.map(el => `
    <li>${el.firstName}&nbsp;${el.lastName}</li>
  `).join('');

  return ul;
};