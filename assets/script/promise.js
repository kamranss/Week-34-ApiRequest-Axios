let submitBtn = document.querySelector(".submit-btn");

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
 console.log(getDate());




 
submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    let title = document.querySelector(".title");
    let body = document.querySelector(".body");
    
    const data = {
      userid: "2",
      id: "5",
      title: `${title.value}`,
      body: `${body.value}`
    };


    postData(data);
  })

  
// post data
 function postData(data){
    axios.post('https://jsonplaceholder.typicode.com/posts',data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
 }

