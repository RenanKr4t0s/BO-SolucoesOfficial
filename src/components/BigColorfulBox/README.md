# BigImageBox Component

## Descrição

O componente `BigImageBox` é um componente React estilizado que exibe uma imagem de fundo que ocupa 100% da largura e altura da tela. Inclui efeitos de escurecimento com pseudo-elemento `::before` e um efeito de zoom quando o usuário passa o mouse sobre o componente.

## Dependências

Este componente utiliza a biblioteca `styled-components` para estilização. Certifique-se de que a biblioteca esteja instalada no seu projeto:

`npm install styled-components`

## Uso
Para usar o componente BigImageBox, importe-o e passe a URL da imagem como uma propriedade chamada image. Isso definirá a imagem de fundo do componente. 

## Propriedades
O componente aceita uma propriedade chamada image, que é a URL da imagem de fundo que será exibida.

## Estilos
A imagem de fundo é ajustada para cobrir toda a área do componente.
Um pseudo-elemento ::before é utilizado para adicionar uma camada escura sobre a imagem de fundo.
Quando o mouse está sobre o componente, ele aumenta seu tamanho em 10%.
