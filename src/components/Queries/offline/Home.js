import logo from "../../../Assets/Strapi/logo.png"
import avatar from "../../../Assets/Strapi/avatar.png"

function getHome(language) {
    let GET_HOME;

    const data = {
      "introductionPT": "<p><i><strong>Eu me apaixonei pela programação e pelo menos aprendi alguma coisa, acho... 🤷‍♂️</strong></i></p><p><i><strong>Sou fluente em clássicos como </strong></i><span style=\"color:hsl(278,60%,56%);\"><i><strong>C++, Javascript.</strong></i></span></p><p><i><strong>Meus campos de interesse incluem a construção de novas </strong></i><span style=\"color:hsl(278,60%,56%);\"><i><strong>tecnologias e produtos da web</strong></i></span><i><strong> e também áreas relacionadas à </strong></i><span style=\"color:hsl(278,60%,56%);\"><i><strong>Infraestrutura</strong></i></span><i><strong>.</strong></i></p><p><i><strong>Sempre que possível, também aplico minha paixão por desenvolver produtos com</strong></i><span style=\"color:hsl(278,60%,56%);\"><i><strong> Node.js</strong></i></span><i><strong> e </strong></i><span style=\"color:hsl(278,60%,56%);\"><i><strong>bibliotecas e frameworks modernos de Javascript</strong></i></span><i><strong> como </strong></i><span style=\"color:hsl(278,60%,56%);\"><i><strong>React.js</strong></i></span><i><strong>. E usar</strong></i><span style=\"color:hsl(0,0%,0%);\"><i><strong> </strong></i></span><span style=\"color:hsl(278,60%,56%);\"><i><strong>Docker, Cloudflare</strong></i></span><span style=\"color:hsl(0,0%,0%);\"><i><strong> </strong></i></span><i><strong>e outras ferramentas para fazer o deploy dos meus projetos.</strong></i></p>",
      "introductionEN": "<p><i><strong>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</strong></i></p><p><i><strong>I am fluent in classics like</strong></i><span style=\"color:hsl(278,60%,56%);\"><i><strong> C++, Javascript.</strong></i></span></p><p><i><strong>My field of Interest's are building new </strong></i><span style=\"color:hsl(278,60%,56%);\"><i><strong>Web Technologies and Products</strong></i></span><i><strong> and also in areas related to </strong></i><span style=\"color:hsl(278,60%,56%);\"><i><strong>Infrastructure</strong></i></span><i><strong>.</strong></i></p><p><i><strong>Whenever possible, I also apply my passion for developing products with </strong></i><span style=\"color:hsl(278,60%,56%);\"><i><strong>Node.js</strong></i></span><i><strong> and </strong></i><span style=\"color:hsl(278,60%,56%);\"><i><strong>Modern Javascript Library and Frameworks</strong></i></span><i><strong> like </strong></i><span style=\"color:hsl(278,60%,56%);\"><i><strong>React.js</strong></i></span><i><strong>.</strong></i><span style=\"color:hsl(0,0%,0%);\"><i><strong> </strong></i></span><i><strong>And using</strong></i><span style=\"color:hsl(0,0%,0%);\"><i><strong> </strong></i></span><span style=\"color:hsl(278,60%,56%);\"><i><strong>Docker, Cloudflare</strong></i></span><span style=\"color:hsl(0,0%,0%);\"><i><strong> </strong></i></span><i><strong>and other tools to deploy my projects.</strong></i></p>",
      "typewriterEN": [
        "Software Developer",
        "Freelancer",
        "MERN Stack Developer",
        "Open Source Contributor"
      ],
      "typewriterPT": [
        "Desenvolvedor de Software",
        "Freelancer",
        "Desenvolvedor de Pilha MERN",
        "Contribuidor de Código Aberto"
      ],
      "name": "Mateus Silva",
    }
    
    GET_HOME =
    {
      "data": {
        "home": {
          "data":
            {
              "id": 1,
              "attributes": {
                "name": data["name"],
                "avatar": {
                  "data": {
                    "attributes": {
                      "url": avatar
                    }
                  }
                },
                "logo": {
                  "data": {
                    "attributes": {
                      "url": logo
                    }
                  }
                },
                "introduction": data[`introduction${language}`],
                "typewriter": data[`typewriter${language}`]
              }
            }
        }
      }
    }
    ;

    return GET_HOME

}

export default getHome;
