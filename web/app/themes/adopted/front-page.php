<?php

namespace AdoptED;

global $post;
$meta = get_post_meta($post->ID);

add_filter( 'body_class', function($classes) use ($meta) {
	return explode(' ',$meta['gcfa_page_classes'][0]);
});
 
get_header(); ?>
<pre>
<?php print_r($meta); ?>
</pre>
<?php get_footer();