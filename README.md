Projeto: OnionSA.Sys.Sales -> Projeto frontend para gerenciar e controlar vendas, com exibição de gráficos e relatórios.

A arquitetura de software que iremos utilizar será baseada na arquitetura de Clean Architeture, porém com algumas modificações. A principal ideia é que sejam aplicados alguns princípios de SOLID, dentro da arquitetura.

Frontend em React utilizando tailwind para a estilização das páginas e componentes;

Funcionalidades:

Teremos um menu superior para navegar entre as páginas de upload e gráficos;
Em upload teremos a opção de fazer o download da planilha exemplo, importar planilhas e acompanhar através de uma lista, as planilhas já importadas
Em gráficos teremos dois gráficos pizza com informações de venda por região e por produto e também um relatório de todos os pedidos

Para executar o projeto, clone esse repositório e no terminal do diretório baixado, rode o comando npm install e npm start após instaladas as dependências.

Algumas libs externas caso precise instalar:

    'react-router-dom'
    'axios'
    'react-toastify'
    'react-icons'
    'react-google-charts'

