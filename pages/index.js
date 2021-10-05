import Axios from 'axios';
import Head from 'next/head'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../src/component/ItemList';
import { Header, Divider } from 'semantic-ui-react'

export default function Home() {
  const [list, setList] = useState([]);

  const API_URL = 
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData(){
    Axios.get(API_URL)
    .then((res) => {
      console.log(res);
      setList(res.data);
    })
  }

  useEffect(()=>{
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list} />      
    </div>
  );
}
