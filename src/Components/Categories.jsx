import React from 'react';

function Categories() {
    const categories = [
        { name: 'Jewelry', img: './assets/images/category1.jpg' },
        { name: 'Clothing', img: './assets/images/category2.jpg' },
        { name: 'Art', img: './assets/images/category3.jpg' },
        { name: 'Home Decor', img: './assets/images/category4.jpg' },
    ];

    return (
        <section className="categories">
            <h2>Shop by category</h2>
            <div className="category-grid">
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        <img src={category.img} alt={category.name} />
                        <p>{category.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;
