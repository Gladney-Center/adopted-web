<?php

namespace AdoptED;

global $post;

add_filter( 'body_class', function($classes) use ($post) {
	return explode(' ',get_post_meta($post->ID, 'gcfa_page_classes', true));
});
 
get_header(); ?>
<pre>
<?php print_r(get_post_meta($post->ID)); ?>
</pre>
<?php get_footer();