<?php

/* Template Name: Front Page */

add_filter( 'body_class', function($classes) {
	return ['adpt-front-page'];
});

global $post; 
get_header();
?>
<?php //echo $post->post_content; ?>
<?php
get_footer();