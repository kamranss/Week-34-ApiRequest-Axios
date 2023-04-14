let registerBtn = document.querySelector(".register-btn");

 function getDate(){
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
 }


  registerBtn.addEventListener("click", function(){
    let name = document.querySelector(".input-name");
    let email = document.querySelector(".input-email");
    
    const data = {
      postId: 1,
      id: 6,
      name: name.value,
      email: email.value,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec leo malesuada, lobortis nunc a, ultrices mi.'
    };

    postData(data);
  })

  
// post data
 function postData(data){
    axios.post('https://jsonplaceholder.typicode.com/users', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
 }

