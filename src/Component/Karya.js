import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText} from 'react-mdl';

class Karya extends Component{
    constructor(props){
        super(props);
        this.state={activeTab: 0};
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="karya-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', background:'#fff'}}>
                        <CardTitle style={{fontFamily:'sans-serif',color:'#000', height:'176px', background:
                        'url(MM.png) center/ cover ' }}>MatEz</CardTitle>
                        <CardText className="kartu-text" style={{color:'#fff'}}>
                            Project yang tidak jadi
                        </CardText>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', background:'#fff'}}>
                        <CardTitle style={{color:'#fff', height:'176px', background:
                        'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgKmZv-4WDiaO8lOwErt4cJ2GT-gf2pn5jmWSlJAeocwBKJ5NcCA) center / cover' 
                        }}>Coming Soon</CardTitle>
                        <CardText className="kartu-text" style={{color:'#fff'}}>
                            
                        </CardText>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', background:'#fff'}}>
                        <CardTitle style={{color:'#fff', height:'176px', background:
                        'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgKmZv-4WDiaO8lOwErt4cJ2GT-gf2pn5jmWSlJAeocwBKJ5NcCA) center / cover' 
                        }}>Coming Soon</CardTitle>
                        <CardText className="kartu-text" style={{color:'#fff'}}>
                            
                        </CardText>
                    </Card>
                </div>
            )
        }
    }
    render(){
        return(
            <div>
                <Tabs actuveTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>1</Tab>
                    <Tab>2</Tab>
                    <Tab>3</Tab>
                </Tabs>
                <div>
                    <Grid> 
                        <Cell col={12}>
                            {this.toggleCategories()}
                        </Cell>
                    </Grid>
                </div>
                
            </div>
        )
    }
}

export default Karya;