<template>
	<h2 class="v-heading2">
		<slot />
	</h2>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@use '../../css/variables' as var;
@use '../../css/mixin' as mix;

.v-heading2 {
	text-align: center;
	font-size: 2.4rem;
	line-height: calc(29 / 24);
	margin-bottom: 70px;
}
</style>
