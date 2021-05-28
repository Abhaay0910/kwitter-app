var firebaseConfig = {
      apiKey: "AIzaSyAkWn5fkQF4TgUNDtuotV4tsnDWb4z-fNQ",
      authDomain: "tic-tac-toe-11159.firebaseapp.com",
      databaseURL: "https://tic-tac-toe-11159-default-rtdb.firebaseio.com",
      projectId: "tic-tac-toe-11159",
      storageBucket: "tic-tac-toe-11159.appspot.com",
      messagingSenderId: "677698091114",
      appId: "1:677698091114:web:b2f68f742dede892ca7213",
      measurementId: "G-DL1GCLQL19"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
