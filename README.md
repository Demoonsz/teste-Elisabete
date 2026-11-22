# Elisabete Nogueira — PWA v0.9

## Conteúdo da versão
- Início simplificado, sem seção Sobre nem foto de apresentação. Menu inferior: Início, Biblioteca, Oráculo, Vídeos e Favoritos.
- Biblioteca e Oráculo permanecem como na v0.8 (518 mensagens).
- Vídeos do YouTube são lidos de `conteudos/videos.json`.
- Acesso discreto à **Administração (prévia)** pelo fim da página inicial ou menu lateral no desktop.
- No painel, é possível cadastrar/remover vídeos, importar o catálogo já publicado e **baixar um `videos.json`**. Esse editor é local: **não faz publicação direta**.
- Serviço offline atualizado para cache `elisabete-app-v09-1`, permitindo testar a atualização no PWA instalado da v0.8.

## Como atualizar o aplicativo já instalado
1. Descompacte este pacote.
2. No repositório `Demoonsz/teste-Elisabete`, substitua os arquivos da raiz e das subpastas pelos arquivos deste pacote, preservando a estrutura de pastas (especialmente `index.html`, `sw.js`, `manifest.webmanifest`, `assets/` e `conteudos/`). **Não envie a pasta contêiner `Elisabete_Nogueira_PWA_v09` para dentro do repositório**, somente seu conteúdo.
3. Faça o commit na branch publicada pelo GitHub Pages.
4. Abra o PWA instalado com internet. Na versão antiga, feche e reabra ou volte do segundo plano; o Service Worker verifica uma atualização. Quando aparecer o aviso, clique em **Atualizar agora**. Alguns navegadores verificam apenas ao reiniciar o PWA, e o deploy pode demorar a propagar.
5. Confirme que a aba Sobre desapareceu, restam 5 abas e a área Administração (prévia) aparece no final da página inicial.

## Cadastrar vídeos
1. Publique o vídeo no YouTube (pode ser não listado; qualquer pessoa com o link consegue assistir).
2. Acesse Administração (prévia), preencha título, link, descrição e tema.
3. Clique em **Adicionar ao rascunho** e em **Baixar videos.json**.
4. No GitHub, substitua `conteudos/videos.json` por esse arquivo e faça o commit. Não é preciso atualizar o código para cadastrar só vídeos.
5. Alterações feitas no painel não modificam o conteúdo do site de outras pessoas até publicar o JSON no repositório.

## Segurança e limites
- **O painel não é protegido**, não possui login root e não pode alterar o GitHub. Não digite nele tokens, senhas pessoais nem dados privados.
- Antes de permitir publicação pelo painel, implementar autenticação e autorização reais com um backend/serviço seguro e credenciais armazenadas no servidor, nunca em HTML/JavaScript público.
- A senha demonstrativa da biblioteca `CRYSTAL2026` continua legível no código e não protege os materiais do repositório público. Não considere a biblioteca ou o Oráculo seguros para distribuição paga nesta etapa.
- YouTube não listado não garante sigilo do link; incorporações podem oferecer opções externas dependendo da plataforma.
- Um PWA troca arquivos/cache nas atualizações, não mescla arquivos linha a linha. Dados locais de favoritos/desbloqueio no mesmo domínio costumam persistir, salvo limpeza do armazenamento.
- Para testar em localhost: `python -m http.server 8000`; abra `http://localhost:8000`.
