FielValidator
=============

libreria en JavaScript que permite validar formularios HTML utilizando diferenter parametros, se presentan 2 versiones de la misma, una que utiliza
javascript crudo (se recomiendo no utilizar) "validate-form.js" a la cual nombraremos a lo largo del documento version anterior y la nueva
version que utiliza algunas cosas de la libreria JQuery "ValidateForm.js"

Su uso es bastante sencillo, se adjuntan 2 archivos HTML de ejemplos para ver como se usan los mismos.

Parametros
==========
Para el dicionario de argumentos los parametros por defectos son

- version anterior
    - 'method': method_type
    - 'cont_id': id del contenedor a evualar
    - 'msj_error': mensaje 
    
- Nueva Version
    - 'method': method_type
    - 'msj': mensaje a mostrar en caso de error
    
    #Nota: el id del campo ahora es el identificador del mismo
    

method
------
Los posibles argumentos para el parametro method para la version anterior son:
    - max_lenght 
    - min_lenght
    - range_lenght
    - cmp_field

para la nueva version acepta los siguientes campos
    - maxlenght (equivalente a max_lenght)
    - minlenght (equivalente a min_lenght)
    - rangelenght (equivalente a range_lenght)
    - compare (equivalente a cmp_field)
    - number
    - min
    - max
    - range
    - mail
    - url
    


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
    
cmp_field
---------
compara si 2 campos contienen el mismo texto, parametros adicionales son
    'field_cmp': field_id - campo con el que se comparara el valor
    

number
------
si es un campo numerico, no posee parametros adicionales


min
---
campo numerico con valor minimo


max
---
campo numerico com valor maximo


mail
----
valida una direcion de email, este methodo no posee parametros extras


url
---
valida una direcion de email, este methodo no posee parametros extras
    

