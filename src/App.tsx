import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductPicker from "./components/ProductPicker/ProductPicker";
import ConfigContext from "./context/ConfigContext";
import ConfigConstants from "./constants/config.constants";

class App extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div id="app-wrapper">
        <ConfigContext.Provider value={ConfigConstants.GLOBAL_CONFIG}>
          <Header />
          <main>
            <ProductPicker />
          </main>
          <Footer />
        </ConfigContext.Provider>
      </div>
    );
  }
}

export default App;
