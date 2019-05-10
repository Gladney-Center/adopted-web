<?php 

namespace AdoptED;

if (!in_array('no-blog',get_body_class())) get_template_part('templates/components/blog-posts');
?><footer role="contentinfo" class="adpt-footer">
	<div class="adpt-footer-block block-1">
		<div class="adpt-footer-block-inner">
			<div class="adpt-footer-heading">
				<img class="v-constrained" src="<?php header_image(); ?>" alt="<?php echo bloginfo('name'); ?>" />
			</div>
			<div class="adpt-footer-info">
				<span class="footer-info-inner">
					<?php echo Filter::fa(get_theme_mod('footer_block_1_email')); ?>
				</span>
				<span class="footer-info-inner">
					<?php echo Filter::fa(get_theme_mod('footer_block_1_phone')); ?>
				</span>
				<span class="footer-info-inner">
					<?php echo Filter::fa(get_theme_mod('footer_block_1_address')); ?>
				</span>
			</div>
		</div>
	</div>
	<div class="adpt-footer-block block-2">
		<div class="adpt-footer-block-inner">
			<div class="adpt-footer-heading">
				<h4><?php
					echo Filter::unbold(get_theme_mod('footer_block_2_heading'));
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
				<h4><?php echo Filter::unbold(get_theme_mod('footer_block_3_heading')); ?></h4>
			</div>
			<div class="adpt-footer-info">
				<span class="footer-info-inner">
					<?php echo Filter::fa(get_theme_mod('footer_block_3_cta')); ?>
				</span>
				<span class="footer-info-inner">
					<a class="btn" href="#"><i class="fas fa-globe"></i>Website</a>&nbsp;&nbsp;
					<a class="btn" href="#"><i class="fas fa-phone"></i>Call Now</a>
				</span>
			</div>
		</div>
	</div>
	<div class="adpt-footer-block block-4">
		<div class="adpt-footer-block-inner">
			<div class="adpt-footer-heading">
				<h4><?php echo Filter::unbold(get_theme_mod('footer_block_4_heading')); ?></h4>
			</div>
			<div class="gcfa-logo">
				<?php echo wp_get_attachment_image(
					get_theme_mod('footer_block_4_logo'),
					'full',
					'',
					['class' => 'w-constrained']
				); ?>
			</div>
		</div>
	</div>
</footer>
<adpt-post-footer></adpt-post-footer>
<?php wp_footer(); ?>
</body>
</html>