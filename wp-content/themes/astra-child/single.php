<?php

/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
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

	<div <?php astra_blog_layout_class('single-layout-1'); ?>>

		<?php astra_single_header_before(); ?>

		<?php if (apply_filters('astra_single_layout_one_banner_visibility', true)) { ?>

			<header class="entry-header <?php astra_entry_header_class(); ?>">

				<?php astra_single_header_top(); ?>

				<h2><?php the_title(); ?></h2>

				<?php astra_single_header_bottom();
				?>

			</header><!-- .entry-header -->

		<?php } ?>

		<?php astra_single_header_after(); ?>

		<div class="entry-content clear" <?php
											echo astra_attr(
												'article-entry-content-single-layout',
												array(
													'class' => '',
												)
											);
											?>>

			<?php astra_entry_content_before(); ?>

			<?php the_content(); ?>

			<?php echo get_the_post_thumbnail(); ?>

			<?php
			astra_edit_post_link(
				sprintf(
					/* translators: %s: Name of current post */
					esc_html__('Edit %s', 'astra'),
					the_title('<span class="screen-reader-text">"', '"</span>', false)
				),
				'<span class="edit-link">',
				'</span>'
			);
			?>

			<?php astra_entry_content_after(); ?>

			<?php
			wp_link_pages(
				array(
					'before'      => '<div class="page-links">' . esc_html(astra_default_strings('string-single-page-links-before', false)),
					'after'       => '</div>',
					'link_before' => '<span class="page-link">',
					'link_after'  => '</span>',
				)
			);
			?>
		</div><!-- .entry-content .clear -->
	</div>

</div><!-- #primary -->
<div class="bg-sc"></div>
<div class="bg-sc2"></div>
<div class="bg-rec"></div>
<?php if (astra_page_layout() == 'right-sidebar') : ?>

	<?php get_sidebar(); ?>

<?php endif ?>

<?php get_footer(); ?>