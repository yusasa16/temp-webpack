import { createApp } from 'vue'
import 'normalize.css'
import '../css/main.scss'
import vHeader from '../../inc/js/vue/vHeader.vue'
import vHeading2 from '../../inc/js/vue/vHeading2.vue'

window.addEventListener('load', function() {
	const hamburgerElem = $(".header-inner__hamburger");
	hamburgerElem.on('click', () => {
		hamburgerElem.toggleClass('on');
		$(".header-modal").toggleClass('on');
	});

	createApp({
		components: {
			'v-header': vHeader,
			'v-heading2': vHeading2
		}
	}).mount('#app');
})
