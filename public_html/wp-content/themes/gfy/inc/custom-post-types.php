<?php

// Flush rewrite rules for custom post types
function wd_flush_rewrite_rules() {
	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'wd_flush_rewrite_rules' );



function create_episode() {

	register_post_type( 'billede', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
		// let's now add all the options for this post type
		array( 'labels' => array(
			'name' => 'Billede', /* This is the Title of the Group */
			'singular_name' => 'Billede', /* This is the individual type */
			'all_items' => 'Alle Billeder', /* the all items menu item */
			'add_new' => 'Tilføj nyt', /* The add new menu item */
			'add_new_item' => 'Tilføj nyt Billede', /* Add New Display Title */
			'edit' => 'Rediger', /* Edit Dialog */
			'edit_item' => 'Rediger Billede', /* Edit Display Title */
			'new_item' => 'Ny Billede', /* New Display Title */
			'view_item' => 'Se Billede', /* View Display Title */
			'search_items' => 'Søg efter Billede', /* Search Custom Type Title */
			'not_found' =>  'Intet fundet i databasen.', /* This displays if there are no entries yet */
			'not_found_in_trash' => 'Intet fundet i skraldespanden', /* This displays if there is nothing in the trash */
			'parent_item_colon' => ''
			), /* end of arrays */
			'public' => true,
			'publicly_queryable' => true,
			'exclude_from_search' => false,
			'show_ui' => true,
			'query_var' => true,
			'menu_position' => 2, /* this is what order you want it to appear in on the left hand side menu */
			'rewrite'	=> array( 'slug' => 'billede', 'with_front' => false ), /* you can specify its url slug */
			'has_archive' => 'billeder', /* you can rename the slug here */
			'capability_type' => 'post',
			'hierarchical' => false,
			/* the next one is important, it tells what's enabled in the post editor */
			'supports' => array( 'title', 'custom_fields' )
		)
	);
}

add_action( 'init', 'create_episode');


?>
