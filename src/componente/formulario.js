import React from 'react';

class Formulario extends React.Component {
        // constructor(props) {
        //     super(props)
        // }

    mudarNome = (ev) => {
        console.log(ev)
    }

    render(){
        return(
            <div>
                    nome:
                <input onChange={this.mudarNome}>
                </input>
                    idade:
                <input>
                </input>
                    cidade:
                <input>
                </input>
            </div>
        )
    }
}
export default Formulario;