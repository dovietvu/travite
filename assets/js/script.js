
$(document).ready(function(){
	$(".search").click(function(){
		$('.txt').toggleClass('t');
	});
	$(".search").click(function(e) {
    if ( $(".txt").val().length <=0 ) {
      e.preventDefault();
    }
  });


	$('.bar i').click(function(){
		$('ul').toggleClass('active');
		$('#hero').find('*').toggle();
	});

	
	/*click main-menu li hien sub-menu*/
	$("ul.main-menu li").hover(function(){
		$(this).siblings().removeClass("active");
		$(this).toggleClass("active");
	});


	$("ul.main-menu li").click(function(){
		$(this).siblings().removeClass("open");  ///mobile
		$(this).toggleClass("open");
	});
	

	$("#hero").click(function() {
		$("ul li").removeClass('open');
	});
		  $("#myCarousel").carousel({interval: 2000});
		  // Enable Carousel Indicators
		  $(".item1").click(function(){
		    $("#myCarousel").carousel(0);
		  });
		  $(".item2").click(function(){
		    $("#myCarousel").carousel(1);
		  });
		  $(".item3").click(function(){
		    $("#myCarousel").carousel(2);
		  });


		  //carousel-client
		   $("#carousel-card").carousel(false);
		  	$(".prev").click(function(){
	    	$("#carousel-card").carousel("prev");
	 		 });
	  		$(".next").click(function(){
	    	$("#carousel-card").carousel("next");
	  		});
	  		//end-client
	  	
	  	
	  	//carousel-banner
	  	 $("#carousel-banner").carousel({interval: 2000});
		  // Enable Carousel Indicators
		  $(".item1").click(function(){
		    $("#carousel-banner").carousel(0);
		  });
		  $(".item2").click(function(){
		    $("#carousel-banner").carousel(1);
		  });
		  $(".item3").click(function(){
		    $("#carousel-banner").carousel(2);
		  });
	  	//end-banner
});


