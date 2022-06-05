<template>
	<header class="v-header">
		<div class="v-header__inner">
			<h1 class="v-header__logo">
				<a href="/">
					<picture>
						<img src="/img/common/logo-header.svg" alt="My Work">
					</picture>
				</a>
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
					href: '/about/',
					name: 'About'
				},
				{
					href: '/works/',
					name: 'Works'
				},
				{
					href: '/news/',
					name: 'News'
				},
				{
					href: '/contact/',
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

	@media (var.$break-sp) {
		padding: 25px 0 16px;
	}

	&__inner {
		@include mix.container;

		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (var.$break-sp) {
			display: block;
		}
	}

	&__logo {
		margin: 0;

		@media (var.$break-sp) {
			text-align: center;
		}
	}

	&__nav {
		@media (var.$break-sp) {
			margin-top: 10px;
		}

		> ul {
			display: flex;
			justify-content: flex-end;
			padding: 0;
			margin: 0;
			list-style: none;

			@media (var.$break-sp) {
				justify-content: center;
			}

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
