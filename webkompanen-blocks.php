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
	define( 'SCRIPT_DEBUG', true );

	function send_email($requestData){

		$url = untrailingslashit( plugin_dir_url( __FILE__ ) );
		$path = untrailingslashit( plugin_dir_path( __FILE__ ) );
		
		ob_start();
	?>
		<!doctype html>
		<html>
    		<head>
    			<meta charset="UTF-8">
    			<!-- utf-8 works for most cases -->
    			<meta name="viewport" content="width=device-width, initial-scale=1.0">
    			<!-- Forcing initial-scale shouldn't be necessary -->
    			<meta http-equiv="X-UA-Compatible" content="IE=edge">
    			<!-- Use the latest (edge) version of IE rendering engine -->
    			<title>Reserveringsaanvraag</title>
    			<!-- The title tag shows in email notifications, like Android 4.4. -->
    			<!-- Please use an inliner tool to convert all CSS to inline as inpage or external CSS is removed by email clients -->
    			<!-- important in CSS is used to prevent the styles of currently inline CSS from overriding the ones mentioned in media queries when corresponding screen sizes are encountered -->

    			<!-- CSS Reset -->
    			<style type="text/css">
					/* What it does: Remove spaces around the email design added by some email clients. */
      				/* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
					html,  body {
						margin: 0 !important;
						padding: 0 !important;
						height: 100% !important;
						width: 100% !important;
					}
					/* What it does: Stops email clients resizing small text. */
					* {
						-ms-text-size-adjust: 100%;
						-webkit-text-size-adjust: 100%;
					}
					/* What it does: Forces Outlook.com to display emails full width. */
					.ExternalClass {
						width: 100%;
					}
					/* What is does: Centers email on Android 4.4 */
					div[style*="margin: 16px 0"] {
						margin: 0 !important;
					}
					/* What it does: Stops Outlook from adding extra spacing to tables. */
					table,  td {
						mso-table-lspace: 0pt !important;
						mso-table-rspace: 0pt !important;
					}
					/* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */
					table {
						border-spacing: 0 !important;
						border-collapse: collapse !important;
						table-layout: fixed !important;
						margin: 0 auto !important;
					}
					table table table {
						table-layout: auto;
					}
					/* What it does: Uses a better rendering method when resizing images in IE. */
					img {
						-ms-interpolation-mode: bicubic;
					}
					/* What it does: Overrides styles added when Yahoo's auto-senses a link. */
					.yshortcuts a {
						border-bottom: none !important;
					}
					/* What it does: Another work-around for iOS meddling in triggered links. */
					a[x-apple-data-detectors] {
						color: inherit !important;
					}
				</style>

    			<!-- Progressive Enhancements -->
    			<style type="text/css">
        
        			/* What it does: Hover styles for buttons */
        			.button-td,
        			.button-a {
            			transition: all 100ms ease-in;
        			}
        			.button-td:hover,
        			.button-a:hover {
            			background: #555555 !important;
            			border-color: #555555 !important;
        			}
	
        			/* Media Queries */
        			@media screen and (max-width: 600px) {

            			.email-container {
                			width: 100% !important;
            			}

            			/* What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. */
            			.fluid,
            			.fluid-centered {
                			max-width: 100% !important;
                			height: auto !important;
                			margin-left: auto !important;
                			margin-right: auto !important;
            			}
            			/* And center justify these ones. */
            			.fluid-centered {
                			margin-left: auto !important;
                			margin-right: auto !important;
            			}

            			/* What it does: Forces table cells into full-width rows. */
            			.stack-column,
            			.stack-column-center {
                			display: block !important;
                			width: 100% !important;
                			max-width: 100% !important;
                			direction: ltr !important;
            			}	
            			/* And center justify these ones. */
            			.stack-column-center {
                			text-align: center !important;
            			}
        
            			/* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */
            			.center-on-narrow {
                			text-align: center !important;
                			display: block !important;
                			margin-left: auto !important;
                			margin-right: auto !important;
                			float: none !important;
            			}
            			table.center-on-narrow {
                			display: inline-block !important;
           				}
                
        			}

    			</style>
			</head>
    		<body bgcolor="#e0e0e0" width="100%" style="margin: 0;" yahoo="yahoo">
    			<table bgcolor="#e0e0e0" cellpadding="0" cellspacing="0" border="0" height="100%" width="100%" style="border-collapse:collapse;">
      				<tr>
        				<td>
							<center style="width: 100%;">
            
            					<!-- Visually Hidden Preheader Text : BEGIN -->
            					<div style="display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;font-family: sans-serif;"> 
									Reserveringsaanvraag 
								</div>
            					<!-- Visually Hidden Preheader Text : END --> 
            
            					<!-- Email Header : BEGIN height="50" -->
            					<table align="center" width="600" class="email-container">
            						<tr>
                						<td style="padding: 20px 0; text-align: center">
											<img src="<?php echo $url; ?>/assets/images/png/curoyal-villa-curacao-logo.png" width="200" alt="alt_text" border="0">
										</td>
              						</tr>
          						</table>
            					<!-- Email Header : END --> 
            
            					<!-- Email Body : BEGIN -->
            					<table cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#ffffff" width="600" class="email-container">
            
            						<!-- 1 Column Text : BEGIN -->
            						<tr>
                						<td style="padding: 40px; text-align: left; font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555;"> 
											<table>
											<?php
												foreach ($requestData as $key => $value):
    										?>
												<tr>
													<td><?php echo $key;?>:</td>
													<td><?php echo $value;?></td>
												</tr>
											<?php
												endforeach;
											?>
											</table>
										</td>
									</tr>
								</table>
            					<!-- Email Body : END --> 
            
            					<!-- Email Footer : BEGIN -->
            					<table align="center" width="600" class="email-container">
            						<tr>
                						<td style="padding: 40px 10px;width: 100%;font-size: 12px; font-family: sans-serif; mso-height-rule: exactly; line-height:18px; text-align: center; color: #888888;">
                							<br>
                							<br>
                							Villa Curoyal
											<br>
                							<span class="mobile-link--footer">
												Kaya Biskania | Jan Thiel | Curaçao
											</span>
										</td>
              						</tr>
          						</table>
            					<!-- Email Footer : END -->
            
							</center>
						</td>
					</tr>
				</table>
			</body>
		</html>
	<?php
		$message = ob_get_contents();
		ob_clean();
		ob_flush();
		$subject = 'Reserveringsaanvraag';
		wp_mail( 'bramknapen@outlook.com', $subject, $message );
	}
	add_action('rest_api_init', function() {
		register_rest_route('forms/v1', '/post/', 
			array(
    			'methods' => 'POST',
    			'callback' => 'webkompanen_submit_form',
    			'args' => array(
      				'type' => array(
        				'validate_callback' => function($param, $request, $key) {
          					return  $request['type'];
        				}
      				)
    			),
    			'permission_callback' => function($request) {
					$authorization = $request->get_header('authorization');
					if($authorization != ''):
						$authorizationarray = explode('Basic ', $authorization);
						if(count($authorizationarray) == 2):
        					$credentialsarray = explode(':', base64_decode($authorizationarray[1]));
							if(count($credentialsarray) == 2):
								$user = wp_authenticate_application_password(null, ''.$credentialsarray[0].'', ''.$credentialsarray[1].'');
								if(isset($user->ID)):
          							return  true;
								else:
									return false;
								endif;
							else:
								return false;
							endif;
						else:
							return false;
						endif;
					else:
						return false;
					endif;
        		}
			)
		);
	});

	function webkompanen_submit_form(WP_REST_Request $request){
		$response = new \stdClass();
		$data = new \stdClass();
		if(isset($request['type'])):
			$params = $request->get_params();
		 	//$request->get_body();
    		//$request->get_body_params();
		 	//$request->get_url_params();
    		//$request->get_query_params();
    		//$request->get_default_params();
    		//$request->get_file_params();
			send_email($params);
			$data->status = 201;
			$data->message = 'Route gevonden die overeenkomt met de URL en aanvraagmethode';
			$data->type = $request['type'];
		else:
			$data->status = 404;
			$response->code = 'rest_no_route';
			$response->message = 'Geen route gevonden die overeenkomt met de URL en aanvraagmethode.';
		endif;
		
		$response = $data;
		
		return rest_ensure_response($response);
	}

	if ( ! function_exists( 'webkompanen_send_smtp_email' ) ) :
		function webkompanen_send_smtp_email( $phpmailer ) {
   			$phpmailer->isSMTP();
   			$phpmailer->Host       = get_option( 'webkompanen_phpmailer_host' );
   			$phpmailer->SMTPAuth   = get_option( 'webkompanen_phpmailer_smtpauth' );
   			$phpmailer->Port       = get_option( 'webkompanen_phpmailer_port' );
   			$phpmailer->Username   = get_option( 'webkompanen_phpmailer_username' );
   			$phpmailer->Password   = get_option( 'webkompanen_phpmailer_password' );
   			$phpmailer->SMTPSecure = get_option( 'webkompanen_phpmailer_smtp_secure' );
   			$phpmailer->From       = get_option( 'webkompanen_phpmailer_from' );
			$phpmailer->FromName   = get_option( 'webkompanen_phpmailer_from_name' );
			$phpmailer->Sender   	= get_option( 'webkompanen_phpmailer_sender' );
			$phpmailer->IsHTML(get_option( 'webkompanen_phpmailer_is_html' ));
	
			/*$phpmailer->DKIM_domain = '';
			$phpmailer->DKIM_private = '';
			$phpmailer->DKIM_selector = 'selector1';
			$phpmailer->DKIM_passphrase = '';*/
		}
	endif;
	add_action( 'phpmailer_init', 'webkompanen_send_smtp_email' );


	if ( ! function_exists( 'webkompanen_add_block_category' ) ) :
		function webkompanen_add_block_category( $block_categories, $block_editor_context ) {
	
    		return array_merge(
        		$block_categories,
        		array(
            		array(
						'slug'  => 'webkompanen-blocks/media',
						'title' => __( 'Navigatie', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/navigation',
						'title' => __( 'Navigatie', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/carousel',
						'title' => __( 'Carousel', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/text',
						'title' => __( 'Text', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/layout',
						'title' => __( 'Layout', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/components',
						'title' => __( 'Components', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/content',
						'title' => __( 'Content', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/embed',
						'title' => __( 'Embed', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/querys',
						'title' => __( 'Query\'s', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/security',
						'title' => __( 'security', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/user',
						'title' => __( 'gebruiker', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/forms',
						'title' => __( 'forms', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks',
						'title' => __( 'webkompanen blocks', 'text-domain' ),
                		'icon'  => null,
            		)
        		)
    		);
		}
	endif;

	add_filter( 'block_categories_all', 'webkompanen_add_block_category', 10, 2 );
	
	if ( ! function_exists( 'webkompanen_register_settings' ) ) :
		function webkompanen_register_settings() {
			
			register_setting(
				'webkompanen_settings',
				'webkompanen_phpmailer_is_smtp',
				array(
					'type'         => 'boolean',
					'show_in_rest' => true,
					'default'      => false,
				)
			);
			
			register_setting(
				'webkompanen_settings',
				'webkompanen_phpmailer_host',
				array(
					'type'         => 'string',
					'show_in_rest' => true,
				)
			);

			register_setting(
				'webkompanen_settings',
				'webkompanen_phpmailer_smtpauth',
				array(
					'type'         => 'boolean',
					'show_in_rest' => true,
					'default'      => false,
				)
			);

			register_setting(
				'webkompanen_settings',
				'webkompanen_phpmailer_port',
				array(
					'type'         => 'number',
					'show_in_rest' => true,
				)
			);

			register_setting(
				'webkompanen_settings',
				'webkompanen_phpmailer_username',
				array(
					'type'         => 'string',
					'show_in_rest' => true,
				)
			);

			register_setting(
				'webkompanen_settings',
				'webkompanen_phpmailer_password',
				array(
					'type'         => 'string',
					'show_in_rest' => true,
				)
			);

			register_setting(
				'webkompanen_settings',
				'webkompanen_phpmailer_smtp_secure',
				array(
					'type'         => 'string',
					'show_in_rest' => true,
				)
			);

			register_setting(
				'webkompanen_settings',
				'webkompanen_phpmailer_sender',
				array(
					'type'         => 'string',
					'show_in_rest' => true,
				)
			);

			register_setting(
				'webkompanen_settings',
				'webkompanen_phpmailer_from',
				array(
					'type'         => 'string',
					'show_in_rest' => true,
				)
			);

			register_setting(
				'webkompanen_settings',
				'webkompanen_phpmailer_from_name',
				array(
					'type'         => 'string',
					'show_in_rest' => true,
				)
			);

			register_setting(
				'webkompanen_settings',
				'webkompanen_phpmailer_is_html',
				array(
					'type'         => 'boolean',
					'show_in_rest' => true,
					'default'      => false,
				)
			);

			register_setting(
				'webkompanen_settings',
				'webkompanen_app_auth',
				array(
					'type'         => 'string',
					'show_in_rest' => true,
				)
			);

		}
	endif;

	add_action( 'init', 'webkompanen_register_settings' );

	if ( ! function_exists( 'webkompanen_single_site_settings_callback' ) ) :
		function webkompanen_single_site_settings_callback() {
		
			echo '<div id="webkompanen-single-site-settings-callback"></div>';

		}
	endif;
	if ( ! function_exists( 'webkompanen_global_site_settings_callback' ) ) :
		function webkompanen_global_site_settings_callback() {
		
			echo '<div id="webkompanen-global-site-settings-callback"></div>';

		}
	endif;

	//manage_network_options
	if ( ! function_exists( 'webkompanen_single_site_admin_menu' ) ) :
		function webkompanen_single_site_admin_menu() {
			$page_hook_suffix = add_menu_page( 
				__( 'Instellingen', 'webkompanen' ),
				__( 'Instellingen', 'webkompanen' ), 
				'manage_options', 
				'webkompanen-single-site-settings', 
				'webkompanen_single_site_settings_callback', 
				'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.48,15.86l-5.58-4.4v4.4H3.82c-1.9,0-2.82-1.04-2.82-3.1V6.32h1.18v6.33c0,1.41,.61,2.13,1.86,2.13h3.88V6.32h1.18V14.78h5.62V6.32h1.17v4.24l5.4-4.24h1.47l-5.76,4.64,6,4.9h-1.52Zm-18.25,1.81v-1.35h-.17v1.2h-.8v-1.2h-.17v1.2h-.55c-.18,0-.26-.1-.26-.3v-.9h-.17v.91c0,.29,.13,.44,.4,.44h1.71Zm1.92,0v-.15h-1.25c-.18,0-.27-.1-.27-.3v-.12h1.24c.22,0,.3-.11,.3-.31v-.16c0-.2-.08-.31-.3-.31h-1.1c-.22,0-.31,.11-.31,.31v.61c0,.29,.13,.44,.4,.44h1.28Zm-.13-.91c0,.13-.05,.2-.19,.2h-1.19v-.3c0-.13,.05-.2,.2-.2h.99c.14,0,.19,.07,.19,.2v.1Zm1.83,.91c.22,0,.3-.11,.3-.31v-.11c0-.22-.15-.26-.24-.27,.08,0,.22-.05,.22-.28v-.07c0-.2-.08-.31-.3-.31h-1.4v1.35h1.42Zm.12-.96c0,.15-.09,.2-.22,.2h-1.15v-.46h1.18c.14,0,.19,.07,.19,.2v.05Zm.02,.61c0,.13-.05,.2-.19,.2h-1.2v-.49h1.16c.14,0,.23,.05,.23,.19v.09Zm2.16,.34l-.85-.7,.82-.66h-.21l-.76,.6h-.59v-.6h-.17v1.35h.17v-.62h.58l.79,.62h.22Zm1.36,0c.27,0,.4-.15,.4-.44v-.47c0-.29-.13-.44-.4-.44h-.91c-.28,0-.4,.15-.4,.44v.47c0,.29,.13,.44,.4,.44h.91Zm.23-.46c0,.2-.09,.3-.27,.3h-.85c-.18,0-.27-.1-.27-.3v-.44c0-.2,.08-.3,.27-.3h.85c.18,0,.27,.1,.27,.3v.44Zm2.53,.46v-.91c0-.29-.13-.44-.4-.44h-1.73v1.35h.17v-1.2h.82v1.2h.16v-1.2h.55c.18,0,.27,.1,.27,.3v.9h.17Zm1.62-.4c.22,0,.3-.1,.3-.33v-.32c0-.2-.08-.31-.3-.31h-1.37v1.35h.17v-.4h1.2Zm.14-.35c0,.15-.05,.22-.2,.22h-1.14v-.69h1.14c.14,0,.2,.07,.2,.2v.26Zm2.07,.75v-.91c0-.29-.13-.44-.4-.44h-1.28v.15h1.25c.18,0,.27,.1,.27,.3v.13h-1.24c-.22,0-.3,.11-.3,.31v.16c0,.2,.08,.31,.3,.31h1.41Zm-.17-.14h-1.19c-.14,0-.19-.07-.19-.2v-.09c0-.13,.05-.2,.19-.2h1.19v.5Zm2.09,.14v-.91c0-.29-.13-.44-.4-.44h-1.28v1.35h.17v-1.2h1.08c.18,0,.27,.1,.27,.3v.9h.16Zm1.91,0v-.15h-1.25c-.18,0-.27-.1-.27-.3v-.12h1.24c.22,0,.3-.11,.3-.31v-.16c0-.2-.08-.31-.3-.31h-1.1c-.22,0-.31,.11-.31,.31v.61c0,.29,.13,.44,.4,.44h1.28Zm-.13-.91c0,.13-.05,.2-.19,.2h-1.19v-.3c0-.13,.05-.2,.2-.2h.99c.14,0,.19,.07,.19,.2v.1Zm2.09,.91v-.91c0-.29-.13-.44-.4-.44h-1.28v1.35h.17v-1.2h1.08c.18,0,.27,.1,.27,.3v.9h.16Z"/></svg>'),
				4 // menu position
			); 
			
			add_action( "admin_print_scripts-{$page_hook_suffix}", 'webkompanen_setting_page_assets');
		}
	endif;

	add_action('admin_menu', 'webkompanen_single_site_admin_menu', 10);
/*

$page_hook_suffix = add_options_page(

		__( 'Awesome Plugin', 'textdomain' ),

		__( 'Awesome Plugin', 'textdomain' ),

		'manage_options',

		'awesome',

		'codeinwp_menu_callback'

	);



	add_action( "admin_print_scripts-{$page_hook_suffix}", 'codeinwp_options_assets'*/

	if ( ! function_exists( 'webkompanen_global_site_admin_menu' ) ) :
		function webkompanen_global_site_admin_menu() {
			$page_hook_suffix = add_menu_page( 
				__( 'Webkompanen', 'webkompanen' ),
				__( 'Webkompanen', 'webkompanen' ), 
				'manage_network_options', 
				'webkompanen-global-site-settings', 
				'webkompanen_global_site_settings_callback', 
				'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.48,15.86l-5.58-4.4v4.4H3.82c-1.9,0-2.82-1.04-2.82-3.1V6.32h1.18v6.33c0,1.41,.61,2.13,1.86,2.13h3.88V6.32h1.18V14.78h5.62V6.32h1.17v4.24l5.4-4.24h1.47l-5.76,4.64,6,4.9h-1.52Zm-18.25,1.81v-1.35h-.17v1.2h-.8v-1.2h-.17v1.2h-.55c-.18,0-.26-.1-.26-.3v-.9h-.17v.91c0,.29,.13,.44,.4,.44h1.71Zm1.92,0v-.15h-1.25c-.18,0-.27-.1-.27-.3v-.12h1.24c.22,0,.3-.11,.3-.31v-.16c0-.2-.08-.31-.3-.31h-1.1c-.22,0-.31,.11-.31,.31v.61c0,.29,.13,.44,.4,.44h1.28Zm-.13-.91c0,.13-.05,.2-.19,.2h-1.19v-.3c0-.13,.05-.2,.2-.2h.99c.14,0,.19,.07,.19,.2v.1Zm1.83,.91c.22,0,.3-.11,.3-.31v-.11c0-.22-.15-.26-.24-.27,.08,0,.22-.05,.22-.28v-.07c0-.2-.08-.31-.3-.31h-1.4v1.35h1.42Zm.12-.96c0,.15-.09,.2-.22,.2h-1.15v-.46h1.18c.14,0,.19,.07,.19,.2v.05Zm.02,.61c0,.13-.05,.2-.19,.2h-1.2v-.49h1.16c.14,0,.23,.05,.23,.19v.09Zm2.16,.34l-.85-.7,.82-.66h-.21l-.76,.6h-.59v-.6h-.17v1.35h.17v-.62h.58l.79,.62h.22Zm1.36,0c.27,0,.4-.15,.4-.44v-.47c0-.29-.13-.44-.4-.44h-.91c-.28,0-.4,.15-.4,.44v.47c0,.29,.13,.44,.4,.44h.91Zm.23-.46c0,.2-.09,.3-.27,.3h-.85c-.18,0-.27-.1-.27-.3v-.44c0-.2,.08-.3,.27-.3h.85c.18,0,.27,.1,.27,.3v.44Zm2.53,.46v-.91c0-.29-.13-.44-.4-.44h-1.73v1.35h.17v-1.2h.82v1.2h.16v-1.2h.55c.18,0,.27,.1,.27,.3v.9h.17Zm1.62-.4c.22,0,.3-.1,.3-.33v-.32c0-.2-.08-.31-.3-.31h-1.37v1.35h.17v-.4h1.2Zm.14-.35c0,.15-.05,.22-.2,.22h-1.14v-.69h1.14c.14,0,.2,.07,.2,.2v.26Zm2.07,.75v-.91c0-.29-.13-.44-.4-.44h-1.28v.15h1.25c.18,0,.27,.1,.27,.3v.13h-1.24c-.22,0-.3,.11-.3,.31v.16c0,.2,.08,.31,.3,.31h1.41Zm-.17-.14h-1.19c-.14,0-.19-.07-.19-.2v-.09c0-.13,.05-.2,.19-.2h1.19v.5Zm2.09,.14v-.91c0-.29-.13-.44-.4-.44h-1.28v1.35h.17v-1.2h1.08c.18,0,.27,.1,.27,.3v.9h.16Zm1.91,0v-.15h-1.25c-.18,0-.27-.1-.27-.3v-.12h1.24c.22,0,.3-.11,.3-.31v-.16c0-.2-.08-.31-.3-.31h-1.1c-.22,0-.31,.11-.31,.31v.61c0,.29,.13,.44,.4,.44h1.28Zm-.13-.91c0,.13-.05,.2-.19,.2h-1.19v-.3c0-.13,.05-.2,.2-.2h.99c.14,0,.19,.07,.19,.2v.1Zm2.09,.91v-.91c0-.29-.13-.44-.4-.44h-1.28v1.35h.17v-1.2h1.08c.18,0,.27,.1,.27,.3v.9h.16Z"/></svg>'),
				4 // menu position
			); 
			
			add_action( "admin_print_scripts-{$page_hook_suffix}", 'webkompanen_setting_page_assets');
		}
	endif;

	add_action('network_admin_menu', 'webkompanen_global_site_admin_menu', 10);

	if ( ! function_exists( 'webkompanen_setting_page_assets' ) ) :
		function webkompanen_setting_page_assets(){
			
			$url = untrailingslashit( plugin_dir_url( __FILE__ ) );
			$path = untrailingslashit( plugin_dir_path( __FILE__ ) );
			
			wp_register_script(
				'webkompanen-setting-page-assets', // Handle.
				$url . '/assets/js/index.js',
				array( 'wp-api', 'wp-blocks', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-element', 'wp-plugins', 'wp-edit-post', 'wp-edit-site' ),
				filemtime($path. '/assets/js/index.js'), 
				true 
	 		);
			
			wp_enqueue_script( 'webkompanen-setting-page-assets' );
			
			wp_localize_script(
				'webkompanen-setting-page-assets', 
				'webkompanen', 
				array(
					'blogName' => get_bloginfo( 'name' ),
					'blogLanguage' => get_locale(),
					'blogUrl' => get_bloginfo( 'url' ),
					'siteSettings' => get_option( 'webkompanen_single_site_settings' )
				)
			);
			/*
				,
				,
				,
				,
				,
				dashbo&load%5Bchunk_2%5D=
				ard,
				list-tables,
				edit,
				revisions,
				media,
				themes,
				about,
				nav-menus,
				wp-pointer,
				widgets,
				site-icon,
				l10n,
				wp-auth-check
			*/
			
			wp_enqueue_style( 'dashicons' );
			wp_enqueue_style( 'admin-bar' );
			wp_enqueue_style( 'buttons' );
			wp_enqueue_style( 'media-views' );
			wp_enqueue_style( 'editor-buttons' );
			wp_enqueue_style( 'wp-components' );
			wp_enqueue_style( 'wp-block-editor' );
			wp_enqueue_style( 'wp-nux' );
			wp_enqueue_style( 'wp-reusable-blocks' );
			wp_enqueue_style( 'wp-editor' );
			wp_enqueue_style( 'common' );
			
			wp_enqueue_style( 'forms' );
			wp_enqueue_style( 'wp-reset-editor-styles' );
			wp_enqueue_style( 'wp-block-library' );
			wp_enqueue_style( 'wp-edit-blocks' );
			wp_enqueue_style( 'wp-edit-post' );
			wp_enqueue_style( 'wp-block-directory' );
			wp_enqueue_style( 'wp-format-library' );
			wp_enqueue_style( 'admin-menu' );
		}
	endif;

	if ( ! function_exists( 'webkompanen_blocks_editor_assets' ) ) :
		function webkompanen_blocks_editor_assets(){
			
			$url = untrailingslashit( plugin_dir_url( __FILE__ ) );
			$path = untrailingslashit( plugin_dir_path( __FILE__ ) );
			
			wp_register_script(
				'webkompanen-block-editor-assets', // Handle.
				$url . '/assets/js/index.js',
				array( 'wp-blocks', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-element', 'wp-plugins', 'wp-edit-post', 'wp-edit-site' ),
				filemtime($path. '/assets/js/index.js'), 
				true 
	 		);
	
			wp_enqueue_script( 'webkompanen-block-editor-assets' );
			
			
			wp_register_script(
				'webkompanen-bootstrap-block-editor-assets', // Handle.
				$url . '/assets/js/external/bootstrap/bootstrap.js',
				array(),
				filemtime($path. '/assets/js/external/bootstrap/bootstrap.js'), 
				true 
	 		);
			
			//wp_enqueue_script( 'webkompanen-bootstrap-block-editor-assets' );
			
			wp_register_script(
				'webkompanen-lightgallery-block-editor-assets', // Handle.
				$url . '/assets/js/external/lightgallery/lightgallery.umd.js',
				array(),
				filemtime($path. '/assets/js/external/lightgallery/lightgallery.umd.js'), 
				true 
	 		);
			
			wp_enqueue_script( 'webkompanen-lightgallery-block-editor-assets' );
			
			wp_register_script(
				'webkompanen-flickity-block-editor-assets', // Handle.
				'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js',
				array(),
				filemtime($path. '/assets/js/theme.js'), 
				true 
	 		);
			
			wp_enqueue_script( 'webkompanen-flickity-block-editor-assets' );
			
			wp_register_script(
				'webkompanen-block-editor-assets', // Handle.
				$url. '/assets/js/theme.js',
				array(),
				filemtime($path. '/assets/js/theme.js'), 
				true 
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
			
			wp_enqueue_style( 'webkompanen-enqueue-style' );
			
		}

	endif;

	add_action( 'wp_enqueue_scripts', 'webkompanen_styles' );

	if ( ! function_exists( 'webkompanen_scripts' ) ) :

		/**
	 	 * Enqueue styles.
	 	 *
	 	 * @since Webkompanen 1.0
	 	 *
	 	 * @return void
	 	 */
		function webkompanen_scripts() {
			
			$url = untrailingslashit( plugin_dir_url( __FILE__ ) );
			$path = untrailingslashit( plugin_dir_path( __FILE__ ) );
			
			wp_register_script(
				'webkompanen-enqueue-popper', // Handle.
				'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/umd/popper.min.js',
				array(),
				filemtime($path. '/assets/js/theme.js'), 
				true 
	 		);
			
			wp_enqueue_script( 'webkompanen-enqueue-popper' );
			
			wp_register_script(
				'webkompanen-enqueue-bootstrap', // Handle.
				$url . '/assets/js/external/bootstrap/bootstrap.js',
				array(),
				filemtime($path. '/assets/js/external/bootstrap/bootstrap.js'), 
				true 
	 		);
			
			wp_enqueue_script( 'webkompanen-enqueue-bootstrap' );
			
			wp_register_script(
				'webkompanen-enqueue-lightgallery', // Handle.
				$url . '/assets/js/external/lightgallery/lightgallery.umd.js',
				array(),
				filemtime($path. '/assets/js/external/lightgallery/lightgallery.umd.js'), 
				true 
	 		);
			
			wp_enqueue_script( 'webkompanen-enqueue-lightgallery' );
			
			wp_register_script(
				'webkompanen-enqueue-flickity', // Handle.
				'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js',
				array(),
				filemtime($path. '/assets/js/theme.js'), 
				true 
	 		);
			
			wp_enqueue_script( 'webkompanen-enqueue-flickity' );
			
			wp_register_script(
				'webkompanen-enqueue-js', // Handle.
				$url . '/assets/js/theme.js',
				array(),
				filemtime($path. '/assets/js/theme.js'), 
				true 
	 		);
			
			wp_enqueue_script( 'webkompanen-enqueue-js' );
			
			wp_localize_script(
				'webkompanen-enqueue-js', 
				'webkompanen', 
				array(
					'blogName' => get_bloginfo( 'name' ),
					'blogLanguage' => get_locale(),
					'blogUrl' => get_bloginfo( 'url' ),
					'appAuth' => get_option( 'webkompanen_app_auth' )
				)
			);
			
		}

	endif;

	add_action( 'wp_enqueue_scripts', 'webkompanen_scripts' );


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