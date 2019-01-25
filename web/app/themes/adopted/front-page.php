<?php

/* Template Name: Front Page */

global $post; 
get_header();
?>
<pre>
<?php echo $post->post_content; ?>
</pre>
<?php
get_footer();