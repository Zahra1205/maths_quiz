
function AddUser(){
    var player1_name =document.getElementById("player 1_input").value;
    var player2_name= document.getElementById("player 2_input").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location="game_index.html";
}
