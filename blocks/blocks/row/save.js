/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	useInnerBlocksProps, 
	InnerBlocks,
	useBlockProps 
} from '@wordpress/block-editor';

import { Margin } from '../../utilities/margin';
import { NegativeMargin } from '../../utilities/negativemargin';
import { Padding } from '../../utilities/padding';
import { Display } from '../../utilities/display';
import { Position } from '../../utilities/position';
import { Color } from '../../utilities/color';
import { Backgroundcolor } from '../../utilities/backgroundcolor';

function rowSave( props ) {
	const {
		attributes
	} = props;
	
	
	const gxs = attributes.gxs ? ' g-'+attributes.gxs : ''
	const gsm = attributes.gsm ? ' g-sm'+attributes.gsm : ''
	const gmd = attributes.gmd ? ' g-md'+attributes.gmd : ''
	const glg = attributes.glg ? ' g-lg-'+attributes.glg : ''
	const gxl = attributes.gxl ? ' g-xl-'+attributes.gxl : ''
	const gxxl = attributes.gxxl ? ' g-xxl-'+attributes.gxxl : ''
	
	const gutters = gxs+''+gsm+''+gmd+''+glg+''+gxl+''+gxxl+''
	
	const classes = attributes.classes ? attributes.classes : ''
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	let blockClasses = 'row';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += gutters != null && gutters != '' ? ' '+gutters : ''
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
	
	return(
		<>
			<div className={ blockClasses }>
				<InnerBlocks.Content />
			</div>
		</>
	)

}

export default rowSave;