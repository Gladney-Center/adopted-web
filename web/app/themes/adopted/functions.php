<?php

namespace AdoptED;

defined('ABSPATH') || die;

date_default_timezone_set('America/Chicago');

require_once __DIR__ . '/lib/filter.class.php';
require_once __DIR__ . '/lib/customizer.php';
require_once __DIR__ . '/lib/post_types.class.php';

Customizer::init();
Post_Types::init();