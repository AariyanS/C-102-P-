var firebaseConfig = {
    apiKey: "AIzaSyAzyUQ1uid3wCfz-PomEvKMQH_78eUjNGM",
    authDomain: "c100project-444ce.firebaseapp.com",
    databaseURL: "https://c100project-444ce-default-rtdb.firebaseio.com",
    projectId: "c100project-444ce",
    storageBucket: "c100project-444ce.appspot.com",
    messagingSenderId: "1092366358205",
    appId: "1:1092366358205:web:6f44cc875b52ecb09449d4",
    measurementId: "G-1LTQ6CMRCT"
};

firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}

row = "<div class='room_name'> id="+ Room_names +"</div><hr>";



