import { createApp } from 'vue'
import { createStore } from 'vuex'
import 'normalize.css'
import '../css/style.scss'
import vHeader from '../../inc/js/vue/vHeader.vue'
import vFooter from '../../inc/js/vue/vFooter.vue'
import vHeading2 from '../../inc/js/vue/vHeading2.vue'
import vWorks from '../../inc/js/vue/vWorks.vue'
import vNews from '../../inc/js/vue/vNews.vue'

window.addEventListener('load', function() {
	const store = createStore({
		state() {
			return {
				news: [
					{
						href: '__URL__',
						date: {
							year: '2020',
							month: 'XX',
							date: 'xx'
						},
						title: 'デザイン雑誌「ＸＸＸＸＸＸ Vol.11』に掲載していただきました。'
					},
					{
						href: '__URL__',
						date: {
							year: '2020',
							month: 'XX',
							date: 'xx'
						},
						title: 'ＸＸ月ＸＸ日から写真集「ＸＸＸＸＸＸＸ」の販売を開始します。'
					},
					{
						href: '__URL__',
						date: {
							year: '2020',
							month: 'XX',
							date: 'xx'
						},
						title: '【イベント開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト'
					},
					{
						href: '__URL__',
						date: {
							year: '2020',
							month: 'XX',
							date: 'xx'
						},
						title: 'デザイン雑誌「ＸＸＸＸＸＸ Vol.10』に掲載していただきました。'
					},
					{
						href: '__URL__',
						date: {
							year: '2020',
							month: 'XX',
							date: 'xx'
						},
						title: '【個展開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト'
					},
				],
				works: [
					{
						src: '/img/common/pict-works01.jpg',
						alt: 'works01 画像'
					},
					{
						src: '/img/common/pict-works02.jpg',
						alt: 'works02 画像'
					},
					{
						src: '/img/common/pict-works03.jpg',
						alt: 'works03 画像'
					},
					{
						src: '/img/common/pict-works04.jpg',
						alt: 'works04 画像'
					},
					{
						src: '/img/common/pict-works05.jpg',
						alt: 'works05 画像'
					},
					{
						src: '/img/common/pict-works06.jpg',
						alt: 'works06 画像'
					},
				]
			}
		}
	})

	createApp(vHeader).mount('#header');
	createApp(vFooter).mount('#footer');

	createApp({
		components: {
			'v-heading2': vHeading2,
			'v-works': vWorks,
			'v-news': vNews
		}
	}).use(store).mount('#main');
})
