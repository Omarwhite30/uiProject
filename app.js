let url = "https://api.breakingbadquotes.xyz/v1/quotes"



let contentText = document.querySelectorAll(".quotes")
contentText.forEach((content) => {
  function fetchApi() {
    fetch(`${url}`)
    .then((res) => 
    res.json())
    .then((data) =>
      content.innerHTML = data[0].quote + data[0].author
      // console.log(data[0].quote)
      );
    
  }
  fetchApi();
  })
  
