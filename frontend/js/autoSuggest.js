//  "https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8
var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";

var searchBar = document.getElementById("searchBar");
var searchSuggestions = document.getElementById("search-suggestions");
// what all the functions we are doing when user types in the search bar.
// 1.get the data 
//2.use usertype in the url to get the data from the api
// 3.call Api
//4.append the data to the search-suggestions to div tag in UI
searchBar.addEventListener("input",function(){
    var query = searchBar.value.trim();
    console.log("query:",query);
    fetchSuggestions(query);
})

function fetchSuggestions(query){
    var fullAPI = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch (fullAPI)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        showSuggestions(data);
        return;
    })
    .catch(function(err){
        console.log("Error:"+ err);
    })
}

function showSuggestions(data){
 var values = data.results;
 if(data.count ==0){
    searchSuggestions.innerHTML = "<div> no matching results </div>";
 }else{
    var htmlString ="";
    for(var i=0;i<values.length;i++){
        htmlString += "<div>" +values[i].text+ "</div>";    
    }
    searchSuggestions.innerHTML = htmlString;
}
}