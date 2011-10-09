function Validator(argv) {
    this.argv = argv;
    
    this.eval_fields = function() {
        // evalua los campos designados en argv
        var error = false;
        for (i in this.argv) {
            //error = error && validate_field(this.argv[i][0], this.argv[i][1]);
            validate_field(this.argv[i][0], this.argv[i][1]);
        }
    }
}


function validate_field(field_id, argv) {
    //valida los campos
    var field = document.getElementById(field_id);
    var error = false;
    switch (argv['method']) {
        case 'max_lenght':
            error = max_lenght(field_id, argv);
            break;

        case 'min_lenght':
            error = min_lenght(field_id, argv);
            break;

        case 'valid_email':
            error = valid_mail(field_id, argv);
            break;

        case 'valid_date':
            break;
            
        default:
            set_mensaje(argv['cont_id'], 'error methodo o argumentos ivalidos: ' + argv['method']);
            break;
    }
    return error;
}


function set_mensaje(cont_id, text) {
    //escribe un msj en el contenedor designado
    var contenedor = document.getElementById(cont_id);
    var parrafo = document.createElement('p');
    parrafo.className = 'msj_error';
    var contenido = document.createTextNode(text);
    parrafo.appendChild(contenido);
    contenedor.appendChild(parrafo);
}


/*****************************************
 metodos de validacion
*****************************************/

function max_lenght(field_id, argv) {
    //longitud maxima
    var field = document.getElementById(field_id);
    var error = false;
    if (argv['lenght'] != undefined)  {
        if (argv['lenght'] < field.value.toString().length) {
            error = true;
        }
    }
    if (error) {
        set_mensaje(argv['cont_id'], argv['msj_error']);
    }
    return error;
}
    
function min_lenght(field_id, argv) {
    //longitud minima
    var field = document.getElementById(field_id);
    var error = false;
    if (argv['lenght'] != undefined)  {
        if (argv['lenght'] > field.value.toString().length) {
            error = true;
        }
    }
    if (error) {
        set_mensaje(argv['cont_id'], argv['msj_error']);
    }
    return error;
}

function valid_mail(field_id, argv) {
    // validar una direcion de mail
    var field = document.getElementById(field_id);
    var texto = field.value.toString()
    var error = false;
    if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(texto)) {
        error = false;
    } else {
        error = true;
    }
    if (error) {
        set_mensaje(argv['cont_id'], argv['msj_error']);
    }
    return error;
}

