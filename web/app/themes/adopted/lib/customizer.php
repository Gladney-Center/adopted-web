<?php

namespace AdoptED;

defined('ABSPATH') || die;

class Customizer {

	public static function init() {
		add_action( 'customize_register', [__CLASS__, 'header'], 900 );
		add_action( 'customize_register', [__CLASS__, 'front_page'], 901 );
		add_action( 'customize_register', [__CLASS__, 'footer'], 919 );
	}

	public static function header($wp_customize) {}

	public static function front_page($wp_customize) {
		self::add([
			'panels' => [
				'front_page' => [
					'title' => 'Front Page',
					'capability'     => 'edit_theme_options',
					'theme_supports' => '',
					'description' => 'Edit content within the front page of this site',
					'priority' => 101
				]
			],
			'sections' => [
				'fp_stage' => [
					'title' => 'Front Page Stage area',
					'description' => 'Customize the AdoptED front page stage (above the fold)',
					'priority' => 10,
					'panel'  => 'front_page'
				],
				'fp_fold' => [
					'title' => 'Front Page Fold',
					'description' => 'Customize the front page Fold (gray box)',
					'priority' => 20,
					'panel'  => 'front_page'
				],
				'panel_block_1' => [
					'title' => 'Panel Blocks 1',
					'description' => 'The first set of large square panel blocks on the front page',
					'priority' => 30,
					'panel'  => 'front_page'
				],
				'podcast_section' => [
					'title' => 'Podcast',
					'description' => 'Change the podcast blurb or headline here',
					'priority' => 40,
					'panel'  => 'front_page'
				],
				'fp_ctas' => [
					'title' => 'Call to Action Boxes',
					'description' => 'Gray box / vector icon calls to action',
					'priority' => 50,
					'panel'  => 'front_page'
				],
				'panel_block_2' => [
					'title' => 'Panel Blocks 2',
					'description' => 'The second set of large square panel blocks on the front page',
					'priority' => 60,
					'panel'  => 'front_page'
				]
			],
			'settings' => [
				'fp_stage_heading',
				'fp_fold_copy',
				'fp_panel_block_1_left_title',
				'fp_panel_block_1_left_copy',
				'fp_panel_block_1_left_img',
				'fp_panel_block_1_left_link',
				'fp_panel_block_1_right_title',
				'fp_panel_block_1_right_copy',
				'fp_panel_block_1_right_img',
				'fp_panel_block_1_right_link',
				'fp_podcast_heading',
				'fp_podcast_blurb',
				'fp_cta_1_icon',
				'fp_cta_1_title',
				'fp_cta_1_text',
				'fp_cta_2_icon',
				'fp_cta_2_title',
				'fp_cta_2_text',
				'fp_cta_3_icon',
				'fp_cta_3_title',
				'fp_cta_3_text',
				'fp_panel_block_2_left_title',
				'fp_panel_block_2_left_copy',
				'fp_panel_block_2_left_img',
				'fp_panel_block_2_left_link',
				'fp_panel_block_2_right_title',
				'fp_panel_block_2_right_copy',
				'fp_panel_block_2_right_img',
				'fp_panel_block_2_right_link'
			],
			'controls' => [
				'fp_stage_heading' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Stage Heading',
						'section' => 'fp_stage',
						'type' => 'textarea',
						'settings' => 'fp_stage_heading'
					]
				],
				'fp_fold_copy' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Fold Copy (gray box)',
						'section' => 'fp_fold',
						'type' => 'textarea',
						'settings' => 'fp_fold_copy'
					]
				],
				'fp_panel_block_1_left_title' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Left Block Title',
						'section' => 'panel_block_1',
						'settings' => 'fp_panel_block_1_left_title'
					]
				],
				'fp_panel_block_1_left_img' => [
					'class' => '\\WP_Customize_Media_Control',
					'arr' => [
						'label' => 'Left Block Image',
						'section' => 'panel_block_1',
						'settings' => 'fp_panel_block_1_left_img',
						'mime_type' => 'image'
					]
				],
				'fp_panel_block_1_left_link' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Left Block Page Link',
						'section' => 'panel_block_1',
						'type' => 'dropdown-pages',
						'settings' => 'fp_panel_block_1_left_link'
					]
				],
				'fp_panel_block_1_left_copy' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Left Block Copy',
						'section' => 'panel_block_1',
						'type' => 'textarea',
						'settings' => 'fp_panel_block_1_left_copy'
					]
				],
				'fp_panel_block_1_right_title' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Right Block Title',
						'section' => 'panel_block_1',
						'settings' => 'fp_panel_block_1_right_title'
					]
				],
				'fp_panel_block_1_right_img' => [
					'class' => '\\WP_Customize_Media_Control',
					'arr' => [
						'label' => 'Right Block Image',
						'section' => 'panel_block_1',
						'settings' => 'fp_panel_block_1_right_img',
						'mime_type' => 'image'
					]
				],
				'fp_panel_block_1_right_link' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Right Block Page Link',
						'section' => 'panel_block_1',
						'type' => 'dropdown-pages',
						'settings' => 'fp_panel_block_1_right_link'
					]
				],
				'fp_panel_block_1_right_copy' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Right Block Copy',
						'section' => 'panel_block_1',
						'type' => 'textarea',
						'settings' => 'fp_panel_block_1_right_copy'
					]
				],
				'fp_podcast_heading' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Podcast Header',
						'section' => 'podcast_section',
						'type' => 'textarea',
						'settings' => 'fp_podcast_heading'
					]
				],
				'fp_podcast_blurb' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Podcast Blurb',
						'section' => 'podcast_section',
						'type' => 'textarea',
						'settings' => 'fp_podcast_blurb'
					]
				],
				'fp_cta_1_icon' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'CTA 1 Icon',
						'section' => 'fp_ctas',
						'settings' => 'fp_cta_1_icon'
					]
				],
				'fp_cta_1_title' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'CTA 1 Title',
						'section' => 'fp_ctas',
						'settings' => 'fp_cta_1_title'
					]
				],
				'fp_cta_1_text' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'CTA 1 Text',
						'section' => 'fp_ctas',
						'type' => 'textarea',
						'settings' => 'fp_cta_1_text'
					]
				],
				'fp_cta_2_icon' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'CTA 2 Icon',
						'section' => 'fp_ctas',
						'settings' => 'fp_cta_2_icon'
					]
				],
				'fp_cta_2_title' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'CTA 2 Title',
						'section' => 'fp_ctas',
						'settings' => 'fp_cta_2_title'
					]
				],
				'fp_cta_2_text' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'CTA 2 Text',
						'section' => 'fp_ctas',
						'type' => 'textarea',
						'settings' => 'fp_cta_2_text'
					]
				],
				'fp_cta_3_icon' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'CTA 3 Icon',
						'section' => 'fp_ctas',
						'settings' => 'fp_cta_3_icon'
					]
				],
				'fp_cta_3_title' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'CTA 3 Title',
						'section' => 'fp_ctas',
						'settings' => 'fp_cta_3_title'
					]
				],
				'fp_cta_3_text' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'CTA 3 Text',
						'section' => 'fp_ctas',
						'type' => 'textarea',
						'settings' => 'fp_cta_3_text'
					]
				],
				'fp_panel_block_2_left_title' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Left Block Title',
						'section' => 'panel_block_2',
						'settings' => 'fp_cta_1_icon'
					]
				],
				'fp_panel_block_2_left_img' => [
					'class' => '\\WP_Customize_Media_Control',
					'arr' => [
						'label' => 'Left Block Image',
						'section' => 'panel_block_2',
						'settings' => 'fp_panel_block_2_left_img',
						'mime_type' => 'image'
					]
				],
				'fp_panel_block_2_left_link' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Left Block Page Link',
						'section' => 'panel_block_2',
						'type' => 'dropdown-pages',
						'settings' => 'fp_panel_block_2_left_link'
					]
				],
				'fp_panel_block_2_left_copy' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Left Block Copy',
						'section' => 'panel_block_2',
						'type' => 'textarea',
						'settings' => 'fp_panel_block_2_left_copy'
					]
				],
				'fp_panel_block_2_right_title' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Right Block Title',
						'section' => 'panel_block_2',
						'settings' => 'fp_panel_block_2_right_title'
					]
				],
				'fp_panel_block_2_right_img' => [
					'class' => '\\WP_Customize_Media_Control',
					'arr' => [
						'label' => 'Right Block Image',
						'section' => 'panel_block_2',
						'settings' => 'fp_panel_block_2_right_img',
						'mime_type' => 'image'
					]
				],
				'fp_panel_block_2_right_link' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Right Block Page Link',
						'section' => 'panel_block_2',
						'type' => 'dropdown-pages',
						'settings' => 'fp_panel_block_2_right_link'
					]
				],
				'fp_panel_block_2_right_copy' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Right Block Copy',
						'section' => 'panel_block_2',
						'type' => 'textarea',
						'settings' => 'fp_panel_block_2_right_copy'
					]
				]
			]
		], $wp_customize );
	}

	public static function footer($wp_customize) {

		self::add([
			'sections' => [
				'footer_block_1' => [
					'title' => 'Footer Block 1',
					'description' => 'First footer block',
					'priority' => 10,
					'panel'  => 'gcfa_footer'
				],
				'footer_block_2' => [
					'title' => 'Footer Block 2',
					'description' => 'Second footer block',
					'priority' => 20,
					'panel'  => 'gcfa_footer'
				],
				'footer_block_3' => [
					'title' => 'Footer Block 3',
					'description' => 'Third footer block',
					'priority' => 30,
					'panel'  => 'gcfa_footer'
				],
				'footer_block_4' => [
					'title' => 'Footer Block 4',
					'description' => 'Fourth footer block',
					'priority' => 40,
					'panel'  => 'gcfa_footer'
				]
			],
			'settings' => [
				'footer_block_1_email',
				'footer_block_1_phone',
				'footer_block_1_address',
				'footer_block_2_heading',
				'footer_block_3_heading',
				'footer_block_3_cta',
				'footer_block_4_heading',
				'footer_block_4_logo'
			],
			'controls' => [
				'footer_block_1_email' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Email Address',
						'section' => 'footer_block_1',
						'settings' => 'footer_block_1_email'
					]
				],
				'footer_block_1_phone' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Phone Number',
						'section' => 'footer_block_1',
						'settings' => 'footer_block_1_phone'
					]
				],
				'footer_block_1_address' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Physical Address',
						'section' => 'footer_block_1',
						'settings' => 'footer_block_1_address'
					]
				],
				'footer_block_2_heading' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Block 2 Heading',
						'section' => 'footer_block_2',
						'settings' => 'footer_block_2_heading'
					]
				],
				'footer_block_3_heading' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Block 3 Heading',
						'section' => 'footer_block_3',
						'settings' => 'footer_block_3_heading'
					]
				],
				'footer_block_3_cta' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Block 3 Call To Action',
						'section' => 'footer_block_3',
						'settings' => 'footer_block_3_cta'
					]
				],
				'footer_block_4_heading' => [
					'class' => '\\WP_Customize_Control',
					'arr' => [
						'label' => 'Block 4 Heading',
						'section' => 'footer_block_4',
						'settings' => 'footer_block_4_heading'
					]
				],
				'footer_block_4_logo' => [
					'class' => '\\WP_Customize_Media_Control',
					'arr' => [
						'label' => 'Gladney Logo',
						'section' => 'footer_block_4',
						'settings' => 'footer_block_4_logo',
						'mime_type' => 'image'
					]
				]
			]
		], $wp_customize );
	}

	private static function add( $data, $wp_customize ) {
		if (isset($data['panels']))
			foreach ($data['panels'] as $panelid => $panelv)
				$wp_customize->add_panel( $panelid, $panelv );

		if (isset($data['sections']))
			foreach ($data['sections'] as $secid => $secv)
				$wp_customize->add_section( $secid, $secv );

		if (isset($data['settings']))
			foreach ($data['settings'] as $settingid)
				$wp_customize->add_setting( $settingid );

		if (isset($data['controls']))
			foreach ($data['controls'] as $controlid => $control)
				$wp_customize->add_control(
					new $control['class']($wp_customize,$controlid,$control['arr'])
				);
	}
}