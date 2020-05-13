import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectNode } from '../actions';

class TreeNode extends Component {
    state = {nodeActive: false}

    onClick = (e) => {
        e.stopPropagation();
        this.setState({nodeActive: !this.state.nodeActive});
        const {node, type, parentId} = this.props;
        this.props.selectNode({data: node, type, parentId})
    }
    render(){
        const { nodeTitle, label, children } = this.props;        
        return (
            <div className="list-group mb-1" id="list-tab" role="tablist" onClick={this.onClick}>
                <div
                className={"list-group-item list-group-item-action"} 
                id="list-home-list"
                role="tab"
                aria-controls="home">
                    <span className="pr-1 font-weight-normal">{label}</span>
                    <span className="font-weight-bold">
                        {nodeTitle}
                        {this.state.nodeActive? children : null}
                    </span>
                </div>
            </div>
        )
    }
}
export default connect(null, {selectNode})(TreeNode);