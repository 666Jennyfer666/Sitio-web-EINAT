$(document).on("ready",initHomeSitio);

function initHomeSitio(){
	
    if (hayImpacto=='1'){
    	$('#modal-impacto').modal('toggle');
    }
	
	
	
	
	  
 
}
function Redireccionar(obj){
	var ruta = $(obj).attr('data-href');
	if(ruta){
		
			var winTab = window.open(ruta,'_blank');
			if (winTab) {
			    //Browser has allowed it to be opened
				winTab.focus();
			} else {
			    
			   bootbox.alert("Por favor habilite permitir popups para este sitio");
			}
		
		 	
	}
	   
}