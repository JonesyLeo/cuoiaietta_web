// JavaScript Document

$(document).ready(function(e) {
  
  	init();
  	// AZIONI AL CARICAMENTO DELLA PAGINA
  

	// evidenziamento numero riga
	$("#testocommedia").on( "mouseenter", "td", function() {
	  $(this).parent().addClass("numerovisibile");
	}).on( "mouseleave", "td", function() {
	  $(this).parent().removeClass("numerovisibile");
	});
	
	
	
	$("#allargacommedia").click( function(){
	
		if( $("#testocommedia_container").hasClass("alto") ){
			$("#testocommedia_container").removeClass("alto");
			
			$("#testocommedia_container").animate({ scrollTop: $("#testocommedia").height() }, 1100);
			
			$("#tentativi").removeClass("chiuso");
			$(this).html("&#8691;");
		}
		else {
			$("#testocommedia_container").addClass("alto");
			$("#tentativi").addClass("chiuso");
			$(this).html("&#8686;");
		}
		
	});
	
	
	$("#allargatentativi").click( function(){
	
		if( $("#tentativi").hasClass("esteso") ){
			$("#tentativi").removeClass("esteso");
			
//			$("#testocommedia_container").animate({ scrollTop: $("#testocommedia").height() }, 1100);
			
			$("#testocommedia_container").removeClass("chiuso");
			$(this).html("&#8691;");
		}
		else {
			$("#tentativi").addClass("esteso");
			$("#testocommedia_container").addClass("chiuso");
			$(this).html("&#8686;");
		}
		
	});
	
	
	
	$("#inputverso").keyup(function(e) {
        
        
		$("#testocommedia_container").animate({ scrollTop: $("#testocommedia").height() }, 0);
		
		$("#nuovoverso").text( $(this).val() );
		
    });
	
	
	
	

});



function init(){
	
	// scroll all'ultima riga
			$("#testocommedia_container").animate({ scrollTop: $("#testocommedia").height() }, 1100);
	
		
}



