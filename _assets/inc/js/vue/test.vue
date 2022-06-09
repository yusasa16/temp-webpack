<template>
	<div>
		{{ message }}
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
				message: 'Hello World'
			}
		}
}
</script>
<style lang="scss">
@use '../../css/variables' as var;
@use '../../css/mixin' as mix;

</style>
