<?php

defined('ABSPATH') || die;

add_action( 'customize_register', 'adpt_customize_register', 999 );
function adpt_customize_register( $wp_customize ) {

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