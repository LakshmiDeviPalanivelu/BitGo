import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEmailById } from '../../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const INITIAL_STATE = {
  email: {}
}

class ListView extends Component {

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE }
  }

  componentWillMount() {
     this.getEmailById();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      if (nextProps.email.email) {
        this.setEmailById(nextProps);
      }
    }
  }

  getEmailById = () => {
    this.props.getEmailById(this.props.id);
  }

  setEmailById = props => {
    if (props && props.email.email) {
      this.setState(() => ({
        email: props.email.email
      }));
    }
  }

  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" style={{'height': '100px'}}>
          <div id="main">
            <table style={{'width':'1200px','height':'400px','border': '1px gray solid'}}>
              <tr>
                <td className="list-id">
                   To:&nbsp;&nbsp; { (this.props.email.email) ? (this.props.email.email.from) : ''}
                </td>
              </tr>
              <tr className="list-id">
                <td className="list-id">
                  Subject:&nbsp;&nbsp; { (this.props.email.email) ? (this.props.email.email.subject) : ''}
                </td>
              </tr>
              <tr className="list-id">
                <td style={{'height':'100px'}} className="list-id">
                   { (this.props.email.email) ? (this.props.email.email.text) : ''} 
                </td>
              </tr>
            </table>
          </div>
          <div id='top'>
            <button className='btn2' id='prev'>Prev</button>
            <button className='btn2' id='next'>Next</button>
          </div>
        </div>
      </div>
    </div>   
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getEmailById}, dispatch)
};

const mapStateToProps = (state) => ({
  email: state.email_reducer
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
