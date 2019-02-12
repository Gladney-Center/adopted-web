<?php

/* Template Name: Front Page */

global $post; 
get_header();
?>
<?php echo $post->post_content; ?>
<?php
get_footer();