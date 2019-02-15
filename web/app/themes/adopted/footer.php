<footer class="adpt-footer">
	<div class="adpt-footer-block block-1">
		<div class="adpt-footer-block-inner">
			<div class="adpt-footer-heading">
				<img class="constrained" src="<?php header_image(); ?>" alt="<?php echo bloginfo('name'); ?>" />
			</div>
			<div class="adpt-footer-info">
				<span class="footer-info-inner">
					<?php echo fa_filter(get_theme_mod('footer_block_1_email')); ?>
				</span>
				<span class="footer-info-inner">
					<?php echo fa_filter(get_theme_mod('footer_block_1_phone')); ?>
				</span>
				<span class="footer-info-inner">
					<?php echo fa_filter(get_theme_mod('footer_block_1_address')); ?>
				</span>
			</div>
		</div>
	</div>
	<div class="adpt-footer-block block-2">
		<div class="adpt-footer-block-inner">
			<div class="adpt-footer-heading">
				<h4><?php
					echo unbold_filter(get_theme_mod('footer_block_2_heading'));
				?></h4>
			</div>
			<div class="input-block">
				<input type="text" placeholder="Username" name="adpt-user"/>
				<input type="text" placeholder="Password" name="adpt-pwd"/>
			</div>
			<button>Login</button>
		</div>
	</div>
	<div class="adpt-footer-block block-3">
		<div class="adpt-footer-block-inner">
			<div class="adpt-footer-heading">
				<h4><?php echo unbold_filter(get_theme_mod('footer_block_3_heading')); ?></h4>
			</div>
			<div class="adpt-footer-info">
				<span class="footer-info-inner">
					<?php echo fa_filter(get_theme_mod('footer_block_3_cta')); ?>
				</span>
				<span class="footer-info-inner">
					<a class="btn" href="#">Website</a>&nbsp;&nbsp;
					<a class="btn" href="#">Call Now</a>
				</span>
			</div>
		</div>
	</div>
	<div class="adpt-footer-block block-4">
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