import React from 'react';
class SearchBar extends React.Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="Search..."/>
                <p>
                    <input type="checkbox"/>
                    { }
                    Only Show Products In Stock
                </p>
            </form>
        );
    }
}//end class
export default SearchBar;
