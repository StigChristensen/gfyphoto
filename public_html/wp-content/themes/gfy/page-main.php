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

	<div class="info">
		<p>Matias Jensen | Fotograf | <a href="tel:25145943">25 14 59 43</a> | <a href="mailto:matias@mail.com">matias@mail.com</a></p>
	</div>


	<div class="overlay"></div>

	<div class="threed-btn"><h3 class="threetxt">3D</h3></div>

	<div class="images-cont">

	<?php
	$posts = get_posts(array(
		'posts_per_page'	=> -1,
		'post_type'				=> 'billede',
		'orderby'					=> 'title',
		'order'						=> 'ASC'
		));

	if( $posts ):
	foreach( $posts as $post ):
		setup_postdata( $post ) ?>

		<div class="img-container">
			<img class="child" src="<?php the_field('billede'); ?>">

			<?php if ( get_field('3d') && get_field('3d_billede') ) { ?>
				<img class="threed-img" src="<?php the_field('3d_billede'); ?>">
			<?php } ?>
		</div>

	<?php endforeach;

		wp_reset_postdata(); ?>

<?php endif; ?>

	<div class="vid-container">
		<iframe width="1000" height="562" src="https://www.youtube.com/embed/ZS-xHv4Bno8?autoplay=1?rel=0" frameborder="0" allowfullscreen></iframe>
	</div>

	</div>

	<div class="info">
		<p>Matias Jensen | Fotograf | <a href="tel:25145943">25 14 59 43</a> | <a href="mailto:matias@mail.com">matias@mail.com</a></p>
	</div>

	</div>

<?php get_footer(); ?>

