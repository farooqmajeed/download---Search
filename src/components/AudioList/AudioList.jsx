import React, { Component } from 'react';
import * as MUI from 'material-ui';
import { Observable } from "rxjs";
import styles from './AudioListStyle.js'
import SvgIconSearch from 'material-ui/svg-icons/action/search'

class AudioList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressbar: false,
            valid: '',
            inputValidation: true,
            errorMessage: ''
        }
        this.searchFiles = this.searchFiles.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    downloadFiles = () => {
        if (this.refs && this.refs.search && this.refs.search.getValue()) {
            var url = " http://127.0.0.1:5000/downloadFile?filename=" + this.refs.search.getValue();
            window.location.href = url;
            this.setState({
                errorMessage: ''
            })
        } else {
            this.setState({
                errorMessage: "Error Occured !! Please Insert file name and then Download"

            })
        }

        /*
        if (this.props && this.props.audioList && this.props.audioList.length) {
            this.props.fetchDownloadData(this.props.audioList);
            console.log("download files", this.props.audioList);
        }
        */
    }


    searchFiles(e) {
        if (this.refs && this.refs.search && this.refs.search.getValue()) {
            this.props.fetchAudioData(this.refs.search.getValue());
            console.log("data");
            //this.setState({ progressbar: true })
        }

    }
    handleChange(event) {
        var that = this;
        this.setState({
            valid: event.target.value
        })
        setTimeout(() => {
            if (that.state.valid.length == 10) {
                that.setState({
                    inputValidation: false,
                     errorMessage: ''

                })
            } else {
                that.setState({
                    inputValidation: true,
                    errorMessage: ''
                })
            }
        }, 20)
    }


    render() {
        let fileName = this.props.audioList;
        // console.log("audiolist", fileName)
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
                <MUI.Card style={styles.muiListContainer}>
                    <MUI.AppBar showMenuIconButton={false} style={styles.appbarContainer} >
                        <MUI.Avatar icon={<SvgIconSearch />} style={styles.searchBar} />
                        <MUI.TextField
                            ref="search"
                            hintText="Test searching"
                            fullWidth={true}
                            style={styles.textFeild}
                            onKeyUp={this.handleChange}
                            />

                        <div>

                            <MUI.RaisedButton label="Search" primary={true} style={styles.searchbtn} disabled={this.state.inputValidation} onTouchTap={this.searchFiles} />
                        </div>
                    </MUI.AppBar>
                    <br />
                    <div style={styles.buttonConainer}>
                        <MUI.RaisedButton label="Download" primary={true}   onTouchTap={this.downloadFiles.bind(this)} />
                    </div>


                    <br />

                    <div style={styles.wrapper} >
                        <h4 style={styles.heading}> Enter number in search bar to view list  </h4>

                        <h4 style={styles.error}> {this.state.errorMessage} </h4>
                      
                        {allFiles && allFiles.length ? allFiles.map((data, index) => {
                            return (<MUI.Chip
                                key={index}
                                style={styles.chip}
                                onchange={this.state.progressbar == false}

                                >
                                {data}
                            </MUI.Chip>)
                        }) : false}

                    </div>

                </MUI.Card>
                <br />

            </div>
        );

    }
}
export default AudioList;
