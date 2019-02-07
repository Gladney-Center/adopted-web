<?php
/*
Plugin Name:  Gladney Center for Adoption
Plugin URI:   https://adoptionsbygladney.com
Description:  Branding and set-up plugin for all GCFA Wordpress sites
Version:      1.0.0
Author:       David Paul Crouch
License:      MIT License
*/

defined('ABSPATH') || die;

if ( ! defined( 'GCFA_PLUGIN_FILE' ) ) define( 'GCFA_PLUGIN_FILE', __FILE__ );

// DEFINE FUNCTIONS FIRST
function gcfa_array_map_recursive($callback, &$array) {
	$func = function ($item) use (&$func, &$callback) {
		return is_array($item) ? array_map($func, $item) : call_user_func($callback, $item);
	};
	return array_map($func, $array);
}

function gcfa_404_redirect() {
	global $wp_query;
	$wp_query->set_404();
	status_header( 404 );
	get_template_part( 404 );
}

function __return_email_from() {
	return get_option('admin_email');
}

function __return_email_from_name() {
	return GCFA_BRANDNAME;
}

function __return_email_content_type() {
	return 'text/html';
}

// MAIN INIT CLASS
final class Gladney {

	public function __construct() {
		$this->constants();
		$this->init_hooks();

		do_action('gladney_loaded');
	}

	private function constants() {
		$this->define( 'GCFA_BRANDNAME', 'Gladney Center for Adoption' );
		$this->define( 'GCFA_SHORTNAME', 'Gladney' );
		$this->define( 'GCFA_ACRONYM', 'GCFA' );
        $this->define( 'GCFA_VERSION', '1.0.0' );
	}

	private function init_hooks() {

		// plugin-specific hooks
		add_action( 'init', [ $this, 'init' ], 1 );
		add_action( 'after_setup_theme', [ $this, 'theme_setup' ] );
		add_action( 'gladney_loaded', [ $this, 'gladney_loaded' ], 999 );

		// front end hooks
		add_action( 'wp_enqueue_scripts', [ $this, 'scripts' ] );

		// admin hooks
		add_action( 'admin_bar_menu', [ $this, 'admin_bar' ], 999 );
		add_action( 'admin_init', [ $this, 'admin_footer' ], 999 );
	}

	public function init() {

		// changes
		add_filter( 'wp_mail_from', '__return_email_from' );
        add_filter( 'wp_mail_from_name', '__return_email_from_name' );
		add_filter( 'wp_mail_content_type', '__return_email_content_type' );
		
		// cleanup
		if ( ! current_user_can('manage_options') ) show_admin_bar( false );
        add_filter( 'ls_meta_generator', '__return_false' );
        add_filter( 'emoji_svg_url', '__return_false' );
        add_filter( 'pre_option_default_role', function($dr) {
            return '';
        } );
		remove_action( 'wp_head', '_admin_bar_bump_cb' );
        remove_action( 'wp_head', 'wp_generator' );
        //remove_action( 'rest_api_init', 'create_initial_rest_routes', 99 );
        remove_action( 'admin_print_styles', 'print_emoji_styles' );
        remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
        remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
        remove_action( 'wp_print_styles', 'print_emoji_styles' );
        remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
        remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
        remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );

	}

	public function theme_setup() {
        add_theme_support( 'custom-header' );
	}

	public function scripts() {
        wp_dequeue_script('jquery');
        wp_deregister_script('jquery');
        
        //styles
        wp_enqueue_style('gladney-main', get_stylesheet_directory_uri().'/style.css', false, null);
	}
	
	public function admin_bar( $wp_admin_bar ) {
		$wp_admin_bar->remove_node( 'wp-logo' );
	}

	public function admin_footer() {
		add_filter( 'admin_footer_text', function() {
			return 'Customized by ' . GCFA_BRANDNAME;
		} );
		add_filter( 'update_footer', function() {
			return 'Version ' . GCFA_VERSION;
		}, 11 );
	}

	public function login_stuff() {
		
	}
	
	private function define( $const, $value ) {
        if ( ! defined( $const ) ) {
			define( $const, $value );
		}
	}
	
	public function gladney_loaded() {}
      
}
new Gladney;

// end of line, man.