<template>
	<footer class="v-footer">
		<small class="v-footer__copy">© {{ copyYear }} My Work</small>
	</footer>
</template>
<script>
export default {
	props: {
		rootPath: {
			type: String,
			default: ''
		}
	},
	computed: {
		copyYear: () => {
			const now = new Date();
			return now.getFullYear();
		}
	}
}
</script>
<style lang="scss">
@use '../../css/theme' as *;

.v-footer {
	background: $color-darkest;
	color: $color-lightest;
	text-align: center;
	padding: 12px 0;

	&__copy {
		font-size: 1rem;
	}
}
</style>
