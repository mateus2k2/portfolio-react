function getAbout(language) {
    let GET_ABOUT;

    let data = {
      "quotePT": "\"A arte de programar consiste na arte de organizar e dominar a complexidade.\"",
      "quoteEN": "\"The art of programming is the art of organizing complexity, of mastering multitude and avoiding its bastard chaos as effectively as possible.\"",
      "bodyPT": "<p>Olá a todos, sou Mateus Filipe de Belo Horizonte, Minas Gerais.<br>Atualmente estou a procura de uma oportunidade de estágio.<br>Estou no fim da graduação em ciência da computação pelo Universidade Federal de Outro Preto.</p><p>Além da codificação, algumas outras atividades que adoro fazer!</p><p style=\"margin-left:40px;\">👉 Jogar jogos<br>👉 Escrever blogs técnicos<br>👉 Viajar</p>",
      "bodyEN": "<p>Hi Everyone, I am Mateus Filipe from Minas Gerais.<br>I am currently looking for an internship opportunity.<br>I am at the end of my undergraduate studies in Computer Science at the Federal University of Ouro Preto.</p><p>Apart from coding, some other activities that I love to do!</p><p style=\"margin-left:40px;\">👉 Playing Games<br>👉 Writing Tech Blogs<br>👉 Travelling</p>",
      "quoteAuthor": "Dijkstra",
    }

    GET_ABOUT =
    {
      "data": {
        "about": {
          "data": {
            "id": "1",
            "attributes": {
              "quote": data[`quote${language}`],
              "body": data[`body${language}`],
              "quoteAuthor": data.quoteAuthor
            }
          }
        }
      }
    }

    return GET_ABOUT

}

export default getAbout;