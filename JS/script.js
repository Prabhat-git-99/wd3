$(document).ready(function (){
    $('#toggle-btn').click(function(){
        $('.nav-links').slideToggle(1000);
    })
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll>=70){
            $('#nav').addClass("new-nav");
        }
        else{
            $('#nav').remove("new-nav");
        }
    })
    $('nav a').click(function(link){
        link.preventDefault();
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop : $(target).offset().top
        },"slow");
    })
    //accordion
    $( function() {
        $( "#accordion" ).accordion({
            animate: 1000
        });
        $( "#p-bar-1" ).progressbar({
            value: 80
          });
          $( "#p-bar-2" ).progressbar({
            value: 88
          });
          $( "#p-bar-3" ).progressbar({
            value: 50
          });
          $( "#p-bar-4" ).progressbar({
            value: 80
          });
    });
})