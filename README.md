# Projeto: Lista de Repositórios do GitHub

Aplicação React (Vite) que mostra o perfil e a lista de repositórios públicos de um usuário do GitHub. Inclui carregamento simples e validação mínima do nome de usuário.

## Requisitos

- Node.js 18+ (recomendado)
- npm

## Instalação

```bash
npm install
```

## Execução em desenvolvimento

```bash
npm run dev
```

Abra o endereço indicado pelo Vite (geralmente http://localhost:5173).

## Uso

1. Digite um nome de usuário do GitHub no campo de texto.
2. Ao sair do campo (blur) o app busca os repositórios do usuário.
3. Enquanto carrega, exibe “Carregando...”. Quando finalizar, mostra a lista com nome, linguagem e link para o GitHub.
4. Apenas nomes com mais de 4 caracteres disparam a busca.

## Estrutura principal

- src/App.jsx: input do usuário e montagem dos componentes.
- src/components/Perfil: avatar e nome do usuário.
- src/components/ReposList: busca na API do GitHub e renderização da lista (com estado de carregamento).
- src/components/Formulario: componente de exemplo de formulário (não exibido por padrão).

## Notas

- A API do GitHub é pública; para uso intensivo considere autenticação/token para evitar limites de rate.
- Estilos adicionais estão em `src/components/ReposList/ReposList.module.css` e arquivos `.css` adjacentes.
