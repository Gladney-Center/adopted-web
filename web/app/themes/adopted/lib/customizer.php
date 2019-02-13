<?php

defined('ABSPATH') || die;

add_action( 'customize_register', 'adpt_customize_register', 999 );
function adpt_customize_register( $wp_customize ) {

	$wp_customize->add_section( 'footer_block_1', [
		'title' => 'Footer Block 1',
		'description' => 'First footer block',
		'priority' => 10,
		'panel'  => 'gcfa_footer'
	]);

	$wp_customize->add_setting( 'footer_block_1_set' );

	$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'footer_block_1_ctl', [
		'label' => 'Footer Block 1',
		'section' => 'footer_block_1',
		'settings' => 'footer_block_1_set'
	]));

}