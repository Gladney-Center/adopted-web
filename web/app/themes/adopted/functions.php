<?php

defined('ABSPATH') || die;

date_default_timezone_set('America/Chicago');

function unbold_filter($text) {
	return preg_replace('(<%(.*?)%>)', '<span class="notbold">$1</span>', $text);
}

function fa_filter($text) {
	return preg_replace('(<fa:(.*?)>)', '<i class="far fa-$1"></i>', $text);
}

require_once __DIR__ . '/lib/customizer.php';