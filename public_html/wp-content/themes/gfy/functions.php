<?php
/*
 */

if ( ! function_exists( 'wd_setup' ) ) :
function wd_setup() {
	add_theme_support( 'title-tag' );

	add_theme_support( 'post-thumbnails', array( 'post' ) );

 require get_stylesheet_directory() . '/inc/custom-post-types.php';

 show_admin_bar(false);
}
endif;
add_action( 'after_setup_theme', 'wd_setup' );

function add_my_post_types_to_query( $query ) {
  if ( is_home() && $query->is_main_query() )
    $query->set( 'post_type', array('page', 'billede' ) );
  return $query;
}
add_action( 'pre_get_posts', 'add_my_post_types_to_query' );

// Remove unwanted Menu Items in Admin.
function remove_menus(){
  remove_menu_page( 'edit.php' );                   //Posts
  // remove_menu_page( 'edit.php?post_type=page' );    //Pages
  remove_menu_page( 'edit-comments.php' );          //Comments
  remove_menu_page( 'users.php' );                  //Users
  remove_menu_page( 'tools.php' );                  //Tools
}
add_action( 'admin_menu', 'remove_menus' );


// Register scripts and styles
function reg_scripts() {
	wp_enqueue_script( 'lib', get_template_directory_uri() . '/js/lib.js', array('jquery'), '1.0.0', true );
	wp_enqueue_script( 'app', get_template_directory_uri() . '/js/main.js', array( 'lib' ), '1.0.0', true );

  wp_localize_script('app', 'site', array( 'theme_path' => get_stylesheet_directory_uri(), 'ajax_url' => admin_url( 'admin-ajax.php' ) ));

	wp_enqueue_style( 'main', get_template_directory_uri() . '/css/main.css', array(), '1.0.0' );
}
add_action( 'wp_enqueue_scripts', 'reg_scripts' );


?>
