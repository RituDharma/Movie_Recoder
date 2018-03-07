var d1="";
function getData(){
 var xmlHttp = new XMLHttpRequest();
 var search=document.getElementById("find").value;
 var btn=`<input type="button" value="Show Favourites" onClick="display()" id="show">`;
 document.write(btn);
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
       
        for (i in myArr.results) {
        	/*x += "<h3>Title: " + myArr.results[i].title+ "</h3>";
        	x += "<h3>Release Date: " + myArr.results[i].release_date+ "</h3>";
        	x += "<h3>Rating: " + myArr.results[i].vote_average+ "</h3>";
        	x += "<h3>Overview: " + myArr.results[i].overview+ "</h3>";
        	x += "<input type='button' value='Add To Favourites' onClick='addFavourite("+"'"+myArr.results[i].title+myArr.results[i].release_date+myArr.results[i].vote_average+"'"+")' />"
        	x += "<hr>";*/
        	x= 
        	`<h3 id="not"></h3>
        	<h1>${search}</h1>
        	<br>Total Results: ${len}
            <hr>
        	<h3>Title: ${myArr.results[i].title}</h3>
        	<h3>Release Date: ${myArr.results[i].release_date}</h3>
        	<h3>Rating: ${myArr.results[i].vote_average}</h3>
        	<h3>Overview: ${myArr.results[i].overview}</h3>
            <input type="button" value="Add To Favourites" onClick="addFavourite('${myArr.results[i].title}' ,'${myArr.results[i].release_date}' ,'${myArr.results[i].vote_average}')" />
        	<hr>`;
        	document.write(x); 	
         };          
     }
    
  }

}

function addFavourite(title,rdate,avgvote){
		var xmlHttp = new XMLHttpRequest();
		var url="http://localhost:8081/AmazonPrime/favourite?title="+title+"&rdate="+rdate+"&avgvote="+avgvote;
		xmlHttp.open("GET",url, true);
		xmlHttp.send();
}
function display(){
	var xmlHttp = new XMLHttpRequest();
	console.log("hii");
	var url ="http://localhost:8081/AmazonPrime/display";
	 xmlHttp.open("GET",url, true);
	 xmlHttp.send();
	xmlHttp.onreadystatechange = function() {
	    if(this.readyState == 4 && this.status == 200){
	    	 var myArr= JSON.parse(this.responseText);
	    
	    	/*release=myArr.release;
	    	 rating=myArr.rating;*/
	    	 /*d1 = document.getElementById("not");
	    	 for(var i in myArr.length){
	    		 d1.insertAdjacentHTML('afterend',myArr.output[i]);
	    		
	    	 }*/
	    	// d1=document.getElementById("not");
	    	 d1="favourites:";
	    	for(var i in myArr.output)
	    		{
	    		d1+= `${myArr.output[i]} <br>`
	    }}
	    document.getElementById("not").innerHTML=d1;	
	};
	
}

