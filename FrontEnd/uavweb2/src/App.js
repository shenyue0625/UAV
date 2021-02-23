import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Layout} from 'antd';

import Top from './components/Top';
import Bottom from './components/Bottom';
import Main from './components/Main';

const {Header, Footer, Content} = Layout;

class App extends React.Component {

    render() {
        return (
            // <Layout className="layout">
            //     <Header/>
            //
            //     <Home/>
            //
            //     <Footer className="site-layout-footer" style={{textAlign: "center"}}>
            //         AutoExpress ©2021{" "}
            //     </Footer>
            // </Layout>
            // <div>
            //     <Header />
            //     <Routes>
            //         <Route></Route>
            //     </Routes>
            //     <Home />
            //
            //     <Footer />
            // </div>

            <Router>
                <Layout>
                    <Header className="App-header">
                        <Top />
                    </Header>

                    <Content>
                        <Main/>
                    </Content>

                    <Footer>
                        <Bottom />
                    </Footer>
                </Layout>
            </Router>
        )
    };


}

/*
function App()
    {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
*/

export default App;