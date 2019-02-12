<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
	<link rel="stylesheet" href="https://use.typekit.net/zhc3hzf.css" />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header class="adpt-header">
	<div class="adpt-nav-dt">
		<div class="adpt-nav-logo">
			<a href="<?php echo home_url(); ?>">
				<img
					src="<?php header_image(); ?>"
					alt="<?php echo bloginfo('name'); ?>"
				/>
			</a>
		</div>
		<div class="adpt-menu">
			<?php wp_nav_menu(
				[
					'menu' => 'header-menu'
				]
			); ?>
		</div>
	</div>
	<div class="adpt-header-apps">
		<div class="adpt-app-link">
			<a href="https://itunes.apple.com/us/app/gladney-cup/id1036365725?mt=8">
				<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/apple-store-black.png" alt="AdoptED on the Apple App Store" />
			</a>
		</div>
		<div class="adpt-app-link">
			<a href="https://play.google.com/store/apps/details?id=com.gladney.adopted&hl=en">
				<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/google-play-store-black.png" alt="AdoptED on Google Play" />
			</a>
		</div>
	</div>
</header>