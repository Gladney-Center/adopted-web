<?php

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
			<?php echo \AdoptED\Filter::svg('<adpt-icon:gabbyanim>'); ?>
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
				<figure class="wp-block-image">
					<?php echo wp_get_attachment_image(
						get_theme_mod('fp_panel_block_1_left_img'),
						'full',
						'',
						['class' => 'w-constrained']
					); ?>
				</figure>
				<div class="adpt-panel-overlay">
					<div class="adpt-panel-topright">
						<?php echo \AdoptED\Filter::svg('<adpt-icon:rightarrow>'); ?>
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
				<figure class="wp-block-image">
					<?php echo wp_get_attachment_image(
						get_theme_mod('fp_panel_block_1_right_img'),
						'full',
						'',
						['class' => 'w-constrained']
					); ?>
				</figure>
				<div class="adpt-panel-overlay">
					<div class="adpt-panel-topright">
						<?php echo \AdoptED\Filter::svg('<adpt-icon:rightarrow>'); ?>
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
	<div class="adpt-ctas-inner">
		<div class="adpt-cta">
			<div class="adpt-icon">
				<?php echo \AdoptED\Filter::svg(get_theme_mod('fp_cta_1_icon')); ?>
			</div>
			<div class="adpt-cta-text">
				<h5><?php echo get_theme_mod('fp_cta_1_title'); ?></h5>
				<p><?php echo get_theme_mod('fp_cta_1_text'); ?></p>
			</div>
			<div class="adpt-cta-more">
				<a class="btn" href="#">More</a>
			</div>
		</div>
		<div class="adpt-cta">
			<div class="adpt-icon">
				<?php echo \AdoptED\Filter::svg(get_theme_mod('fp_cta_2_icon')); ?>
			</div>
			<div class="adpt-cta-text">
				<h5><?php echo get_theme_mod('fp_cta_2_title'); ?></h5>
				<p><?php echo get_theme_mod('fp_cta_2_text'); ?></p>
			</div>
			<div class="adpt-cta-more">
				<a class="btn" href="#">More</a>
			</div>
		</div>
		<div class="adpt-cta">
			<div class="adpt-icon">
				<?php echo \AdoptED\Filter::svg(get_theme_mod('fp_cta_3_icon')); ?>
			</div>
			<div class="adpt-cta-text">
				<h5><?php echo get_theme_mod('fp_cta_3_title'); ?></h5>
				<p><?php echo get_theme_mod('fp_cta_3_text'); ?></p>
			</div>
			<div class="adpt-cta-more">
				<a class="btn" href="#">More</a>
			</div>
		</div>
	</div>
</section><?php
	$stats = get_posts([
		'post_type' => 'stats',
		'posts_per_page' => -1
	]);
?><section class="adpt-sms-facts">
	<div class="adpt-sms-inner">
		<div class="adpt-sms-aqua-box">
			<div class="adpt-sms-arrow teal-bg"><?php echo \AdoptED\Filter::fa('<fa:angle-right>'); ?></div>
			<div class="adpt-sms-text">
				<span id="adpt_sms" class="sms">
					<span class="typer"><?php echo $stats[0]->post_content; ?></span>
				</span>
				<span class="send"><?php echo \AdoptED\Filter::fa('<fa:long-arrow-alt-up>'); ?></span>
			</div>
		</div>
	</div>
	<script>
		var smsEl = document.getElementById('adpt_sms'),
			counter = 1,
			stats = [<?php
				$statsarr = [];
				foreach ($stats as $stat)
					$statsarr[] = "'".$stat->post_content."'";
				echo implode(',',$statsarr);
			?>]
		
		setInterval(function(el) {
			let last = Math.max(stats.length-1,0),
				span = document.createElement('span',{'class':'typer'})
			
			span.innerHtml = stats[counter]
			el.innerHtml = span
			return counter = (counter === last) ? 0 : counter++
		},8000,smsEl)
	</script>
</section>
<section class="adpt-panel-block">
	<div class="adpt-panel-block-inner has-2-columns">
		<div class="adpt-panel">
			<figure class="wp-block-image">
				<?php echo wp_get_attachment_image(
					get_theme_mod('fp_panel_block_2_left_img'),
					'full',
					'',
					['class' => 'w-constrained']
				); ?>
			</figure>
			<div class="adpt-panel-overlay">
				<div class="adpt-panel-topright">
					<?php echo \AdoptED\Filter::svg('<adpt-icon:rightarrow>'); ?>
					<span class="adpt-panel-vert">Learn More</span>
				</div>
				<div class="adpt-panel-info">
					<h4><?php echo get_theme_mod('fp_panel_block_2_left_title'); ?></h4>
					<p><?php echo get_theme_mod('fp_panel_block_2_left_copy'); ?></p>
				</div>
			</div>
		</div>
		<div class="adpt-panel">
			<figure class="wp-block-image">
				<?php echo wp_get_attachment_image(
					get_theme_mod('fp_panel_block_2_right_img'),
					'full',
					'',
					['class' => 'w-constrained']
				); ?>
			</figure>
			<div class="adpt-panel-overlay">
				<div class="adpt-panel-topright">
					<?php echo \AdoptED\Filter::svg('<adpt-icon:rightarrow>'); ?>
					<span class="adpt-panel-vert">Learn More</span>
				</div>
				<div class="adpt-panel-info">
					<h4><?php echo get_theme_mod('fp_panel_block_2_right_title'); ?></h4>
					<p><?php echo get_theme_mod('fp_panel_block_2_right_copy'); ?></p>
				</div>
			</div>
		</div>
	</div>
</section>
<?php get_footer();