$(document).on("ready", init_ventanaChat);
var popupChatWeb = null;
function init_ventanaChat(){
	
	
	if($('#btnOpenChatEC').length){
		$('#btnOpenChatEC').on('click',OpenChat);
	}
	

	if($("#btnOpenChatWeb").length){
		$("#btnOpenChatWeb").on('click',OpenChat);
	}


}

function OpenChat(e){

	 var ruta = $(this).attr('href');
	 if((ruta!='') &&  (ruta!=null)){

		 if ((popupChatWeb!=null) && (!(popupChatWeb.closed))) {
			
			 popupChatWeb.focus();
		 }else{
			 popupChatWeb =  window.open(ruta, "ChatCliente", "width=630,height=620 left = 0, top = 0, toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes"); ;
				if (popupChatWeb) {
				    //Browser has allowed it to be opened
					popupChatWeb.focus();
					
					/*ga('send', {
						  hitType: 'event',
						  eventCategory: 'Button',
						  eventAction: 'click',
						  eventLabel: 'ChatCliente'
						});*/
					 gtag('event', 'chat_Cliente', {
        				'app_name': 'SitioWebAguasCordobesas',
        				'event_action': 'click',
        				'event_category': 'Button',
     				 });
						
						
					  
				} else {
				    
				   bootbox.alert("Por favor habilitÃ¡ ventanas emergentes para este sitio");
				}
		 }
		 
		    
		   
		 
		
	 }
	
	 return false;
}