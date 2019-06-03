<!DOCTYPE html>
<html lang="en" class="no-js" <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
	<link rel="stylesheet" href="https://use.typekit.net/zhc3hzf.css" />
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header role="banner" class="adpt-header">
	<div class="adpt-mobile-menu">
		<div class="adpt-mobile-menu-icon">
			<div class="adpt-mobile-menu-icon-lines"></div>
		</div>
	</div>
	<div class="adpt-nav-logo">
		<a href="<?php echo home_url(); ?>">
		<?php echo \AdoptED\Filter::svg('<adpt-icon:adptlogo>'); ?>
		</a>
	</div>
	<div class="adpt-nav-dt">
		<nav role="navigation" class="adpt-menu">
			<?php wp_nav_menu(
				[
					'menu' => 'header-menu'
				]
			); ?>
		</nav>
	</div>
	<div class="adpt-header-apps">
		<span>Get the app!</span>
		<div class="adpt-app-link">
			<a href="#">
				<i class="fab fa-apple"></i>
			</a>
		</div>
		<div class="adpt-app-link">
			<a href="#">
				<i class="fab fa-android"></i>
			</a>
		</div>
		<div class="adpt-app-link">
			<a href="#">
				<i class="fab fa-windows"></i>
			</a>
		</div>
	</div>
</header>