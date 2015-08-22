<?php
/**
 * The template for displaying the header
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link canonical="">

	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
	<![endif]-->


	<script>(function(){document.documentElement.className='js'})();</script>

	<?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>

	<div id="content" class="site-content">
