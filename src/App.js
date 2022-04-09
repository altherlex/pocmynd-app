import './App.css';
import 'rsuite/dist/rsuite.min.css';
import React from 'react';
import { Container, Header, Content, Footer, Placeholder } from 'rsuite';
import MyModal from './components/MyModal'
import MyTable from './components/MyTable'
import MyNavbar from './components/MyNavbar'

function App() {
  return (
    <div className="App show-fake-browser navbar-page">

      <Container>
        <Header>
          <MyNavbar/>
        </Header>
        <Content>
          <MyModal/>

          <Placeholder/>
          <Placeholder/>
          <Placeholder/>
          <Placeholder/>
          
          <MyTable/>
        </Content>
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;

