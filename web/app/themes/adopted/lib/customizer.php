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
		// front page panel
		$wp_customize->add_panel( 'front_page', [
			'title' => 'Front Page',
			'capability'     => 'edit_theme_options',
			'theme_supports' => '',
			'description' => 'Edit content within the front page of this site',
			'priority' => 140
		]);

		// Customizer sections
		$wp_customize->add_section( 'fp_stage', [
			'title' => 'Front Page Stage area',
			'description' => 'Customize the AdoptED front page stage (above the fold)',
			'priority' => 10,
			'panel'  => 'front_page'
		]);

		$wp_customize->add_section( 'fp_fold', [
			'title' => 'Front Page Fold',
			'description' => 'Customize the front page Fold (gray box)',
			'priority' => 20,
			'panel'  => 'front_page'
		]);

		$wp_customize->add_section( 'panel_block_1', [
			'title' => 'Panel Blocks 1',
			'description' => 'The first set of large square panel blocks on the front page',
			'priority' => 30,
			'panel'  => 'front_page'
		]);

		// Customizer settings
		$wp_customize->add_setting( 'fp_stage_heading' );
		$wp_customize->add_setting( 'fp_fold_copy' );

		$wp_customize->add_setting( 'fp_panel_block_1_left_title' );
		$wp_customize->add_setting( 'fp_panel_block_1_left_copy' );
		$wp_customize->add_setting( 'fp_panel_block_1_left_img' );
		$wp_customize->add_setting( 'fp_panel_block_1_left_link' );
		$wp_customize->add_setting( 'fp_panel_block_1_right_copy' );

		// Customizer Controls
		$wp_customize->add_control( new \WP_Customize_Control( $wp_customize, 'fp_stage_heading', [
			'label' => 'Stage Heading',
			'section' => 'fp_stage',
			'type' => 'textarea',
			'settings' => 'fp_stage_heading'
		]));

		$wp_customize->add_control( new \WP_Customize_Control( $wp_customize, 'fp_fold_copy', [
			'label' => 'Fold Copy (gray box)',
			'section' => 'fp_fold',
			'type' => 'textarea',
			'settings' => 'fp_fold_copy'
		]));

		$wp_customize->add_control( new \WP_Customize_Control( $wp_customize, 'fp_panel_block_1_left_title', [
			'label' => 'Left Block Title',
			'section' => 'panel_block_1',
			'settings' => 'fp_panel_block_1_left_title'
		]));

		$wp_customize->add_control( new \WP_Customize_Control( $wp_customize, 'fp_panel_block_1_left_link', [
			'label' => 'Left Block Page Link',
			'section' => 'panel_block_1',
			'type' => 'dropdown-pages',
			'settings' => 'fp_panel_block_1_left_link'
		]));

		$wp_customize->add_control( new \WP_Customize_Control( $wp_customize, 'fp_panel_block_1_left_copy', [
			'label' => 'Left Block Copy',
			'section' => 'panel_block_1',
			'type' => 'textarea',
			'settings' => 'fp_panel_block_1_left_copy'
		]));

		$wp_customize->add_control( new \WP_Customize_Control( $wp_customize, 'fp_panel_block_1_right_title', [
			'label' => 'Right Block Title',
			'section' => 'panel_block_1',
			'settings' => 'fp_panel_block_1_right_title'
		]));

		$wp_customize->add_control( new \WP_Customize_Control( $wp_customize, 'fp_panel_block_1_right_link', [
			'label' => 'Right Block Page Link',
			'section' => 'panel_block_1',
			'type' => 'dropdown-pages',
			'settings' => 'fp_panel_block_1_right_link'
		]));

		$wp_customize->add_control( new \WP_Customize_Control( $wp_customize, 'fp_panel_block_1_right_copy', [
			'label' => 'Right Block Copy',
			'section' => 'panel_block_1',
			'type' => 'textarea',
			'settings' => 'fp_panel_block_1_right_copy'
		]));
	}

	public static function footer($wp_customize) {

		// Customizer Sections (hooked into global GCFA footer panel)
		$wp_customize->add_section( 'footer_block_1', [
			'title' => 'Footer Block 1',
			'description' => 'First footer block',
			'priority' => 10,
			'panel'  => 'gcfa_footer'
		]);

		$wp_customize->add_section( 'footer_block_2', [
			'title' => 'Footer Block 2',
			'description' => 'Second footer block',
			'priority' => 20,
			'panel'  => 'gcfa_footer'
		]);

		$wp_customize->add_section( 'footer_block_3', [
			'title' => 'Footer Block 3',
			'description' => 'Third footer block',
			'priority' => 30,
			'panel'  => 'gcfa_footer'
		]);

		$wp_customize->add_section( 'footer_block_4', [
			'title' => 'Footer Block 4',
			'description' => 'Fourth footer block',
			'priority' => 40,
			'panel'  => 'gcfa_footer'
		]);

		// Customizer settings
		$wp_customize->add_setting( 'footer_block_1_email' );
		$wp_customize->add_setting( 'footer_block_1_phone' );
		$wp_customize->add_setting( 'footer_block_1_address' );

		$wp_customize->add_setting( 'footer_block_2_heading' );

		$wp_customize->add_setting( 'footer_block_3_heading' );
		$wp_customize->add_setting( 'footer_block_3_cta' );

		$wp_customize->add_setting( 'footer_block_4_heading' );
		$wp_customize->add_setting( 'footer_block_4_logo' );

		// Customizer Controls
		$wp_customize->add_control( new \WP_Customize_Control( $wp_customize, 'footer_block_1_email', [
			'label' => 'Email Address',
			'section' => 'footer_block_1',
			'settings' => 'footer_block_1_email'
		]));

		$wp_customize->add_control( new \WP_Customize_Control( $wp_customize, 'footer_block_1_phone', [
			'label' => 'Phone Number',
			'section' => 'footer_block_1',
			'settings' => 'footer_block_1_phone'
		]));

		$wp_customize->add_control( new \WP_Customize_Control( $wp_customize, 'footer_block_1_address', [
			'label' => 'Physical Address',
			'section' => 'footer_block_1',
			'settings' => 'footer_block_1_address'
		]));

		$wp_customize->add_control( new \WP_Customize_Control( $wp_customize, 'footer_block_2_heading', [
			'label' => 'Block 2 Heading',
			'section' => 'footer_block_2',
			'settings' => 'footer_block_2_heading'
		]));

		$wp_customize->add_control( new \WP_Customize_Control( $wp_customize, 'footer_block_3_heading', [
			'label' => 'Block 3 Heading',
			'section' => 'footer_block_3',
			'settings' => 'footer_block_3_heading'
		]));

		$wp_customize->add_control( new \WP_Customize_Control( $wp_customize, 'footer_block_3_cta', [
			'label' => 'Block 3 Call To Action',
			'section' => 'footer_block_3',
			'settings' => 'footer_block_3_cta'
		]));

		$wp_customize->add_control( new \WP_Customize_Control( $wp_customize, 'footer_block_4_heading', [
			'label' => 'Block 4 Heading',
			'section' => 'footer_block_4',
			'settings' => 'footer_block_4_heading'
		]));

		$wp_customize->add_control( new \WP_Customize_Media_Control( $wp_customize, 'footer_block_4_logo', [
			'label' => 'Gladney Logo',
			'section' => 'footer_block_4',
			'settings' => 'footer_block_4_logo',
			'mime_type' => 'image'
		]));
	}
}