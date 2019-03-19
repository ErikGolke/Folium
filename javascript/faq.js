$(document).ready(function() {
//    $('#question1').click(function(e) {
//            e.preventDefault();
//            $('.answer').show();
//            $('.answer').hide();
//        });  
    $('#question1').click(function(){
        $('#answer1').fadeToggle();
    });
    
    $('#question2').click(function(){
        $('#answer2').fadeToggle();
    });
    
    $('#question3').click(function(){
        $('#answer3').fadeToggle();
    });
    
    $('#question4').click(function(){
        $('#answer4').fadeToggle();
    });
    
    $('#question5').click(function(){
        $('#answer5').fadeToggle();
    });
    
});