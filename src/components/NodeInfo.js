import React, {Component} from 'react';
import InfoHeader from './InfoHeader';
import InfoRow from './InfoRow';
import {
  setNodeInfo,
  fetchCompanyAddresses,
  fetchProjects,
} from "../actions";
import {connect} from 'react-redux';

class NodeInfo extends Component {
    componentDidMount(){
        this.props.fetchProjects();
        this.props.fetchCompanyAddresses();
    }
    componentDidUpdate(prevProps){
        const {
          selectedNode,
          setNodeInfo,
          employees,
          projects,
          companyAddresses,
        } = this.props;
        if (
          prevProps.selectedNode.type !== selectedNode.type ||
          (prevProps.selectedNode.data &&
            prevProps.selectedNode.data.id !== selectedNode.data.id)
        ) {
          if (selectedNode.type === "company") {
            const companyAddress = companyAddresses.find(
              (address) => address.companyId === selectedNode.data.id
            );
            const companyProjects = projects.filter(
              (project) => project.companyId === selectedNode.data.id
            );
            setNodeInfo({
              header: companyAddress,
              rows: companyProjects,
              button: true,
            });
          } else if (selectedNode.type === "jobArea") {
            const employeesCountInArea = employees
              .filter(
                (employee) => employee.companyId === selectedNode.parentId
              )
              .map((employee) => employee.jobArea)
              .filter((jobArea) => jobArea === selectedNode.data.jobArea)
              .length;
            setNodeInfo({
              header: { employeesCount: employeesCountInArea },
              rows: [],
              button: false,
            });
          } else if (selectedNode.type === "name") {
            const employee = selectedNode.data;
            const employeeProjects = projects.filter((project) =>
              project.employeesId.includes(selectedNode.data.id)
            );
            setNodeInfo({
              header: employee,
              rows: employeeProjects,
              button: false,
            });
          }
        }
    }
    render(){
        const {selectedNode, nodeInfo} = this.props;
        return(
            <div className="col-6">
                <table className="table border">
                    <thead>
                        <InfoHeader 
                            headerData={nodeInfo.header} 
                            type={selectedNode.type}/>
                    </thead>
                    <tbody>
                        {nodeInfo.rows.length?
                        <tr className="text-center">
                            <td className="font-weight-bold">Projects</td>
                        </tr> : null}
                        {nodeInfo.rows.map(row => <InfoRow key={row.id} data={row} button={nodeInfo.button}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = ({
  selectedNode,
  nodeInfo,
  employees,
  projects,
  companyAddresses,
}) => {
  return {
    selectedNode,
    nodeInfo,
    employees,
    projects,
    companyAddresses,
  };
};
export default connect(mapStateToProps, {
  setNodeInfo,
  fetchCompanyAddresses,
  fetchProjects,
})(NodeInfo);