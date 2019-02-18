<?php

global $post;

add_filter( 'body_class', function($classes) use ($post) {
	return ['adpt-front-page'];
	//return explode(' ',get_post_meta($post->ID, 'gcfa_page_classes', true));
});
 
get_header();

echo $post->post_content;

get_footer();