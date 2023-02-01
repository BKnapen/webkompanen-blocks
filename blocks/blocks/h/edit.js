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
	getColorClassName,
	store as blockEditorStore
	
} from '@wordpress/block-editor';

import {
	link,
	paragraph, 
	formatBold, 
	formatItalic,
	Icon
} from '@wordpress/icons';

import {
	useState,
	Fragment
} from '@wordpress/element';

import {
	TextareaControl,
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
	Toolbar,
	ToolbarItem,
	DropdownMenu,
	ToolbarButton,
	ToolbarGroup
} from '@wordpress/components';

import {
	heading as headingicon,
	heading1 as heading1icon,
	heading2 as heading2icon,
	heading3 as heading3icon,
	heading4 as heading4icon,
	heading5 as heading5icon,
	heading6 as heading6icon,
	textcenter,
	textleft,
	textright
} from '../../icons'

import { Margin } from '../../utilities/margin';
import { NegativeMargin } from '../../utilities/negativemargin';
import { Padding } from '../../utilities/padding';
import { Display } from '../../utilities/display';
import { Position } from '../../utilities/position';
import { Color } from '../../utilities/color';
import { Backgroundcolor } from '../../utilities/backgroundcolor';

/* Editors */

import ColorEdit from '../../editor/color';
import BackgroundcolorEdit from '../../editor/backgroundcolor';
import PositionEdit from '../../editor/position';

/*function HeaderEdit( props ) {*/
const HeadingEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;
	
	const formattypes = wp.data.select( 'core/rich-text' ).getFormatTypes();
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	const classes = attributes.classes ? ' '+attributes.classes : '';
	const textalign = attributes.textalign ? ' '+attributes.textalign : '';
	const texttransform = attributes.texttransform ? ' '+attributes.texttransform : '';
	
	let blockClasses = '';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += textalign != null && textalign != '' ? ' '+textalign : ''
	blockClasses += texttransform != null && texttransform != '' ? ' '+texttransform : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += padding.classes() != null && padding.classes() != '' ? ' '+padding.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses

	const blockProps = useBlockProps( { className: blockClasses } );
	//https://wordpress.stackexchange.com/questions/367932/create-a-custom-render-appender-button-to-add-inner-blocks
	
					/*<IconButton
						label="My very own custom button"
						icon="edit"
						className="my-custom-button"
						onClick={() => 'pressed button'}
					/>
            		<ToolbarGroup>
                		<ToolbarButton icon={ paragraph } label="Paragraph" />
            		</ToolbarGroup>
            		<ToolbarGroup>
                		<ToolbarButton icon={ formatBold } label="Bold" />
                		<ToolbarButton icon={ formatItalic } label="Italic" />
                		<ToolbarButton icon={ link } label="Link" />
            		</ToolbarGroup>*/
	
	return(
		<>	
			<Fragment>		
				<InspectorControls>
					<ColorEdit 
						props={props}
					/>
					<BackgroundcolorEdit 
						props={props}
					/>
					<PositionEdit 
						props={props}
					/>
					<PanelBody
						title={__('Tekst', 'awp')}
						initialOpen={false}
					>
						<div>
							<TextareaControl
								label="Text"
								rows={5}
								value={ attributes.content }
								onChange={ 
									(nextValue) => {
										setAttributes({
											content: nextValue
										})
									} 
								}
							/>
						</div>
					</PanelBody>
				</InspectorControls>
			</Fragment>
			<BlockControls>
				<Toolbar>
            		<ToolbarItem>
                		{ ( toolbarItemHTMLProps ) => (
                    	<DropdownMenu
                        	icon={
						 		<>
						 			<Icon 
										icon={ headingicon } 
									/>
								</>
							}
		
                        	toggleProps={ toolbarItemHTMLProps }
                        	label={ 'Heading' }
                        	controls={ [					
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ heading1icon } 
											style={
												{
													color:attributes.tagname == 'h1' || !attributes.tagname ? '#ffffff' : '',
    												background:attributes.tagname == 'h1' || !attributes.tagname ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											tagname:'h1'
										})
									}
								},				
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ heading2icon } 
											style={
												{
													color:attributes.tagname == 'h2' ? '#ffffff' : '',
    												background:attributes.tagname == 'h2' ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											tagname:'h2'
										})
									}
								},			
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ heading3icon } 
											style={
												{
													color:attributes.tagname == 'h3' ? '#ffffff' : '',
    												background:attributes.tagname == 'h3' ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											tagname:'h3'
										})
									}
								},			
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ heading4icon } 
											style={
												{
													color:attributes.tagname == 'h4' ? '#ffffff' : '',
    												background:attributes.tagname == 'h4' ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											tagname:'h4'
										})
									}
								},			
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ heading5icon }
											style={
												{
													color:attributes.tagname == 'h5' ? '#ffffff' : '',
    												background:attributes.tagname == 'h5' ? '#000000' : ''
												}
											} 
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											tagname:'h5'
										})
									}
								},			
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ heading6icon } 
											style={
												{
													color:attributes.tagname == 'h6' ? '#ffffff' : '',
    												background:attributes.tagname == 'h6' ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											tagname:'h6'
										})
									}
								} 
							] }
                    	/>
                		) }
            		</ToolbarItem>
            		<ToolbarItem>
                		{ ( toolbarItemHTMLProps ) => (
                    	<DropdownMenu
                        	icon={
						 		<>
						 			<Icon 
										icon={ textcenter } 
									/>
								</>
							}
		
                        	toggleProps={ toolbarItemHTMLProps }
                        	label={ 'Text align' }
                        	controls={ [					
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ textleft } 
											style={
												{
													color:attributes.textalign == 'text-left' ? '#ffffff' : '',
    												background:attributes.textalign == 'text-left' ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											textalign:'text-left'
										})
									}
								},		
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ textcenter } 
											style={
												{
													color:attributes.textalign == 'text-center' ? '#ffffff' : '',
    												background:attributes.textalign == 'text-center' ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											textalign:'text-center'
										})
									}
								},		
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ textright } 
											style={
												{
													color:attributes.textalign == 'text-right' ? '#ffffff' : '',
    												background:attributes.textalign == 'text-right' ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											textalign:'text-right'
										})
									}
								}
							] }
                    	/>
                		) }
            		</ToolbarItem>
				</Toolbar>
			</BlockControls>
			<RichText
				{ ...blockProps }
				//className="display-4"
               	tagName={ attributes.tagname ? attributes.tagname : 'h1' } // The tag here is the element output and editable in the admin
               	value={ attributes.content } // Any existing content, either from the database or an attribute default
				allowedFormats={ 
					[ 
						'core/italic', 
						'core/bold',
						'webkompanen-blocks/color',
						'webkompanen-blocks/href'
					] 
				} // Allow the content to be made bold or italic, but do not allow other formatting options
               	onChange={ 
					( newcontent ) => setAttributes( { 
						content: newcontent 
					} ) 
				} // Store updated content as a block attribute
               	placeholder={ __( 'Text...' ) } // Display this text before any content has been added by the user
            />	
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: props.attributes.headerImageId ? select('core').getMedia(props.attributes.headerImageId) : undefined
	};
})(HeaderEdit);*/

export default HeadingEdit;