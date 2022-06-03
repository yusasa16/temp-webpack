import { createApp } from 'vue'
import 'normalize.css'
import '../css/style.scss'
import vHeader from '../../inc/js/vue/vHeader.vue'
import vFooter from '../../inc/js/vue/vFooter.vue'
import vHeading2 from '../../inc/js/vue/vHeading2.vue'
import vWorks from '../../inc/js/vue/vWorks.vue'
import vNews from '../../inc/js/vue/vNews.vue'

window.addEventListener('load', function() {
	const hamburgerElem = $(".header-inner__hamburger");
	hamburgerElem.on('click', () => {
		hamburgerElem.toggleClass('on');
		$(".header-modal").toggleClass('on');
	});

	createApp(vHeader).mount('#header');
	createApp(vFooter).mount('#footer');

	createApp({
		components: {
			'v-heading2': vHeading2,
			'v-works': vWorks,
			'v-news': vNews
		}
	}).mount('#main');
})
