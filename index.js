
fetch('https://jsonplaceholder.typicode.com/posts') 
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok'); 
    }
    return response.json(); 
  })
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error); 
  });

  fetch('https://jsonplaceholder.typicode.com/comments') 
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok'); 
    }
    return response.json(); 
  })
  .then(comments => {
    console.log(comments); 
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error); 
  });


  fetch('https://jsonplaceholder.typicode.com/albums') 
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok'); 
    }
    return response.json(); 
  })
  .then(albums => {
    console.log(albums); 
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error); 
  });  

  fetch('https://jsonplaceholder.typicode.com/photos') 
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok'); 
    }
    return response.json(); 
  })
  .then(photos => {
    console.log(photos); 
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error); 
  }); 

  fetch('https://jsonplaceholder.typicode.com/todos') 
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok'); 
    }
    return response.json(); 
  })
  .then(todos => {
    console.log(todos); 
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error); 
  }); 

  fetch('https://jsonplaceholder.typicode.com/users') 
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok'); 
    }
    return response.json(); 
  })
  .then(users => {
    console.log(users); 
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error); 
  }); 

