import React from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';
class FilterableProductTable extends React.Component{
    render(){
        return(
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}//end class
export default FilterableProductTable;
