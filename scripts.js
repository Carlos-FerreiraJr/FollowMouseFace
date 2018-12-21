var moveForce = 110; 
var rotateForce = 100; 

$(document).mousemove(function(e) {
    var docX = $(document).width();
    var docY = $(document).height();
        
    $(e.pageX).html("<span>ootorjpofjewijpejf<span>");
    
    $('#calculo').html('pagina em x'+docX+"<br>"+ "pagina em Y"+docY+'<br>'+'calculo em x '+ e.pageX/docX+"<br>"+"calculo em y"+ e.pageY/docY);
    
    var translateX = (e.pageX / docX * rotateForce*2)- moveForce;
    var translateY = (e.pageY / docY * rotateForce*2)- moveForce;
    
    $('.circle')
    .css('transform', 'translateX('+translateX+'%) translateY('+translateY+'%)');
});


// $(document).click(function(e){
//     // $('#title').html("recording");
//     $('#title').html("writting...");
// });

