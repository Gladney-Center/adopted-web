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
		<div class="adpt-panel">
			<a href="<?php echo get_permalink(get_theme_mod('fp_panel_block_1_left_link')); ?>">
				<figure class="wp-block-image"><img src="https://dev.adoption-education.com/app/uploads/2019/02/Students-opt1.png" alt="AdoptED Students section background photo" class="wp-image-974"></figure>
				<div class="adpt-panel-overlay">
					<div class="adpt-panel-topright">
						<?php echo Filter::svg('<adpt-icon:rightarrow>'); ?>
						<span class="adpt-panel-vert">Learn More</span>
					</div>
					<div class="adpt-panel-info">
						<h4><?php echo get_theme_mod('fp_panel_block_1_left_title'); ?></h4>
						<p><?php echo get_theme_mod('fp_panel_block_1_left_copy'); ?></p>
					</div>
				</div>
			</a>
		</div>
		<div class="adpt-panel">
			<a href="<?php echo get_permalink(get_theme_mod('fp_panel_block_1_right_link')); ?>">
				<figure class="wp-block-image"><img src="https://dev.adoption-education.com/app/uploads/2019/02/educators-opt1.png" alt="AdoptED Educators panel background image" class="wp-image-975"></figure>
				<div class="adpt-panel-overlay">
					<div class="adpt-panel-topright">
						<?php echo Filter::svg('<adpt-icon:rightarrow>'); ?>
						<span class="adpt-panel-vert">Learn More</span>
					</div>
					<div class="adpt-panel-info">
						<h4><?php echo get_theme_mod('fp_panel_block_1_right_title'); ?></h4>
						<p><?php echo get_theme_mod('fp_panel_block_1_right_copy'); ?></p>
					</div>
				</div>
			</a>
		</div>
	</div>
</section>
<section class="adpt-podcast">
	<h2>do you have questions about adoption or dating or pregnancy but just don’t know who to ask?</h2>
</section>
<section class="adpt-ctas">
	<div class="adpt-ctas-inner wp-block-columns has-3-columns">
		<div class="wp-block-column">
			<div class="adpt-icon">
				<?php echo Filter::svg('<adpt-icon:questionblock>'); ?>
			</div>
		</div>
		<div class="wp-block-column">
			<div class="adpt-icon">
				<?php echo Filter::svg('<adpt-icon:videoblock>'); ?>
			</div>
		</div>
		<div class="wp-block-column">
			<div class="adpt-icon">
				<?php echo Filter::svg('<adpt-icon:handsicon>'); ?>
			</div>
		</div>
	</div>
</section>
<section class="adpt-panel-block">
	<div class="adpt-panel-block-inner has-2-columns">
		<div class="adpt-panel">
			<figure class="wp-block-image"><img src="https://dev.adoption-education.com/app/uploads/2019/02/pregnant-opt1.png" alt="AdoptED pregnant section background photo" class="wp-image-991"></figure>
			<div class="adpt-panel-overlay">
				<div class="adpt-panel-topright">
					<?php echo Filter::svg('<adpt-icon:rightarrow>'); ?>
					<span class="adpt-panel-vert">Learn More</span>
				</div>
				<div class="adpt-panel-info">
					<h4>pregnant?</h4>
					<p>An unplanned pregnancy changes everything. Your body. Your relationships. Your plans. But Gladney wants you to know: Good things can come from this.</p>
				</div>
			</div>
		</div>
		<div class="adpt-panel">
			<figure class="wp-block-image"><img src="https://dev.adoption-education.com/app/uploads/2019/02/adopt-opt1.png" alt="AdoptED adoption section background photo" class="wp-image-992"></figure>
			<div class="adpt-panel-overlay">
				<div class="adpt-panel-topright">
					<?php echo Filter::svg('<adpt-icon:rightarrow>'); ?>
					<span class="adpt-panel-vert">Learn More</span>
				</div>
				<div class="adpt-panel-info">
					<h4>i want to adopt</h4>
					<p>Take a deep breath and consider your options. Take it from us: This child is worth it.</p>
				</div>
			</div>
		</div>
	</div>
</section>
<?php get_footer();