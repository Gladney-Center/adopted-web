<?php
namespace AdoptED;

defined('ABSPATH') || die;

final class Main {

	protected static $_instance = null;

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;
    }

	public function __construct() {
		$this->constants();
		$this->includes();
		$this->init_hooks();
	}

	private function constants() {
		$this->define( 'SITE_BRANDNAME', 'AdoptED' );
        $this->define( 'SITE_VERSION', '1.0.0' );
	}

	private function includes() {

		// required classes
        require_once 'classes/scripts.class.php';
	}

	private function init_hooks() {
		add_action( 'after_setup_theme', [ $this, 'theme_setup' ] );
		add_action( 'init', [ $this, 'init' ], 1 );
		add_action( 'wp_enqueue_scripts', [ __NAMESPACE__ . '\\Scripts', 'init' ] );
		add_action( 'adopted_loaded', [ $this, 'adopted_loaded' ], 999 );
	}

	public function init() {

	}

	public function theme_setup() {
        add_theme_support( 'custom-header' );
	}
	
	private function define( $const, $value ) {
        if ( ! defined( $const ) ) {
			define( $const, $value );
		}
	}
	
	public function sttv_loaded() {}
      
}