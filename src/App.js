import React, { useState } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import logo from './logo.svg';
import ChatContainer from './containers/ChatContainer';

const { Header, Content } = Layout;

function App() {
  const [content, setContent] = useState(<ChatContainer />);

  const handleMenuClick = (event) => {
    switch (event.key) {
      case '1': {
        setContent(<ChatContainer />);
        break;
      }
      default:
    }
  };
  const federated = {
    facebookAppId: '2732079550445715',
  };
  return (
    <AmplifyAuthenticator federated={federated}>
      <div>
        <Layout>
          <Header>
            {/* <img src={logo} className="logo" width="50" height="64" alt="O" /> */}
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} onClick={handleMenuClick}>
              <Menu.Item key="1">Chat</Menu.Item>
              <Menu.Item key="2"><AmplifySignOut /></Menu.Item>
            </Menu>
          </Header>
          <Content>
            {content}
          </Content>
        </Layout>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;
