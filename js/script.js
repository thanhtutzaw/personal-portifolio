$(document).ready(function(){
	$win = $(window);
	$header = $('#header');
	$toggle_btn = $('.toggle-button');
	var width = $header.width();

	toggle_onclick($win,$header,width);

	$win.resize(function(){
		toggle_onclick($win,$header,width);
	})

	$toggle_btn.click(function(){
		$header.toggleClass('toggle-left');
	})
})

function toggle_onclick($win,$header,width){
	if ($win.width() < 768) {
		// $header.css({left:"-200px"});
		$header.css({left: '-'+width+'px'});
	}
	else{
		$header.css({left:"0px"});
	}
}



var typed = new Typed('#typed',{
	strings:['Web Developer','Freelancer'],
	typeSpeed:70,backSpeed:80,loop:true
});
var typed = new Typed('#typed2',{
	strings:['Web Developer','Freelancer'],
	typeSpeed:70,backSpeed:80,loop:true
});