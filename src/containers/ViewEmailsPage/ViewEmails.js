import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import ListView from './ListView';
import CreateView from './CreateView';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { emailList } from '../../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const INITIAL_STATE = {
  list: [],
  activeItem: 'listView',
  id: null
}

class ViewEmails extends Component {

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE }
  }

  componentWillMount() {
     this.getList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      if (nextProps.list.emails && nextProps.list.emails > 0) {
        this.setList(nextProps);
      }
    }
  }

  getList = () => {
    this.props.emailList();
  }

  setList = props => {
    if (props && props.list.emails) {
      this.setState(() => ({
        list: props.list.emails
      }));
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleClick = (id, name) => {
    if(name === 'viewById') {
      this.setState({
        activeItem: 'viewById',
        id: id
      })
    }
  }

  renderList = () => {
    return (
    <div>      
      <div id='main'>
       <table id="table" className='tab'>
        <tbody>
        { 
           _.map(this.props.list.emails, ({ id, from, subject }, index) => (
            <div className='anc'>
              <table className='tab'>
                  <tr>
                    <td style={{'width':'100px'}}>
                     <input type='checkbox' />
                    </td>
                    <tr onClick={() => this.handleClick(id, 'viewById')}>
                    <td style={{'width':'500px'}}>
                      {from}
                    </td>
                    <td style={{'width':'1000px'}}>
                     {subject}
                    </td>
                    </tr>
                  </tr>
                </table>
            </div>
            ))
        }        
        </tbody>
       </table>
      </div>
      <footer>
        <button className='btn'>Delete</button>
      </footer>
    </div>    
    )
  }

  render() {
    const { activeItem } = this.state;
    return (
     <div>
      <Menu widths={2}>
        <Menu.Item name='listView' active={activeItem === 'listView'} onClick={this.handleItemClick}>
          List View
        </Menu.Item>
        <Menu.Item name='createView' active={activeItem === 'createView'} onClick={this.handleItemClick}>
          Create View
        </Menu.Item>
      </Menu>
      {
      	this.state.activeItem === 'listView' &&
        this.renderList()    
	    }
	    {
      	this.state.activeItem === 'createView' &&
	      <CreateView />
	    }
      {
        this.state.activeItem === 'viewById' &&
        <ListView id={this.state.id} />    
      }
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({emailList}, dispatch)
};

const mapStateToProps = (state) => ({
  list: state.email_reducer
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewEmails);
