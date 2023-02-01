import { Colors } from '../colors';

class Backgroundcolor {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
		this.attributes = attributes;
	  	this.setAttributes = setAttributes;
	  	this.clientId = clientId;
	  	this.bgcolor = attributes.bgcolor ? ' bg-'+attributes.bgcolor : ''

		this.colors = new Colors()
  	}
	
	classes() {
		return ''+this.bgcolor+''
  	}

}

export { Backgroundcolor };