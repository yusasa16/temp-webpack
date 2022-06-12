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
					<v-heading2>News</v-heading2>

					<ul class="c-news">
						<?php if(have_posts()): ?>
						<?php while(have_posts()): the_post(); ?>
						<li class="c-news__item">
							<a href="<?php the_permalink(); ?>">
								<time class="c-news__item-time"><?php the_time("Y.m.d"); ?></time>
								<p class="c-news__item-title"><?php the_title(); ?></p>
							</a>
						</li>
						<?php endwhile; endif; ?>
					</ul>
				</section>
			</article>
    </main>

    <?php get_footer(); ?>
</body>
</html>
