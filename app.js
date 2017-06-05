$(document).ready

$(function(){

	var startYear = ""; // from HTML, we will append 01/01
	var endYear = ""; // from HTML, we will append 12/31
	var numRecords = 0; 
	var searchTerm = "";
	var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm +"&begin_date=" + startYear + "&end_date=" + endYear + "&sort=oldest&api-key=9a1dd1dbb48a4ba38d9b96c863920761";

$.ajax({
	url: queryUrl;
	method: "GET";
	console.log(queryUrl);
})
});	