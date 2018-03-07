var d1="";
function getData(){
 var xmlHttp = new XMLHttpRequest();
 var search=document.getElementById("find").value;
 //var btn=`<input type="button" value="Show Favourites" onClick="display()">`;
 //document.write(btn);
 var url ="https://api.themoviedb.org/3/search/movie?api_key=628feb1e5d19aa715bd6f0824546c81d&query="+search;
 xmlHttp.open("GET",url, true);
 xmlHttp.send();
 var x="";
 var head="";

 
 xmlHttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        var myArr= JSON.parse(this.responseText);
        //var dataObj= JSON.stringify(myArr);
        //document.write("title:"+myArr.page);
        //document.write(dataObj);
        len=myArr.results.length;
        
            head=`<h3 id="output"></h3>
 	        <h1>${search}</h1>
 	        <br><h2>Total Results: ${len}</h2>`;           	
       
        for (i in myArr.results) {
        	head+= 
               `<hr>
        	    <h3>Title: ${myArr.results[i].title}</h3>
        	    <h3>Release Date: ${myArr.results[i].release_date}</h3>
        	    <h3>Rating: ${myArr.results[i].vote_average}</h3>
        	    <h3>Overview: ${myArr.results[i].overview}</h3>
                <input type="button" value="Add To Favourites" onClick="addFavourite('${myArr.results[i].title}' ,'${myArr.results[i].release_date}' ,'${myArr.results[i].vote_average}')" />
        	    <hr>`;
        	
         };
         document.getElementById("out").innerHTML=head;	
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
	    	 d1+=`<h1>Favourites</h1><br>`;
	    	for(var i in myArr.output)
	    		{
	    		d1+= `${myArr.output[i]}<br>`	
	    }}
	    document.getElementById("output").innerHTML=d1;	
	};
	
}

