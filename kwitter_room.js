
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCL5ll5HDlcjQIu8NJgMMnHDLglrR03T_o",
      authDomain: "kwitter-346ab.firebaseapp.com",
      databaseURL: "https://kwitter-346ab-default-rtdb.firebaseio.com",
      projectId: "kwitter-346ab",
      storageBucket: "kwitter-346ab.appspot.com",
      messagingSenderId: "923921407280",
      appId: "1:923921407280:web:b3d96bbe3c5f6dff5ffcf5",
      measurementId: "G-2QMT7M3QYV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='roomname' id="+room_names+" onclick='redirect_To_room_name(this.id)'>"+room_names+"</div> <hr>"
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
 function add_room_name(){
       room_names=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_names).update({
            purpose:"adding Room_name"
       });
       localStorage.setItem("room_name",room_names)
      window.location="kwitter_page.html";
 }

 function redirect_To_room_name(name){
localStorage.setItem("Room name" , name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("Room name");
      localStorage.removeItem("username");
      window.location="index.html";
}