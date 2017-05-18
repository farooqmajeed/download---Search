import React, { Component } from 'react';
import * as MUI from 'material-ui'
import styles from './AudioListStyle.js'
import SvgIconSearch from 'material-ui/svg-icons/action/search'

class AudioList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            progressbar: false,
            valid: '',
            inputValidation: true

        }
        this.searchFiles = this.searchFiles.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    downloadFiles = () => {
        if (this.refs && this.refs.search && this.refs.search.getValue()) {
            var url = " http://127.0.0.1:5000/downloadFile?filenameList=" + this.refs.search.getValue();
            window.location.href = url;
        }
    }


    searchFiles(e) {
        this.setState({
            progressbar: true
        })
        if (this.refs && this.refs.search && this.refs.search.getValue()) {
            this.props.fetchAudioData(this.refs.search.getValue());

        }
    }

    handleChange(e) {

        this.setState({
            valid: e.target.value
        })
        if (this.state.valid.length == 9) {
            this.state.inputValidation = false;
        }



    }


    render() {
        var searchInputLength = true
        let download = this.props.file;
        console.log("download", download);
        let fileName = this.props.audioList;
        let allFiles = [];
        if (fileName && fileName.length) {
            var innerData = JSON.parse(fileName);
            allFiles = [];
            innerData.forEach((data, index) => {
                allFiles.push(data.slice(data.lastIndexOf('\\') + 1))
            });

        }
        return (
            <div >
                <MUI.Card style={styles.muiListContainer} >
                    <MUI.AppBar showMenuIconButton={false} style={styles.appbarContainer} >
                        <MUI.Avatar icon={<SvgIconSearch />} style={styles.searchBar} />
                        <MUI.TextField
                            ref="search"
                            hintText="Test searching"
                            fullWidth={true}
                            style={styles.textFeild}
                            value={this.state.valid}
                            onChange={this.handleChange}
                            />

                        <div>
                            <MUI.RaisedButton label="Search"   style={styles.searchbtn} primary={true} disabled={this.state.inputValidation} onTouchTap={this.searchFiles} />
                        </div>
                    </MUI.AppBar>
                    <br />

                    <div style={styles.buttonConainer}>
                        <MUI.RaisedButton label="Download" primary={true} onTouchTap={this.downloadFiles} />
                    </div>


                    <br />

                    <div style={styles.wrapper} >
                        <h4 style={styles.heading}> Enter number in search bar to view list  </h4>

                        {allFiles && allFiles.length ? allFiles.map((data, index) => {
                            return (<MUI.Chip
                                key={index}
                                style={styles.chip}
                                onTouchTap={this.handleTouchTap}
                                >
                                {data}
                            </MUI.Chip>)
                        }) : false}

                    </div>
                    {this.state.progressbar == true ? <MUI.CircularProgress style = {styles.progress} size={80}>
                        autoHideDuration ={3000}
                    </MUI.CircularProgress> : false}
                </MUI.Card>


                <br />

            </div>
        );

    }
}
export default AudioList;
