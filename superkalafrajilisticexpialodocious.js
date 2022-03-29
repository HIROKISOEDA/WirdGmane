function addUser(){
    player_1_name = document.getElementById("input_1").value
    player_2_name = document.getElementById("input_2").value

    localStorage.setItem("doorman", player_1_name)
    localStorage.setItem("tourman", player_2_name)

    window.location = "game.html"
}
