import React, {Component} from 'react';
import {connect} from 'react-redux';
import { setProjectModalData } from "../actions";

class InfoRow extends Component {
    state = {name: '', id: ''}
    componentDidMount(){
        console.log(this.props.data.name);
        this.setState({name: this.props.data.name, id: this.props.data.id})
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.changedProjectName.name &&
          nextProps.changedProjectName.id === this.state.id) {
          this.setState({ name: nextProps.changedProjectName.name });
        }
    }
    render(){
        const {data, button} = this.props;
        return (
            <tr>
                <td className="d-flex">
                    <span className="col-10">{this.state.name}</span>
                    {button? <button 
                        className="btn btn-secondary col-2"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={() => this.props.setProjectModalData(data)}
                        >Edit</button> : null}
                </td>
            </tr>
        )
    }
}
const mapStateToProps = (state) => {
    return { changedProjectName: state.changedProjectName };
};
export default connect(mapStateToProps, { setProjectModalData })(InfoRow);
