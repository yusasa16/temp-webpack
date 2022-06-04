<template>
	<ul class="v-news">
		<li v-for="(i, index) in news" :key="index" class="v-news__item">
			<a href="__URL__">
				<time class="v-news__item-time" :datetime="i.date.year + '-' + i.date.month + '-' + i.date.date">{{ i.date.year }}.{{ i.date.month }}.{{ i.date.date }}</time>
				<p class="v-news__item-title">{{ i.title }}</p>
			</a>
		</li>
	</ul>
</template>
<script>
export default {
	data() {
		return {
			news: [
				{
					date: {
						year: '2020',
						month: 'XX',
						date: 'xx'
					},
					title: 'デザイン雑誌「ＸＸＸＸＸＸ Vol.11』に掲載していただきました。'
				},
				{
					date: {
						year: '2020',
						month: 'XX',
						date: 'xx'
					},
					title: 'ＸＸ月ＸＸ日から写真集「ＸＸＸＸＸＸＸ」の販売を開始します。'
				},
				{
					date: {
						year: '2020',
						month: 'XX',
						date: 'xx'
					},
					title: '【イベント開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト'
				},
				{
					date: {
						year: '2020',
						month: 'XX',
						date: 'xx'
					},
					title: 'デザイン雑誌「ＸＸＸＸＸＸ Vol.10』に掲載していただきました。'
				},
				{
					date: {
						year: '2020',
						month: 'XX',
						date: 'xx'
					},
					title: '【個展開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト'
				},
			]
		}
	},
}
</script>
<style lang="scss">
@use '../../css/variables/_color.scss' as color;

.v-news {
	padding: 0;
	margin: 0;
	list-style: none;

	&__item {
		border-top: 1px solid color.$border;

		&:last-of-type {
			border-bottom: 1px solid color.$border;
		}

		> a {
			display: flex;
			align-items: center;
			padding: 17px 14px;
			color: color.$font-primary;
			text-decoration: none;
		}

		&-time {
			margin-right: 76px;
		}

		&-title {
			flex: 1;
			margin: 0;
		}
	}
}
</style>
