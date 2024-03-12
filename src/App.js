import React, { Component } from "react";
import NewsPortal from "./NewsPortal";
import "./styles.css";
import "./script.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Set state awal jika diperlukan
    };
  }

  componentDidMount() {
    // Dipanggil setelah komponen telah dimasukkan ke dalam DOM
    console.log("Component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    // Dipanggil setelah pembaruan komponen
    console.log("Component did update");
  }

  componentWillUnmount() {
    // Dipanggil sebelum komponen dihapus dari DOM
    console.log("Component will unmount");
  }

  render() {
    return (
      <div className="App">
        <header className="bg-dark text-white text-center py-4">
          <h1>Portal Berita</h1>
        </header>
        <NewsPortal />
      </div>
    );
  }
}

export default App;
