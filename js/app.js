const imgBox = gsap.utils.toArray('.imgBox')
imgBox.forEach((img, i) => {
	ScrollTrigger.create({
		trigger: img,
		toggleClass: 'active',
		start: 'top 90%',
		end: 'top 10%'
	})
})