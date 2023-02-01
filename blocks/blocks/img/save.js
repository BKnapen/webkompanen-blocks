/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	useInnerBlocksProps, 
	InnerBlocks,
	useBlockProps 
} from '@wordpress/block-editor';

/* Utilities */

import { Margin } from '../../utilities/margin';
import { NegativeMargin } from '../../utilities/negativemargin';
import { Padding } from '../../utilities/padding';
import { Display } from '../../utilities/display';
import { Position } from '../../utilities/position';
import { Col } from '../../utilities/col';
import { Color } from '../../utilities/color';
import { Backgroundcolor } from '../../utilities/backgroundcolor';

function imageSave( props ) {
	const {
		attributes
	} = props;
	
	const imgfluid = attributes.imgfluid ? ' img-fluid' : ''
	
	const classes = attributes.classes ? attributes.classes : ''

	const alttext = attributes.imageAlt ? attributes.imageAlt : ''
	
	const zoomeffect = attributes.zoomeffect ? 'zoom' : ''
	
	const url = attributes.url ? ' d-block' : ''
	
	const WrapperTag = attributes.url ? `a` : `figure`;
	
	const urlurl = attributes.url ? attributes.url.url : null;
	
	const margin = new Margin(props)
	
	const negativemargin = new NegativeMargin(props)
	//const padding = new Padding(props)
	const display = new Display(props)

	const position = new Position(props)
	//const col = new Col(props)
	//const color = new Color(props)
	//const backgroundcolor = new Backgroundcolor(props)
	
	const figure = attributes.imgfigure
	
	const width = attributes.fullwidth ? ' w-100' : ''
	const h = attributes.h ? attributes.h : ''
	const w = attributes.w ? attributes.w : ''
	
	let blockClasses = '';
	
	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += width != null && width != '' ? ' '+width : ''
	blockClasses += imgfluid != null && imgfluid != '' ? ' '+imgfluid : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses

	return(
		<>
			{
				
			}
			{width && figure &&
				<WrapperTag
					className={zoomeffect+''+url}
					href={urlurl}
				>
					<img 
						className={blockClasses}
						src={(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : ''+attributes.imagePlaceholder+''}
						alt={''+alttext+''}	
					/>
				</WrapperTag>
			}
			{!width && figure &&
				<WrapperTag
			 		className={zoomeffect+''+url}
			 		href={urlurl}
			 	>
					<img 
						className={blockClasses}
						src={(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : ''+attributes.imagePlaceholder+''}
						alt={''+alttext+''}	
			 			width={w}
						height={h}
						style={
							{
								"height": 'auto !important',
								"width": ''+w+'px'
							}
						}
					/>
				</WrapperTag>
			}
			{!width && !figure &&
				<img 
					className={blockClasses}
					src={(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : ''+attributes.imagePlaceholder+''}
					alt={''+alttext+''}	
			 		width={w}
					height={h}
					style={
						{
							"height": 'auto !important',
							"width": ''+w+'px'
						}
					}
				/>
			}
			{width && !figure &&
				<img 
					className={blockClasses}
					src={(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : ''+attributes.imagePlaceholder+''}
					alt={''+alttext+''}	
				/>
			}
		</>
	)

}

export default imageSave;