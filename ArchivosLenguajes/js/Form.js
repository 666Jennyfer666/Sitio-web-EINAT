document.write('<script type="text/javascript" src="espacioClientes/templates/js/vendor/select2/dist/js/select2.min.js"></script>');
document.write('<script type="text/javascript" src="espacioClientes/templates/js/vendor/select2/dist/js/i18n/es.js"></script>');
document.write('<link rel="stylesheet" type="text/css" href="espacioClientes/templates/js/vendor/select2/dist/css/select2.min.css"/>');
document.write('<link rel="stylesheet" type="text/css" href="espacioClientes/templates/js/vendor/select2/dist/css/select2-bootstrap.min.css"/>');  
$(document).on("ready", init_formBuscadorAgua);
function init_formBuscadorAgua(){
    
   
   $('#barrio').select2({
        placeholder:'Nombre del barrio',
        language: "es",
        theme: "bootstrap",
        width: '100%',
        allowClear:true,
       
        escapeMarkup: function(m) { 
              return m; 
           }
      });
    
    
    
   
    
    $('#btn-BusCalidadAgua').attr('disabled',true);
    jQuery("#waitBarrios").css("display","block");
    $.ajax({
        url: "includes/inc_getBarrios.php",
        type:  'post'
        }).done(function(data){	
             
             jQuery("#waitBarrios").css("display","none");
             $('#btn-BusCalidadAgua').attr('disabled',false);

            
            var lista = JSON.parse(data);
            if(!jQuery.isEmptyObject(lista)){
                var str_html = '<option></option>';
                for(var i in lista){
                    str_html += '<option value="'+lista[i].id+'">'+lista[i].text+'</option>';
                }
                $('#barrio').html(str_html);
                
            }
            
                
                
            
        

            
        });
     
                
                
   
       if($('#btn-BusCalidadAgua').length){
           $('#btn-BusCalidadAgua').on('click',BuscarCalidadAgua);
       }
   
             
}
function BuscarCalidadAgua(e){
    $('#msjAlertNoBarrio').hide();
    var barrio = $('#barrio').val();
    if((barrio!='') && (barrio!=null) && (barrio!=undefined)){
        
        
        
        $('#btn-BusCalidadAgua').attr('disabled',true);
        jQuery("#waitBarrios").css("display","block");
        var nomB = $.trim($('#barrio').select2('data')[0].text);
   
        $.ajax({
            data:{b:barrio,nom:nomB},
            url: "includes/inc_getUrlBusquedaInforme.php",
            type:  'post'
            }).done(function(data){	
                             
                 jQuery("#waitBarrios").css("display","none");
                 $('#btn-BusCalidadAgua').attr('disabled',false);
                 
                 window.location.href = data;

                    
            });

        
        
        
    }else{
        $('#msjAlertNoBarrio').show();
    }
    e.stopPropagation();	
}
function ValidarBarrio(obj){
    var barrio = $(obj).val();
    if((barrio!='') && (barrio!=null) && (barrio!=undefined)){
        $('#msjAlertNoBarrio').hide();
        
        
        
    }
    
}