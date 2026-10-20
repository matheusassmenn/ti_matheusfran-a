 ex1
  O texto do link deve descrever seu destino para dar contexto claro ao usuário sobre para onde ele será levado.
 As pessoas mais prejudicadas pelo "clique aqui" são as que usam leitores de tela (tecnologia assistiva).
Leitores de tela conseguem listar apenas os links da página; se a lista tiver vários "clique aqui",
a pessoa não terá como saber para onde nenhum deles leva.

ex2
 A tag <b> altera apenas a aparência visual (deixa o texto em negrito), sem atribuir valor semântico.
A tag <strong> indica importância semântica real. Leitores de tela mudam o tom de voz para dar ênfase
ao ler um texto dentro de <strong>, algo que não acontece com a tag <b>.

ex3
O erro foi empilhar múltiplos <br> (<br><br><br>) para criar espaçamento visual.
Espaço entre elementos é responsabilidade do CSS (margin e padding). O <br> serve apenas para a quebra de linha do próprio texto.

Código corrigido em HTML:
<p class="marca">Radar de Evasao<br>NRE Cascavel</p>
(O espaçamento externo deve ser ajustado no CSS usando margin-bottom ou padding na classe .marca).

ex4
<a href="https://www.apoio.exemplo.org" target="_blank" rel="noopener">Canal de apoio</a>

 ex5
A primeira coisa que não funcionou de primeira foi o carregamento do CSS no HTML, 
pois o arquivo styles.css estava salvo com o nome diferente ("style.css") e o navegador não encontrava a folha de estilo.

ex6
Tokens de cor adicionados ao :root:
1. --bg-primary: #2D2A6E; (índigo da marca)
2. --surface: #FFFFFF; (fundo da barra)
3. --text-secondary: #64748B; (texto dos links)
4. --muted: #F1F5F9; (fundo do item ativo)

Onde foram aplicados:
surface no background-color da barra lateral (.sidebar).
text-secondary na cor dos links do menu (.menu a).
muted no background-color do link ativo (.menu a.ativo).
bg-primary na cor do texto ativo (.menu a.ativo) e na cor da borda de foco (.menu a:focus).