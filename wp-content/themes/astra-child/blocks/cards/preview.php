<?php


$args = array();
$args['post_type'] = block_value('content-type');
$args['posts_per_page'] = intval(block_value('numero-de-post'));

$the_query = new WP_Query($args);

// The Loop
if ($the_query->have_posts()) : ?>
    <div class="cards-main-container alignfull">
        <div class="cards-container">
            <h2 class="cards-title"><?php block_field('titulo'); ?></h2>
            <?php while ($the_query->have_posts()) : ?>
                <?php $the_query->the_post(); ?>
                <div class="blk-card">
                    <h3 class="card-title"><?php the_title() ?></h3>
                    <a href="<?php echo get_permalink($the_query->post->ID); ?>" class="btn"> Descubre Más</a>
                </div>
            <?php endwhile; ?>
        </div>
    </div>
<?php endif;
/* Restore original Post Data */
wp_reset_postdata();

?>