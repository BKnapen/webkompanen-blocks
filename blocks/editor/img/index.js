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
	TextareaControl,
	PanelBody,
	PanelRow,
	CheckboxControl,
	SelectControl,
	ColorPicker,
	Popover,
	IconButton,
	ButtonGroup,
	Button,
	ResponsiveWrapper,
	ColorPalette,
	__experimentalInputControl as InputControl,
	__experimentalBoxControl as BoxControl,
	Toolbar
} from '@wordpress/components';

import { Units } from '../../utilities/units';

//function MarginEdit( props )
const ImageEdit = (props)=> {

	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props.props;
	
	
	
	/* Media selector */
	const onSelectMedia = (imageInfo) => {
		setAttributes({
			imageId: imageInfo.id,
			imageUrl: imageInfo.url,
			imageAlt: imageInfo.alt,
			image: imageInfo,
			w: imageInfo.width,
			h: imageInfo.height
		});
	}
		
	/* Removers */
		
	const removeMedia = () => {
		setAttributes({
			imageId: -1,
			imageUrl: '',
			imageAlt: '',
			image: {},
			w: null,
			h: null
		});
	}
	
	
	return(
		<PanelBody
			title={__('Afbeelding', 'awp')}
			initialOpen={false}
		>
			<div>
				<div className="editor-post-featured-image">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectMedia}
							value={ attributes.imageId }
							allowedTypes={ ['image'] }
							render={
			  					({open}) => (
									<Button 
										className={
											(attributes.imageUrl === '' ||  attributes.imageUrl === undefined) ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'
										}
										onClick={
											open
										}
									>
										{
											(attributes.imageUrl === '' ||  attributes.imageUrl) === undefined ? __('Choose an image', 'awp') : ''
										}
										{
											(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ( 
						            			<ResponsiveWrapper
													naturalWidth={ attributes.image.width }
													naturalHeight={ attributes.image.height }
									    		>
									    			<img 
														src={ attributes.imageUrl }
													/>
									    		</ResponsiveWrapper>
											)
													: ''
						            	}
									</Button>
								)
							}
						/>
					</MediaUploadCheck>
					{
						(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? (
							<MediaUploadCheck>
								<MediaUpload
									title={__('Replace image', 'awp')}
									value={attributes.imageId}
									onSelect={onSelectMedia}
									allowedTypes={['image']}
									render={
										({open}) => (
											<Button 
												onClick={
													open
												}
												isDefault 
												//isLarge
											>
												{__('Replace image', 'awp')}
											</Button>
										)
									}
								/>
							</MediaUploadCheck>
						) : ''
					}
					{
						(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ( 
							<MediaUploadCheck>
								<Button onClick={removeMedia} isLink isDestructive>{__('Remove image', 'awp')}
								</Button>
							</MediaUploadCheck>
						) : ''
					}
				</div>
			</div>
			<div
				className="row"
			>
				<div
					className="col-12"
				>
					<ButtonGroup>
						<Button 
							isSecondary
							onClick={
								(e)=>{
									setAttributes(
										{
											width:'w-25'
										}
									)
								}
							}
						>
							25%
						</Button>
						<Button 
							isSecondary
							onClick={
								(e)=>{
									setAttributes(
										{
											width:'w-50'
										}
									)
								}
							}
						>
							50%
						</Button>
						<Button 
							isSecondary
							onClick={
								(e)=>{
									setAttributes(
										{
											width:'w-75'
										}
									)
								}
							}
						>
							75%
						</Button>
						<Button 
							isSecondary
							onClick={
								(e)=>{
									setAttributes(
										{
											width:'w-100'
										}
									)
								}
							}
						>
							100%
						</Button>
					</ButtonGroup>
				</div>
			</div>
			<div
				className="row"
			>
				<div
					className="col-12"
				>
					<ToggleControl
						label="Image fluid?"
						help={ attributes.imgfluid ? 'Yes.' : 'No.' }
						checked={ attributes.imgfluid }
						onChange={ 
							(e) => {
								setAttributes({
									imgfluid: ! attributes.imgfluid
								})
							}
						}
					/>
					<ToggleControl
						label="Figure wrapper?"
						help={ attributes.imgfigure ? 'Yes.' : 'No.' }
						checked={ attributes.imgfigure }
						onChange={ 
							(e) => {
								setAttributes({
									imgfigure: ! attributes.imgfigure
								})
							}
						}
					/>
					<ToggleControl
						label="Full width?"
						help={ attributes.fullwidth ? 'Yes.' : 'No.' }
						checked={ attributes.fullwidth }
						onChange={ 
							(e) => {
								setAttributes({
									fullwidth: ! attributes.fullwidth
								})
							}
						}
					/>
					<ToggleControl
						label="Zoom effect?"
						help={ attributes.zoomeffect ? 'Yes.' : 'No.' }
						checked={ attributes.zoomeffect }
						onChange={ 
							(e) => {
								setAttributes({
									zoomeffect: ! attributes.zoomeffect
								})
							}
						}
					/>
					<TextareaControl
						label="Alt text"
						rows={5}
						value={ attributes.imageAlt }
						onChange={ 
							(nextValue) => {
								setAttributes({
									imageAlt: nextValue
								})
							} 
						}
					/>
				</div>
			</div>
		</PanelBody>
	)
}

export default ImageEdit;