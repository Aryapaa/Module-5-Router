import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Beranda from './Beranda';
import TentangSaya from './tentangSaya';
import Kontak from './Kontak';
import Karya from './Karya';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda}/>
        <Route path="/Beranda" component={Beranda} />
        <Route path="/Karya" component={Karya} />
        <Route path="/Kontak" component={Kontak} />
        <Route path="/tentangSaya" component={TentangSaya} />
    </Switch>
)

export default Utama;