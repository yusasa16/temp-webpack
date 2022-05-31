import { createApp } from 'vue'
import 'normalize.css'
import '../css/main.scss'
import vueTest from '../../inc/js/vue/test.vue'

window.addEventListener('load', function() {
	const hamburgerElem = $(".header-inner__hamburger");
	hamburgerElem.on('click', () => {
			hamburgerElem.toggleClass('on');
			$(".header-modal").toggleClass('on');
	});

	const app = createApp(vueTest);
	app.mount('#app');
})