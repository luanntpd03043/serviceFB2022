$(function() {

    var inWrap = $('.inner-wrapper'),
    $slide = $('.slide');
  
  
    function slideNext() {
  
      inWrap.animate({left: '-200%'}, 200, function() {
    
        inWrap.css('left', '-100%');
    
        $('.slide').last().after($('.slide').first());
    
      });
    
    }
  
  
     //Enabling auto scroll
     sliderInterval = setInterval(slideNext, 4500);
  
  
  
    $('.prev').on('click', function() {
  
      inWrap.animate({left: '0%'}, 200, function() {
  
        inWrap.css('left', '-100%');
  
        $('.slide').first().before($('.slide').last());
  
      });
    });
  
  
    $('.next').on('click', function() {
  
      clearInterval(sliderInterval);
  
      slideNext();
  
    });
  
  
  });


  /* smooth scroll
------------------------------------------ */
{
	const button = document.querySelectorAll('a.smoothScroll');
	for (let i = 0; i < button.length; i++) {
		let targetName = button[i].getAttribute('href'),
			targetPos = 0,
			offset = 0;

		button[i].addEventListener('click', (e) => {
			e.preventDefault();
			if (targetName !== '#') {
				offset = isSP ? 160 : 100;
				targetPos = document.getElementById(targetName.slice(1)).getBoundingClientRect().top + window.pageYOffset;
			}
			anime({
				targets: 'html, body',
				scrollTop: targetPos - offset,
				duration: 500,
				easing: 'easeOutSine',
			});
		});
	}
}