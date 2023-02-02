let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag)

let player;
let videoId = null;

document.querySelectorAll('.modal-video-btn').forEach(el => {
	el.addEventListener('click', () => {
		videoId = el.dataset.id;
		if(!videoId){
			alert('Invalid Video ID');
			return;
		}
		const modal = document.getElementById('video-modal');
		const videoWrap = modal.querySelector('.video-wrap');
		player = new YT.Player('player', {
			playerVars: {
				'playsinline': 0,
				'rel': 0,
				'showinfo': 0
			},
			videoId: videoId,
			events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
		modal.querySelector('div').classList.add('show')
		modal.classList.remove('hidden')
	})
})

function onPlayerReady(event) {
	event.target.mute()
    event.target.playVideo();
	//console.log(event.target)
}
function onPlayerStateChange(event) {
	// if (event.data == YT.PlayerState.PLAYING) {
	// 	setTimeout(stopVideo, 6000);
	// }
}
// function stopVideo() {
//     player.stopVideo();
// }