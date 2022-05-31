<template>
	<header class="v-header">
		<h1 class="v-header__logo">
			<picture>
				<img src="/img/common/logo-header.svg" alt="My Work">
			</picture>
		</h1>
		<nav class="v-header__nav">
			<ul>
				<li v-for="(nav, index) in navList" :key="index">
					<a :href="nav.href">{{ nav.name }}</a>
				</li>
			</ul>
		</nav>
	</header>
</template>
<script>
export default {
	data() {
		return {
			navList: [
				{
					href: '__URL__',
					name: 'About'
				},
				{
					href: '__URL__',
					name: 'Works'
				},
				{
					href: '__URL__',
					name: 'News'
				},
				{
					href: '__URL__',
					name: 'Contact'
				},
			]
		}
	},
}
</script>
<style lang="scss">

</style>
