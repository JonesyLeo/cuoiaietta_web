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
	
	
	
	$("#alza").click( function(){
	
		if( $("body").hasClass("tentativi_full") ){
			// already full
		}
		else if( $("body").hasClass("tentativi_normal") ){
			$("body").removeClass("tentativi_normal").addClass("tentativi_full")
		}
		else if( $("body").hasClass("tentativi_closed") ){
			$("body").removeClass("tentativi_closed").addClass("tentativi_normal")
		}
		
		// scroll all'ultima riga
		$("#testocommedia_container").animate({ scrollTop: $("#testocommedia").height() }, 1100);
		

	});
	
	
	$("#abbassa").click( function(){
	
		if( $("body").hasClass("tentativi_full") ){
			$("body").removeClass("tentativi_full").addClass("tentativi_normal")
		}
		else if( $("body").hasClass("tentativi_normal") ){
			$("body").removeClass("tentativi_normal").addClass("tentativi_closed")
		}
		else if( $("body").hasClass("tentativi_closed") ){
			// already closed
		}

	});	
	
	
	$("#librotoggle").on("click", function () {
	   $("#menulibro").toggleClass("aperto");
	});
	
	$("#dantetoggle").on("click", function () {
	   $("#menudante").toggleClass("aperto");
	});	
	
	
	
	$("#inputverso").keyup(function(e) { 
		
		$("#testocommedia_container").animate({ scrollTop: $("#testocommedia").height() }, 0);
		$("#nuovoverso").text( $(this).val() );
		
    }).on("click", function () {
	   
	   $(this).select();
	
	});
		
	
	

});



function init(){
	
	// scroll all'ultima riga
			$("#testocommedia_container").animate({ scrollTop: $("#testocommedia").height() }, 1100);
	
		
}



