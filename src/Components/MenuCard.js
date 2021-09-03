import React from 'react';

const MenuCard = ({menuDataProp}) => {

    return (
        <section className="main-card--cointainer">
            {menuDataProp.map((currentItem, index)=>{
                const {id,name,image,price,category,description} = currentItem
                return(
                    <>
                        <div className="card-container">
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{id}</span>
                                    <span className="card-author subtle">{category}</span>
                                    <div className="price-tag">
                                        <h3 className="card-title">{name}</h3>
                                        <h2>{price}</h2>
                                    </div>
                                    <span className="card-description subtle">{description}</span>
                                    <div className="card-read">READ</div>
                                </div>
                                <img src={image} alt="image" className="card-media"/>
                                <span className="card-tag subtle">Order Now</span>
                            </div>
                        </div>
                    </>
                )
            })}
        </section>
    );
};

export default MenuCard;