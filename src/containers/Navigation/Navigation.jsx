import React, { Component, PropTypes } from 'react';
import './Navigation.css';
import * as MUI from 'material-ui'
// import {Link} from 'react-router';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import AudioActions from '../../store/actions/audioActions.js'
import AudioList from '../../components/AudioList/AudioList'
function mapStateToProps(state) {
  console.log("state", state);
  return {
    audioList: state.epicReducer.audioList,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    fetchAudioData: function (data) {
      return dispatch(AudioActions.getData(data))
    }
  };
}

class Navigation extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  drawerMenu() {
    return (
      <div>
        <div className="navigation-avatar-div">
          <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg"
            size={50}
            className="navigation-icon" />
        </div>
        {/*<MUI.MenuItem
              className="navigation-menuItem"
              primaryText="Dashboard"
              leftIcon={<Assessment/>}
              containerElement={<Link to="/dashboard"/>}
            />
          <MUI.MenuItem
            className="navigation-menuItem"
            primaryText="Users"
            leftIcon={<Web/>}
            containerElement={<Link to="/dashboard/userlist"/>}
            /> 
             <MUI.MenuItem
            className="navigation-menuItem"
            primaryText="Audio List"
            leftIcon={<Web/>}
            containerElement={<Link to="/dashboard/audioList"/>}
          />*/}

      </div>
    );
  }

  render() {
    return (
      <div className="navigation-container">
        <MUI.AppBar style={this.props.styles} title="React Boilerplate"
          onLeftIconButtonTouchTap={this.props.drawerToggle}
          />
        <MUI.Drawer open={this.props.drawerOpen} docked={false}
          onRequestChange={this.props.drawerToggle}>
          {this.drawerMenu()}
        </MUI.Drawer>

        <div>
          <AudioList {...this.props} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
