import React, { useState, useEffect } from 'react';

const Edit = ({ advert }) => {
  // Ensure advert is defined before setting initial state
  const [title, setTitle] = useState(advert?.title || '');
  const [description, setDescription] = useState(advert?.description || '');
  const [price, setPrice] = useState(advert?.price || '');
  const [category, setCategory] = useState(advert?.category || '');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(advert?.imageUrl || '');
  const [message, setMessage] = useState(''); // To hold success/error messages
  const [isError, setIsError] = useState(false); // To track if the message is an error

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate API call to update advert (replace with actual API call)
    try {
      console.log('Updated Advert Title:', title);
      console.log('Updated Description:', description);
      console.log('Updated Price:', price);
      console.log('Updated Category:', category);
      console.log('New Image:', image);
      
      // Here you would typically call your API to update the advert
      // await updateAdvert({ title, description, price, category, image });

      // If successful
      setMessage('Advert updated successfully!');
      setIsError(false);
      // Reset form state or handle accordingly
    } catch (error) {
      // If there's an error
      setMessage('Failed to update advert. Please try again.');
      setIsError(true);
    }
  };

  // Handle image preview for new uploads
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Display image preview
  };

//   // Render nothing if advert is not provided
//   if (!advert) {
//     return <p>Loading advert details...</p>;
//   }

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
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Edit Advert</h2>
        <p style={{ textAlign: 'center', marginBottom: '30px', color: '#6c757d' }}>
          Modify the advert details below.
        </p>

        {message && (
          <div 
            style={{
              marginBottom: '20px',
              padding: '10px',
              borderRadius: '5px',
              backgroundColor: isError ? '#f8d7da' : '#d4edda',
              color: isError ? '#721c24' : '#155724'
            }}
          >
            {message}
          </div>
        )}

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
            <label htmlFor="image" style={{ display: 'block', marginBottom: '5px' }}>Update Image</label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              style={{
                width: '100%', 
                padding: '10px', 
                borderRadius: '5px', 
                border: '1px solid #ced4da'
              }}
            />
            {imagePreview && (
              <div style={{ marginTop: '10px' }}>
                <img
                  src={imagePreview}
                  alt="Advert Preview"
                  style={{ maxWidth: '100%', borderRadius: '5px' }}
                />
              </div>
            )}
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
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;

