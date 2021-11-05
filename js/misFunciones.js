function traerInformacion(){
 $.ajax({    
    url : 'https://gc9eba0ff5f9518-reto.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/partyroom/partyroom',
	data: "{}",
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
        $("#partyroom").empty();
		let miTabla = '<table>';
		for (i=0; i<respuesta.items.length; i++){
			miTabla += '<td>';
	        miTabla += '<td>'+ respuesta.items[i].id + '</td>'; 		
	        miTabla += '<td>'+ respuesta.items[i].owner + '</td>'; 
			miTabla += '<td>'+ respuesta.items[i].capacity + '</td>';
			miTabla += '<td>'+ respuesta.items[i].category_id + '</td>';  		
	        miTabla += '<td>'+ respuesta.items[i].name + '</td>';
			miTabla += '<td>' + '<button onclick="editarRegistro('+ respuesta.items[i].id + ')">Detalle</td>';
			miTabla += '<td>' + '<button onclick="eliminar('+ respuesta.items[i].id + ')">Borrar</td>';		
	       	miTabla += '</tr>';
	
		}
        miTabla += '</table>';
	    $("#partyroom").append(miTabla);    

	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status);
    }
});
}

//metodo para traer la informacion y deitarla

function editarRegistro(idresp){
	$.ajax({
		url: 'https://gc9eba0ff5f9518-reto.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/partyroom/'+idresp,
		type: 'GET',
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		success: function(respuesta){
			$('#id').val(respuesta.items[0].id)
			$('#owner').val(respuesta.items[0].owner)
			$('#capacity').val(respuesta.items[0].capacity)
			$('#category_id').val(respuesta.items[0].category_id)
			$('#name').val(respuesta.items[0].name)
			$('#id').attr('readonly.true')
		},
		error: function(xhr,status){
			alert('ha sucedido un error:'+ status + json);
		}
	});
}

//metodo para guardar informacion

function guardarInformacion(){
	let misDatos = {
		owner: $("#owner").val(),
        capacity: $("#capacity").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val(),
        id: $("#id").val()
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
		' https://gc9eba0ff5f9518-reto.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/partyroom/partyroom',
	{
	 	data: datosJson,
        type : 'POST',
        dataType : 'json',
        contentType: "application/json; charset=utf-8",
        statusCode : {
		201 :  function() {
			alert("guardado!");
			$("#owner").val("");
			$("#capacity").val("");
			$("#category_id").val("");
			$("#name").val("");
			$("#id").val("");
        	traerInformacion();	
			}
		}
	});
}

//acualizar informacion

function actualizar(){
	let misDatos = {
		id: $("#id").val(),
		owner: $("#owner").val(),
        capacity: $("#capacity").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val()
        
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
    ' https://gc9eba0ff5f9518-reto.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/partyroom/partyroom',
	{
		data: datosJson,
        type : 'PUT',
        dataType : 'json',
        contentType: "application/json; charset=utf-8",
        statusCode : {
		201 :  function() {
			alert("Actualizado!");
			$("#owner").val("");
			$("#capacity").val("");
			$("#category_id").val("");
			$("#name").val("");
			$("#id").val("");
        	traerInformacion();	
			}
		}
	});
}

// eliminar un registro

function eliminar(idresp){
	let misDatos = {
        id: idresp
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
    ' https://gc9eba0ff5f9518-reto.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/partyroom/partyroom	',
	{
		data: datosJson,
        type : 'DELETE',
        dataType : 'json',
        contentType: "application/json; charset=utf-8",
        statusCode : {
		204 :  function() {
			alert("Eliminado!");
				traerInformacion();	
			}
		}
	});
};

function limpiarCampos(){
	$("#id").val(''),
	$("#owner").val(''),
	$("#capacity").val(''),
	$("#category_id").val(''),
	$("#name").val('')
}
////////////////////////////////////////////////////////////////////////////////

//funciones mensaje

function traerInformacionMessage(){
	$.ajax({    
	   url : 'https://gc9eba0ff5f9518-reto.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
	   data: "{}",
	   type : 'GET',
	   dataType : 'json',
	   contentType: "application/json; charset=utf-8",
	 
	   success : function(respuesta) {
		   console.log(respuesta);
		   $("#partyroom3").empty();
		   let miTabla = '<table>';
		   for (i=0; i<respuesta.items.length; i++){
			   miTabla += '<td>';
			   miTabla += '<td>'+ respuesta.items[i].id + '</td>'; 		
			   miTabla += '<td>'+ respuesta.items[i].messagetext + '</td>'; 
			   miTabla += '<td>' + '<button onclick="editarRegistroMessage('+ respuesta.items[i].id + ')">Detalle</td>';
			   miTabla += '<td>' + '<button onclick="eliminarMessage('+ respuesta.items[i].id + ')">Borrar</td>';		
			   miTabla += '</tr>';
	   
		   }
		   miTabla += '</table>';
		   $("#partyroom3").append(miTabla);    
   
	   },
	   error : function(xhr, status) {
		   alert('ha sucedido un problema:'+ status);
	   }
   });
   }
   
   //metodo para traer la informacion y deitarla
   
   function editarRegistroMessage(idresp){
	   $.ajax({
		   url: 'https://gc9eba0ff5f9518-reto.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/'+idresp,
		   type: 'GET',
		   dataType: 'json',
		   contentType: "application/json; charset=utf-8",
		   success: function(respuesta){
			   $('#id').val(respuesta.items[0].id)
			   $('#messagetext').val(respuesta.items[0].messagetext)		   
			   $('#id').attr('disabled',true);
			   $('#messagetext').attr('disabled',true)
		   },
		   error: function(xhr,status){
			   alert('ha sucedido un error:'+ status + json);
		   }
	   });
   }
   
   //metodo para guardar informacion
   
   function guardarInformacionMessage(){
	   let misDatos = {
		   messagetext: $("#messagetext").val(),
		   id: $("#id").val()
	   };
	   let datosJson = JSON.stringify(misDatos); 
	   $.ajax(    
	   ' https://gc9eba0ff5f9518-reto.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
	   {
		   data: datosJson,
		   type : 'POST',
		   dataType : 'json',
		   contentType: "application/json; charset=utf-8",
		   statusCode : {
		   201 :  function() {
			   alert("guardado!");
			   $("#messagetext").val("");
			   $("#id").val("");
			   traerInformacionMessage();	
			   }
		   }
	   });
   }
   
   //acualizar informacion
   
   function actualizarMessage(){
	   let misDatos = {
		   id: $("#id").val(),
		   messagetext: $("#messagetext").val(),		   
	   };
	   let datosJson = JSON.stringify(misDatos); 
	   $.ajax(    
	   ' https://gc9eba0ff5f9518-reto.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
	   {
		   data: datosJson,
		   type : 'PUT',
		   dataType : 'json',
		   contentType: "application/json; charset=utf-8",
		   statusCode : {
		   201 :  function() {
			   alert("Actualizado!");
			   $("#messagetext").val("");
			   $("#id").val("");
			   traerInformacionMessage();	
			   }
		   }
	   });
   }
   
   // eliminar un registro
   
   function eliminarMessage(idresp){
	   let misDatos = {
		   id: idresp
	   };
	   let datosJson = JSON.stringify(misDatos); 
	   $.ajax(    
	   ' https://gc9eba0ff5f9518-reto.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message	',
	   {
		   data: datosJson,
		   type : 'DELETE',
		   dataType : 'json',
		   contentType: "application/json; charset=utf-8",
		   statusCode : {
		   		204 :  function() {
			   alert("Eliminado!");
			   traerInformacionMessage();	
			   }
		   }
	   });
   }
   
   function limpiarCampos(){
	   $("#id").val(''),
	   $("#messagetext").val('')
	   
   }
   ////////////////////////////////////////////////////////////////////////////////
   
   //funciones cliente
   

  function traerInformacionCliente(){
	$.ajax({    
	   url : 'https://gc9eba0ff5f9518-reto.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
	   data: "{}",
	   type : 'GET',
	   dataType : 'json',
	   contentType: "application/json; charset=utf-8",
	 
	   success : function(respuesta) {
		   console.log(respuesta);
		   $("#partyroom2").empty();
		   let miTabla = '<table>';
		   for (i=0; i<respuesta.items.length; i++){
			   miTabla += '<td>';
			   miTabla += '<td>'+ respuesta.items[i].id + '</td>'; 		
			   miTabla += '<td>'+ respuesta.items[i].name + '</td>'; 
			   miTabla += '<td>'+ respuesta.items[i].email + '</td>';
			   miTabla += '<td>'+ respuesta.items[i].age + '</td>';
			   miTabla += '<td>' + '<button onclick="editarRegistroCliente('+ respuesta.items[i].id + ')">Detalle</td>';
			   miTabla += '<td>' + '<button onclick="eliminarCliente('+ respuesta.items[i].id + ')">Borrar</td>';		
			   miTabla += '</tr>';
		   }
		   miTabla += '</table>';
		   $("#partyroom2").append(miTabla);    
   
	   },
	   error : function(xhr, status) {
		   alert('ha sucedido un problema:'+ status);
	   }
   });
   }
   
   //metodo para traer la informacion y deitarla
   
   function editarRegistroCliente(idresp){
	   $.ajax({
		   url: 'https://gc9eba0ff5f9518-reto.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/'+idresp,
		   type: 'GET',
		   dataType: 'json',
		   contentType: "application/json; charset=utf-8",
		   success: function(respuesta){
			   $('#id').val(respuesta.items[0].id)
			   $('#name').val(respuesta.items[0].name)
			   $('#email').val(respuesta.items[0].email)
			   $('#age').val(respuesta.items[0].age)		   
			   $('#id').attr('disabled',true);
			   $('#id').attr('disabled',true)
		   },
		   error: function(xhr,status){
			   alert('ha sucedido un error:'+ status + json);
		   }
	   });
   }
   
   //metodo para guardar informacion
   
   function guardarInformacionCliente(){
	   let misDatos = {	   		
		name: $("#name").val(),
		email: $("#email").val(),
		age: $("#age").val(),
		id: $("#id").val()		   
	   };
	   let datosJson = JSON.stringify(misDatos); 
	   $.ajax(  
		' https://gc9eba0ff5f9518-reto.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
	   {
		   data: datosJson,
		   type : 'POST',
		   dataType : 'json',
		   contentType: "application/json; charset=utf-8",
		   statusCode : {
		   201 :  function() {
			   alert("guardado!");
			   $("#name").val("");
			   $("#email").val("");
			   $("#age").val("");
			   $("#id").val("");
			   traerInformacionCliente();	
			   }
		   }
	   });
   }
   
   //acualizar informacion
   
   function actualizarCliente(){
	   let misDatos = {
		   id: $("#id").val(),
		   name: $("#name").val(),
		   email: $("#email").val(),
		   age: $("#age").val(),
		   
		   
	   };
	   let datosJson = JSON.stringify(misDatos); 
	   $.ajax(    
	   'https://gc9eba0ff5f9518-reto.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
	   {
		   data: datosJson,
		   type : 'PUT',
		   dataType : 'json',
		   contentType: "application/json; charset=utf-8",
		   statusCode : {
		   201 :  function() {
			   alert("Actualizado!");
			   $("#name").val("");
			   $("#email").val("");
			   $("#age").val("");
			   $("#id").val("");
			   traerInformacionCliente();	
			   }
		   }
	   });
   }
   
   // eliminar un registro
   
   function eliminarCliente(idresp){
	   let misDatos = {
		   id: idresp
	   };
	   let datosJson = JSON.stringify(misDatos); 
	   $.ajax(    
	   ' https://gc9eba0ff5f9518-reto.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
	   {
		   data: datosJson,
		   type : 'DELETE',
		   dataType : 'json',
		   contentType: "application/json; charset=utf-8",
		   statusCode : {
		   		204 :  function() {
			   alert("Eliminado!");
			   traerInformacionCliente();	
			   }
		   }
	   });
   }
   
   function limpiarCampos(){
	   $("#id").val(''),
	   $("#name").val(''),
	   $("#email").val(''),
	   $("#age").val('')
	   
}
  

   
   
   
   
   
   
   
   
   
   
   
   
   
   















