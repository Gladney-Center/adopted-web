<?php

/* Template Name: Front Page */

add_filter( 'body_class', function($classes) {
	$newcls = ['adpt-front-page'];
	if (isset($classes['logged-in'])) $newcls[] = 'logged-in';
	if (isset($classes['admin-bar'])) $newcls[] = 'admin-bar';
	return $newcls;
});

global $post; 
get_header();
?>
<?php //echo $post->post_content; ?>
<?php
get_footer();