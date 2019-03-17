$(document).ready(function(){
    $('#last').append('<div id=header></div>');
    $('#header').append('FAQS');
    $('#header').css({"font-size":"28pt"});
    $('#header').after('<div id=FAQdropmenu></div>');
    
    $('#FAQdropmenu').append('<div id=questionbox1></div>');
    $('#questionbox1').append('<p>What is Folium?</p>');
    $('#questionbox1').append('<div class=answer></div>');
    $('.answer').append('<p>Fucking Projects</p>');
    
    $('#FAQdropmenu').append('<div id=questionbox2></div>');
    $('#questionbox2').append('<p>Do I have to pay to become a member?</p>');
    $('#questionbox2').append('<div class=answer2></div>');
    $('.answer2').append('<p>Yes you must pay a buttload of money to become a member, or you can enter are freemium content and have access to a blank page to stare at.</p>');
    
    $('#FAQdropmenu').append('<div id=questionbox3></div>');
    $('#questionbox3').append('<p>My region is blocked, is there a way to still become a member?</p>');
    $('#questionbox3').append('<div class=answer3></div>');
    $('.answer3').append('<p>If you region or area has our site blocked it is because WE HAVE DECIDED THE PEONS OF THAT AREA ARE UNWORT*ahem* There is a way around it, MOVE.</p>');
   
    $('#FAQdropmenu').append('<div id=questionbox4></div>');
    $('#questionbox4').append('<p>How handsome is our Project Manager? Dank Memer pls handsome?</p>');
    $('#questionbox4').append('<div class=answer4></div>');
    $('.answer4').append('<p> 3.14159265/10</p>');
    
    $('#FAQdropmenu').append('<div id=questionbox5');
    $('#questionbox5').append('<p> Why do I have to use your website?</p>');
    $('#questionbox5').append('<div class=answer5></div>');
    $('.answer5').append('<p>Because we are the next overlords of the new world. Become apart of it or know despair.</p>');
    
//
//    $('.answer').hide();
//    $('#questionbox1').toggle(
//        function() {
//            $(this).next('.answer').slideDown();
//            $(this).addClass('close');
//        },
//        function() {
//            $(this).next('.answer').fadeout();
//            $(this).removeClass('close');
//        }
//    )
    //end toggle
}); // end ready