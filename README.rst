FielValidator
=============


Para el dicionario de argumentos los parametros por defectos son
    - 'method': method_type
    - 'cont_id': id del contenedor
    - 'msj_error': mensaje 
    
cont_id
-------
id del contenedor, donde se mostrara el mensaje de error del campo, normalmente
es un campo div o span

msj_error
---------
Mensaje de Error que se mostrara en caso de que ocurriese un error


method
------
Los posibles argumentos para el parametro method son:
    - max_lenght
    - min_lenght
    - range_lengh
    - cmp_field
    - valid_mail
    - valid_url
    - is_num
    - is_text
    - in_range


max_lenght
----------
Controla que el campo no supere la longitud maxima, parametros, sus argumentos
son:
    'lenght':value (donde value es la longitud maxima del formulario)
    

min_lenght
----------
Simil a max_lenght solo que controla q el campo tenga una longitud mayor a la minima
tiene los mismos argumentos que max_lenght.


range_lengh <no_implement>
-----------
comprueba si la longitud de un campo de texto determinado se encuentra
en un rango delimitado por:

    'min': value
    'max': value
    

valid_mail
----------
valida una direcion de email, este methodo no posee parametros extras


is_num <no_implement>
------

is_text <no_implement>
-------

in_range <no_implement>
--------

cmp_field
---------
compara si 2 campos contienen el mismo texto, parametros adicionales son
    'field_cmp': field_id - campo con el que se comparara el valor
    

