<!DOCTYPE html>
<!-- HTML -->
<html <?php language_attributes(); ?>>
	<!-- Head -->
	<head>
		<!-- Meta -->
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
		<!-- Gets template URL -->
		<script type="text/javascript">
			window.templateUrl = '<?= get_bloginfo("template_url"); ?>';
		</script>
		<?php wp_head(); ?>
		<!-- Styles -->
		<style>
			/* Hides app on load to prevent FOUC before unhide.scss is loaded */
			#app { display: none; }
		</style>
	</head>
	<!-- Body -->
	<body <?php body_class(); ?>>
		<!-- Vue app container -->
		<div id='app'>
