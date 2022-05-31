import { createApp } from 'vue'
import 'normalize.css'
import '../css/main.scss'
import vueTest from '../../inc/js/vue/test.vue'
import vHeader from '../../inc/js/vue/vHeader.vue'

window.addEventListener('load', function() {
	const hamburgerElem = $(".header-inner__hamburger");
	hamburgerElem.on('click', () => {
		hamburgerElem.toggleClass('on');
		$(".header-modal").toggleClass('on');
	});

	createApp(vueTest).mount('#app');
	createApp(vHeader).mount('#vHeader');
})
