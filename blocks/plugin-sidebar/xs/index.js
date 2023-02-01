
import { 
	PluginSidebarMoreMenuItem, 
	PluginSidebar 
} from '@wordpress/edit-post';

import {
	useState,
	Fragment
} from '@wordpress/element';

import { 
	useSelect, useDispatch, withSelect, withDispatch
} from '@wordpress/data';

import {
	xs as icon
} from '../../icons'

import initPlugin from '../../utils/init-register-plugin'

import GetProps from '../../utils/get-block-props'

const name = 'sidebar-xs';

const SidebarXs = () => {
	const { props } = useSelect( ( select ) => {		
		return {
			props: select( 'core/block-editor' ).getSelectedBlock(),
		};
	} );
	return(
	<Fragment>
    	<PluginSidebarMoreMenuItem 
			target="bootstrap-xs-settings" 
			icon={ icon }
		>
        	Breakpoint Extra small settings
     	</PluginSidebarMoreMenuItem>
      	<PluginSidebar 
			name="bootstrap-xs-settings" 
			icon={ icon } 
			title="Breakpoint Extra small settings"
		>
			<p>Breakpoint Extra small:</p>
			<div
				className='row'
			>
				<div
					className='col-4'
				>
					<p>Breakpoint</p>
				</div>
				<div
					className='col-4'
				>
					<p>Class infix</p>
				</div>
				<div
					className='col-4'
				>
					<p>Dimensions</p>
				</div>
				<div
					className='col-4'
				>
					<p>Extra small</p>
				</div>
				<div
					className='col-4'
				>
					<p></p>
				</div>
				<div
					className='col-4'
				>
					<p>{'<576px'}</p>
				</div>
			</div>
			<GetProps
				props={props}
				requestBreakpoint='xs'
			/>
     	</PluginSidebar>
    </Fragment>
	)
};

export const settings = {
	render: SidebarXs
}

export const init = () => initPlugin({
	name,
	settings
})