let xhr = new XMLHttpRequest();
let data;
 
xhr.addEventListener("load", () => {
    console.log("received data from flickr successfully");
});
//open request
xhr.open('GET', '/photos');
//send request
xhr.send();
 
xhr.onload = () => {
    console.log(`Loaded: ${xhr.status} ${xhr.response}`);
    data = xhr.response;
};
 
xhr.onerror = () => { // only triggers if the request couldn't be made at all
    console.log(`Network Error`);
};