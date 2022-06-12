<template>
	<div class="v-works02">
		<article v-for="(work, index) in works" :key="index" class="v-works02__item">
			<img :src="rootPath + work.src" :alt="work.alt">
			<h2 class="v-works02__title">{{ work.title }}</h2>
			<div v-html="work.content" class="v-works02__content"></div>
		</article>
	</div>
</template>
<script>
export default {
	props: {
		rootPath: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			works: this.$store.state.works
		}
	},
}
</script>
<style lang="scss" scoped>
@use '../../css/theme' as *;

.v-works02 {
	padding: 0;
	margin: 0;
	list-style: none;
	display: grid;
	grid-template-columns: 1fr;
	gap: 140px 0;

	@media ($break-sp) {
		gap: 52px 0;
	}

	&__title {
		font-size: 1.44rem;
		line-height: calc(17 / 14.4);
		margin: 34px 0 0;

		@media ($break-sp) {
			margin-top: 24px;
		}
	}

	&__content {
		p {
			margin: 15px 0 0;
		}
	}
}
</style>
