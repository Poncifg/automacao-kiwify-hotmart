# Automação Kiwify + Hotmart

Projeto base para automatizar o ciclo de vendas de um produto digital com links, campanhas e sincronização de informações entre Kiwify e Hotmart.

## Objetivo

- consultar produtos em Kiwify e Hotmart
- centralizar dados em um único ponto
- preparar a base para campanhas, links e anúncios
- manter credenciais em variáveis de ambiente

## Estrutura do projeto

- `src/index.js` — lógica principal
- `.env.example` — variáveis de ambiente
- `package.json` — dependências do projeto

## Instalação

```bash
npm install
```

## Configuração

Copie o arquivo de exemplo:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e informe os tokens reais das plataformas.

## Execução

```bash
npm start
```

## Observações de segurança

- nunca commite `.env` no Git
- nunca compartilhe tokens em mensagens ou arquivos públicos
- mantenha os acessos em variáveis de ambiente

## Próximos passos

- integrar APIs específicas da Kiwify e Hotmart
- criar scheduler para anúncios e campanhas
- conectar com Instagram/WhatsApp
- criar painel de gestão
- automatizar geração de textos e ofertas

## Atenção

As integrações reais dependem das APIs oficiais e dos tokens concedidos por cada plataforma. Este projeto inicial serve como base segura e pronta para extensão.
