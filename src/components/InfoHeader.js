import React from 'react';

const InfoHeader = (props) => {
    const renderContent = () => {
        const {
          city,
          country,
          street,
          state,
          employeesCount,
          firstName,
          lastName,
          dateOfBirth,
          jobTitle,
          jobArea,
          jobType,
        } = props.headerData;
        if(props.type === 'company'){
            return(
                <ul className="list-group">
                    <li className="list-group-item text-center">Company Address</li>
                    <li className="list-group-item">City: {city}</li>
                    <li className="list-group-item">Country: {country}</li>
                    <li className="list-group-item">Street: {street}</li>
                    <li className="list-group-item">State: {state}</li>
                </ul>
            )
        } else if(props.type === 'jobArea'){
            return(
                <ul className="list-group">
                    <li className="list-group-item text-center">{employeesCount} employee(s) work in that area</li>
                </ul>
            )
        } else if(props.type === 'name'){
            return(
                <ul className="list-group">
                    <li className="list-group-item text-center">Employee Details</li>
                    <li className="list-group-item">First Name: {firstName}</li>
                    <li className="list-group-item">Last Name: {lastName}</li>
                    <li className="list-group-item">Date of Birth: {dateOfBirth && dateOfBirth.slice(0,10)}</li>
                    <li className="list-group-item">Job Title: {jobTitle}</li>
                    <li className="list-group-item">Job Area: {jobArea}</li>
                    <li className="list-group-item">Job Type: {jobType}</li>
                </ul>
            )
        } 
    }
    return (
      <tr>
        <th scope="col" className="p-0">
          {renderContent()}
        </th>
      </tr>
    );
}

export default InfoHeader;