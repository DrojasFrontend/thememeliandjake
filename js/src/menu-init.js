import $ from "jquery";

$("[data-toggle-menu]").on("click", function () {
	$("[data-menu-mobile]").toggleClass("active");
});

$("[data-close-menu]").on("click", function () {
	$("[data-menu-mobile]").removeClass("active");
	$(".customHeader li").removeClass("active");
});

$(".customHeaderMobile li a").on("click", function () {
	$("[data-menu-mobile]").removeClass("active");
	$(".customHeader li").removeClass("active");
});

let $scrollHeader = $(".scrolledHeader");
let $scrollMenu = $(".customHeaderDesktop");
let $scrollMenuLogo = $(".scrolledMenuLogo");

$(window).scroll(function () {
	// Obtener la sección customSectionHero
	let $heroSection = $('.customSectionHero');
	
	// Solo ejecutar si el elemento existe
	if ($heroSection.length > 0) {
		let heroSectionOffset = $heroSection.offset();
		
		// Verificar que el offset existe
		if (heroSectionOffset) {
			let heroSectionTop = heroSectionOffset.top;
			let heroSectionHeight = $heroSection.outerHeight();
			let heroSectionEnd = heroSectionTop + heroSectionHeight;
			let currentScroll = $(this).scrollTop();
			
			// Agregar clase 'scrolled' cuando el scroll llegue al final de la sección hero
			if (currentScroll >= heroSectionEnd) {
				$scrollHeader.addClass("scrolled");
				$scrollMenu.removeClass("col-lg-6");
				$scrollMenuLogo.removeClass(["w-0", "opacity-0"]);
			} else {
				$scrollHeader.removeClass("scrolled");
				$scrollMenu.addClass("col-lg-6");
				$scrollMenuLogo.addClass(["w-0", "opacity-0"]);
			}
		}
	}

	let $opacityDiv = $('.opacityDiv');
	
	if ($opacityDiv.length > 0) {
		let scrollTop = $(this).scrollTop();
		
		// Primer div (más cerca)
		let $firstDiv = $opacityDiv.eq(0);
		let startFade1 = 10;
		let endFade1 = 200;
		let opacity1 = 1;
		
		if (scrollTop > startFade1) {
			opacity1 = 1 - (scrollTop - startFade1) / (endFade1 - startFade1);
			if (opacity1 < 0) opacity1 = 0;
			if (opacity1 > 1) opacity1 = 1;
		}
		
		$firstDiv.css('opacity', opacity1);
		
		// Segundo div (si existe)
		if ($opacityDiv.length > 1) {
			let $secondDiv = $opacityDiv.eq(1);
			let startFade2 = 250;
			let endFade2 = 400;
			let opacity2 = 1;
			
			if (scrollTop > startFade2) {
				opacity2 = 1 - (scrollTop - startFade2) / (endFade2 - startFade2);
				if (opacity2 < 0) opacity2 = 0;
				if (opacity2 > 1) opacity2 = 1;
			}
			
			$secondDiv.css('opacity', opacity2);
		}
	}
});