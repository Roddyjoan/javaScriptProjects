let valid_input = false;
//array to hold values in
let formValues = [];


//validate the userinput and won't allow negative, 0, or non-numbers 
while(!valid_input) {
    max = Math.ceil(Number(window.prompt("What should our maximum number be?")));
    if(max != NaN && max > 0) {
        valid_input = true;
    }
    else {
        alert('That is not a valid entry. Please enter a positive number.');
    }
    
}
//change instructions to guess N 
document.getElementById("instructions").innerHTML = "Choose a number between 1 and " + max;


//generate random number between 1 and N
let randomNum = Math.floor(Math.random() * max) + 1;



//check the user input for guess, then validate the guess 
function do_Guess() {
    let TextValue= Number(document.getElementById("numberGuess").value);
    let message = document.getElementById("message");
   
        if (formValues.includes(" " + TextValue)) {//if there is a duplicate number already in the array, show message and don't push into array 
    
            message.innerHTML = "You have already guessed this number, choose another number!";
           return;

        }

        else if ((TextValue > max) || (TextValue <= 0)) {//if guess is more than the max, negative, or 0 

            message.innerHTML = "That number is not in range, try again";
        }


        else if ((TextValue > randomNum) && (TextValue <= max)) {
            
            message.innerHTML = "No, try a lower number.";
            //add guess to array
            formValues.push(" " + TextValue);
        }

        else if (TextValue <randomNum) {
            
            message.innerHTML = "No, try a higher number.";
            //add guess to array 
            formValues.push(" " + TextValue);
        }

        else if (isNaN(TextValue)) {
           
            message.innerHTML = "That is not a number!";
        }

       
        //when user guesses number correctly 
        else if (TextValue == randomNum) {
            
            //added "and" to make it better aesthetically
            formValues.push(" " + TextValue);

            //optionally
            //message.innerHTML = ("You got the number! It took you " + (formValues.length) + " tries and your guesses were" + formValues);

            alert("You got the number! It took you " + (formValues.length) + " tries and your guesses were" + formValues + " . Press Ok to Start Over.");
            location.reload();
            
        }
}
