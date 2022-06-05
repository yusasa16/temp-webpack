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
			works: this.$store.state.works
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

	@media (var.$break-sp) {
		grid-template-columns: 1fr;
	}
}
</style>
