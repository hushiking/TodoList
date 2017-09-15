import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../../static/css/animate.css'

class List extends React.Component {
    render() {
        const data = this.props.todos
        return (
            <ul style={{marginTop: '10px', fontSize: '20px', lineHeight: '30px'}}>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="example"
                    transitionAppear={true}
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                    transitionAppearTimeout = {500}
                >
                {data.map((item, index) => {
                    return <li key={index} onClick={this.clickHandler.bind(this, item.id)}>{item.text}</li>
                })}
                </ReactCSSTransitionGroup>
            </ul>
        )
    }
    clickHandler(id) {
        this.props.deleteFn(id)
        console.log(id)
    }
}

export default List