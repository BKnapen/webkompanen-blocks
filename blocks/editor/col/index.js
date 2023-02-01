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

//function MarginEdit( props )
const ColEdit = (props)=> {

	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props.props;
	
	
	const breakpoint = props.breakpoint ? props.breakpoint : null
	
    const { updateSelectedblockAttributes } = wp.data.dispatch( 'core/block-editor' );
	const selectedblockpropstest = wp.data.select( 'core/block-editor' ).getSelectedBlock();
	
	return(
		<>
		{!breakpoint && 
		<>
		<PanelBody
			title={__('Col instellingen', 'awp')}
			initialOpen={false}
		>
			<div 
				className="row"
			>
				<div className="col-4">
					<InputControl
						label="xs"
						labelPosition="top"
						value={attributes.colxs}
						type="number"
						isPressEnterToChange
						onChange={ 
							( nextValue ) => {
								setAttributes({
									colxs: Number(nextValue)
								}) 
							}
						}
					/>
				</div>
				<div className="col-4">
					<InputControl
						label="sm"
						labelPosition="top"
						value={attributes.colsm}
						type="number"
						isPressEnterToChange
						onChange={ 
							( nextValue ) => {
								setAttributes({
									colsm: Number(nextValue)
								}) 
							}
						}
					/>
				</div>
				<div className="col-4">
					<InputControl
						label="md"
						labelPosition="top"
						value={attributes.colmd}
						type="number"
						isPressEnterToChange
						onChange={ 
							( nextValue ) => {
								setAttributes({
									colmd: Number(nextValue)
								}) 
							}
						}
					/>
				</div>
				<div className="col-4">
					<InputControl
						label="lg"
						labelPosition="top"
						value={attributes.collg}
						type="number"
						isPressEnterToChange
						onChange={ 
							( nextValue ) => {
								setAttributes({
									collg: Number(nextValue)
								}) 
							}
						}
					/>
				</div>
				<div className="col-4">
					<InputControl
						label="xl"
						labelPosition="top"
						value={attributes.colxl}
						type="number"
						isPressEnterToChange
						onChange={ 
							( nextValue ) => {
								setAttributes({
									colxl: Number(nextValue)
								}) 
							}
						}
					/>
				</div>
				<div className="col-4">
					<InputControl
						label="xxl"
						labelPosition="top"
						value={attributes.colxxl}
						type="number"
						isPressEnterToChange
						onChange={ 
							( nextValue ) => {
								setAttributes({
									colxxl: Number(nextValue)
								}) 
							}
						}
					/>
				</div>
			</div>
		</PanelBody>

		</>
		}
		{
			breakpoint && breakpoint == 'xs' &&	
				<PanelBody
					title={__('Col opties', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<InputControl
								label="xs"
								labelPosition="top"
								value={attributes.colxs}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												colxs: Number(nextValue) 
											} 
										)	  
									}
								}
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'sm' &&	
				<PanelBody
					title={__('Col opties', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<InputControl
								label="sm"
								labelPosition="top"
								value={attributes.colsm}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												colsm: Number(nextValue) 
											} 
										)	  
									}
								}
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'md' &&	
				<PanelBody
					title={__('Col opties', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<InputControl
								label="md"
								labelPosition="top"
								value={attributes.colmd}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												colmd: Number(nextValue) 
											} 
										)	  
									}
								}
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'lg' &&	
				<PanelBody
					title={__('Col opties', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<InputControl
								label="lg"
								labelPosition="top"
								value={attributes.collg}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												collg: Number(nextValue) 
											} 
										)	  
									}
								}
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'xl' &&	
				<PanelBody
					title={__('Col opties', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<InputControl
								label="xl"
								labelPosition="top"
								value={attributes.colxl}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												colxl: Number(nextValue) 
											} 
										)	  
									}
								}
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'xxl' &&
				<PanelBody
					title={__('Col opties', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<InputControl
								label="xxl"
								labelPosition="top"
								value={attributes.colxxl}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												colxxl: Number(nextValue) 
											} 
										)	  
									}
								}
							/>
						</div>
					</div>
				</PanelBody>
		}
		</>
	)
}

export default ColEdit;