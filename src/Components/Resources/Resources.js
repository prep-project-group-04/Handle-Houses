// @ts-nocheck
import { Link } from 'react-router-dom';
import react from './ResourcesImage/react.png';
import bootstrap from './ResourcesImage/react-bootstrap.png';
import swiper from './ResourcesImage/react-swiperr.png';
import awesome from './ResourcesImage/awesomee.jpg';
import freepik from './ResourcesImage/freepik.png';

import FullStack from './ResourcesImage/fullstack.png'

import node from './ResourcesImage/node.png'
import cors from './ResourcesImage/cors.webp'
import dotenv from './ResourcesImage/dotenv.png'
import express from './ResourcesImage/express.png'
import nodemon from './ResourcesImage/nodemon.png'
import pg from './ResourcesImage/pg.png'

//import zoom from './ResourcesImage/zoom.png'
//import discord from './ResourcesImage/discord.png'

import './Resources.css';

export default function Resources() {

  return (
    <>
      
      <body>
      
        <main>
        <div id="logo">
          <img id="fullstak" src={FullStack} alt=">>" />
          <h1 id="res">Resources</h1>
          </div>
          <section id="Frontend">
            <div className='contener'>

              <div className="cardfrontend "><h2>react.js</h2>
                <div className='resorses' ><img src={react} alt=">>" /></div>
                <p > JavaScript-based UI development library  <br /><Link id='l1' to="https://react.dev/">Rede more</Link></p>
              </div>
            </div>

            <div className='contener'>

              <div className="cardfrontend " id="bootstrap">
                <div className='resorses' ><h2>react-bootstrap</h2>
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
              <div className="cardfrontend " id="awesome"><h2>font-awesome</h2>
                <div className='resorses'><img src={awesome} alt=">>" /></div>
                <p> the internet's icon library and toolkit used by millions of designers, developers, and content creators <br /><Link id='l3' to="https://fontawesome.com/icons/circle-info?f=classic&s=solid">Rede more</Link></p>
              </div>
            </div>


            <div className='contener'>
              <div className="cardfrontend " id ="freepik"> <h2>freepik</h2>
                <div className='resorses'><img src={freepik} alt=">>" /></div>
                <p>Find & Download Free Graphic Resources for Information <br /><Link id='l3' to="https://www.freepik.com/free-photos-vectors/information">Rede more</Link></p>
              </div>
            </div>
          </section>

          <section id="Frontend">
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

        </main>

      </body>
    </>
  )
}