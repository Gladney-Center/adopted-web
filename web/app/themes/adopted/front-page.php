<?php

namespace AdoptED;

global $post;

add_filter( 'body_class', function($classes) use ($post) {
	return explode(' ',get_post_meta($post->ID, 'gcfa_page_classes', true));
});
 
get_header(); ?>
<pre>
<?php print_r(
	json_encode(
		parse_blocks($post->post_content),
		JSON_PRETTY_PRINT
	)
); ?>
</pre>
<?php get_footer();