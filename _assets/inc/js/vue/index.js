import { createApp } from 'vue'
import store from './store.js'
import vHeader from './vHeader.vue'
import vFooter from './vFooter.vue'
import vHeading2 from './vHeading2.vue'
import vWorks from './vWorks.vue'
import vNews from './vNews.vue'

export function vueApps() {
	createApp(vHeader).mount('#header');
	createApp(vFooter).mount('#footer');

	createApp({
		components: {
			'v-heading2': vHeading2,
			'v-works': vWorks,
			'v-news': vNews
		}
	}).use(store).mount('#main');

	console.log(store)
}
