<template>
	<h2 class="v-heading2">
		<slot />
	</h2>
</template>
<script>
export default {
	props: {
		rootPath: {
			type: String,
			default: ''
		}
	},
}
</script>
<style lang="scss">
@use '../../css/theme' as *;

.v-heading2 {
	text-align: center;
	font-size: 2.4rem;
	line-height: calc(29 / 24);
	margin-bottom: 70px;

	@media ($break-sp) {
		margin-bottom: 45px;
	}
}
</style>
