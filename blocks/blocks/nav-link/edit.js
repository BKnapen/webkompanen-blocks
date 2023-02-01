/**
 * WordPress dependencies
 */
import {
	registerBlockType
	
} from '@wordpress/blocks';

import { 
	useSelect, useDispatch 
} from '@wordpress/data';

import { 
	sprintf, __ 
} from '@wordpress/i18n';

import {
	__experimentalLinkControl as LinkControl,
	InnerBlocks,
	useBlockProps,
	BlockControls,
	InspectorControls,
	MediaUpload, 
	MediaUploadCheck,
	RichText,
	PanelColorSettings,
	withColors,
	useInnerBlocksProps,
	getColorObjectByColorValue,
	getColorClassName
	
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
	DropdownMenu,
	SelectControl,
	ColorPicker,
	Popover,
	IconButton,
	Button,
	ColorPalette,
	Toolbar
} from '@wordpress/components';

import {
	button as icon
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

function ButtonLinkEdit( props ) {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;
	
	const [ isVisible, setIsVisible ] = useState( false );
	
    const toggleVisible = () => {
       	setIsVisible( ( state ) => ! state );
    };
	
	const colorArr = [
		{ name: 'primary', color: 'var(--bs-primary)' },
		{ name: 'secondary', color: 'var(--bs-secondary)' },
		{ name: 'light', color: 'var(--bs-light)' },
		{ name: 'dark', color: 'var(--bs-dark)' }
	]
	
	const btnoutline  = attributes.isOutline ? 'outline-' : '' 
	const btncolor  = attributes.color ? attributes.color+'' : '' 
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	const classes = attributes.classes ? attributes.classes : ''
	
	let blockClasses = 'nav-item';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += padding.classes() != null && padding.classes() != '' ? ' '+padding.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses

	
	const blockProps = useBlockProps( { className: blockClasses } );
	
	return(
		<>
			<Fragment>		
				<InspectorControls>
					<PositionEdit 
						props={props}
					/>
					<PanelBody
						title={__('Button kleur', 'awp')}
						initialOpen={false}
					>
					<ColorPalette
						colors={ colorArr }
						value={ attributes.color ? 'var(--bs-'+attributes.color+')' : '' }
						style={{width: "200px" }}
						onChange={ 
							( newColor ) => {
								setAttributes({
									color: getColorObjectByColorValue( colorArr, newColor ).name
								})
							} 
						}
						disableCustomColors={ true }
						clearable={ false }
					/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
			<BlockControls>
				<Toolbar>
					<ToggleControl
						label="Outline button"
						help={ true ? '' : '' }
						checked={ attributes.isOutline }
						onChange={ 
							(e) => { 
								setAttributes({
									isOutline: ! attributes.isOutline 
								}) 
							}
						}
						style={
							{
								'margin-bottom': '0px'
							}
						}
					/>
					<IconButton
						label="Link"
						icon={link}
						className="link"
						onClick={ 
							(e) => { 
								setIsVisible( ( state ) => ! state );
							} 
						}
					/>
					{ 
						isVisible && (
							<Popover>
								<div style={{padding: "16px"}}>
									<LinkControl
										className="bootstrap-linkcontrol"
										searchInputPlaceholder="Search here..."
										value={ attributes.post }
										settings={
											[
											]
										}
										onChange={ 
											( newPost ) => setAttributes( 
												{ 
													post: newPost,
													button: newPost.url
												},
												setIsVisible( ( state ) => ! state )
											) 
										}
										withCreateSuggestion={true}
										createSuggestion={ 
				  							(inputValue) => setAttributes( 
												{ 
													post: {
														...attributes.post,
														title: inputValue,
														type: "custom-url",
														id: Date.now(),
														url: inputValue
													}
												} 
											) 
										}
										createSuggestionButtonText={ 
											(newValue) => { 
												newValue
											} 
										}
									>
									</LinkControl>
								</div>
							</Popover>
						) 
					}
				</Toolbar>
			</BlockControls>
			<RichText
				{ ...blockProps }
				identifier="content"
				//className="display-4"
               	tagName="a" // The tag here is the element output and editable in the admin
               	value={ attributes.content } // Any existing content, either from the database or an attribute default
				allowedFormats={ [ 'core/italic', 'core/bold' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
               	onChange={ ( content ) => setAttributes( { content } ) } // Store updated content as a block attribute
               	placeholder={ __( 'Text...' ) } // Display this text before any content has been added by the user
            />
		</>
	)
}

export default ButtonLinkEdit;