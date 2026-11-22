# Elisabete Nogueira — PWA 2.1

## Controle de assinaturas (primeira versão de teste)

- `acessos/ativos.json`: arquivo **público**, inicialmente vazio; contém somente hashes SHA-256 de códigos aleatórios ativos, sem nomes de pessoas.
- `administrar-assinaturas.html`: painel administrativo para adicionar, bloquear, liberar e excluir assinantes. O painel exige token do GitHub e frase secreta, digitados manualmente. Não salva essas credenciais no navegador.
- Dados pessoais: destinados a um **SEGUNDO REPOSITÓRIO PRIVADO**, por exemplo `Demoonsz/assinaturas`, arquivo `dados/assinaturas.json.enc`. Dados criptografados pelo navegador com AES-256-GCM, chave derivada de frase secreta usando PBKDF2-SHA256 com 250 mil iterações.
- O app passou a pedir códigos individuais de 48 dígitos hexadecimais com prefixo `ELI-`. Verificação online contra hashes públicos na abertura e periodicamente.
- Senha antiga de demonstração não concede mais acesso; não existe nenhuma assinatura ativa inicial.
- Cache PWA: `elisabete-app-v21-1`.

### Etapa manual obrigatória (antes de operar o painel)

1. No GitHub, clicar em **+ → New repository**; escolher nome **assinaturas** sob a conta Demoonsz.
2. Selecionar **Private** e criar o repositório, inicializando-o com README. **Não use Public** para este repositório.
3. Criar um **fine-grained personal access token** no GitHub com acesso específico aos repositórios `teste-Elisabete` e `assinaturas`, permitindo Contents: Read and write. Não publicar, compartilhar ou guardar o token em arquivos.
4. Abrir `administrar-assinaturas.html`, informar token e uma frase secreta longa (mínimo 16 caracteres) que você possa conservar com segurança; conectar.
5. Adicionar um assinante, copiar o código gerado, publicar e encaminhar o código a ele. As informações pessoais vão para o repositório privado e os hashes dos códigos ativos para o público.

**Aviso importante:** esse é um bloqueio de interface/protótipo de assinatura, **não é proteção suficiente para vender conteúdo**. O HTML público ainda pode incluir textos e materiais, e um usuário pode ler/reutilizar dados públicos diretamente. Códigos podem ser compartilhados. GitHub Pages não autentica quem baixa os materiais; somente autenticação e entrega protegida no servidor poderiam proteger de verdade PDFs/MP3/vídeos. Para esse modelo, manter materiais exclusivos fora de caminhos e repositórios públicos.

Repositório privado e token **não foram criados automaticamente**: o conector GitHub disponível não tem ação para criar repositórios nem tokens. Não cadastrar nomes/dados reais antes de completar a criação privada.


## Login local do painel de assinaturas (atualização administrativa)

O arquivo `administrar-assinaturas.html` oferece o usuário fixo **root**. Na primeira conexão bem-sucedida com o GitHub, o administrador define pessoalmente a senha local e pode marcar **Manter a conexão criptografada neste aparelho** (marcado por padrão). O token do GitHub e a frase secreta do banco são guardados **somente criptografados** em localStorage do navegador, usando AES-256-GCM e PBKDF2-SHA256 (600.000 iterações), com salt e IV aleatórios. Nas próximas aberturas da página, somente a senha root é solicitada; a conexão com os repositórios é restabelecida automaticamente.

O usuário pode **Sair** (trava o painel, mas preserva o cofre), ou **Esquecer conexão** (apaga o cofre local e exige o token e a frase para refazer o vínculo). O banco de assinantes no GitHub não é apagado. A senha root não é embutida no JavaScript nem gravada diretamente.

**Limitações de segurança:** uma senha root fraca, especialmente uma já divulgada, pode permitir adivinhação offline dos dados salvos caso alguém tenha acesso ao armazenamento do navegador. O token tem poderes reais de escrita e, uma vez desbloqueado, fica em memória no navegador; extensões maliciosas, scripts comprometidos ou acesso ao aparelho podem comprometê-lo. Isso não substitui autenticação do lado do servidor. Recomenda-se senha longa e única e token GitHub com permissões mínimas, escopo restrito e expiração.

## Versão 2.2 — atualização completa do PWA

- Publicado novo `APP_VERSION='2.2'` em `index.html` e novo cache `elisabete-app-v22-1` em `sw.js` para acionar a atualização nos aparelhos instalados.
- Aviso de novidades descreve o login `root` e a opção de lembrar a conexão GitHub criptografada no aparelho.
- O painel `administrar-assinaturas.html` já está publicado e pode ser aberto separadamente.
- Os dados reais dos assinantes ficam no repositório privado `Demoonsz/assinaturas`; tokens e frases secretas não ficam incorporados ao código público.

A atualização do PWA pode depender do navegador buscar o novo service worker ao reabrir o aplicativo. O sistema atual continua sendo um controle básico de acesso, e não proteção segura de conteúdo pago.
