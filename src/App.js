
import { Container } from 'react-bootstrap';
import Header from './header/header'
import Panel1 from './component/panel1'
import Panel2 from './component/panel2'
import Panel3 from './component/panel3'
import Panel4 from './component/panel4'
import Panel5 from './component/panel5'
import Footer from './footer/footer'
import './App.css';

function App() {
  return (
    <Container className="Container_style pd-4">
      <Header/>
      <Panel1 />
      <Panel2 />
      <Panel3 />
      <Panel4 />
      <Panel5 />
      <Footer/>
    </Container>
  );
}

export default App;
