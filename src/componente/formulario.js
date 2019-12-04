import React from 'react';

class Lista extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            listadealunos: [
                    {
                        nome:'caroline',
                         idade:'19',
                        polo:'pzr'
                    },
                    {
                        nome:'geysa',
                        idade:'20',
                        polo:'pzr',
                    },
                    {
                        nome:'cleiton',
                        idade:'19',
                        polo:'cpx',
                    },
                    {
                        nome:'maicon',
                        idade:'23',
                        polo:'cpx',
                    },
                    {
                        nome:'estefania',
                        idade:'22',
                        polo:'pzr'
                    },
                    {
                        nome:'jorge',
                        idede:'58',
                        polo:'cpx'
                
                    },
                    {
                        nome:'rhuan',
                        idade:'20',
                        polo:'pzr'
                    },
                    {
                        nome:'dandara',
                        idade:'21',
                        polo:'cpx'
                    },
                    {
                        nome:'cassio',
                        idade:'21',
                        polo:'prz'
                    },
                    {
                        nome:'cicero',
                        idade:'24',
                        polo:'pzr'
                
                    },
                    {
                        nome:'luan',
                        idade:'25',
                        polo:'cpx'
                    },
                     {
                        nome:'arthur',
                        idade:'24',
                        polo:'cpx'
                     } ,
                     {
                         nome:'vitor',
                         idade:'24',
                         polo:'cpx'
                     },
                     {
                        nome:'zaira',
                        idade:'19',
                        polo:'cpz'
                     },
                     {
                         nome:'lucas',
                         idade:'24',
                         polo:'cpx'
                     },
                     {
                         nome:'renan',
                         idade:'14',
                         polo:'pzr'
                     },
                     {
                         nome:'douglas',
                         idade:'24',
                         polo:'cpz'
                     },
                     {
                         nome:'priscila',
                         idade:'32',
                         polo:'pzr'
                     }
        ]   
        }
    }
    mostrarusuarios = () => {
        console.log('carol')
        this.state.listadealunos.map(callback=>{
            console.log(callback.nome)
        })
    }

    render() {
        return (
            <button onClick={this.mostrarusuarios}>mostrar alunos</button>
        )
    }
}
export default Lista;