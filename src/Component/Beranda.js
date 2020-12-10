import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Beranda extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="beranda-grid">
                    <Cell col={12}>
                        <div className="banner-text">
                            <hr/>
                            <h1>Ambil Baiknya Buang Positifnya</h1>
                            <hr/>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Beranda;