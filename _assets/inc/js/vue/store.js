import { createStore } from 'vuex'

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
});

export default store;
