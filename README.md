# Elisabete Nogueira — PWA 1.6

## Novidades
- Nomes visíveis removidos debaixo das imagens dos avatares, mantendo descrição acessível via aria-label.
- Nova janela de **O que mudou nesta atualização?**, apresentada uma única vez por versão, depois da instalação e carregamento de uma atualização.
- A confirmação é salva na chave local `elisabete_release_notes_seen`; o nome, a foto, os favoritos e o tema permanecem intactos.
- Novo identificador do cache: `elisabete-app-v16-1`.

## Para futuras versões
Atualizar `APP_VERSION`, `RELEASE_NOTES.items` e o identificador `CACHE` em `sw.js` em cada publicação. O aplicativo mostrará automaticamente o resumo daquela versão após a atualização. No primeiro acesso de uma instalação nova a janela também será mostrada, para apresentar as novidades, após concluir o cadastro.

**Nota:** painel administrador e bloqueio da biblioteca continuam demonstrativos, sem autenticação segura.
