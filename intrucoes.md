# COISAS PARA FAZER/PENSAMENTOS
(adicionar pode coisas)
## IDEIA INICIAL
**projeto codak** <br>
um organizador de estudos, que de acordo com: 
- metodologia de estudo
- oq quer estudar
- gosto do usuario

criar um rotina de estudo/guia para auxiliar no estudo
### requisitos funcionais

- usuario faz pequeno formulario com perguntas como: oq quer estudar, qual metodologia perfere, professores preferidos, tempo disponivel (pode adicionar mais) - davyson
- usuario pode mudar algumas coisa no guia, como: videos sugeridos ou liguagem - davyson
- usuario pode mostrar q esta concluindo os exercios (como no duolingo) - davyson
- (pode adicionar mais ideias)
- ~~usuario faz um cadastro ou login para usar o site~~
- usuario pode escolher a aba de exercicios e a aba de videos - manel 
- o usuario pode enviar videos (como no youtube) - manel
- o usuario pode ver o ranking de exercicios - manel

### requisitos nao-funcionais

- sistema montar guia com base na perguntas respondidas - davyson <br>
*logica do requisito*: <br>
```
Existem tipo de metodologias, aq serão implementadas serão: 
metodologia ativa: Colocam o aluno no centro, focando na resolução de problemas reais, colaboração e criatividade.
metodologia Construtivista: Aluno constrói o próprio conhecimento através de experiências, com o professor como mediador.

elemento central é a metodologia, pos isso professores preferidos
analise quais professores tem disponivel para ensinar tal curso ex: manel - prof1 js | davyson - prof2 js
isso aparece dependente do curso, se houver mais de um professor no curso, aparece

depois tempo disponivel, meta é o usuário passa de estagio pelo menos em 1:30/2 horas de estudo, é o padrão
dependendo do tempo disponivel, é necessario reduzir o avanço da aprendizagem
ou seja, no codigo é considerar tempo de video aulas e de exercios para contar
nisso se basear quanto tempo ele pode ver conteudo 
ent no minino, ele precisaria de 25 minutos por dia para estudar
nisso levar base de 
14 minutos para video aula/ ler documentação
11 minutos para exercicios
isso é um exemplo para o tempo minino, ent deve ser divido igualmente para ambas as partes, dependendo da escolha da metodologia:
metodologia ativa: 30% video aula/documentação 70% para exercicios
metodologia contrutivas: 45% video aula/documentação e 60% para exercicios (com acompanhamento)

guia em si
deve avaliar os estagios do curso/materiais e definir um tempo padrão para cada
definir professores para cada materia e organizar sua respectivas video aulas
fazer exercicios e projetos para cada stage e definir tempo padrão
junta todo o tempo e dividi pelo tempo exigido para cada metodologia
ou seja, definir tempo espeficico para cada stage pelo tempo do usuario mas contando com o tempo padrão do stage

tempo padrão / tempo do usuário = tempo do stage / tempo da metodologia = tempo real

dispobilizar documetação e video aulas, e exercicios
pega tudo e formatar para proxima função

proximo exercio ou projeto vai ser exibido quando os outros forem concluidos
dps passa usuário de stage
```
- sistema exibe o guia - davyson <br>
*logica do requisito*: 
```
pegue tudo da outra função e exibir na div
com tudo 

nome do estagio
video-aulas 
documentação 
e 2 exercios 
e 1 projeto

do lado exercicio existira um check, se marcada libera o proximo 
se as duas estiverem libera o proximo

apos isso libera o proximo stage
```
- sistema refaz logica de montagem de guia com base noq o usuario quer mudar - davyson <br>
*logica do requisito*:
```
sistema procura se ha outro video do tipo do mesmo professor 
se tiver exibi
se não tiver ou tive acabado todos os videos ele pode trocar de professor

pega video aula e exibir novamente
```
- sistema registrar e guardas os ex concluidos por usuario - davyson <br>
*logica do requisito*: 
```
em objetos, tudo em objetos
```
- o sistema calcula os pontos para adicionar no ranking <br>
*logica do requisito*: (add dps)
- o sistema deve rodar um carrossel de videos na aba de conteudos <br>
*logica do requisito*: (add dps)

(requistos q estão sendo feito, marca com seu nome, ex: "requisto tal - davyson", adicionar mais ideias e explicar elas, escrever logica, etc)
