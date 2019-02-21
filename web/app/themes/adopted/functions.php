<?php

defined('ABSPATH') || die;

date_default_timezone_set('America/Chicago');

function unbold_filter($text) {
	return preg_replace('(<%(.*?)%>)', '<span class="notbold">$1</span>', $text);
}

function fa_filter($text) {
	return preg_replace('(<fa:(.*?)>)', '<i class="fas fa-$1"></i>', $text);
}

add_filter('render_block_data',function($block,$source_block) {
	print_r($block);
	echo '<br>';
	print_r($source_block);
}, 11, 2);

require_once __DIR__ . '/lib/customizer.php';