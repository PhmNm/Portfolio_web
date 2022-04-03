$(function(){

	$(window).scroll(countAnimation);
	var viewed = false;

	function isScrolledIntoView(elem) {
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	
	//Hiệu ứng smoothly
	$(".back-to-top").click(function(event) {
		/* Act on the event */
		//Về home và có hiệu chậm chậm
		$("html").animate(
		{
			scrollTop: 0
		},
		2000
		);

	});

	//Click trên menu, sẽ target đến id tương ứng
	$('header .mogo-menu ul li a').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    if (target) {
		    $target = $(target);

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 500, 'swing', function () {
		        window.location.hash = target;
		    });
	    }
	});

});

$(window).scroll(function () {
  // Ẩn hiện menu
  if ($(this).scrollTop() >= $("#complication").offset().top) {
    var height = $("header .mogo-menu").height();
    $("header .mogo-menu").addClass("mogo-fixed-menu");
    $("body").css("padding-top", height + "px");
  } else {
    $("header .mogo-menu").removeClass("mogo-fixed-menu");
    $("body").css("padding-top", 0);
  }

  // Back to top ẩn/hiện
  if ($(this).scrollTop()) {
    //chưa phải ở top
    $(".back-to-top").fadeIn();
  } else {
    //đã ở top
    $(".back-to-top").fadeOut();
  }
});
