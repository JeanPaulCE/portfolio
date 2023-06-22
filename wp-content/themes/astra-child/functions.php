<?php

/**
 * Astra Child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra Child
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define('CHILD_THEME_ASTRA_CHILD_VERSION', '1.0.0');

/**
 * Enqueue styles
 */
function child_enqueue_styles()
{

	wp_enqueue_style('astra-child-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_ASTRA_CHILD_VERSION, 'all');
	if (is_page("Home")) {
		wp_enqueue_style('home-page', get_stylesheet_directory_uri() . '/assets/home.css');
	}
	if (is_single()) {
		wp_enqueue_style('single-page', get_stylesheet_directory_uri() . '/assets/docs.css');
	}
}

function cards_script()
{
	wp_enqueue_script('cards_js', get_stylesheet_directory_uri() . "/blocks/cards/scrip.js", [], null, true);
}

add_action('wp_enqueue_scripts', 'child_enqueue_styles', 15);

add_action('admin_footer', function () {
?>
	<style>
		.editor-styles-wrapper {
			background-color: var(--ast-global-color-4);
			;
		}
	</style>
<?php
});
