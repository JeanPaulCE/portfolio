<?php

/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Astra
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

get_header(); ?>

<?php if (astra_page_layout() == 'left-sidebar') : ?>

	<?php get_sidebar(); ?>

<?php endif ?>

<div id="primary" <?php astra_primary_class(); ?>>
	<div class="container">
		<div class="window ">
			<div class="head">
				<div class="sc1"></div>
				<div class="sc2"></div>
				<div class="sc3"></div>
				<div class="bar"></div>
			</div>
			<div class="text">
				<h2 class="title"><span>Jean Paul Carvajal</span> {</h2>
				<p class="p1">
					Hi, I am a full stack developer, below you
					can see some of my work, just click on
					the card that interests you.
				</p>
				<p class="p2">A single person can create, but together
					we can expand the frontiers of
					innovation.</p>
				<h2 class="end type">}</h2>
			</div>
		</div>
	</div>

	<?php astra_primary_content_top(); ?>

	<?php astra_content_page_loop(); ?>

	<?php astra_primary_content_bottom(); ?>


</div><!-- #primary -->
<div class="bg-sc"></div>
<div class="bg-sc2"></div>
<div class="bg-rec"></div>
<?php if (astra_page_layout() == 'right-sidebar') : ?>

	<?php get_sidebar(); ?>

<?php endif ?>

<?php get_footer(); ?>