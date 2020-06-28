$(document).ready (function() {
    var magicBall = {};
    $("#answer").hide();
        
    magicBall.answer = ['Yes', 'No', 'Maybe', 'Not in a million years', 'Try again', 'Absolutely!', 'It\'s possible, but not likely', 'Sure…..?'];
            
    magicBall.magicBallWork = function(question) {
    //switch to answer side
	$("#8ball").effect("shake");
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

    $("#answer").fadeIn(4000);

    var a = Math.random();
    var b = a * (this.answer).length; 
    var answerIndex = Math.floor(b);
    var response = this.answer[answerIndex];
    $("#answer").text(response);

    console.log(question);
    console.log(response);
    };
        
    var questionButton = function() {
        $("#answer").hide();

        //switch to "8" side
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
		
        //allow time for "8" to load
        setTimeout(
            function() {
            var question = prompt("Please enter a yes or no question:");
            magicBall.magicBallWork(question);
        }, 500);	
    };

    $("#questionButton").click(questionButton);	

    });
    