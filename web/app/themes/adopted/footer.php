<footer class="adpt-footer">
	<div class="adpt-footer-block">
		<div class="adpt-footer-block-inner">
			<div class="adpt-footer-heading">
				<img class="constrained" src="<?php header_image(); ?>" alt="<?php echo bloginfo('name'); ?>" />
			</div>
			<div class="adpt-footer-info">
				<span class="footer-info-inner">
					<?php echo get_theme_mod('footer_block_1_email'); ?>
				</span>
				<span class="footer-info-inner">
					<?php echo get_theme_mod('footer_block_1_phone'); ?>
				</span>
				<span class="footer-info-inner">
					<?php echo get_theme_mod('footer_block_1_address'); ?>
				</span>
			</div>
		</div>
	</div>
	<div class="adpt-footer-block">
		<div class="adpt-footer-block-inner">
			<div class="adpt-footer-heading">
				<h4><?php
					echo unbold_filter(get_theme_mod('footer_block_2_heading'));
				?></h4>
			</div>
		</div>
	</div>
	<div class="adpt-footer-block">
		<div class="adpt-footer-block-inner">
			<div class="adpt-footer-heading">
				<h4><?php echo unbold_filter(get_theme_mod('footer_block_3_heading')); ?></h4>
			</div>
		</div>
	</div>
	<div class="adpt-footer-block">
		<div class="adpt-footer-block-inner">
			<div class="adpt-footer-heading">
				<h4><?php echo unbold_filter(get_theme_mod('footer_block_4_heading')); ?></h4>
			</div>
		</div>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>