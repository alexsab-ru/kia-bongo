const btns = document.querySelectorAll('.characteristics-toggle-btn');

btns.forEach(btn => {
	const closeBtn = btn.nextSibling.nextElementSibling.querySelector('.characteristics-close-btn')
	closeBtn.addEventListener('click', e => {
		btn.classList.remove('active')
	})
	btn.addEventListener('click', e => {
		if(btn.classList.contains('active')){
			btn.classList.remove('active')	
		}else{
			btn.classList.add('active')		
		}
	})
})

const showMoreBtn = document.querySelector('.characteristics-toggle-whow-more-btn')
showMoreBtn.addEventListener('click', e => {
	const parent = showMoreBtn.parentElement
	if(showMoreBtn.classList.contains('active')){
		showMoreBtn.classList.remove('active')
		parent.nextSibling.nextElementSibling.classList.add('hidden')
	}else{
		showMoreBtn.classList.add('active')
		parent.nextSibling.nextElementSibling.classList.remove('hidden')	
	}
})