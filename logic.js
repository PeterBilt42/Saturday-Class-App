
$("#searchButton").on("click", function() {
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json&query=" + search + "&api-key=82430d33598a4b5eb257ecac230cd536";	
var search = "india";

$.ajax({
	url: url,
	method: "GET",
}).done(function(result){
	console.log(result);
})
});

