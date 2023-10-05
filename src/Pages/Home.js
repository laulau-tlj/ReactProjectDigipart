import React, { useState, useEffect } from 'react';
import { Image, Divider, Header } from 'semantic-ui-react';
import Background from "../assets/banner-unicode.png";
import './Home.css';
import Product from '../Component/Product';



const Home = () => {
    let [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jmp.digipart.fr/api/category?FromProductNumber=0&ToProductNumber=6&IdCategory=54&IdLang=2")
        .then(res => res.json())
        .then(
            (result) => {
            data = result[0].Products;
            setData(data);
            }
        )
    }, []);
    return (
        <div>
            
            <Image src={Background} fluid/>
                <div className='text'>
                    <h1 ><span  className='text1'>BODY POSITIVITY</span> <br/><span className='text2'>IS OUR CELEBRATION</span></h1><br/>
                    <button>Les belles marques du 32 au 60</button>
                </div> <br/><br/><br/>
                <Divider horizontal color="black">
                    <Header as='h4'>
                        NOUVELLE COLLECTION
                    </Header>
                </Divider>
                <div className='product'>
                {data.map((item,index) => (
                    <div className='item' key={index}>
                        <Product data={item}/>
                    </div>
                    
                ))}
                </div>
                
        </div>
    );
}

export default Home;
