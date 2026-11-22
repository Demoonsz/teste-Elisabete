# Elisabete Nogueira — PWA v0.8 (estrutura inicial)

## O que está pronto
- Interface existente preservada: Início, Biblioteca, Oráculo (518 mensagens), Favoritos, Sobre e Vídeos.
- `manifest.webmanifest`, ícones, `sw.js` para instalação e cache offline.
- Aviso de nova versão quando o navegador encontra uma atualização do service worker.
- Catálogo `conteudos/videos.json` atualizado por rede; sem vídeos reais ainda.
- Player do YouTube embutido quando um ID válido for cadastrado.
- Preferências e desbloqueio da demonstração continuam no `localStorage` do mesmo domínio.

## Publicar no GitHub Pages
1. Crie um repositório GitHub (ex.: `elisabete-app`) e envie **o conteúdo desta pasta**, com `index.html` na raiz.
2. Em Settings → Pages, selecione Deploy from a branch, branch `main`, pasta `/ (root)` e salve.
3. Abra o endereço HTTPS fornecido pelo GitHub Pages e use a opção Instalar/Adicionar à tela inicial do navegador.
4. Para publicar uma mudança, altere arquivos no repositório e faça commit. Para atualizações do código, altere também a constante `CACHE` em `sw.js` (ex.: `elisabete-app-v08-2`); o app oferecerá recarregamento quando a nova versão for instalada.
5. Para adicionar um vídeo, edite `conteudos/videos.json` adicionando um objeto com `titulo`, `descricao`, `categoria`, `youtubeId` (11 caracteres do link YouTube). O catálogo é consultado ao abrir o aplicativo e pode ser atualizado sem mudar o HTML. Os vídeos exigem internet.

## Teste local
Use um servidor HTTP local, não `file://`:
`python -m http.server 8000`
Abra `http://localhost:8000`. Service workers só funcionam em HTTPS ou localhost.

## Segurança: importante antes de vender
A senha `CRYSTAL2026` ainda é **demonstrativa**, visível no JavaScript, e os conteúdos (inclusive o Oráculo) estão incorporados no HTML público. **Não publique materiais pagos neste formato esperando proteção**. GitHub Pages é público. É preciso escolher uma estratégia de proteção real (autenticação/servidor ou criptografia de pacotes com limitações claras), além de decidir como tratar compartilhamento de senha e revogação. YouTube não listado não é privado.

## Limitações
- O cache offline cobre a interface e textos integrados; YouTube exige internet.
- Novos vídeos requerem conexão para atualizar o catálogo; um catálogo anterior pode aparecer offline.
- O estado local fica no domínio do PWA; **não migra automaticamente** do HTML aberto como arquivo no WhatsApp.
- A atualização troca os arquivos do aplicativo, não faz merge linha a linha; dados de usuário ficam separados em armazenamento local.
- Para usar outro repositório ou domínio, mantenha os caminhos relativos. Se mudar domínio, armazenamento local não acompanha automaticamente.
