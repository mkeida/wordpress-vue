<?php

/**
 * Enqueue scripts and styles.
 */
function theme_scripts() {
    // Registrace scriptu (bundle.js z webpacku)
    wp_register_script(
        // Název
        'bundle',
        // Cesta
        get_template_directory_uri() . '/dist/bundle.js',
        // Závislosti (žádné)
        '',
        // Verze (žádná)
        false,
        // Umístit do patičky
        true
    );

    // Zařazení stylu do fronty
    wp_enqueue_script('bundle');
}

add_action('wp_enqueue_scripts', 'theme_scripts');
