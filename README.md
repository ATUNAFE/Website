# Website
Este guia tem por objectivo a documentação dos aspetos relativos ao WebSite da TUNAFE.

## Hístorico
### Linha de eventos relativos ao WebSite:

- 2001 - Criação do WebSite cujo endereço atribuído é https://paginas.fe.up.pt/~tunafe/WP/ . Site foi desenvolvido em wordpress.

- 2013 - É adquirido o endereço tunafe.pt, no entanto o redirecionamento não teve sucesso.

- 2018 - A subscrição ao endereço tunafe.pt expira

- 2020 - Após a troca de emails com o CICA, obtivemos o endereço tunafe.fe.up.pt que redireciona para o https://paginas.fe.up.pt/~tunafe/WP/ .

### Análise de alguns acontecimentos relevantes
Comunicação com o CICA(2020):
- Foi nos informado que os servidores do cica só aceitam php como linguagem de programação
- Não é possível utilizar um host externo para fazer deploy num endereço da FEUP
- Não é possível os host da FEUP fazer deploy num endereço externo

## Proposta de novo website
### Design e Estruturação
#### Sitemap
![sitemap](https://user-images.githubusercontent.com/38894031/123664727-83216b00-d82f-11eb-95a0-ff96572de31b.png)
#### Wireframe
![wireframe](https://user-images.githubusercontent.com/38894031/123664804-96ccd180-d82f-11eb-98de-bf3ef71a19ac.jpg)

#### Mockups
> Footer
![Screenshot_2021-06-28_18-17-32](https://user-images.githubusercontent.com/38894031/123677695-583e1380-d83d-11eb-86b2-48b4b83b00d3.png)

> Header
![Screenshot_2021-06-28_18-20-27](https://user-images.githubusercontent.com/38894031/123677891-8de2fc80-d83d-11eb-9cab-5dae819385f2.png)

> Home page

> Sobre Nós

> Eventos

> Música

### Linguagem
A linguagem utilizada para o desenvolvimento do WebSite é JavaScript, recorrendo à framework open-source baseada em React, GatsbyJS. Esta destaca-se pela excelência na concepção de sites estáticos.

### Hosting e deploy
O hosting é feito pelo Netlify, através da conta da TUNAFE.

Produto final encontra-se no link tunafe.netlify.app.

O Netlify e o GatsbyJS permitem a manutenção do site através da adição e edição de ficheiros Markdown, a ser feita no .

### Manutenção de conteúdos
A manutenção de conteúdos é efetuada pelo NetlifyCMS. 

Para aceder à página de edição, é necessário aceder ao link https://tunafe.fe.up.pt/admin. De seguida é necessário efetuar o login com os respetivos dados.

Após estes passos, para adicionar conteúdo é só seguir o seguinte tutorial:

--depois quando o site estiver ok, fazer video e descrever os passos--


Este gestor de conteúdo vai guardar ficheiros com extensão .md, permitindo que o Netlify atualize o site com a nova informação. A estrutura destes ficheiros pode ser visualizada nos Templates abaixo descritos.

#### Templates
Os templates para criação de conteúdo podem ser encontrados na seguinte [pasta](https://drive.google.com/drive/folders/1Sfv-94U855Ri0-k1TZlKiZD9Vs2DxOVI?usp=sharing) do google drive.


**Importante:** No ficheiro “INSTRUCOES.md” encontram-se regras a seguir na conceção do conteúdo através dos templates.

#### Onde colocar cada ficheiro
![treemap](https://user-images.githubusercontent.com/38894031/123669570-24122500-d834-11eb-95c9-e9413c8fe472.png)

Tendo em atenção o treemap, e sabendo que estes conteúdos devem ser colocados em subpastas do diretório "Conteudos":
- comunicado.md deve ser colocado na pasta Homepage, isto descreve comunicados importantes a anunciar aos visitantes
- contactos.md deve ser colocado na pasta SobreNos
- ensaios.md deve ser colocado na pasta SobreNos
- evento.md deve ser colocado na pasta Eventos ou, no caso de se referirem a edições passadas do TIET, na pasta SobreNos/TIET/Edicoes 
- historial.md deve ser colocado na pasta SobreNos
- membro.md deve ser colocado sob a pasta de hierarquia a que o membro pertence a partir da pasta Membros (dentro de SobreNos)
- musica.md deve ser colocado na pasta Repertorio (ou CD, ainda que esta seja uma ferramenta que ainda não está assegurada)
- padrinhos.md deve ser colocado na pasta SobreNos
- tiet.md deve ser colocado na pasta SobreNos



