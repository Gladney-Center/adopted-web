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

		// Customizer sections
		$wp_customize->add_section( 'front_page', [
			'title' => 'Front Page',
			'description' => 'Customize the AdoptED front page',
			'priority' => 10,
			'panel'  => 'gcfa_pages'
		]);

		// Customizer settings
		$wp_customize->add_setting( 'fp_stage_heading' );
		$wp_customize->add_setting( 'fp_fold_copy' );

		// Customizer Controls
		$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'fp_stage_heading', [
			'label' => 'Stage Heading',
			'section' => 'front_page',
			'settings' => 'fp_stage_heading'
		]));

		$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'fp_fold_copy', [
			'label' => 'Fold Copy (gray box)',
			'section' => 'front_page',
			'settings' => 'fp_fold_copy'
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
		$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'footer_block_1_email', [
			'label' => 'Email Address',
			'section' => 'footer_block_1',
			'settings' => 'footer_block_1_email'
		]));

		$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'footer_block_1_phone', [
			'label' => 'Phone Number',
			'section' => 'footer_block_1',
			'settings' => 'footer_block_1_phone'
		]));

		$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'footer_block_1_address', [
			'label' => 'Physical Address',
			'section' => 'footer_block_1',
			'settings' => 'footer_block_1_address'
		]));

		$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'footer_block_2_heading', [
			'label' => 'Block 2 Heading',
			'section' => 'footer_block_2',
			'settings' => 'footer_block_2_heading'
		]));

		$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'footer_block_3_heading', [
			'label' => 'Block 3 Heading',
			'section' => 'footer_block_3',
			'settings' => 'footer_block_3_heading'
		]));

		$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'footer_block_3_cta', [
			'label' => 'Block 3 Call To Action',
			'section' => 'footer_block_3',
			'settings' => 'footer_block_3_cta'
		]));

		$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'footer_block_4_heading', [
			'label' => 'Block 4 Heading',
			'section' => 'footer_block_4',
			'settings' => 'footer_block_4_heading'
		]));

		$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'footer_block_4_logo', [
			'label' => 'Gladney Logo',
			'section' => 'footer_block_4',
			'settings' => 'footer_block_4_logo',
			'mime_type' => 'image'
		]));
	}
}