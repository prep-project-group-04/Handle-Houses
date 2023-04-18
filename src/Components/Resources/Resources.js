// @ts-nocheck
import { Link } from 'react-router-dom';
import react from './ResourcesImage/react.png';
import bootstrap from './ResourcesImage/react-bootstrap.png';
import swiper from './ResourcesImage/react-swiperr.png';
import awesome from './ResourcesImage/awesomee.jpg';
import freepik from './ResourcesImage/freepik.png';


import node from './ResourcesImage/node.png'
import cors from './ResourcesImage/cors.webp'
import dotenv from './ResourcesImage/dotenv.png'
import express from './ResourcesImage/express.png'
import nodemon from './ResourcesImage/nodemon.png'
import pg from './ResourcesImage/pg.png'
import canva from './ResourcesImage/canva.jpg'


import zoom from './ResourcesImage/zoom.png'
import discord from './ResourcesImage/discord.png'
import slack from './ResourcesImage/slack.jpg'
import Trello from './ResourcesImage/Trello.png'
import TeamGantt from './ResourcesImage/TeamGantt.png'
import Lucidchaer from './ResourcesImage/Lucidchaer.jpg'
import Teamviewer from './ResourcesImage/Teamviewer.png'

import './Resources.css';
import Header from '../header/header';

export default function Resources() {

  return (
    <div className='resourses'>
      <Header />
      <div id="logoo">
        <h1 id="res">Resources</h1>
      </div>
      <fieldset>
        <legend>Frontend</legend>
        <section className="Frontend">
          <div className='contenerFullstack'>

            <div className="cardfrontend "><h2>react.js</h2>
              <div className='resorses' ><img src={react} alt=">>" /></div>
              <p > JavaScript-based UI development library  <br /><Link id='l1' to="https://react.dev/">Rede more</Link></p>
            </div>
          </div>

          <div className='contener'>

            <div className="cardfrontend " id="bootstrap">
              <div className='resorses' ><h2>react-</h2>
                <h2>bootstrap</h2>
                <img src={bootstrap} alt=">>" /></div>
              <p> component-based library that provides native Bootstrap components as pure React components<br /> <Link id='l2' to="https://react-bootstrap.github.io/">Rede more</Link></p>
            </div>
          </div>

          <div className='contener'>
            <div className="cardfrontend " id="swiper"><h2>react-</h2>
              <h2>swiper</h2>
              <div className='resorses'><img src={swiper} alt=">>" /></div>
              <p> is a very useful library with introducing functions about swipe <br /><Link id='l3' to="https://swiperjs.com/react">Rede more</Link></p>
            </div>
          </div>

          <div className='contener'>
            <div className="cardfrontend " id="awesome"><h2>font-</h2>
              <h2>awesome</h2>
              <div className='resorses'><img src={awesome} alt=">>" /></div>
              <p> the internet's icon library and toolkit used by millions of designers, developers, and content creators <br /><Link id='l3' to="https://fontawesome.com/icons/circle-info?f=classic&s=solid">Rede more</Link></p>
            </div>
          </div>


          <div className='contener'>
            <div className="cardfrontend " id="freepik"> <h2>freepik</h2>
              <div className='resorses'><img src={freepik} alt=">>" /></div>
              <p>Find & Download Free Graphic Resources for Information <br /><Link id='l3' to="https://www.freepik.com/free-photos-vectors/information">Rede more</Link></p>
            </div>
          </div>
        </section>
      </fieldset>
      <section className="Frontend">
        <div className='contener'>

          <div className="cardfrontend "><h2>axios</h2>
            <div className='resorses' ><img src={react} alt=">>" /></div>
            <p > Axios open-source library that we need to include in our application for making API calls over HTTP.  <br /><Link id='l1' to="https://axios-http.com/docs/intro">Rede more</Link></p>
          </div>
        </div>

        <div className='contener'>

          <div className="cardfrontend ">
            <div className='resorses'><h2>node.js</h2>
              <img src={node} alt=">>" /></div>
            <p>is a JavaScript runtime built on Chrome's V8 JavaScript engine. <br /> <Link id='l2' to="https://nodejs.org/en">Rede more</Link></p>
          </div>
        </div>

        <div className='contener'>
          <div className="cardfrontend "> <h2>cors</h2>
            <div className='resorses'><img src={cors} alt=">>" /></div>
            <p> which stands for Cross-Origin Resource Sharing. CORS is implemented on top of HTTP  <br /><Link id='l3' to="https://fastapi.tiangolo.com/nl/tutorial/cors/">Rede more</Link></p>
          </div>
        </div>

        <div className='contener'>
          <div className="cardfrontend "><h2>dotenv</h2>
            <div className='resorses'><img src={dotenv} alt=">>" /></div>
            <p> Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. <br /><Link id='l3' to="https://www.npmjs.com/package/dotenv">Rede more</Link></p>
          </div>
        </div>


        <div className='contener'>
          <div className="cardfrontend "> <h2>express</h2>
            <div className='resorses'><img src={express} alt=">>" /></div>
            <p>a node js web application framework that provides broad features for building web and mobile applications <br /><Link id='l3' to="https://expressjs.com/">Rede more</Link></p>
          </div>
        </div>

        <div className='contener'>
          <div className="cardfrontend "> <h2>nodemon</h2>
            <div className='resorses'><img src={nodemon} alt=">>" /></div>
            <p> based applications by automatically restarting the node application when file changes in the directory are detected. <br /><Link id='l3' to="https://www.npmjs.com/package//nodemon">Rede more</Link></p>
          </div>
        </div>

        <div className='contener'>
          <div className="cardfrontend "> <h2>pg</h2>
            <div className='resorses'><img src={pg} alt=">>" /></div>
            <p> Stores the state in a Postgres database version 10 or newer. This backend  <br /><Link id='l3' to="https://www.postgresql.org/docs/9.3/functions-admin.html">Rede more</Link></p>
          </div>
        </div>
      </section>

      <section className="Frontend">
        <div className='contener'>

          <div className="cardfrontend "><h2>zoom</h2>
            <div className='resorses' ><img src={zoom} alt=">>" /></div>
            <p > <br /><Link id='l1' to="https://zoom.us/">Rede more</Link></p>
          </div>
        </div>

        <div className='contener'>

          <div className="cardfrontend ">
            <div className='resorses'><h2>discord</h2>
              <img src={discord} alt=">>" /></div>
            <p><br /> <Link id='l2' to="https://discord.com/">Rede more</Link></p>
          </div>
        </div>

        <div className='contener'>
          <div className="cardfrontend "> <h2>slack</h2>
            <div className='resorses'><img src={slack} alt=">>" /></div>
            <p> <br /><Link id='l3' to="https://slack.com/">Rede more</Link></p>
          </div>
        </div>

        <div className='contener'>
          <div className="cardfrontend "><h2>Trello</h2>
            <div className='resorses'><img src={Trello} alt=">>" /></div>
            <p> <br /><Link id='l3' to="https://trello.com/create-first-team">Rede more</Link></p>
          </div>
        </div>


        <div className='contener'>
          <div className="cardfrontend "> <h2>TeamGantt</h2>
            <div className='resorses'><img src={TeamGantt} alt=">>" /></div>
            <p><br /><Link id='l3' to="https://monday.com/lp/gantt?cq_src=google_ads&cq_cmp=9509035650&cq_term=teamgantt&cq_plac=&cq_net=g&cq_plt=gp&utm_medium=cpc&utm_source=adwordssearch&utm_campaign=row-en-prm-workos-work_mgmt-gantt-h-search-desktop-core-aw&utm_keyword=teamgantt&utm_match_type=e&cluster=&subcluster=&ati=&utm_adgroup=gantt%20competitors&utm_banner=580789313947&gclid=CjwKCAjw__ihBhADEiwAXEazJum_ohV5dES-O1GFeTmfPGkohwqb8poHGmxfFf-8MVQ7pCGEAYvGSBoCvKMQAvD_BwE">Rede more</Link></p>
          </div>
        </div>

        <div className='contener'>
          <div className="cardfrontend "> <h2>Lucidchaer</h2>
            <div className='resorses'><img src={Lucidchaer} alt=">>" /></div>
            <p><br /><Link id='l3' to="https://www.lucidchart.com/pages/landing?utm_source=google&utm_medium=cpc&utm_campaign=_chart_ol_allcountries_mixed_search_brand_exact_&km_CPC_CampaignId=12085501855&km_CPC_AdGroupID=117687297058&km_CPC_Keyword=lucidchart&km_CPC_MatchType=e&km_CPC_ExtensionID=&km_CPC_Network=g&km_CPC_AdPosition=&km_CPC_Creative=491660231431&km_CPC_TargetID=aud-552508845082:kwd-33511936169&km_CPC_Country=9069818&km_CPC_Device=c&km_CPC_placement=&km_CPC_target=&gclid=CjwKCAjw__ihBhADEiwAXEazJkeov-0QCNakqK32xeyMqGosc48a_N5bEbQhrkkYXY5xDZ1hsB_LQBoCxsEQAvD_BwE">Rede more</Link></p>
          </div>
        </div>

        <div className='contener'>
          <div className="cardfrontend "> <h2>Teamviewer</h2>
            <div className='resorses'><img src={Teamviewer} alt=">>" /></div>
            <p><br /><Link id='l3' to="https://www.teamviewer.com/mea/">Rede more</Link></p>
          </div>
        </div>

        <div className='contener'>
          <div className="cardfrontend "> <h2>canva</h2>
            <div className='resorses'><img src={canva} alt=">>" /></div>
            <p><br /><Link id='l3' to="https://www.canva.com/en_gb/">Rede more</Link></p>
          </div>
        </div>
      </section>
    </div>
  )
}