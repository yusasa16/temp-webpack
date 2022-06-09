import { createApp } from 'vue'
import store from './store.js'
import vBreadcrumb from './vBreadcrumb.vue'
import vHeader from './vHeader.vue'
import vFooter from './vFooter.vue'
import vHeading2 from './vHeading2.vue'
import vWorks from './vWorks.vue'
import vWorks02 from './vWorks02.vue'
import vNews from './vNews.vue'

export function vueApps() {
	createApp({
		components: {
			'v-header': vHeader,
		}
	}).mount('#header');

	createApp({
		components: {
			'v-footer': vFooter,
		}
	}).mount('#footer');

	createApp({
		components: {
			'v-breadcrumb': vBreadcrumb,
			'v-heading2': vHeading2,
			'v-works': vWorks,
			'v-works02': vWorks02,
			'v-news': vNews,
		}
	}).use(store).mount('#main');

	console.log(store)
}
