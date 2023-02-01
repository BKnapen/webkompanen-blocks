class Col {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
	  
	  	this.colxs = attributes.colxs ? ' col-'+attributes.colxs : ''
		this.colsm = attributes.colsm ? ' col-sm-'+attributes.colsm : ''
		this.colmd = attributes.colmd ? ' col-md-'+attributes.colmd : ''
		this.collg = attributes.collg ? ' col-lg-'+attributes.collg : ''
		this.colxl = attributes.colxl ? ' col-xl-'+attributes.colxl : ''
		this.colxxl = attributes.colxxl ? ' col-xxl-'+attributes.colxxl : ''
		
	  	this.colxsauto = attributes.colxsauto ? ' col-auto' : ''
		this.colsmauto = attributes.colsmauto ? ' col-sm-auto' : ''
		this.colmdauto = attributes.colmdauto ? ' col-md-auto' : ''
		this.collgauto = attributes.collgauto ? ' col-lg-auto' : ''
		this.colxlauto = attributes.colxlauto ? ' col-xl-auto' : ''
		this.colxxlauto = attributes.colxxlauto ? ' col-xxl-auto' : ''
		
	  	this.colxscol = attributes.colxscol ? ' col' : ''
		this.colsmcol = attributes.colsmcol ? ' col-sm' : ''
		this.colmdcol = attributes.colmdcol ? ' col-md' : ''
		this.collgcol = attributes.collgcol ? ' col-lg' : ''
		this.colxlcol = attributes.colxlcol ? ' col-xl' : ''
		this.colxxlcol = attributes.colxxlcol ? ' col-xxl' : ''
  	}
	
	classes() {
		return ''+this.colxs+''+this.colsm+''+this.colmd+''+this.collg+''+this.colxl+''+this.colxxl+''+this.colxscol+''+this.colsmcol+''+this.colmdcol+''+this.collgcol+''+this.colxlcol+''+this.colxxlcol+''+this.colxsauto+''+this.colsmauto+''+this.colmdauto+''+this.collgauto+''+this.colxlauto+''+this.colxxlauto+''
  	}

}

export { Col };