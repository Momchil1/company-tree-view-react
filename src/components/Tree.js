import React, { Component } from 'react';
import {connect} from 'react-redux';
import TreeNode from './TreeNode';
import {fetchCompanies, fetchEmployees} from '../actions';
import _ from 'lodash';

class Tree extends Component {
  componentDidMount(){
    this.props.fetchCompanies();
    this.props.fetchEmployees();
  }
  render() {
    const {companies, employees} = this.props;
    return (
        <div className="col-6">
            {companies.map(company =>
                <TreeNode
                    key={company.id}
                    nodeTitle={company.name}
                    node={company}
                    type="company"
                    label="Company:"
                >
                        {_.uniqBy(employees.filter(employee => employee.companyId === company.id), 'jobArea')
                        .map(employeeJobArea => 
                            <TreeNode
                                key={employeeJobArea.id}
                                nodeTitle={employeeJobArea.jobArea}
                                node={employeeJobArea}
                                type="jobArea"
                                label="Job Area:"
                                parentId={company.id}
                            >
                                {employees
                                .filter(employee => employee.jobArea === employeeJobArea.jobArea && employee.companyId === company.id)
                                .map(employeeName => 
                                    <TreeNode
                                        key={employeeName.id}
                                        nodeTitle={`${employeeName.firstName} ${employeeName.lastName}`}
                                        node={employeeName}
                                        type="name"
                                        label="Employee Name:"
                                    />
                                 )}
                            </TreeNode>
                        )}
                </TreeNode>
            )}
        </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        companies: state.companies,
        employees: state.employees
    }
};
export default connect(mapStateToProps, {fetchCompanies, fetchEmployees})(Tree);