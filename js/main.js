$( document ).ready(function() {
    $('#form').submit(function(e) {
        e.preventDefault();
    }).validate({
        debug: false,
        rules: {
            "nombre": {
                required: true                    
            },
            "apellido": {
                required: true
            },
            "telefono": {
                required: true,
                number:true                    
            },
            "correo": {
                required: true,
                email: true
            },
            "placa": {
                required: true,
                number:true
            },
            "ciudad": {
                selectcheck: true
            },
            "uso-v": {
                selectcheck: true
            }
        },
        messages: {
            "nombre": {
                required: "Ingrese su nombre."
            },
            "apellido": {
                required: "Apellido obligatorio."
            },
            "telefono": {
                required: "Telefono obligatorio.",
                number: "Ingrese un número de teléfono válido"
            },
            "correo": {
                required: "Ingrese su correo.",
                email: "Ingrese un email valido"
            },
            "placa": {
                required: "Ingrese su número de placa.",
                number: "Ingrese un número de placa válido."                
            }
        }
        
    });

    jQuery.validator.addMethod('selectcheck', function (value) {
        return (value != '-1');
    }, "Seleccione un campo valido");
});