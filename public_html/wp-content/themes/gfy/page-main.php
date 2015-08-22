<?php
/*
* Template Name: Front Page
*/
?>


<?php get_header(); ?>

	<div class="content-area">

	<div class="bar top"></div>
	<div class="bar right"></div>
	<div class="bar bottom"></div>
	<div class="bar left"></div>

	<?php while ( have_posts() ) : the_post(); ?>

		<div class="img-container small">
			<img src="<?php the_field('billede'); ?>">
		</div>

	<?php endwhile; ?>

	<div class="info">
		<h2>Matias Jensen</h2>
		<a href="tel:25145943"><h4>25 14 59 43</h4></a>
	</div>


	</div>

<?php get_footer(); ?>

