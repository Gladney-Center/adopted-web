<?php

namespace AdoptED;

global $post;
$meta = get_post_meta($post->ID);

add_filter( 'body_class', function($classes) use ($meta) {
	return explode(' ',$meta['gcfa_page_classes'][0]);
});
 
get_header(); ?>
<section class="adpt-stage">
	<div class="wp-block-columns adpt-stage-inner">
		<div class="wp-block-column">
			<h1><?php echo get_theme_mod('fp_stage_heading'); ?></h1>
		</div>
		<div class="wp-block-column">
			<figure class="wp-block-image">
				<img src="https://dev.adoption-education.com/app/uploads/2019/02/gabby-pregnant-thtbub.png" alt="Gabby is pregnant" class="wp-image-936">
			</figure>
		</div>
	</div>
</section>
<section class="adpt-fold">
	<div class="adpt-fold-inner">
		<div class="adpt-fold-graybox">
			<p><?php echo get_theme_mod('fp_fold_copy'); ?></p>
			<a class="btn" href="#">Learn More</a>
		</div>
	</div>
</section>
<?php get_footer();