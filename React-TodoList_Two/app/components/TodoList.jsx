import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../static/css/animate.css'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            items: []
        }
    }
    handleValue = e => {
        // 数据绑定，实时同步
        this.setState({
            inputValue: e.target.value,
        })
    }
    handleAdd = e => {
        if (e.keyCode === 13 && this.state.inputValue.trim()) {
            // 提交并清空数据，push返回数组的长度
            const newItems = this.state.items.push(this.state.inputValue)
            console.log(newItems)
            this.setState({
                inputValue: '',
                items: this.state.items
            })
        }
    }
    handleRemove = i => {
        const newItems = this.state.items
        newItems.splice(i, 1)
        this.setState({
            items: newItems
        })
    }
    render() {
        // map内部的箭头函数函数体不能用{}包裹，否则会冲突，可以不包裹或者改用()包裹
        const items = <ul>
            <ReactCSSTransitionGroup
                component="div"
                transitionName="example"
                transitionAppear={true}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
                transitionAppearTimeout={500}
            >
                {this.state.items.map((item, i) => <li key={i} onClick={() => this.handleRemove(i)}>{item}</li>)}
            </ReactCSSTransitionGroup>
        </ul>
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleValue} onKeyUp={this.handleAdd} />
                {items}
            </div>
        )
    }
}