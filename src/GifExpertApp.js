import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGird } from "./components/GifGird";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hola']);

    // const handleAdd = () =>{
    //     // setCategories( [...categories, 'No'] );
    //     // setCategories('No' ,...categories);
    //     setCategories( cats => [...cats, 'No'] );
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr/>

            <ul>
                {
                    categories.map( category => 
                        <GifGird 
                            key = {category}    
                            category = {category} />
                    )
                }
            </ul>
        </div>
    );
}

export default GifExpertApp;