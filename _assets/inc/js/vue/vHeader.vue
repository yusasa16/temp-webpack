<template>
	<header class="v-header">
		<div class="v-header__inner">
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
		</div>
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
@use '../../css/variables' as var;
@use '../../css/mixin' as mix;

.v-header {
	padding: 121px 0;

	&__inner {
		@include mix.container;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__logo {
		margin: 0;
	}

	&__nav {
		> ul {
			display: flex;
			justify-content: flex-end;
			padding: 0;
			margin: 0;
			list-style: none;

			> li {
				margin-left: 12px;

				> a {
					display: inline-block;
					padding: 4px 10px;
					color: var.$color-font-primary;
					font-size: 1.44rem;
					text-decoration: none;
				}
			}
		}
	}
}
</style>
