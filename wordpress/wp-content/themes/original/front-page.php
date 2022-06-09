<!doctype html>
<html lang="ja">
<head>
    <?php include('inc/head.php') ?>
</head>
<body>
    <?php get_header(); ?>

    <main id="main">
			<article class="p-index">
				<div class="p-index__mv">
					<picture>
						<img src="<?php echo get_template_directory_uri() ?>/img/index/pict-mv.jpg" alt="">
					</picture>
				</div>
				<section class="p-index__works">
					<v-heading2>works</v-heading2>
					<v-works root-path="<?php echo get_template_directory_uri() ?>"></v-works>
					<p class="p-index__link">
						<a href="__URL__">See More</a>
					</p>
				</section>
				<section class="p-index__news">
					<v-heading2>news</v-heading2>
					<v-news displaynum="3"></v-news>
					<p class="p-index__link">
						<a href="__URL__">See More</a>
					</p>
				</section>
			</article>
    </main>

    <?php get_footer(); ?>
</body>
</html>
