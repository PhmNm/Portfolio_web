$(function(){
	//Click trên menu, sẽ target đến id tương ứng
	$('header  a').on('click',function (e) {
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
jQuery(window).load(function() {


     $('.carousel').carousel('pause');
  
 });