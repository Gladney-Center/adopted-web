<?php

namespace AdoptED;

defined( 'ABSPATH' ) || exit;

class Post_Types {

	public static function init() {
		add_action( 'init', [ __CLASS__, 'register_post_types' ], 5 );
	}

	public static function register_post_types() {
		register_post_type(
            'stats',
            [
                'labels'    =>	[
                    'name'	=>	'Stats'
                ],
                'description'			=>	'AdoptED pregnancy statistics',
                'menu_position'			=>	55,
                'menu_icon'				=>  'dashicons-chart-line',
                'public'				=>	true,
                'hierarchical'			=>	false,
                'exclude_from_search'	=>	true,
                'show_in_nav_menus'		=>	false,
                'show_in_rest'			=>	false,
                'rewrite'				=>	[
                    'with_front'	=>	false,
                    'pages'			=>	false
                ],
                'delete_with_user'		=>	false,
                'can_export'			=>	true,
                'supports'				=>	[ 'title', 'editor', 'custom-fields' ]
            ]
        );
	}
}