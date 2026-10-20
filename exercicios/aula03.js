1. O HTML continua igual, mas chega “pelado” na tela: sem cor de fundo, sem espaçamento, sem
borda nos cartões, tudo alinhado à esquerda em preto e branco, na ordem em que está escrito no
arquivo. O styles.css existir não ajuda em nada se ninguém disser ao navegador para lê-lo.
2. Não, o defer não era desnecessário: o colega teve sorte de o querySelector encontrar o
elemento porque o script já estava depois do HTML no fim do body, então a página tinha
terminado de carregar antes do script rodar. Sem defer e no fim do body costuma funcionar; sem
defer e dentro do <head> costuma falhar, porque aí o script roda antes do body existir. defer
existe para não depender de onde a tag está.
3. Esperado algo como:
:root {
--vermelho-urgente: #C00000;
}
.cartao-urgente {
border: 3px solid var(--vermelho-urgente);
}
.titulo-urgente {
color: var(--vermelho-urgente);
}
O ponto da questão é perceber que a mesma cor aparecia duas vezes e virou uma variável só,
reutilizada. Aceitar nomes diferentes, desde que descrevam o papel da cor.
4. Não existe resposta única. Problemas comuns: esquecer de apagar o <style> ou o <script>
originais depois de copiar o conteúdo (aí o CSS ou o JS roda duas vezes); caminho errado no href
ou no src; ou o script parando de funcionar por ter ficado sem defer e no lugar errado. Peça
para o aluno mostrar o Radar funcionando no navegador antes de aceitar a resposta.
5. Não existe resposta única. O que se avalia é o nome escolhido: nomes que descrevem o papel
(–cor-destaque, –espaco-padrao) valem mais do que nomes que descrevem só a aparência atual
(–azul, –dezesseis-pixels). Se o aluno escolheu menos de quatro valores realmente repetidos,
é a hora de olhar o CSS dele junto e achar mais.