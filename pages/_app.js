import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Top from '../src/component/Top';
import Footer from '../src/component/Footer';

function MyApp({ Component, pageProps }) {
  return(
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  ) 
}

export default MyApp

/*

페이지 전환시 레이아웃 유지
페이지 전환시 상태값을 유지
componentDidCatch를 이용해 커스텀 에러 핸들링을 할 수 있다.
추가적인 데이터를 페이지로 주입시켜주는게 가능
글로벌 CSS 선언

*/