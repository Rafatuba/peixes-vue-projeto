<template>
  <section class="conteudo">
    <h1>Pesca Esportiva</h1>
    <div class="pesca">
      <p>
        A pesca esportiva é uma atividade que tem ganhado cada vez mais adeptos
        ao redor do mundo, combinando lazer, competição e uma forte conexão com
        a natureza. Ao contrário da pesca tradicional, que visa a captura de
        peixes para consumo, a pesca esportiva se concentra na prática de pescar
        e, geralmente, soltar o peixe de volta ao seu habitat, promovendo a
        preservação das espécies.
      </p>

      <img
        src="https://blog.lazereaventura.com.br/wp-content/uploads/2019/01/lazer_e_aventura_shop_entenda_mais_sobre_pesca_esportiva_3.jpg"
        alt=""
      />
    </div>
    <div class="beneficios">
      <h1>Benefícios da <span>Pesca Esportiva</span></h1>
      <h2>Promoção da Conservação Ambiental:</h2>
      <p>
        A prática de "pescar e soltar" é uma das principais características da
        pesca esportiva, contribuindo para a preservação das populações de
        peixes. Isso garante que as espécies possam se reproduzir e manter o
        equilíbrio ecológico nos ambientes aquáticos.
      </p>
      <h2>Saúde e Bem-Estar:</h2>
      <p>
        A pesca esportiva oferece benefícios significativos à saúde. Passar
        horas em contato com a natureza, longe da agitação do cotidiano, pode
        ajudar na redução do estresse, proporcionando momentos de tranquilidade
        e relaxamento. Além disso, a atividade exige paciência e foco,
        estimulando a mente e promovendo a sensação de bem-estar.
      </p>
      <h2>Desenvolvimento de Habilidades e Coordenação:</h2>
      <p>
        A pesca esportiva exige habilidades técnicas, como o manejo da vara de
        pesca, o conhecimento sobre os melhores locais e condições para pescar,
        e a escolha dos iscas e anzóis corretos. Essas habilidades podem ser
        desenvolvidas com a prática constante, estimulando a coordenação motora
        e a destreza.
      </p>
      <h2>Integração Social e Espiritual:</h2>
      <p>
        Muitas vezes, a pesca esportiva é uma atividade praticada em grupo, o
        que promove a socialização e fortalece os laços de amizade e família. Ao
        mesmo tempo, pode proporcionar um sentimento de conexão espiritual, já
        que muitos pescadores descrevem a experiência como uma forma de
        meditação, onde o silêncio e a observação do ambiente natural são
        profundamente enriquecedores.
      </p>
      <h2>Estímulo à Economia Local:</h2>
      <p>
        O turismo relacionado à pesca esportiva é uma importante fonte de renda
        para muitas regiões, especialmente aquelas com recursos hídricos ricos
        em diversidade de peixes. Hotéis, pousadas, lojas de equipamentos e
        guias especializados são apenas alguns dos setores que se beneficiam da
        prática da pesca esportiva.
      </p>
      <p>
        Em suma, a pesca esportiva é muito mais do que um simples passatempo.
        Além de oferecer uma excelente oportunidade para aproveitar o contato
        com a natureza, ela contribui para a preservação ambiental, promove a
        saúde física e mental e pode fortalecer as relações interpessoais,
        tornando-se uma prática completa e enriquecedora para seus praticantes.
      </p>
    </div>
  </section>
</template>

<style scoped>
.conteudo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 0 20px;
  max-width: 1280px;
}

.pesca {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 40px 0;
}

.pesca img {
  width: 100%;
  max-width: 600px;
}

.beneficios span {
  background-color: aqua;
}

h1 {
  font-size: 40px;
  text-align: center;
}

h2 {
  font-size: 32px;
}
p {
  font-size: 24px;
}

@media (max-width: 767px) {
  .pesca {
    flex-direction: column;
    margin: 0 0 20px 0;
  }

  .beneficios {
    margin-bottom: 20px;
  }

  h1 {
    font-size: 30px;
    text-align: center;
  }

  h2 {
    font-size: 26px;
  }
  p {
    font-size: 18px;
  }
}
</style>
