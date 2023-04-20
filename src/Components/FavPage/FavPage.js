// @ts-nocheck
import React, { useState, useEffect } from 'react';
import "./FavPage.css"
import Header from '../header/header';
import Footer from '../Footer/Footer';
import FavCard from './favCard';

export default function FavPage(props) {
  let id = localStorage.getItem("id");
  id = JSON.parse(id);
  const [favHouse, setFavHouse] = useState([]);
  const [Houses, setHouses] = useState([]);
  let [appear,setAppear]=useState(true);
  

  async function getFavHouses() {
    let url = `${process.env.REACT_APP_SERVER_URL}/getfav`;
    let data =
    {
      userID: id
    }
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    let recivedData = await response.json();
    if(response.status===201){
      setFavHouse(recivedData)
    }else if(response.status===505){
      setAppear(false);
    }
  }

  
  async function getHouses() {
    let url = `${process.env.REACT_APP_SERVER_URL}`
    let response = await fetch(`${url}/`);
    let recivedData = await response.json();
    setHouses(recivedData)
  }

  useEffect(() => {
    getFavHouses();
    getHouses();
  }, []);

  async function updateFav(hId,cc) {
    let url = `${process.env.REACT_APP_SERVER_URL}/updateComment`;
    let data = {
      user_id: id,
      Home_id: hId,
      comment: cc
    };
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    if (response.status === 201) {
      getFavHouses();
    }
  }

  async function handleDelete(hId) {
    let url = `${process.env.REACT_APP_SERVER_URL}/deleteComment`;
    let data = {
      user_id: id,
      Home_id: hId
    };
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    if (response.status === 201) {
      getFavHouses();
    }
  }


  let array = [];
  if(appear){
    favHouse.map((element) => {
      Houses.map(x => {
        if (element.home_id === x.id) {
          x.comment = element.comment
          array.push(x)
        }
      })
    })
  }

  return (
    <>
      <Header />
      <nav id='favPage'>
        <FavCard data={array} update={updateFav} delete={handleDelete} />
      </nav>
      <Footer />
    </>
  )
}