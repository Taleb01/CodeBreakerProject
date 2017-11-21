let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    //8)
    var input = document.getElementById('user-guess');
    if(answer.value == "" || attempt.value == "") {
        setHiddenFields();
    }

    
    //11)
    if(!validateInput(input.value)){
        return;
    } else {
        attempt.value++;
    }
    
    
    //14) 15) 16) 19)
    if(getResults(input.value)) {
        setMessage('You Win! :)');
        showAnswer(true);
        showReplay();
    } else if(attempt.value >= 10) {
        setMessage('You Lose! :(');
        showAnswer(false);
        showReplay();
    } else {
        setMessage('Incorrect, try again.');
    }
}


//12) 13)checking for correct guess 
 function getResults(input){
    var correct = 0;
    var html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    for(i = 0; i < input.length; i++)
    {
        if(input.charAt(i) == answer.value.charAt(i))
        {
            html += '<span class="glyphicon glyphicon-ok"></span>';
            correct++;
        } else if (answer.value.indexOf(input.charAt(i)) > -1) {
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>';

    document.getElementById('results').innerHTML += html;

    if(correct == input.length) {
        return true;
    } else {
        return false;
    }
}


// 5) 6) 7)
function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 10000).toString();
    while(answer.value.length < 4) {
        answer.value += 0 + answer.value.toString();
    }
    attempt.value = 0; 
}

//9) 
function setMessage(mess){
    document.getElementById('message').innerHTML = mess;
}


//17)
 function showAnswer(success){
    let code = document.getElementById('code');
    if(success) {
        code.className += " success";
    } else {
        code.className += " failure";
    }
    code.innerHTML = answer.value;
}


//18)
 function showReplay(){
    document.getElementById('guessing-div').style.display = "none";
    document.getElementById('replay-div').style.display = "block";
}



//10) 
function validateInput(input) {
    if(input.length != 4) {
        setMessage('Guesses must be exactly 4 characters long.');
        return false;
    } 
    return true;
}