<template>
	<ul class="v-news">
		<li v-for="(i, index) in newsCount" :key="index" class="v-news__item">
			<a :href="i.href">
				<time class="v-news__item-time" :datetime="i.date.year + '-' + i.date.month + '-' + i.date.date">{{ i.date.year }}.{{ i.date.month }}.{{ i.date.date }}</time>
				<p class="v-news__item-title">{{ i.title }}</p>
			</a>
		</li>
	</ul>
</template>
<script>
export default {
	props: {
		displayNum: {
			default: false
		},
		rootPath: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			news: this.$store.state.news
		}
	},
	computed: {
		newsCount (){
			if (this.displayNum) {
				return this.news.slice(0, this.displayNum);
			} else {
				return this.news;
			}
		}
	}
}
</script>
<style lang="scss">
@use '../../css/theme' as *;

.v-news {
	padding: 0;
	margin: 0;
	list-style: none;

	&__item {
		border-top: 1px solid $color-border;

		&:last-of-type {
			border-bottom: 1px solid $color-border;
		}

		> a {
			display: flex;
			align-items: center;
			padding: 17px 14px;
			color: $color-font-primary;
			text-decoration: none;

			@media ($break-sp) {
				display: block;
			}
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
