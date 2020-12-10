import React, {Component} from'react'
import './App.css';
import Utama from './Component/Utama'
import {Layout, Header, Navigation, Content} from 'react-mdl'
import {Link} from 'react-router-dom'
class App extends Component{
  render(){
    return (
      <div className="demo-big-content">
      <Layout>
          <Header title={<Link style={{textDecoration:'none', color:'#F18C9A'}} to="/">Risa</Link>} scroll className="header-color">
              <Navigation>
                  <Link to ="/Beranda">Beranda</Link>
                  <Link to ="/Karya">Karya</Link>
                  {/* <Link to ="/Kontak">Kontak</Link> */}
                  <Link to ="/tentangSaya">Me</Link>
              </Navigation>
          </Header>
          <Content>
            <div className="page-content">
              <p><Utama/></p></div>
          </Content>
      </Layout>
      </div>
    );
  }
}
export default App;
