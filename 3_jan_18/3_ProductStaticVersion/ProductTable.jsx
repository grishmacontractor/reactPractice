import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.jsx';
import ProductRow from './ProductRow.jsx';
class ProductTable extends React.Component{
    render(){
        const rows=[];
        let lastCategory = null;

        this.props.products.forEach((product) =>{
            if(product.category !==lastCategory)
            {
                rows.push(
                    <ProductCategoryRow category={product.category}
                                        key={product.category} />
                );//end of push
            }//end if

            rows.push(
                <ProductRow product={product} key={product.name} />

            );//end push
            console.log("lastcategory = "+lastCategory);
            lastCategory= product.category;
        });//end forEach
        return(
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}//end class
export default ProductTable;
