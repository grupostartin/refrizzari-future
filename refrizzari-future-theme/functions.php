<?php
function refrizzari_future_scripts() {
    wp_enqueue_style( 'refrizzari-future-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'refrizzari_future_scripts' );

function refrizzari_future_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
}
add_action( 'after_setup_theme', 'refrizzari_future_setup' );
?>
