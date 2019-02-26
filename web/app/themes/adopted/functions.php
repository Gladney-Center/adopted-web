<?php

namespace AdoptED;

defined('ABSPATH') || die;

date_default_timezone_set('America/Chicago');

require_once __DIR__ . '/lib/filter.class.php';
require_once __DIR__ . '/lib/customizer.php';

add_action( 'customize_register', ['Customizer','init'], 999 );