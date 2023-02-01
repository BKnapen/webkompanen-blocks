import './settings/network-site-settings/index';
import './settings/single-site-settings/index';
import domReady from '@wordpress/dom-ready';

/*Collections*/

import * as webkompanen from './collections/webkompanen';

/*Updates*/

import * as layout from './update-block-categories/layout';

/*Format types*/
import * as color from './register-block-types/color';
import * as link from './register-block-types/link';

/*Sidebars*/
import * as sidebarxs from './plugin-sidebar/xs';
import * as sidebarsm from './plugin-sidebar/sm';
import * as sidebarmd from './plugin-sidebar/md';
import * as sidebarlg from './plugin-sidebar/lg';
import * as sidebarxl from './plugin-sidebar/xl';
import * as sidebarxxl from './plugin-sidebar/xxl';

import * as sidebareditsitexs from './plugin-sidebar-edit-site/xs';
import * as sidebareditsitesm from './plugin-sidebar-edit-site/sm';
import * as sidebareditsitemd from './plugin-sidebar-edit-site/md';
import * as sidebareditsitelg from './plugin-sidebar-edit-site/lg';
import * as sidebareditsitexl from './plugin-sidebar-edit-site/xl';
import * as sidebareditsitexxl from './plugin-sidebar-edit-site/xxl';

/*Blocks*/

import * as section from './blocks/section';
import * as container from './blocks/container';
import * as row from './blocks/row';
import * as col from './blocks/col';
import * as video from './blocks/video';
import * as img from './blocks/img';
import * as heading from './blocks/h';
import * as paragraph from './blocks/p';
import * as btn from './blocks/btn';
import * as button from './blocks/button';
import * as form from './blocks/form';
import * as input from './blocks/input';
import * as textarea from './blocks/textarea';
import * as label from './blocks/label';
import * as div from './blocks/div';
import * as carousel from './blocks/carousel';
import * as carouselinner from './blocks/carousel-inner';
import * as carouselitem from './blocks/carousel-item';
import * as blockquote from './blocks/blockquote';
import * as nav from './blocks/nav';
import * as navbarbrand from './blocks/navbar-brand';
import * as navbartoggler from './blocks/navbar-toggler';
import * as navbartogglericon from './blocks/navbar-toggler-icon';
import * as navbarcollapse from './blocks/navbar-collapse';
import * as navbarnav from './blocks/navbar-nav';
import * as navitem from './blocks/nav-item';
import * as navlink from './blocks/nav-link';

const getAllBlockCollections = () => [
	webkompanen
]

const registerWebkompanenBlockCollections = (
	collections = getAllBlockCollections()
) => {
	collections.forEach(
		( { init } ) => init()
	)
}

registerWebkompanenBlockCollections()


const getAllBlockUpdates = () => [
	layout
]

const updateWebkompanenBlocks = (
	updates = getAllBlockUpdates()
) => {
	updates.forEach(
		( { init } ) => init()
	)
}

updateWebkompanenBlocks()

const getAllFormatTypes = () => [
	color,
	link
]

const registerWebkompanenFormatTypes = (
	formattypes = getAllFormatTypes()
) => {
	formattypes.forEach(
		( { init } ) => init()
	)
}

registerWebkompanenFormatTypes()

const getAllBlockSidebars = () => [
	sidebarxs,
	sidebarsm,
	sidebarmd,
	sidebarlg,
	sidebarxl,
	sidebarxxl,
	sidebareditsitexs,
	sidebareditsitesm,
	sidebareditsitemd,
	sidebareditsitelg,
	sidebareditsitexl,
	sidebareditsitexxl
]

const registerWebkompanenSidebars = (
	sidebars = getAllBlockSidebars()
) => {
	sidebars.forEach(
		( { init } ) => init()
	)
}

registerWebkompanenSidebars()


const getAllBlocks = () => [
	col,
	container,
	img,
	row,
	section,
	video,
	heading,
	paragraph,
	btn,
	button,
	form,
	input,
	textarea,
	label,
	div,
	carousel,
	carouselinner,
	carouselitem,
	blockquote,
	nav,
	navbarbrand,
	navbartoggler,
	navbartogglericon,
	navbarcollapse,
	navbarnav,
	navitem,
	navlink
]

const registerWebkompanenBlocks = (
	blocks = getAllBlocks()
) => {
	blocks.forEach(
		( { init } ) => init()
	)
}

registerWebkompanenBlocks()