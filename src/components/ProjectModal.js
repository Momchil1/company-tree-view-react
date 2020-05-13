import React, { Component } from 'react';
import {connect} from 'react-redux';
import { changeProjectName, fetchProjects } from "../actions";

class ProjectModal extends Component {
  state = { projectName: "" };
  componentDidMount(){
    this.props.fetchProjects();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.projectModalData.id !== this.props.projectModalData.id) {
      this.setState({ projectName: this.props.projectModalData.name });
    }
  }
  onClickProjectNameChange = () => {
    this.props.changeProjectName(
        this.props.projectModalData.id,
        {name: this.state.projectName}
    )
  }
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Change Project Name
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e) =>
                    this.setState({ projectName: e.target.value })
                  }
                  value={this.state.projectName}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={this.onClickProjectNameChange}
                >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ projectModalData }) => {
    return { projectModalData };
};
export default connect(mapStateToProps, { changeProjectName, fetchProjects })(ProjectModal);