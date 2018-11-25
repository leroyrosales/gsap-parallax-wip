

	var bgImage = document.getElementById('bg-image'),
		dude = document.getElementById('dude'),
		scrollLine = document.getElementById('scroll-line'),
		scrollDown = document.getElementById('scrolldown'),
		titleMain = document.getElementById('title-main')

	// Animate in
	var tlLoader = new TimelineMax();

	tlLoader
		.from(titleMain, 2, {autoAlpha:0})
		.from(scrollLine, 0.5, {scaleY:0, transformOrigin: "center top", ease:Power1.easeout},
			'-=2')
		.from(bgImage, 2, {autoAlpha:0, scale: 1.5, ease:Power1.easeout}, '-=2')
		.from(dude, 2, {autoAlpha:0, scale: 1.5, ease:Power1.easeout}, '-=1.5')

	// Scroll starts
	var controller = new ScrollMagic.Controller();

	var tlMainScroll = new TimelineMax()
		.add([
			TweenMax.to(dude, 4, {scale:2, y: 150, x: "-45%", ease:Power1.easeInOut}),
			TweenMax.to(titleMain, 1, {autoAlpha:0}),
			TweenMax.to(bgImage, 4, {scale:2, ease:Power1.easeInOut})

		]);

	// Pin the scene
	var tweenHome = new ScrollMagic.Scene({
		triggerElement: '.pin-scene',
		triggerHook: 0,
		duration: '130%',
	})
	.setTween(tlMainScroll)
	.setPin('.pin-scene')
	.addTo(controller);


	// Scroll Out
	var tlMainScrollOut = new TimelineMax()
		.add([
			TweenMax.to(bgImage, 8, {autoAlpha:0}),
			TweenMax.from('.section2', 4, {autoAlpha:0}),
			TweenMax.to(dude, 8, {autoAlpha:0})
		]);

	var section2 = new ScrollMagic.Scene ({
		triggerElement: '.section2',
		triggerHook: 0,
		duration: '40%'})
	.setTween(tlMainScrollOut)
	.setPin('.section2')
	.addTo(controller);

	var tweenAnimIn = new TimelineMax()
		tweenAnimIn
		.from('#laptop', 2, {y:-600, autoAlpha:0, ease:Power2.easeout})
		.from('#coffee', 2, {x:600, autoAlpha:0, ease:Power2.easeout}, "-=1")
		.from('#desk-plant', 2, {x:-600, autoAlpha:0, ease:Power2.easeout}, "-=1")
		.from('#smartphone', 2, {x:600, autoAlpha:0, ease:Power2.easeout}, "-=2")
		.from('#papers', 2, {y:-600, autoAlpha:0, ease:Power2.easeout}, "-=1")
		.from('#working-headline', 1, {autoAlpha:0, ease:Power2.easeout})

	// build scene

	var scrollScene = new ScrollMagic.Scene({
		triggerElement: '.big-desktop',
		triggerHook: 0,
		duration: '100%'
	})
	.setTween(tweenAnimIn)
	.setPin('.pin-desktop')
	.addTo(controller);

	// Playing with potential scrolling out animation
	// var scrollOutAnim = new TimelineMax()
	// 	.add([
	// 		TweenMax.to('.laptop', 1, {y:-600, autoAlpha:0}),
	// 		TweenMax.to('.coffee', 1, {y:-450, autoAlpha:0}),
	// 		TweenMax.to('.desk-plant', 1, {y:-300, autoAlpha:0}),
	// 		TweenMax.to('.smartphone', 1, {y:-500, autoAlpha:0}),
	// 		TweenMax.to('.papers', 1, {y:-100, autoAlpha:0}),
	// ]);

	// var scrollOutScene = new ScrollMagic.Scene({
	// 	triggerElement: '.scrollout-desktop',
	// 	triggerHook: 0,
	// 	duration: '100%'
	// })
	// .setTween(scrollOutAnim)
	// .setPin('.scrollout-pin')
	// .addTo(controller);



