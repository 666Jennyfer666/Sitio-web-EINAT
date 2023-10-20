/* Add your custom JavaScript code */
$(document).on("ready",init);


function init(){
	
		
	
	if($("span.source-info").length){
		
		 $('span.source-info').popover({
		       // effect: 'slide',
		        trigger: "hover focus",
		        html: true,
		    });
	}
	if($("#frmBusSitio").length){
		 $("#frmBusSitio input[id='qryBus']").bind('keypress', function(e) {
	         if(e.keyCode==13){
	        	 BusquedaSitio();
	       	 // return false;
	       	   e.preventDefault();
	          }
	     });
		 
	}
	
	if($("#frmBusSitio2").length){
		$('#btnBusSitio').on('click',BusquedaSitioFromPageResult);
		
		 $("#frmBusSitio2 input[id='qryBus']").bind('keypress', function(e) {
	         if(e.keyCode==13){
	        	 $('#btnBusSitio').trigger('click');
	       	 // return false;
	       	   e.preventDefault();
	          }
	     });
		 
	}
	if($("#btnIrPaginaBus").length){
		$("#btnIrPaginaBus").on('click',IrPaginaResultBusqueda);
	}
	
	
	
	
	
	
	  
 
	if($("#frmLoginFromWeb").length){
		 
		   $("#frmLoginFromWeb").submit(function(){	
				  $("#resultLogin").hide();	
				  
				  if($('#resultPassOK').length){
					  $('#resultPassOK').hide();
				  }
				
				  $('#btnLogin').attr('disabled',true);
				  
				  
			  		jQuery("#waitLogin").css("display","block");
				$.ajax({
					data:$('#frmLoginFromWeb').serialize(),
					url: "/espacioClientes/recursos/includesActions/inc_login.php",
					type:  'post',
					dataType: "html"
				}).done(function(data){			
					  
					  
					  	
						var result = $.trim(data);	
						
								
					
						
						if((result.search("ERROR"))!=-1){ 
						 	
							$("#resultLogin").html(result);
							$("#resultLogin").show();
							
						 }else{
							
							 if(result!='' && result!=undefined && result!=null){
								 //window.location.assign(result);
								 window.location.href = result;
							  }else{
								  //window.location.assign('index.php');
								  window.location.href = 'index.php';
							  }			 	 
						 	 
						 } 
						$('#btnLogin').attr('disabled',false);
						jQuery("#waitLogin").css("display","none");
								
					});
				  
				return false;	 		
			  });
			  
		  }
	
}




function ResetFormWeb(id_form){
	/*$('#'+id_form).find("input[type=text]").val(null);	
	$('#'+id_form).find("input[type=email]").val(null);	
	$('#'+id_form).find("input[type=number]").val(null);	
	$('#'+id_form).find("input[type=tel]").val(null);	
	$('#'+id_form).find("input[type=password]").val(null);		
	$('#'+id_form).find("textarea").val(null);	*/
	
	  $('#'+id_form)[0].reset();
}
function OpenModalLoginFromWeb(obj){
	$("#resultLogin").hide();
	var qry = $(obj).attr('data-q');	
	$("#frmLoginFromWeb input[id='qry']").val(qry);	
	var opcion = $(obj).attr('data-sr');
	
	
	$('#modal-login').modal('toggle');
	
	if(opcion=='1'){
		$('#btnModalRegistro').show();
	}else{
		$('#btnModalRegistro').hide();
	}
}
function BusquedaSitio(){
	 var q = $.trim($("#frmBusSitio input[id='qryBus']").val());
	 if((q!='') && (q!=null) && (q!=undefined)){
		 
		  
	
		 jQuery("#waitBusG").css("display","inline");
		
	
		 $.ajax({
		     data:{qry:q},
			 url: "includes/inc_getUrlBusquedaSitio.php",
		     type:  'post'
	 		}).done(function(data){	
	 			 			
	 			 jQuery("#waitBusG").css("display","none");
	 			
	 			 window.location.href = data;

	 				
	 		});

		 
		 
		 
	 }
}
function BusquedaSitioFromPageResult(e){
	 $('#msjAlertNoText').hide();
	 var q = $.trim($("#frmBusSitio2 input[id='qryBus']").val());
	 if((q!='') && (q!=null) && (q!=undefined)){
		 
		 $('#btnBusSitio').attr('disabled',true);
	
		 jQuery("#waitBus").css("display","inline");
		
	
		 $.ajax({
		     data:{qry:q},
			 url: "includes/inc_getUrlBusquedaSitio.php",
		     type:  'post'
	 		}).done(function(data){	
	 			 			
	 			 jQuery("#waitBus").css("display","none");
	 			
	 			 window.location.href = data;

	 				
	 		});

		 
		 
		 
	 }else{
		 $('#msjAlertNoText').show();
		 $('#btnBusSitio').attr('disabled',false);
	 }
	 e.stopPropagation();	
}
function IrPaginaResultBusqueda(e){
	
	 jQuery("#waitPB").css("display","block");
	 var page = $.trim($("#frmPaginadoBus input[id='numPageB']").val());
	 if((/^\d+$/.test(page))){
		 var url = $.trim($(this).attr('data-url'));
		
		 var newUrl = url.replace("np",page);
		 window.location.href = newUrl;
	 }
	 
	 jQuery("#waitPB").css("display","none");
	 
	e.stopPropagation();	
}