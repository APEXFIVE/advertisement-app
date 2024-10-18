import React, { useState } from 'react';

const Add= () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle advert submission logic here
    console.log('Advert Title:', title);
    console.log('Description:', description);
    console.log('Price:', price);
    console.log('Category:', category);
    console.log('Image:', image);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div 
      style={{
        backgroundColor: '#f0f0f0', 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}
    >
      <div 
        style={{
          backgroundColor: '#ffffff', 
          borderRadius: '10px', 
          padding: '30px', 
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
          width: '400px'
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add New Advert</h2>
        <p style={{ textAlign: 'center', marginBottom: '30px', color: '#6c757d' }}>
          Fill out the details to create a new advertisement.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>Advert Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter advert title"
              required
              style={{
                width: '100%', 
                padding: '10px', 
                borderRadius: '5px', 
                border: '1px solid #ced4da'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="description" style={{ display: 'block', marginBottom: '5px' }}>Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter advert description"
              required
              style={{
                width: '100%', 
                padding: '10px', 
                borderRadius: '5px', 
                border: '1px solid #ced4da',
                minHeight: '80px'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="price" style={{ display: 'block', marginBottom: '5px' }}>Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              required
              style={{
                width: '100%', 
                padding: '10px', 
                borderRadius: '5px', 
                border: '1px solid #ced4da'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="category" style={{ display: 'block', marginBottom: '5px' }}>Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              style={{
                width: '100%', 
                padding: '10px', 
                borderRadius: '5px', 
                border: '1px solid #ced4da'
              }}
            >
              <option value="">Select a category</option>
              <option value="catering">Catering</option>
              <option value="decoration">Decoration</option>
              <option value="assecories">Assecories</option>
              <option value="closet">Closet</option>
              <option value="invitation">invitation</option>
              <option value="photography">Photography</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="image" style={{ display: 'block', marginBottom: '5px' }}>Upload Image</label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              required
              style={{
                width: '100%', 
                padding: '10px', 
                borderRadius: '5px', 
                border: '1px solid #ced4da'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginBottom: '20px'
            }}
          >
            Add Advert
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
