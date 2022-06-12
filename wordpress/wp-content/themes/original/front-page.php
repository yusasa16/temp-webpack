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

					<?php
						$args = array(
						'post_type' => 'post', // 投稿タイプのスラッグを指定
								'post_status' => 'publish', // 公開済の投稿を指定
								'posts_per_page' => 3 // 投稿件数の指定
						);
						$the_query = new WP_Query($args); if($the_query->have_posts()):
					?>
					<ul class="c-news">
					<?php while($the_query->have_posts()): $the_query->the_post(); ?>
						<li class="c-news__item">
							<a href="<?php the_permalink(); ?>">
								<time class="c-news__item-time"><?php the_time("Y.m.d"); ?></time>
								<p class="c-news__item-title"><?php the_title(); ?></p>
							</a>
						</li>
						<?php endwhile; endif; ?>
					</ul>
					<p class="p-index__link">
						<a href="__URL__">See More</a>
					</p>
				</section>
			</article>
    </main>

    <?php get_footer(); ?>
</body>
</html>
