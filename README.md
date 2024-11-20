### Directivas
Feature clave de Angular 
Permite extender funcionalidad del HTML
Hay 3 tipos :

Directivas de Componente -> Es la propia Clase que tiene un template.html,
nos permite manejar logica.
Es un elemento html con funcionalidad extendida.

Directivas de Atributo -> Permite manejar el cambio de apariencia o comportamiento de algún elemento particular del DOM. 
Se utilizan como atributos de un elemento HTML.
ngClass(clases css), ngStyle(estilos en linea), ngModel(forms)

ngClass -> debe devolver el nombre de una clase.
nos permite cambiar de forma dinámica, basado en cualquier lógica de javascript.

ngStyle-> devuelve lo mismo pero con estilos en linea .

ngModel-> permite anexar una variable a un elemento de input para poder controlar el formulario.

Directivas Estructurales -> 

Alteran la estructura del DOM, agregando elementos, quitan o los ocultan , tienen prefijo *
y se agregan como un atributo del elemento

*ngIf -> Se refiere a renderizar el elemento que contiene siempre que se cumpla la condición,
tener en cuenta los valores truthy y falsy

*ngFor -> similar al for loop para iterar -> 
duplica el elemento que lo contiene 

*ngTemplateOutlet -> Es un div que no existe hasta tanto no se llame.
Permite renderizar templates 

