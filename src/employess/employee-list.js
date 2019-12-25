import { AgGridReact } from 'ag-grid-react';
import React, {Component} from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './employee-list.css';
class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: props.tableHeaders,
      rowData: props.rowData
    }
    
  }

  render() {
    return (
      <div className="ag-theme-balham" style={ {height: '200px', width: '100%'} }>
        <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            pagination={true}
            rowHeight="40"
            >
            
        </AgGridReact>
      </div>
    );
  }
}

export default EmployeeList;