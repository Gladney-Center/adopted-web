<?php

defined('ABSPATH') || die;

final class ContentFilter {

	public static function unbold($text) {
		return preg_replace('(<%(.*?)%>)', '<span class="notbold">$1</span>', $text);
	}
	
	public static function fa($text) {
		return preg_replace('(<fa:(.*?)>)', '<i class="fas fa-$1"></i>', $text);
	}
	
	public static function html_comment($text) {
		return preg_replace('/(<!--\s+\/?wp:\w+\s+-->)/i','',$text);
	}
	
	public static function svg($text) {
		return preg_replace_callback('(<adpt-icon:(\w+)>)',
			function($matches) {
				return file_get_contents(get_template_directory() . "/assets/svg/$matches[1].svg") ?: '';
			},
			$text
		);
	}
}