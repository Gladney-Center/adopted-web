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
<section class="adpt-panel-block">
	<div class="adpt-panel-block-inner">
		<?php echo get_theme_mod('fp_panel_block_1_left_link'); ?>
		<div class="adpt-panel">
			<figure class="wp-block-image"><img src="https://dev.adoption-education.com/app/uploads/2019/02/Students-opt1.png" alt="AdoptED Students section background photo" class="wp-image-974"></figure>
			<div class="adpt-panel-overlay">
				<div class="adpt-panel-topright">
					<?php echo Filter::svg('<adpt-icon:right-arrow>'); ?>
					<span class="adpt-panel-vert">Learn More</span>
				</div>
				<div class="adpt-panel-info">
					<h4><?php echo get_theme_mod('fp_panel_block_1_left_title'); ?></h4>
					<p><?php echo get_theme_mod('fp_panel_block_1_left_copy'); ?></p>
				</div>
			</div>
		</div>
		<div class="adpt-panel">
			<figure class="wp-block-image"><img src="https://dev.adoption-education.com/app/uploads/2019/02/educators-opt1.png" alt="AdoptED Educators panel background image" class="wp-image-975"></figure>
			<div class="adpt-panel-overlay">
				<div class="adpt-panel-topright">
					<?php echo Filter::svg('<adpt-icon:right-arrow>'); ?>
					<span class="adpt-panel-vert">Learn More</span>
				</div>
				<div class="adpt-panel-info">
					<h4>educators</h4>
					<p>Learn more about free adoption education curriculum that engages your students and teaches them critical thinking skills and so much more!</p>
				</div>
			</div>
		</div>
	</div>
</section>
<?php get_footer();