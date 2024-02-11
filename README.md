# gha-javascript-dice
Este repositorio forma parte de los ejemplos del curso de udemy [Domina Github Actions](https://www.udemy.com/course/domina-github-actions/?referralCode=CBFBAF72C38BE758CFE1)

Esta acción de github es un ejemplo de acción personalizada usando javascript.

La acción toma como parámetro el número de dados que se van a tirar: "uno" o "dos" y devuelve una tirada aleatoria para el número de dados que se elijan.

## Inputs
* numero-dados: El número de dados que se van a tirar.
    * Valores aceptados: [uno, dos]
    * Valor por defecto: dos

## Outputs
* dado1: Resultado de la primera tirada de dados
* dado2: Resultado de la segunda tirada de dados
