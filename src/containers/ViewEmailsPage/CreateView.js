import React, { Component } from 'react';

class CreateView extends Component {

  render() {
    return (     
      <div id='head'>
        <table className='create'>
          <tbody>
          <tr className="list-id">
            <td>To:&nbsp;&nbsp;</td>
            <td><input type='text' style={{'width':'280px'}} /></td>
          </tr>
          <tr className="list-id">
            <td>Subject:&nbsp;&nbsp;</td>
            <td><input type='text' style={{'width':'450px'}} /></td>
          </tr>
          <tr className="list-id">
            <td></td>
            <td><textarea></textarea></td>
          </tr>
          <tr className="list-id">
            <td></td>
            <td><button className='btn2' id='send'>Send</button>
              &nbsp;&nbsp;<button className='btn2' id='cancel'>Cancel</button></td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }

}

export default CreateView;
