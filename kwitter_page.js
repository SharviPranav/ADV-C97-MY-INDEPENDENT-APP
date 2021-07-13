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

function getData() { firebase.database().ref("/"+room_names).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like"+like+"</span> </button> <hr>";  

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML=row;

//End code
      } });  }); }
getData();
function updateLike(message_id) {
       console.log("clicked on like button - " + message_id);
        button_id = message_id; likes = document.getElementById(button_id).value;
         updated_likes = Number(likes) + 1; 
         console.log(updated_likes);
          firebase.database().ref("/"+room_names).child(message_id).update({ like : updated_likes }); }
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref("/"+room_names).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";


      
      function logout(){
            localStorage.removeItem("Room name");
            localStorage.removeItem("username");
            window.location="index.html";
      }
}