import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "react-emotion";

const Button = styled.a`
  ${tw`bg-white rounded-lg no-underline text-black px-8 py-4 text-lg`};
`;

const LogoContainers = styled.div`
  ${tw`flex`};
`;
const Logo = styled.img`
  ${tw`rounded-full w-64 h-64`};
`;
const PlusIcon = styled.div`
  ${tw`w-64 h-64 flex justify-center items-center`};
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LogoContainers>
            <Logo src={logo} className="App-logo" alt="logo" />
            <PlusIcon>+</PlusIcon>
            <Logo
              src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4"
              className="App-logo"
            />
            <PlusIcon>+</PlusIcon>
            <Logo
              src="https://camo.githubusercontent.com/209bdea972b9b6ef90220c59ecbe66d35ffefa8a/68747470733a2f2f63646e2e7261776769742e636f6d2f746b6834342f656d6f74696f6e2f6d61737465722f656d6f74696f6e2e706e67"
              className="App-logo"
            />
          </LogoContainers>
          <p>React Tailwind Emotion Starter</p>
          <Button href="https://github.com/muhajirframe/react-tailwind-emotion-starter">
            Read the docs
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
