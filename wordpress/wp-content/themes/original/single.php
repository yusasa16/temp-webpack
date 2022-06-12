<!doctype html>
<html lang="ja">
<head>
    <?php include('inc/head.php') ?>
</head>
<body>
    <?php get_header(); ?>

    <main id="main">
			<article class="p-news-index">
				<section class="p-news-index__news">
					<?php if(have_posts()): ?>
					<?php while(have_posts()): the_post(); ?>
						<v-heading2><?php the_title(); ?></v-heading2>
						<?php the_content(); ?>
					<?php endwhile; endif; ?>
				</section>
			</article>
		</main>

    <?php get_footer(); ?>
</body>
</html>
