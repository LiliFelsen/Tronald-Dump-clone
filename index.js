$(document).ready(()=>{
  $("#searchButton").on("click",function(){
    getStupidQuotes("#results")
  })
})

function renderQuotes(data) {
  // debugger
  let array = data._embedded.quotes
  for (let i = 0; i < array.length; i++) {
    $('#results').append(`<div class="ui brown message">${array[i].value}<br> - ${array[i].appeared_at.slice(0, 10)}</div>`)
  }
}

function renderError(error) {
  alert("Donald Trump never used that word. Try again!")
}

function getStupidQuotes() {
  let searchItem = $("#searchItem").val()
  let apiUrl = "https://api.tronalddump.io/search/quote?query=" + searchItem

  fetch(apiUrl)
  .then(response => response.json())
  .then(quote => renderQuotes(quote))
  .catch(error => renderError(error))
}



//   $.ajax({ url: apiUrl })
//   .then(function success(data){
//     console.log(data)
//   },function error(err){
//     console.log(err)
//   })
// }
