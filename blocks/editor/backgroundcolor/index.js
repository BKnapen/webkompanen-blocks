/**
 * WordPress dependencies
 */
import {
	registerBlockType
	
} from '@wordpress/blocks';

import { 
	useSelect, useDispatch, withSelect
} from '@wordpress/data';

import { 
	sprintf, __ 
} from '@wordpress/i18n';

import {
	__experimentalLinkControl as LinkControl,
	InnerBlocks,
	useBlockProps,
	BlockControls,
	MediaUpload, 
	MediaUploadCheck,
	InspectorControls,
	RichText,
	PanelColorSettings,
	withColors,
	useInnerBlocksProps,
	getColorObjectByColorValue,
	getColorClassName,
	store as blockEditorStore
	
} from '@wordpress/block-editor';

import {
	link
} from '@wordpress/icons';

import {
	useState,
	Fragment
} from '@wordpress/element';

import {
	ToggleControl,
	PanelBody,
	PanelRow,
	CheckboxControl,
	SelectControl,
	ColorPicker,
	Popover,
	IconButton,
	Button,
	ResponsiveWrapper,
	ColorPalette,
	__experimentalInputControl as InputControl,
	__experimentalBoxControl as BoxControl,
	Toolbar
} from '@wordpress/components';

import { Colors } from '../../utilities/colors';
//function MarginEdit( props )
const BackgroundcolorEdit = (props)=> {
	
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props.props;
	
	const colors = new Colors;
	
	return(
		<PanelBody
			title={__('Achtergrond kleur', 'awp')}
			initialOpen={false}
		>
			<ColorPalette
				colors={ colors.get() }
				value={ attributes.bgcolor ? 'var(--bs-'+attributes.bgcolor+')' : '' }
				style={{width: "200px" }}
				onChange={ 
					( newColor ) => {
						setAttributes({
							bgcolor: getColorObjectByColorValue( colors.get(), newColor ).name
						})
					} 
				}
				disableCustomColors={ true }
				clearable={ true }
			/>
		</PanelBody>
	)
}

export default BackgroundcolorEdit;