/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	applyFormat,
	removeFormat,
	useAnchorRef
} from '@wordpress/rich-text';

import { 
	useSelect, useDispatch
} from '@wordpress/data';
import { 
	RichTextToolbarButton,
	__experimentalLinkControl as LinkControl,
	URLPopover
} from '@wordpress/block-editor';
import { 
	Popover,
} from '@wordpress/components';
import { 
	useState
} from '@wordpress/element';
import { 
	Icon 
} from '@wordpress/icons';

import {
	nolink,
	link
} from '../../icons'

const webkompanenblockshref = 'webkompanen-blocks/href';

const UrlButton = ( props ) => {
	const { contentRef, isActive, onChange, value } = props;
    const { activeFormats } = value;
    const anchorRef = useAnchorRef( { ref: contentRef, value } );
		
	// State to show popover.
    const [ showPopover, setShowPopover ] = useState( false );
    const [ activeLink, setActiveLink ] = useState( false );
		
	// Function to get active colour from format.
    const getActiveLink = () => {
		if(activeFormats){
        	const formats = activeFormats.filter( format => webkompanenblockshref === format['type'] );

        	if ( formats.length > 0 ) {
            	const format = formats[0];
            	const { attributes, unregisteredAttributes } = format;

            	let atts = unregisteredAttributes;

            	if ( attributes && attributes.length ) {
                	atts = attributes;
            	}

            	// If we have no attributes, use the active colour.
            	if ( ! atts ) {
                	return false;
            	}

            	if ( atts ) {
                	// If the format has set a colour via the class.
                	return true;
            	} 
        	}   
		}     
    };
		
		
	const haslink = getActiveLink();
		
	const bgcolorurl = haslink ? '#000000' : '#ffffff'
	const colorurl = haslink ? '#ffffff' : '#000000'
		
	//style={ getActiveColor() }
    return (
		<>
        	<RichTextToolbarButton
				icon={
                	<>
                    	<Icon 
							icon={
								haslink ? nolink : link 
							} 
							style={
								{
									background: bgcolorurl,
									color: colorurl
								}
							}
						/>
                    	{ 
							isActive && (
                        		<span
                            		className={'format-library-text-color-button__indicator'}
                        		/>
                    		)
						}
                	</>
            	}
            	title=""
				style={
					{
						background: bgcolorurl,
						color: colorurl
					}
				}
            	onClick={ 
					() => {
						setShowPopover( true );
            		} 
				}
            	key={ isActive ? 'text-color-not-active' : 'text-color-not-active' }
            	name={ isActive ? undefined : undefined }
            	isActive={ isActive }
        	/>
			{ showPopover && (
				<Popover
			 		anchor={ anchorRef }
			 		anchorRef={ anchorRef }
        			className="components-inline-color-popover"
        			onClose={ () => setShowPopover( false ) }
        		>
					<LinkControl
						className="bootstrap-linkcontrol"
						searchInputPlaceholder="Search here..."
						value=''
						settings={
							[
							]
						}
						onChange={ 
							(newPost) =>{
								if ( newPost ) {
									setShowPopover( false );
							
									const attributes  = {};
								
									attributes.href = newPost.url

									onChange(
										applyFormat( 
											value, {
                                    			type: webkompanenblockshref,
                                    			attributes,
                                			} 
                            			)
									)
										//setIsVisible( ( state ) => ! state )
								}
							}
						}
						withCreateSuggestion={true}
						createSuggestion={ 
							(inputValue) =>{
								if ( inputValue ) {

								}
							}
						}
						createSuggestionButtonText={ 
							(newValue) => { 
								newValue
							} 
						}
					>
					</LinkControl>
					<p>
						<a
							href="#"
							onClick={
								()=>{
									setShowPopover(false)
									onChange(
										removeFormat(
											value,
											webkompanenblockshref,
											value.start,
											value.end
										)
									)
								}
							}
						>
							Wissen
						</a>
					</p>
      			</Popover>
    		) }
		</>
    );
};

export default UrlButton;
