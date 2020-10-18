import React from "react";
import Header from "./components/Header/Header";
import ProductPicker from "./components/ProductPicker/ProductPicker";
import ConfigContext from "./context/ConfigContext";
import ConfigConstants from "./constants/config.constants";

function initializeApp(): void {
  //
}

class App extends React.Component {
  componentDidMount(): void {
    initializeApp();
  }

  render(): JSX.Element {
    return (
      <div id="app-wrapper">
        <ConfigContext.Provider value={ConfigConstants.GLOBAL_CONFIG}>
          <Header />
          <main>
            <ProductPicker />
          </main>
        </ConfigContext.Provider>
      </div>
    );
  }
}

export default App;
