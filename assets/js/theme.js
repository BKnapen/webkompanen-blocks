document.addEventListener("DOMContentLoaded", function(event) { 

var forms = document.querySelectorAll('form');

if(forms.length > 0){
	for(var i=0; i < forms.length; i++){
		forms[i].addEventListener('submit', function(e){
			e.preventDefault()
			e.stopPropagation()
			
			//var formData = new FormData(this);
			
			var inputs = this.elements
			
			//var output = '';
			
			/*for (const [key, value] of formData) {
  				output += `${index} ${key}: ${value}\n`;
			}*/
			let formdata = {};
			formdata['type'] = 'reservation'
			for(var i=0; i < inputs.length; i++){
				if(inputs[i].type === 'text' || inputs[i].type === 'textarea'){
					formdata[''+inputs[i].name+''] = inputs[i].value
				}
				if(i === inputs.length-1){
					sendForm(formdata)
				}
			}
		})
	}
}
console.log(webkompanen.appAuth)
function sendForm(requestData){
	fetch(webkompanen.blogUrl+'/wp-json/forms/v1/post/',{
		method: 'POST',
		headers:{
			'Content-Type': 'application/json',
			'Authorization': 'Basic '+window.btoa(''+webkompanen.appAuth+'')+''
		},
		body: JSON.stringify(requestData)
	})
  	.then(
		(response) => {
			console.log(response)
			return response.json()
		}
	)
  	.then(
		(data) => {
			console.log(data)
			//document.getElementById('feedback').style.display = 'none'
			//document.getElementById('feedback_response').innerHTML = '<p>Bedankt voor uw feedback</p>'
		}
	)
	.catch(
		(error) => {
    		console.error('Error:', error);
		}
	);
}
	
lightGallery(document.getElementById('gallerij'), {
    selector: '.item',
    download: false,
});
//var flkty = new Flickity('.carousel');
});