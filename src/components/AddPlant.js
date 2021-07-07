import React from "react";

class AddPlants extends React.Component{
    state = {
        imagem:'',
        nome:'',
        Lembretes:'',
        Informações:'',
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleFormSubmit}>
            <label>imagem</label>
            <input type="imageURL" name="imagem" value={this.state.image} >
            </input>
            <label>Nome</label>
            <input type="text" name="nome" value={this.state.name}>
            </input> 
            </form>
            </div>
        );
    }    
}
export default AddPlants;
