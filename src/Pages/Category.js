import React from 'react';

const Category = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const id = form.id.value;
        const image = form.image.value;
        const data = { category_name: name, category_id: id, image: image }
        // console.log(data);
        fetch("http://localhost:5000/add", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>this is category</h1>
            <input type="text" name='name' placeholder="name" className="input input-bordered" />
            <br></br>
            <input type="text" name='id' placeholder="id" className="input input-bordered" />
            <br></br>
            <input type="text" name='image' placeholder="image" className="input input-bordered" />
            <br></br>
            <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
    );
};

export default Category;