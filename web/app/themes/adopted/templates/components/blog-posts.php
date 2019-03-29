<aside class="adpt-blog">
	<div class="adpt-blog-inner">
		<div class="adpt-blog-top">
			<div class="adpt-blog-heading"><h3>Blog</h3></div>
			<div class="adpt-blog-link">
				<a class="btn" href="#">View More</a>
			</div>
		</div>
		<div class="adpt-post-blocks">
		<?php
			$HAPIkey = HS_HAPI_KEY;
			$blogcache = get_transient('adpt_blog_cache');

			if ($blogcache === false) {
				$blogcache = wp_remote_get("https://api.hubapi.com/content/api/v2/blog-posts?hapikey=$HAPIkey&limit=3&state=PUBLISHED");
				set_transient('adpt_blog_cache',$blogcache,WEEK_IN_SECONDS);
			}
			$blog_body = json_decode($blogcache['body'], true);
			//print_r($blog_body);

			foreach ($blog_body['objects'] as $obj) : ?>
				<div class="adpt-post-block">
					<img class="w-constrained" src="<?php echo $obj['featured_image']; ?>"/>
					<h5><?php echo $obj['html_title']; ?></h5>
					<a class="view-post-link" target="_blank" href="<?php echo $obj['absolute_url']; ?>">
						<span>View Post</span>
						<?php echo \AdoptED\Filter::svg('<adpt-icon:rightarrow>'); ?>
					</a>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</aside>