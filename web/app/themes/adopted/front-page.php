<?php

global $post;
$meta = get_post_meta($post->ID);

add_filter( 'body_class', function($classes) use ($meta) {
	return explode(' ',$meta['gcfa_page_classes'][0]);
});
 
get_header(); ?>
<adpt-stage class="adpt-stage">
	<div class="adpt-stage-inner">
		<div class="adpt-stage-column">
			<h1><?php echo get_theme_mod('fp_stage_heading'); ?></h1>
		</div>
		<div class="adpt-stage-column">
			<figure class="adpt-block-anim">
			<?php echo \AdoptED\Filter::svg('<adpt-icon:gabbyanim>'); ?>
			</figure>
		</div>
	</div>
</adpt-stage>
<section class="adpt-fold">
	<adpt-inner>
		<div class="adpt-fold-graybox">
			<p><?php echo get_theme_mod('fp_fold_copy'); ?></p>
			<a class="btn" href="#">Learn More</a>
		</div>
	</adpt-inner>
</section>
<section class="adpt-panel-block">
	<div class="adpt-panel-block-inner">
		<article class="adpt-panel">
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
		</article>
		<article class="adpt-panel">
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
		</article>
	</div>
</section>
<adpt-qblock></adpt-qblock>
<section class="adpt-podcast">
	<div class="adpt-podcast-inner">
		<div class="adpt-podcast-content heading">
			<h2><?php echo get_theme_mod('fp_podcast_heading'); ?></h2>
		</div>
		<div class="adpt-podcast-content spacer"></div>
		<div class="adpt-podcast-content blurb">
			<div class="adpt-podcast-blurb-inner">
				<h5>Ask A Pro</h5>
				<aside><?php echo get_theme_mod('fp_podcast_blurb'); ?></aside>
				<a class="btn" href="#">Learn More</a>
			</div>
		</div>
		<div class="adpt-podcast-qbubble-overlay">
			<?php $i = 0; $a = 'aa'; while($i++ < 10) : ?>
				<div class="qbubble-container qb-<?php echo $a; ?>">
					<?php echo \AdoptED\Filter::svg(($i % 2 == 0) ? '<adpt-icon:qbubbleleft>' : '<adpt-icon:qbubbleright>'); ?>
				</div>
			<?php $a++; endwhile; ?>
		</div>
	</div>
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
				<div id="adpt_sms" class="sms">
					<div id="sms-inner">
						<h5><?php echo $stats[0]->post_content; ?></h5>
					</div>
				</div>
				<div class="send"><?php echo \AdoptED\Filter::fa('<fa:long-arrow-alt-up>'); ?></div>
			</div>
		</div>
	</div>
	<script>
		var smsEl = document.getElementById('sms-inner'),
			counter = 1,
			stats = [<?php
				$statsarr = [];
				foreach ($stats as $stat)
					$statsarr[] = "'".$stat->post_content."'";
				echo implode(',',$statsarr);
			?>]
		
		setInterval(function(el) {
			let last = Math.max(stats.length-1,0)
			el.innerHTML = '<h5>'+stats[counter]+'</h5>'
			return (counter === last) ? counter = 0 : counter++
		},10000,smsEl)
	</script>
</section>
<section class="adpt-panel-block">
	<div class="adpt-panel-block-inner has-2-columns">
		<article class="adpt-panel">
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
		</article>
		<article class="adpt-panel">
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
		</article>
	</div>
</section>
<?php get_footer();