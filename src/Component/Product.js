import React from 'react';
import { Card, Icon, Image} from 'semantic-ui-react';
import "./Product.css";

const Product = (data) => {
    console.log(data);
    return (
        <Card className='card'>
            <Image src={data.data.ImagesUrls.product_small[1].Url}  ui={false} />
                <Card.Content>
                <Card.Header>${data.data.Prices[0].RegularPrices[0].TaxExcl}</Card.Header>
                <Card.Header>{data.data.ProductDescription[1].Title}</Card.Header>
                <Card.Meta>
                    <span className='date'>Size: {data.data.Sizes[1].Size}</span>
                </Card.Meta>
                <Card.Description>
                    Color: {data.data.Color}
                    
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    See more
                </a>
                </Card.Content>
        </Card>
         );
}

export default Product;
