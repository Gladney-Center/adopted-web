<?php

/* Template Name: Front Page */

add_filter( 'body_class', function($classes) {
	return ['adpt-front-page','no-blog'];
});

global $post; 
get_header();
?>
<section class="adpt-stage">
<?php echo $post->post_content; ?>
</section>
<?php
get_footer();