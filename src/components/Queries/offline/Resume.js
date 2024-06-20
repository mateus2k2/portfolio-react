import resumePT from "../../../Assets/Strapi/resume_PT.pdf"
import resumeEN from "../../../Assets/Strapi/resume_EN.pdf"

function getResume(language) {
    let GET_RESUME;

    const data = {
      "resumeEN": resumeEN,
      "resumePT": resumePT,
    }

    GET_RESUME = 
    {
      "data": {
        "resume": {
          "data": {
            "attributes": {
              "resume": {
                "data": {
                  "attributes": {
                    "url": data[`resume${language}`]
                  }
                }
              }
            }
          }
        }
      }
    }
    ;

    return GET_RESUME

}

export default getResume;