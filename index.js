$("#form").submit(function (e){
  e.preventDefault()

  var query = $("#search").val() 

  let result = ' '

  var API_KEY = '79f1c299d8d072474e350c7da639de25'

  var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type= web&query=' + query
  console.log(url)

$.get(url , function  (data){
  $("#result").html(' ')
  console.log(data)

data.organic_results.foeEach(res => {
   result = '  <h1>${res.title}</h1><br> <a target="_blank" href="${res.url}">${res.url}</a> <p>${res.snippet}</p>'


$("#result").appand(result)

});

})


})