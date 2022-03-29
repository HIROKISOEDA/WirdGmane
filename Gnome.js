player_name_1 = localStorage.getItem("doorman");
player_name_2 = localStorage.getItem("tourman");

player_score_1 = 0;
player_score_2 = 0;

document.getElementById("player1name").innerHTML = player_name_1 + " : ";
document.getElementById("player2name").innerHTML = player_name_2 + " : ";

document.getElementById("player1score").innerHTML = player_score_1;
document.getElementById("player2score").innerHTML = player_score_2;

document.getElementById("playerquestion").innerHTML = "Question turn : " + player_name_1
document.getElementById("playeranswer").innerHTML = "Answer Turn : " + player_name_2

function send(){
    get_word = document.getElementById("word").value

    word = get_word.toLowerCase(); 
    console.log("word in lowerCase = " + word);

    letter1 = word.charAt(1);
    console.log(letter1);

    centerposition = Math.floor(word.length/2);
    letter2 = word.charAt(centerposition);
    console.log(letter2);


    lastposition = word.length - 1;
    letter3 = word.charAt(lastposition); 
    console.log(letter3);

    remove_charAt1 = word.replace(letter1, "_");   
    remove_charAt2 = remove_charAt1.replace(letter2, "_");
    finalword = remove_charAt2.replace(letter3, "_");
    console.log(finalword);

    question_word = "<h4 id='word_display'> Q. "+finalword+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row =  question_word + input_box + check_button ; 

    document.getElementById("output").innerHTML = row;

    document.getElementById("word").value = " ";
}

question_turn = "player_1"
answer_turn = "player_2"
function check(){
    get_answer = document.getElementById("input_check_box").innerHTML
    answer = get_answer.toLowerCase()
    console.log(answer)
    if(answer == word){
        console.log(test)
        if(answer_turn == "player_1"){
            player_score_1 = player_score_1 + 1;
            document.getElementById("player1score").innerHTML = player_score_1
        }
        else{
            player_score_2 = player_score_2 + 1;
            document.getElementById("player2score").innerHTML = player_score_2
        }
    }
    if(answer_turn == "player_1"){
        answer_turn = "player_2"
        document.getElementById("playeranswer").innerHTML = "Answer Turn : " + player_name_2 
    }
    else{
        answer_turn = "player_1"
        document.getElementById("playeranswer").innerHTML = "Answer Turn : " + player_name_1
    }
    if(question_turn == "player_1"){
        question_turn = "player_2"
        document.getElementById("playerquestion").innerHTML = "Question Turn : " + player_name_2 
    }
    else{
        question_turn = "player_1"
        document.getElementById("playerquestion").innerHTML = "Question Turn : " + player_name_1
    }
    document.getElementById("output").innerHTML
}