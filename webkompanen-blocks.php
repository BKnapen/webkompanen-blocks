<?php
	/**
 	 * @package webkompanen-blocks
 	 */
	/*
	 * Plugin Name: Webkompanen blocks
	 * Plugin URI: https://boostcreators.nl/
	 * Description: Webkompanen blocks package written for the standard Wordpress block editor.
	 * Version: 0.0.1
	 * Author: B. Knapen
	 * Author URI: https://webkompanen.nl/webkompanen-blocks/
	 * License: GPLv2 or later
	 * Text Domain: boostyourclub
	 */

	if ( ! function_exists( 'webkompanen_blocks_editor_assets' ) ) :
		function webkompanen_blocks_editor_assets(){
			
			$url = untrailingslashit( plugin_dir_url( __FILE__ ) );
			$path = untrailingslashit( plugin_dir_path( __FILE__ ) );
			
			wp_register_script(
				'webkompanen-block-editor-assets', // Handle.
				$url . '/assets/js/index.js',
				array( 'wp-blocks', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-element', 'wp-plugins', 'wp-edit-post', 'wp-edit-site' ),
				filemtime($path. '/assets/js/index.js'), 
				false 
	 		);
	
			wp_enqueue_script( 'webkompanen-block-editor-assets' );
		
			wp_localize_script(
				'webkompanen-block-editor-assets', 
				'webkompanenblocks', 
				array(
					'ajax_url' => admin_url( 'admin-ajax.php' ),
					'assetsurl' => $url
				)
			);
			
			
			wp_register_style(
				'webkompanen-block-editor-assets', // Handle.
				$url . '/assets/css/editor.css',
				array(),
				filemtime($path. '/assets/css/editor.css'), 
				'all' 
	 		);
			
			wp_enqueue_style( 'webkompanen-block-editor-assets' );

		}
	endif;

	add_action( 'enqueue_block_editor_assets', 'webkompanen_blocks_editor_assets' );

/*add_action( 'enqueue_block_editor_assets', function() {
	wp_enqueue_style( 'your-css-handle-here', get_template_directory_uri() . '/css/block-editor.css', array(), '1.0', 'all' );
	wp_enqueue_script('your-js-handle-here', get_template_directory_uri() . '/js/block-editor.js', array(), '1.0.0', 'true' );
} );*/

	if ( ! function_exists( 'webkompanen_blocks_assets' ) ) :
		function webkompanen_blocks_assets(){
			
			$url = untrailingslashit( plugin_dir_url( __FILE__ ) );
			$path = untrailingslashit( plugin_dir_path( __FILE__ ) );
			
			wp_register_style(
				'webkompanen-block-asserts', // Handle.
				$url . '/assets/css/style.css',
				array(),
				filemtime($path. '/assets/css/style.css'), 
				'all' 
	 		);
			
			wp_enqueue_style( 'webkompanen-block-asserts' );

		}
	endif;

	// Hook: Frontend assets.
	add_action( 'enqueue_block_assets', 'webkompanen_blocks_assets' );



	if ( ! function_exists( 'webkompanen_styles' ) ) :

		/**
	 	 * Enqueue styles.
	 	 *
	 	 * @since Webkompanen 1.0
	 	 *
	 	 * @return void
	 	 */
		function webkompanen_styles() {
			
			$url = untrailingslashit( plugin_dir_url( __FILE__ ) );
			$path = untrailingslashit( plugin_dir_path( __FILE__ ) );
			
			wp_register_style(
				'webkompanen-enqueue-style', // Handle.
				$url . '/assets/css/style.css',
				array(),
				filemtime($path. '/assets/css/style.css'), 
				'all' 
	 		);
			
			wp_enqueue_style( 'webkompanen-css' );
			
		}

	endif;

	add_action( 'wp_enqueue_scripts', 'webkompanen_styles' );


	if ( ! function_exists( 'webkompanen_admin_styles' ) ) :

		/**
	 	 * Enqueue editor styles.
	 	 *
	 	 * @since Webkompanen 1.0
	 	 *
	 	 * @return void
	 	 */
		function webkompanen_admin_styles() {
			$url = untrailingslashit( plugin_dir_url( __FILE__ ) );
			$path = untrailingslashit( plugin_dir_path( __FILE__ ) );
			
			wp_register_style(
				'webkompanen-admin-css', // Handle.
				$url . '/assets/css/style.css',
				array(),
				filemtime($path. '/assets/css/style.css'), 
				'all' 
	 		);
			
			wp_enqueue_style( 'webkompanen-admin-css' );
		}

	endif;

	if ( ! function_exists( 'webkompanen_editor_styles' ) ) :

		/**
	 	 * Enqueue editor styles.
	 	 *
	 	 * @since Webkompanen 1.0
	 	 *
	 	 * @return void
	 	 */
		function webkompanen_editor_styles() {

			// Add styles inline.
			wp_add_inline_style( 'block-editor-assets', webkompanen_get_font_face_styles() );

		}

	endif;

	if ( ! function_exists( 'webkompanen_get_font_face_styles' ) ) :

		/**
	 	 * Get font face styles.
	 	 * Called by functions webkompanen_styles() and webkompanen_editor_styles() above.
	 	 *
	 	 * @since Webkompanen 1.0
	 	 *
	 	 * @return string
	 	 */
		function webkompanen_get_font_face_styles() {

			return "
				@font-face{
					font-family: 'Source Serif Pro';
					font-weight: 200 900;
					font-style: normal;
					font-style: normal;
					font-stretch: normal;
					font-display: swap;
					src: url('" . get_theme_file_uri( 'assets/fonts/SourceSerif4Variable-Roman.ttf.woff2' ) . "') format('woff2');
				}

				@font-face{
					font-family: 'Source Serif Pro';
					font-weight: 200 900;
					font-style: italic;
					font-stretch: normal;
					font-display: swap;
					src: url('" . get_theme_file_uri( 'assets/fonts/SourceSerif4Variable-Italic.ttf.woff2' ) . "') format('woff2');
				}
			";

		}

	endif;

	//add_action( 'admin_enqueue_scripts', 'webkompanen_admin_styles' );

	remove_theme_support( 'core-block-patterns' );
	add_theme_support( 'block-editor-assets' );
	add_editor_style( untrailingslashit( plugin_dir_url( __FILE__ ) ).'/assets/css/editor.css' );
?>