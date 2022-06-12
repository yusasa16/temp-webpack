<template>
	<ol itemscope itemtype="https://schema.org/BreadcrumbList" class="v-breadcrumb">
		<li itemscope itemprop="itemListElement" itemtype="https://schema.org/ListItem" class="v-breadcrumb__item">
			<a href="/" itemscope itemprop="item" itemtype="https://schema.org/WebPage" itemid="/">
				<span itemprop="name">home</span>
			</a>
			<meta itemprop="position" content="1">
		</li>
		<li itemscope itemprop="itemListElement" itemtype="https://schema.org/ListItem" class="v-breadcrumb__item">
			<a href="/second/" itemscope itemprop="item" itemtype="https://schema.org/WebPage" itemid="/second/">
				<span itemprop="name">second</span>
			</a>
			<meta itemprop="position" content="2">
		</li>
		<li itemscope itemprop="itemListElement" itemtype="https://schema.org/ListItem" class="v-breadcrumb__item">
			<a href="/second/current/" itemscope itemprop="item" itemtype="https://schema.org/WebPage" itemid="/second/current/">
				<span itemprop="name">current</span>
			</a>
			<meta itemprop="position" content="3">
		</li>
	</ol>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@use '../../css/theme' as *;

</style>
