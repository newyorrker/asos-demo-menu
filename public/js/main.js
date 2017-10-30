document.addEventListener("DOMContentLoaded", function() {

	var dropDown = document.querySelector('.drop-down');
	var flagWrap = document.querySelector('.flag-wrap');
	var dropDownInner = document.querySelector('.drop-down__inner');
	var getStyle = window.getComputedStyle(dropDownInner);
	var innerStyle = dropDownInner.style;

	dropDown.addEventListener("mouseleave", function(e) {
		if (getStyle.display == "block") {
			setTimeout(function () {innerStyle.height = "0"}, 200);
		}
	});

	flagWrap.addEventListener('click', function(e){
		if (getStyle.height == "0px") {
			innerStyle.height = "329px";
		}
		else if (getStyle.height == "329px") {
			innerStyle.height = "0px";
		}

	});	
	
});
// $(document).ready(function(){


// });

