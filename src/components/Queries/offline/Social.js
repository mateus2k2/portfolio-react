function getSocial() {
  let GET_SOCIAL;

  let data = {
      "instagram": "https://www.instagram.com/mateus2k2",
      "twitter": "https://twitter.com/2k2Mateus",
      "github": "https://github.com/mateus2k2/",
      "linkedin": "https://www.linkedin.com/in/mateus-silva-0b34131b5/"
  }

  GET_SOCIAL = 
  {
    "data": {
      "social": {
        "data": 
          {
            "id": "1",
            "attributes": {
              "instagram": data.instagram,
              "twitter": data.twitter,
              "linkedin": data.github,
              "github": data.linkedin
            }
          },
      }
    }
  }
  ;

  return GET_SOCIAL

}

export default getSocial;
