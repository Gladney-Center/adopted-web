<?php

foreach ([
    'helloworld'
] as $block) add_action('enqueue_block_editor_assets', function() use ($block) {
    wp_enqueue_script(
        $block,
        get_stylesheet_directory_uri()."/assets/js/blocks/$block/$block.js",
        ['wp-blocks','wp-editor','wp-element'],
        true
    );
});