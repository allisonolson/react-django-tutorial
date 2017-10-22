import React from 'react'; 
import {Table, 
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table'; 
import {Rating} from 'material-ui-rating';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'; 
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 

export default class Test extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {selected: [1]}; 
        this.handleRowSelection = this.handleRowSelection.bind(this); //binding functions for scope
        this.isSelected = this.isSelected.bind(this); 
    }
  
    isSelected(index) {
        return this.state.selected.indexOf(index) !== -1; 
    }

    handleRowSelection(selectedRows) {
        this.setState({
            selected: selectedRows, 
        }); 
    }

    render() {
        var row1 = 
            <TableRow selected={this.isSelected(0)}>
              <TableRowColumn>Cafe Verona</TableRowColumn>
              <TableRowColumn>Starbucks</TableRowColumn>
              <TableRowColumn>Not Specified</TableRowColumn>
              <TableRowColumn>Dark</TableRowColumn>
              <TableRowColumn>Yes</TableRowColumn>
              <TableRowColumn>
                <Rating
                  value={3}
                  max={5}
                  readOnly={true}
                />
              </TableRowColumn>
            </TableRow>;

        var row2 = 
            <TableRow selected={this.isSelected(1)}>
              <TableRowColumn>Super Crema</TableRowColumn>
              <TableRowColumn>Lavazza</TableRowColumn>
              <TableRowColumn>Not Specified</TableRowColumn>
              <TableRowColumn>Medium</TableRowColumn>
              <TableRowColumn>Yes</TableRowColumn>
              <TableRowColumn>
                <Rating
                  value={4}
                  max={5}
                  readOnly={true}
                />
              </TableRowColumn>
            </TableRow>;

        var row3 = 
            <TableRow selected={this.isSelected(2)}>
              <TableRowColumn>Casi Cielo</TableRowColumn>
              <TableRowColumn>Starbucks</TableRowColumn>
              <TableRowColumn>Guatemala</TableRowColumn>
              <TableRowColumn>Medium</TableRowColumn>
              <TableRowColumn>Yes</TableRowColumn>
              <TableRowColumn>
                <Rating
                  value={5}
                  max={5}
                  readOnly={true}
                />
              </TableRowColumn>
            </TableRow>

            
        return (
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Table onRowSelection={this.handleRowSelection}>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Brand</TableHeaderColumn>
                  <TableHeaderColumn>Region</TableHeaderColumn>
                  <TableHeaderColumn>Roast</TableHeaderColumn> 
                  <TableHeaderColumn>Caffinated</TableHeaderColumn>
                  <TableHeaderColumn>Rating</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {row1}
                {row2}
                {row3}
              </TableBody>
            </Table>
          </MuiThemeProvider>
        ); 
    }
}


