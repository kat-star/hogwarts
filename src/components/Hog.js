import React, { PureComponent } from 'react'
// import auggloop from '../hog-imgs/augustus_gloop.jpg'
// import bop from '../hog-imgs/bay_of_pigs.jpg'
// import chub from '../hog-imgs/cherub.jpg'
// import gn from '../hog-imgs/galaxy_note.jpg'
// import lme from '../hog-imgs/leggo_my_eggo.jpg'
// import mb from '../hog-imgs/mudblood.jpg'
// import ps from '../hog-imgs/piggy_smalls.jpg'
// import pc from '../hog-imgs/porkchop.jpg'
// import rd from '../hog-imgs/rainbowdash.jpg'
// import sob from '../hog-imgs/sobriety.jpg'
// import tpc from '../hog-imgs/the_prosciutto_concern.jpg'
// import troub from '../hog-imgs/trouble.jpg'
// import ts from '../hog-imgs/truffleshuffle.jpg'


// const pigMap = {
//   'Porkchop': pc,
//   'Cherub': chub,
//   'Mudblood': mb,
//   'Piggy smalls': ps,
//   'Trouble': troub,
//   'Sobriety': sob,
//   'Rainbowdash': rd,
//   'TruffleShuffle': ts,
//   'Bay of Pigs': bop,
//   'The Prosciutto Concern': tpc,
//   'Galaxy Note': gn,
//   'Leggo My Eggo': lme,
//   'Augustus Gloop': auggloop
// }


class Hog extends PureComponent {

  state = {
    clicked: false
  }

  handleHogClick = () => {
    this.setState((prevState) => {
      return {clicked: !prevState.clicked}
    })
  }

  handleImages = () => {
    const slug = this.props.hog.name.split(" ").join("_").toLowerCase()
    return `./hog-imgs/${slug}.jpg`
  }

  render() {

    const { name, specialty, greased, weight, "highest medal achieved": medal } = this.props.hog 

    return (
      <div className="ui eight wide column">
        <div className="pigTile" onClick={this.handleHogClick}>
          {this.state.clicked ? (<div><h3>{name}</h3><img src={this.handleImages()} alt="hogPic" /><ul><li>Specialty: {specialty}</li><li>Greased: {greased ? "True" : "False"}</li><li>Weight: {weight}</li><li>Highest Medal Achieved: {medal}</li></ul></div>) : (<div><h3>{name}</h3> <img src={this.handleImages()} alt="hogPic" /></div>)} 
        </div>
      </div>
    )
  }
}

export default Hog;