import React, { Component } from 'react'


export default class CreateTaskForm extends Component {

    state = {
        name: '',
        description: '',
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.insertTask({
            name: this.state.name,
            description: this.state.description,
            status: 'TODO',
            id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Adicionar tarefa</h2>
                <span>Nome</span>
                <input onChange={this.handleChange} type="text" name="name" />
                <span>Descrição</span>
                <input onChange={this.handleChange} type="text" name="description" />
                <button> Criar </button>
            </form>
        )
    }
}