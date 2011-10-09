function validate_form(forn_name, field) {
    
}


function validate_field(field_name, argv) {
    var field = document.getElementsByName(field_name);
    //set_mensaje(argv['msj_field_id'], argv['msj_error']);
    switch (argv['method']) {
        case 'max_lenght':
            max_lenght(field_name, argv);
            break;

       /* case 'min_lenght':
            min_lenght(field, argv);
            break;*/
    
        default:
            set_mensaje(argv['msj_field_id'], 'error methodo o argumentos ivalidos: ' + argv['method']);
            break;
    }
}


function set_mensaje(field_id, text) {
    var field = document.getElementById(field_id);
    msj.value = text;
}


//metodos de validacion
function max_lenght(field_name, argv) {
    /*
     Valida la longitud de un campo
     */
    var field = document.getElementsByName(field_name);
    var error = false;
    if (argv['lenght'] != undefined)  {
        if (field[0].value.length > argv['max_lenght']) {
            set_mensaje(argv['msj_field_id'], argv['msj_error']);
            error = true;
        }
        else {
            set_mensaje(argv['msj_field_id'], argv['lenght'] < field[0].value.length);
        }
    }
    if (error) {
        set_mensaje(argv['msj_field_id'], argv['msj_error']);
    }
}
/**

function min_lenght(field, argv) {
    /*
     Valida la longitud de un campo
     *//*
    var error = false;
    if (argv['lenght'] == undefined) {
        if (field[0].value.lenght < argv['min_lenght']) {
            error = true;
        }
    }
    if (error) {
        alert(argv['msj_error']);
    }
}
**/
