<template>
	<footer class="v-footer">
		<small class="v-footer__copy">© 2020 My Work</small>
	</footer>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@use '../../css/variables/_color.scss' as color;

.v-footer {
	background: color.$darkest;
	color: color.$lightest;
	text-align: center;
	padding: 12px 0;

	&__copy {
		font-size: 1rem;
	}
}
</style>
