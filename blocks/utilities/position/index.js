class Position {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
	  
	  	this.position = attributes.position ? ' position-'+attributes.position : ''
	  	this.posxs = attributes.posxs ? ' position-'+attributes.posxs : ''
		this.possm = attributes.possm ? ' position-sm-'+attributes.possm : ''
		this.posmd = attributes.posmd ? ' position-md-'+attributes.posmd : ''
		this.poslg = attributes.poslg ? ' position-lg-'+attributes.poslg : ''
		this.posxl = attributes.posxl ? ' position-xl-'+attributes.posxl : ''
		this.posxxl = attributes.posxxl ? ' position-xxl-'+attributes.posxxl : ''
  	}
	
	classes() {
		return ''+this.position+''+this.posxs+''+this.possm+''+this.posmd+''+this.poslg+''+this.posxl+''+this.posxxl+''
  	}

}

export { Position };