import banner from "../../../Assets/Strapi/thumbnail_in_Dev.jpg"

function getProjects(language) {
    let GET_PROJECTS;

    let data = [
      {
        "titleEN": "Online Tic Tac Toe ",
        "titlePT": "Tic Tac Toe Online",
        "descriptionEN": "Tic-tac-toe online in Python using only sockets. It features a graphical interface with registration, login, gameplay against server-side AI, sound effects, among others.",
        "descriptionPT": "Jogo da velha online em python utilizando apenas sockets. conta com interface gráfica com registro. login, jogo contra ia localizada no servidor, efeitos sonoros, entre outros",
        "demoLink": null,
        "github": "https://github.com/mateus2k2/TicTacToe-Python-Sockets-GUI",
        "blogEN": "https://mateus2k2.github.io/blog/en/blog/test1/",
        "blogPT": "https://mateus2k2.github.io/blog/pt/blog/test1/"
      },
      {
        "titleEN": "Rockerizando",
        "titlePT": "Rockerizando",
        "descriptionEN": "Event and party organizer. Frontend developed in React and backend in Python using the Flask framework. The application features user and event CRUD (Create, Read, Update, Delete) operations, among other functionalities.",
        "descriptionPT": "Organizador de eventos e festas. frontend desenvolvido em react e backend em python utilizando o framework flask. aplicatico conta com crud de usuários e eventos entre outras funcionalidades",
        "demoLink": null,
        "github": "https://github.com/mateus2k2/Rockrizando",
        "blogEN": "https://mateus2k2.github.io/blog/en/blog/test1/",
        "blogPT": "https://mateus2k2.github.io/blog/pt/blog/test1/"
      }
    ]

    GET_PROJECTS =
    {
      "data": {
        "projects": {
          "data": [
            {
              "id": "1",
              "attributes": {
                "title": data[0][`title${language}`],
                "description": data[0][`description${language}`],
                "blog": data[0][`blog${language}`],
                "demoLink": data[0].demoLink,
                "github": data[0].github,
                "banner": {
                  "data": {
                    "attributes": {
                      "url": banner
                    }
                  }
                }
              }
            },
            {
              "id": "2",
              "attributes": {
                "title": data[1][`title${language}`],
                "description": data[1][`description${language}`],
                "blog": data[1][`blog${language}`],
                "demoLink": data[1].demoLink,
                "github": data[1].github,
                "banner": {
                  "data": {
                    "attributes": {
                      "url": banner
                    }
                  }
                }
              }
            }
          ]
        }
      }
    }
    ;

    return GET_PROJECTS

}

export default getProjects;