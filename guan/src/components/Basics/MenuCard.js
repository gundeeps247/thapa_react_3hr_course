import React from 'react';

const MenuCard = ({ menuData }) => {
    return ( 
        <>
        <section className="main-card--container">
            {menuData.map((curElem) => {
                return ( <>
                    <div className="card-container">
                        <div className="card">
                            {/* <img src="" alt=''/> */}
                        </div>
                        <div className="card-body">
                            <span className="card-number card-circle subtle">1</span>
                            <span className="card-author subtle">Metallic Candle</span>
                            <h2 className="card-title">Lime</h2>
                            <span className="card-description subtle">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </span>
                            <div className="card-read">
                                Read
                            </div>
                            <span className="card-tag subtle">Order now</span>
                        </div>
                    </div>
                    </>
                );
            })}
        </section>
    </>
    );
};

export default MenuCard;