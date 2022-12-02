
function init(){

}

$(document).ready(function() {

});

$(document).on("click", "#btnregistrar", function () {
    var usu_nom =  $('#usu_nom').val();
    var usu_correo =  $('#usu_correo').val();
    var usu_pass =  $('#usu_pass').val();
    var usu_pass1 =  $('#usu_pass1').val();

    if (usu_nom=='' || usu_correo=='' || usu_pass=='' || usu_pass1==''){
        Swal.fire(
            'Error!',
            'Campos Vacios',
            'error'
        );
    }else{
        if (usu_pass==usu_pass1){
            $.post("controlador/usuario.php?op=registro",{usu_nom:usu_nom,usu_correo:usu_correo,usu_pass:usu_pass},function(data){
                if(data==0){
                    Swal.fire({
                        icon: 'success',
                        title: 'Aceptado!',
                        text: 'Registro Correcto',
                        confirmButtonText: `Ok`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.open('http://localhost/Login/index.php//','_self');
                        }
                    });
                }else{
                    Swal.fire(
                        'Observacion!',
                        'Correo ya existe',
                        'question'
                    );
                }
            });
        }else{
            Swal.fire(
                'Error!',
                'Contraseñas Incorrectas',
                'error'
            );
        }
    }
});