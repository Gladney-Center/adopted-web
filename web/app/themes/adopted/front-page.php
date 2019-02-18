<?php

/* Template Name: Front Page */

global $post;

add_filter( 'body_class', function($classes) {
	return ['adpt-front-page'];
});
 
get_header();

//$blocks = parse_blocks($post->post_content);

echo $post->post_content;

get_footer();