import React from "react";
import "./App.css";
import CatDisplay from "./Cats/CatDisplay";
import CatList from "./Cats/CatList";
import catPic0 from "./cat.jpg";
import catPic1 from "./cat2.jpg";
import catPic2 from "./cat3.jpg";
import catPic3 from "./cat4.jpg";
import catPic4 from "./cat5.jpg";
import catPic5 from "./cat6.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigCatEnergy: [
        { catName: "pfteven", catCount: 0, catPic: catPic0 },
        { catName: "richard", catCount: 0, catPic: catPic1 },
        { catName: "lil mikey", catCount: 0, catPic: catPic2 },
        { catName: "big mikey", catCount: 0, catPic: catPic3 },
        { catName: "Lt. Dick", catCount: 0, catPic: catPic4 },
        { catName: "Salem", catCount: 0, catPic: catPic5 },
      ],
      currentCat: 0,
      currentlyEditing: false,
      editedCat: " ",
      est: "fuck",
    };
    this.click1 = this.click1.bind(this);
    this.editSwitch = this.editSwitch.bind(this);
    this.changeCat = this.changeCat.bind(this);
    this.editCat = this.editCat.bind(this);
  }

  click1() {
    this.setState({
      cat1: this.state.bigCatEnergy[this.state.currentCat].catCount++,
    });
  }

  changeCat(cat) {
    this.setState({ currentCat: (this.state.currentCat = cat) });
  }

  // editCat(e, fieldName, index) {
  //   const { value } = e.target;
  //   this.setState((state) => ({
  //     bigCatEnergy: state.bigCatEnergy.map((row, j) =>
  //       j === index ? { ...row, [fieldName]: value } : row
  //     ),
  //   }));
  // }

  editCat(e, fieldName, index) {
    let cats = [...this.state.bigCatEnergy];
    let cat = { ...cats[index] };
    if (fieldName === "catName") {
      cat.catName = e.target.value;
    } else if (fieldName === "catCount") {
      cat.catCount = e.target.value;
    } else if (fieldName === "catPic") {
      cat.catPic = e.target.value;
    }
    cats[index] = cat;
    this.setState({ bigCatEnergy: cats });
  }

  // editCat(e) {
  //   let value = e.target.value;
  //   this.setState({ est: (this.state.est = value) });
  //   console.log(this.state.est);
  // }

  editSwitch() {
    this.setState({ currentlyEditing: !this.state.currentlyEditing });
  }

  render() {
    return (
      <div className="App">
        <h1>Cat Clicker</h1>

        <CatDisplay
          click1={this.click1}
          currentCat={this.state.currentCat}
          changeCat={this.changeCat}
          bigCatEnergy={this.state.bigCatEnergy}
          editCat={this.editCat}
          editSwitch={this.editSwitch}
          currentlyEditing={this.state.currentlyEditing}
          est={this.state.est}
        />
        <CatList
          changeCat={this.changeCat}
          bigCatEnergy={this.state.bigCatEnergy}
        />
      </div>
    );
  }
}

export default App;
