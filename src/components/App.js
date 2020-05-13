import React, { Component } from 'react';
import Tree from './Tree';
import NodeInfo from './NodeInfo';
import ProjectModal from './ProjectModal';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row p-2">
          <Tree />
          <NodeInfo />
          <ProjectModal />
        </div>
      </div>
    );
  }
}
