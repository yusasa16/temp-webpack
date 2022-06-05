<template>
	<ul class="v-works">
		<li v-for="(work, index) in works" :key="index" class="v-works__item">
			<img :src="work.src" :alt="work.alt">
		</li>
	</ul>
</template>
<script>
export default {
	data() {
		return {
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
	},
}
</script>
<style lang="scss">
@use '../../css/variables' as var;
@use '../../css/mixin' as mix;

.v-works {
	padding: 0;
	margin: 0;
	list-style: none;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 23px 24px;
}
</style>
