/**
FielValidator
--------------
Autor: Ricardo D. Quiroga - L2Radamanthys@gmail.con
status: Alfa
Licencia: GPL2

Esta version utilizara la libreria JQuery

**/



//no se usara
function clearCont(id) {
    //borra todos los mensajes de error dentro del contenedor
    //var cont = $("#" + id + " label");
    var cont = $("#" + id);
    cont.empty();
}

//no se usara
function clearAllCont(argv) {
    //borra todos los mensajes de error, tiene prob -.-

}

//no se usara
function setMessaje(id, text) {
    //agrega el mensaje al final del contenedor
    var cont = $("#" + id);
    clearCont(id);
    cont.append("<p class='field_error'>" + text + "</p>");
}


function clearAllMsj() {
    //borra todos los mensajes de error
    $(".field_error").remove();
}


function insertMessage(id, text) {
    //inserta un mensaje despues de un elemento "campo de formulario" determinado
    $("<p class='field_error'>" + text + "</p>").insertAfter("#" + id);
}


function validateField(argv) {
    var field = $("#"+argv["field_id"]);
    var error = false;
    //clearCont(argv["cont_id"]);
}




function validate_field(field_id, argv) {
    //valida los campos
    var field = document.getElementById(field_id);
    var error = false;
    reset_cont(argv['cont_id']); //borro nodos hijos del contenedor de msj error
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

        case 'cmp_field':
            error = compare_field(field_id, argv);
            break;

        case 'valid_pass':
            error = valid_pass(field_id, argv);
            break;
            
        case 'valid_date':
            error = false;
            break;

        case 'is_num':
            //error = is_num(field_id, argv)
            break;

        case 'is_text':
            error = false;
            break;

        case 'range_lengh':
            error = false;
            break;

        case 'in_range':
            error = false;
            break;
            
        case 'valid_url':
            error = false;
            break;

        case 'alert': //no comprueba nada emite un msj
            set_mensaje(argv['cont_id'], 'Prueba: error intencional');
            error = true;
            break;
            
        default:
            set_mensaje(argv['cont_id'], 'error methodo o argumentos ivalidos: ' + argv['method']);
            break;
    }
    return error;
}


function reset_cont(cont_id) {
    //elimina todos los nodos hijos
    var array_nodos = document.getElementById(cont_id).childNodes;
    if (array_nodos != undefined)  {
        for (var i=0; i < array_nodos.length; i++) {
            if(array_nodos[i].nodeType == 1) {
                array_nodos[i].parentNode.removeChild(array_nodos[i]);
            }
        }
    }
}


function set_mensaje(cont_id, text) {
    //escribe un msj en el contenedor designado
    var contenedor = document.getElementById(cont_id);
    var parrafo = document.createElement('p');
    parrafo.className = 'field_error';
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
    //var reg_exp = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    var reg_exp = /^(.+\@.+\..+)$/;
    var texto = field.value.toString()
    var error = false;
    if (!reg_exp.test(texto)) {
        error = true;
    }
        
    if (error) {
        set_mensaje(argv['cont_id'], argv['msj_error']);
    }
    return error;
}


function valid_pass(field_id, argv) { //no anda
    //valida un campo password para q no posea caracteres extraños
    var field = document.getElementById(field_id);
    var reg_exp = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/;
    var texto = field.value.toString();
    var error = false;
    if (!reg_exp.test(texto)) {
        error = true;
    }
    
    if (error) {
        set_mensaje(argv['cont_id'], argv['msj_error']);
    }
    return error;
}


function compare_field(field_id, argv) {
    //compara si el texto contenido en 2 campos es igual
    var field_a = document.getElementById(field_id);
    var field_b = document.getElementById(argv['field_cmp']);
    var error = false;
    if (field_a.value.toString() != field_b.value.toString()) {
        error = true;
    }
    if (error) {
        set_mensaje(argv['cont_id'], argv['msj_error']);
    }
    return error;
}


function valid_date(field_id, argv) {
    //valida un cam
    return 1;
}


function is_num(field_id, argv) {
    //valida si es un numero
    var field_a = document.getElementById(field_id);
    regex = /[0-9]$/
    var texto = field.value.toString();
    var error = false;
    
    if (!reg_exp.test(texto)) {
        error = true;
    }
    
    if (error) {
        set_mensaje(argv['cont_id'], argv['msj_error']);
    }
    return error;
}


function is_text(field_id, argv) {
    //si es solo texto a-z,A-Z,0-9
    return 1;
}


function length_range(field_id, argv) {
    //conpara si la long de text min <= len <= max 
    var field = document.getElementById(field_id);
    len = field.value.toString().length
    if ((len < argv['min']) || (len > argv['max'])) {
        error = true;
    }
    
    if (error) {
        set_mensaje(argv['cont_id'], argv['msj_error']);
    }
    return error;
}


function in_range(field_id, argv) {
    return 1;
}

function valid_url(field_id, argv) {
    return 1;
}




