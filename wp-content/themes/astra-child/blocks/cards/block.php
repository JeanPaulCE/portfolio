<?php
$path = "wp-content/themes/astra-child/blocks/cards";
cards_script();


if (!is_admin()) {
    $args = array();
    $args['post_type'] = block_value('content-type');
    $args['posts_per_page'] = intval(block_value('numero-de-post'));

    $the_query = new WP_Query($args);

    // The Loop
    if ($the_query->have_posts()) : ?>
        <div class="cards-main-container alignfull">
            <div class="cards">
                <h2 class="cards-title"><?php block_field('titulo'); ?></h2>

                <div class="cards_container">

                    <?php while ($the_query->have_posts()) : ?>
                        <?php $the_query->the_post();
                        $img =  get_field('icono', false, false);
                        ?>

                        <div class="card hide">
                            <div class="main-content">
                                <div class="title-content">
                                    <?php if ($img) echo wp_get_attachment_image($img);  ?>
                                    <h3 class="card-title"><?php the_title() ?></h3>
                                </div>
                                <img src="<?php echo $path; ?>/assets/arrow.png" alt="boton deplegar contenido" />
                            </div>
                            <p>
                                <?php the_field('extracto', $post->ID); ?>
                            </p>


                            <div class="more">
                                <a href="<?php echo get_permalink($the_query->post->ID); ?>" class="btn"> Descubre Más</a>
                            </div>
                        </div>


                    <?php endwhile; ?>
                </div>
            </div>
        </div>

        </div>
<?php endif;
    /* Restore original Post Data */
    wp_reset_postdata();
}
?>