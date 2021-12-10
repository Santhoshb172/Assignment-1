var request = new XMLHttpRequest();
request.open('GET','https://jsonplaceholder.typicode.com/posts','true');
request.send();
request.onload = function ()
 {
    var result = JSON.parse(this.response);
    for (let i = 0; i < result.length; i++) 
    {
        console.log(result[i].id);
    }
}