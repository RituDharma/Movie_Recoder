function getData(){
 var xmlHttp = new XMLHttpRequest();
 var search=document.getElementById("find").value;
 document.write("<h1>"+search);
 var url ="https://api.themoviedb.org/3/search/movie?api_key=628feb1e5d19aa715bd6f0824546c81d&query="+search;
 xmlHttp.open("GET",url, true);
 xmlHttp.send();
 var x="";
 
 xmlHttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        var myArr= JSON.parse(this.responseText);
        //var dataObj= JSON.stringify(myArr);
        //document.write("title:"+myArr.page);
        //document.write(dataObj);
        len=myArr.results.length;
        document.write("<br>Total Results:"+len);
        document.write("<hr>");
        for (i in myArr.results) {
        	x += "<h3>Title: " + myArr.results[i].title+ "</h3>";
        	x += "<h3>Release Date: " + myArr.results[i].release_date+ "</h3>";
        	x += "<h3>Rating: " + myArr.results[i].vote_average+ "</h3>";
        	x += "<h3>Overview: " + myArr.results[i].overview+ "</h3>";
        	x += "<button></button>";
        	x += "<hr>";
        	document.write(x);   
         };  
     }
  }
}
/*function Favorite(detail)
{
	var obj = JSON.parse(detail);
	
}*/
