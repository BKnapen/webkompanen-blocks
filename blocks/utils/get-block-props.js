import ColorEdit from '../editor/color';
import ColEdit from '../editor/col';
import BackgroundcolorEdit from '../editor/backgroundcolor';
import MarginEdit from '../editor/margin';
import NegativeMarginEdit from '../editor/negativemargin';
import PaddingEdit from '../editor/padding';
import DisplayEdit from '../editor/display';
import PositionEdit from '../editor/position';

const GetProps = (props) => {
	
	const colblocks = [
		'webkompanen-blocks/col'
	]
	
	const displayblocks = [
		'webkompanen-blocks/linkbutton',
		'webkompanen-blocks/paragraph',
		'webkompanen-blocks/heading',
		'webkompanen-blocks/section',
		'webkompanen-blocks/container',
		'webkompanen-blocks/row',
		'webkompanen-blocks/col',
		'webkompanen-blocks/div'
	]
	
	const positionblocks = [
		'webkompanen-blocks/linkbutton',
		'webkompanen-blocks/paragraph',
		'webkompanen-blocks/heading',
		'webkompanen-blocks/section',
		'webkompanen-blocks/container',
		'webkompanen-blocks/row',
		'webkompanen-blocks/col',
		'webkompanen-blocks/div'
	]
	
	const marginblocks = [
		'webkompanen-blocks/linkbutton',
		'webkompanen-blocks/paragraph',
		'webkompanen-blocks/heading',
		'webkompanen-blocks/section',
		'webkompanen-blocks/section',
		'webkompanen-blocks/container',
		'webkompanen-blocks/row',
		'webkompanen-blocks/col',
		'webkompanen-blocks/div'
	]
	
	const paddingblocks = [
		'webkompanen-blocks/linkbutton',
		'webkompanen-blocks/paragraph',
		'webkompanen-blocks/heading',
		'webkompanen-blocks/section',
		'webkompanen-blocks/container',
		'webkompanen-blocks/row',
		'webkompanen-blocks/col',
		'webkompanen-blocks/div'
	]

	const selectedblockprops = wp.data.select( 'core/block-editor' ).getSelectedBlock();
	
	return(
		<>
		{selectedblockprops && colblocks.includes(props.props.name) &&
			<ColEdit
				props={ props.props }
				breakpoint={props.requestBreakpoint}
			/>
		}
		{selectedblockprops && displayblocks.includes(props.props.name) &&
			<DisplayEdit
				props={ props.props }
				breakpoint={props.requestBreakpoint}
			/>
		}
		{selectedblockprops && marginblocks.includes(props.props.name) &&
			<MarginEdit
				props={ props.props }
				breakpoint={props.requestBreakpoint}
			/>
		}
		{selectedblockprops && marginblocks.includes(props.props.name) &&
			<NegativeMarginEdit
				props={ props.props }
				breakpoint={props.requestBreakpoint}
			/>
		}
		{selectedblockprops && paddingblocks.includes(props.props.name) &&
			<PaddingEdit
				props={ props.props }
				breakpoint={props.requestBreakpoint}
			/>
		}
		</>
	)
}
		 
export default GetProps