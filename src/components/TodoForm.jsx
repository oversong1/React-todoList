import {React, useState} from 'react'

const TodoForm = ({addTodo  }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!value || !category) return
        addTodo(value, category)
        //Adiciona Todo
        setValue("")
        setCategory("")
        //Limpar os campos
   
    }

    return (
        <div className="todo-form">
            <h2>Criar Tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Digite o título"
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                />
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="">Selecione um Categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type='submit'>Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm