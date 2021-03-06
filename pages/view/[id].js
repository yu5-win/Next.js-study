import Head from "next/head";
import Axios from "axios";
import Item from "../../src/component/Item";
import { useRouter } from 'next/router';

const Post = ({ item, name }) => {
  const router = useRouter();

  console.log(router.isFallback);

  if(router.isFallback){
    return(
      <div style={{ padding: "100px 0" }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>  
          </Head>
          {name} 환경 입니다.
          <Item item={item} />
        </>
      )}
    </>
  );  
};

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return{
    props: {
      item: data,
      name: process.env.name
    }
  }
}