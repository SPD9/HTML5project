
function createLink() {
 var url = prompt("Enter URL: ", "http://");
 if(url)
 document.execCommand("createlink", false, url);
}