const github = new Github;

//Search input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;

  if(userText !== '') {
    github.getUser('userText')
    .then(data => {
      if(data.profile.message === 'Not Found') {
        
      } else {

      }
    });
  } else {

  }
});