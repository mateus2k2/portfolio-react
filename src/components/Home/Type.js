import React, {useContext} from "react";
import Typewriter from "typewriter-effect";
import getHome from './../Queries/Home';
import { useQuery } from '@apollo/client';
import { LanguageContext } from './../LanguageContext';
import Preloader from "./../Pre";

import offlineHomeData from './../Queries/offline/Home'

function Type() {
  const { language } = useContext(LanguageContext);

  let { loading, error, data } = useQuery(getHome(language), {
    context: {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_STRAPI_API}`,
          },
        },
  });

  if (loading) return <Preloader load={true} />;

  if (!data || error) data = offlineHomeData(language).data;


  return (
    <Typewriter
      options={{
        strings: data.home.data.attributes.typewriter,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
