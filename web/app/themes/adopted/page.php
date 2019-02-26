<?php

global $post;

add_filter( 'body_class', function($classes) use ($post) {
	return explode(' ',get_post_meta($post->ID, 'gcfa_page_classes', true));
});
 
get_header();

echo \Adopted\Filter::html_comment(
	\Adopted\Filter::svg($post->post_content)
);

get_footer();