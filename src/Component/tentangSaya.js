import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Pendidikan from './Pendidikan';
import Skill from './Skill'
class TentangSaya extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img src="https://melisa.id/to/assets/img/default-avatar.png"
                            alt="avatar"
                            style={{height:'200px'}}/>
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Apee</h2>
                        <h4 style={{color:'#000'}}>Sleeper</h4>
                        <hr style={{borderTop:'3px solid pink',width:'50%'}}></hr>
                        <p>Nama Arya artinya adalah bangsawan; tegas, 
                        tegap yang diberikan untuk seorang anak Laki-Laki. 
                        Nama Arya berasal dari India (Sansekerta), 
                        dengan huruf awal A dan terdiri atas 4 huruf. 
                        Kata Arya memiliki pengertian, definisi, 
                        maksud atau makna bangsawan; tegas, tegap, 
                        bisa digunakan untuk nama bayi (nama anak), nama perusahaan, nama merek produk, nama tempat, dan lain sebagainya.  Kata Arya yang bermakna bangsawan; tegas, tegap serta berasal dari India (Sansekerta) ini boleh anda gunakan selama arti Arya tidak berkonotasi negatif di lingkungan anda.</p>
                        <hr style={{borderTop:'3px solid pink',width:'50%'}}></hr>
                        <h5>Alamat</h5>
                        <p>Jalan in aja dulu</p>
                        <h5>No.HP</h5>
                        <p>+62 812 306 818 48</p>
                        <h5>Email</h5>
                        <p>hpcolokkodok@gmail.com</p>
                    </Cell>
                    <Cell className="kulo-right-col" col={8}>
                        <h2>Pendidikan</h2>
                        <Pendidikan
                        startTahun={2009}
                        endTahun={2015}
                        namaSklh="SMK TELKOM MALANG"
                        deSklh="SMK Telkom Malang adalah 
                        pelopor Sekolah menengah kejuruan 
                        pertama di Indonesia di bidang 
                        Teknologi dan Informatika. 
                        Berpengalaman dari tahun 1992 
                        yang telah terakreditasi A dan 
                        mempunyai standart mutu ISO"/>
                        <hr style={{borderTop:'5px solid #FFf', paddingBottom:'1em'}}></hr>
                        <h2>Skill</h2>
                        <Skill
                        skill="ML"
                        progress={100}/>
                        <Skill
                        skill="AC"
                        progress={100}/>
                        <Skill
                        skill="CR"
                        progress={50}/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default TentangSaya;