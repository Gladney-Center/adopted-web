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
			$HAPIkey = 'f09cae1b-d7b3-4ad8-88fb-1557f0870df4';
			$blogcache = get_transient('adpt_blog_cache');

			if ($blogcache === false) {
				$blogcache = wp_remote_get("https://api.hubapi.com/content/api/v2/blog-posts?hapikey=$HAPIkey&limit=3&state=PUBLISHED");
				set_transient('adpt_blog_cache',$blogcache,WEEK_IN_SECONDS);
			}
			print_r($blogcache);
		?>
			<div class="adpt-post-block">
				<div class="adpt-post-block-inner">
					<div class="view-post-link">
						<a href="#">View Post <i class="fas fa-long-arrow-alt-right"></i></a>
					</div>
				</div>
			</div>
			<div class="adpt-post-spacer">M</div>
			<div class="adpt-post-block">
				<div class="adpt-post-block-inner">
					<div class="view-post-link">
						<a href="#">View Post <i class="fas fa-long-arrow-alt-right"></i></a>
					</div>
				</div>
			</div>
			<div class="adpt-post-spacer">M</div>
			<div class="adpt-post-block">
				<div class="adpt-post-block-inner">
					<div class="view-post-link">
						<a href="#">View Post <i class="fas fa-long-arrow-alt-right"></i></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</aside>