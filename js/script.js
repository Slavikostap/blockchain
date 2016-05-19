//Change sidebar width to 4 col	and Main container to 8
   if ($(window).width() < 768) {
       $(".block1 .row div").removeClass( "col-xs-3" ).addClass( "col-xs-6" );
       $("#mywallet .col-sm-3 ").removeClass( ".col-sm-3" ).addClass( "hide1" );	
   }


   $('.hide1').click(function() {
    if($(window).width()<768){
    	 if($('#mywallet .hide1').css('left') == '0px'){
    		$('#mywallet .hide1').animate({ "left": "-220px" }, "slow" )
    	 }
    	 else{
    		$('#mywallet .hide1').animate({ "left": "0px" }, "slow" )	 	
    	 } 
    }
   })

$( window ).resize(function() {
   if ($(window).width() < 768) {
       $(".block1 .row div").removeClass( "col-xs-3" ).addClass( "col-xs-6" );	
       $("#mywallet .col-sm-3 ").removeClass( ".col-sm-3" ).addClass( "hide1" );	
   	}
   	else {
   		$(".block1 .row div").removeClass( "col-xs-6" ).addClass( "col-xs-3" );
   		$("#mywallet .col-sm-3 ").removeClass( "hide1" );	
   	}
})


$('#mobile_menu').click(function() {
    $(".mobile_bars").toggleClass("active");
    $(".header_top_right .m_menu").slideToggle();
})



    jQuery(window).resize(function () {
      var width = jQuery(window).width();
      var documentWidth = jQuery(document).width();
      console.log(width);
    })

//Open and close accordion on FAQ (changing classes)
$('.panel-heading').click(function() {
  if ( $( this ).hasClass( "activePanel" ) ) {
    $('.panel-heading').removeClass("activePanel");
    $("span.plus", '.panel-heading').html("+");
  } else{
    $('.panel-heading').removeClass("activePanel");
    $("span.plus", '.panel-heading').html("+");
    $(this).addClass("activePanel");
    $("span.plus", this).html("-");
  }    
})








