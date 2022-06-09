<!doctype html>
<html lang="ja">
<head>
    <?php include('inc/head.php') ?>
</head>
<body>
    <?php get_header(); ?>

    <main id="main">

			<?php if(have_posts()): ?>
				<?php while(have_posts()): the_post(); ?>
				<?php the_content(); ?>
			<?php endwhile; endif; ?>

    </main>

    <?php get_footer(); ?>
</body>
</html>
