import React from 'react'

import Input from '../../components/Input'
import List from '../../components/List'

class Todo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: []
        }
    }
    render() {
        const div = <div style={{marginBottom: '10px', textAlign: 'center'}}>输入值并回车添加事项，点击事项则删除该项</div>
        return (
            <div>
                <Input submitFn={this.submitFn.bind(this)} div={div} />
                <List todos={this.state.todos} deleteFn={this.deleteFn.bind(this)} />
            </div>
        )
    }
    submitFn(value) {
        const id = this.state.todos.length
        this.setState({
            todos: this.state.todos.concat({
                id: id,
                text: value
            })
        })
    }
    deleteFn(id) {
        let data = this.state.todos
        this.setState({
            todos: data.filter(item => {
                if (item.id !== id) {
                    return item
                }
            })
        })
    }
}

export default Todo