# Elisabete Nogueira — PWA v1.0

## Atualização do GitHub Pages

Envie **o conteúdo desta pasta** para a raiz da branch publicada no GitHub Pages, substituindo os arquivos anteriores. Não coloque a pasta v10 dentro do repositório como subpasta.

**Novidades**
- Atalho **Meu perfil** na tela inicial e engrenagem no cabeçalho; configurações acessíveis também no menu lateral do computador.
- Foto de perfil opcional, redimensionada para 256 × 256 e salva **somente no aparelho atual**, em localStorage.
- Configurações com verificação de atualização, versão 1.0 e limpeza dos favoritos.
- **Cinco toques rápidos** na linha **Versão do aplicativo** abrem o painel de administração (rascunho).
- Removemos o link ostensivo de administração da navegação e da página inicial.
- Service Worker atualizado para `elisabete-app-v10-1` para acionar o fluxo de atualização já testado.

## Segurança — importante

O gesto secreto **não é autenticação**. Qualquer pessoa com conhecimento técnico pode encontrar o código do painel em um PWA público. O painel atual apenas prepara e exporta um arquivo `videos.json`; ele **não publica no GitHub** nem possui acesso root real. Não coloque tokens, senhas administrativas ou material pago em texto puro no repositório. Para publicação real pelo painel, usar autenticação externa e servidor intermediário seguro.

## Teste

1. Publique a atualização no GitHub Pages.
2. Abra o PWA instalado e aceite o aviso de atualização.
3. Em Início, toque em Meu perfil ou engrenagem.
4. Adicione foto (opcional). Verifique a versão 1.0.
5. Toque na linha Versão do aplicativo cinco vezes em até cerca de 2,7 segundos.
6. Teste exportar o catálogo no painel; alterações não são publicadas automaticamente.

Dados locais devem continuar durante uma atualização normal, mas podem ser removidos ao limpar os dados do site ou mudar de domínio.
