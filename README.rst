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
    

Uso
---
Solo se explica su uso para la nueva version, la libreria requiere que se defina una clase CSS

    `.field_error`

    Por defecto es (tiene que definirse sino no tiene stilo el msj de alerta):

    `.field_error {width:300px;background-color:#FFF86F;color:#000;font-family:Verdana;font-size:10px;`
    `border:1px solid #FF8000;padding:3px;margin:0px;margin-top:1px;margin-bottom:-10px;}`
 

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
    


maxlenght
---------
Controla que el campo no supere la longitud maxima, parametros, sus argumentos
son:
    'lenght':value (donde value es la longitud maxima del formulario)
    

minlenght
---------
Simil a maxlenght solo que controla q el campo tenga una longitud mayor a la minima
tiene los mismos argumentos que max_lenght.


rangelenght
-----------
Comprueba si la longitud de un campo de texto determinado se encuentra
en un rango delimitado por:

    - 'min': value
    - 'max': value
    
compare
---------
Compara si 2 campos contienen el mismo texto, parametros adicionales son 
  
    - 'field_cmp': field_id - campo con el que se comparara el valor
    

number
------
Si es un campo numerico, no posee parametros adicionales


min
---
Campo numerico con valor minimo

    - 'min': valor valor minimo

max
---
Campo numerico com valor maximo

    - 'max': valor valor maximo

range
-----
Si el valor del campo numerico se encuentra en un rango predeterminado

    - 'min': valor valor minimo
    - 'max': valor valor maximo



mail
----
Valida una direcion de email, este methodo no posee parametros extras


url
---
Valida una direcion de email, este methodo no posee parametros extras
    

