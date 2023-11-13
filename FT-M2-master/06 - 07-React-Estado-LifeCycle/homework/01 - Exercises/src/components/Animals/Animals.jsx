import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }


  render() {
    return (
      <div>
        {
          this.props.animals.map((animal, key) => {
            return (

              <div key={key}>
              <h5>{animal.name}</h5>
              <img src={animal.image} alt={animal.name} width='300px' />
              <br />
              <span>{animal.specie}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}
