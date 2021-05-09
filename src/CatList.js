
import React from "react";

export default class CatList extends React.Component{
  
    renderCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id}/>)
    }

    render() {
        return(
            <div>
                {console.log(this.props.catPics)}
                {this.renderCats()}
            </div>
        )
    }
}

