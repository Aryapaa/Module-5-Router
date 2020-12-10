import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl'

class Pendidikan extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startTahun} - {this.props.endTahun}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{this.props.namaSklh}</h4>
                    <p>{this.props.deSklh}</p>
                </Cell>
            </Grid>
        );
    }
}

export default Pendidikan;