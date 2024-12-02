// import  { useState } from 'react';
// import axios from 'axios';

// const ProductForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     price: '',
//     description: '',
//     image: null
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleImageChange = (e) => {
//     setFormData({
//       ...formData,
//       image: e.target.files[0] 
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const productData = new FormData();
//     productData.append('name', formData.name);
//     productData.append('price', formData.price);
//     productData.append('description', formData.description);
//     productData.append('image', formData.image);

//     try {
//       const response = await axios.post('http://localhost:3000/api/v1/product/upload', productData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       console.log('Product created successfully:', response.data);
//     } catch (error) {
//       console.error('Error creating product:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Price:</label>
//         <input
//           type="text"
//           name="price"
//           value={formData.price}
//           onChange={handleInputChange}
          
//         />
//       </div>
//       <div>
//         <label>Description:</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleInputChange}
          
//         />
//       </div>
//       <div>
//         <label>Image:</label>
//         <input
//           type="file"
//           name="image"
//           onChange={handleImageChange}
//           accept="image/*"
//           required
//         />
//       </div>
//       <button type="submit">Create Product</button>
//     </form>
//   );
// };

// export default ProductForm;


import { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });
  const [preview, setPreview] = useState(null); 

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });

    // Generate preview URL for the selected image
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); 
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append('name', formData.name);
    productData.append('price', formData.price);
    productData.append('description', formData.description);
    productData.append('image', formData.image);

    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/product/upload',
        productData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );

      console.log('Product created successfully:', response.data);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          accept="image/*"
          required
        />
      </div>

      {/* Image Preview Section */}
      {preview && (
        <div>
          <p>Image Preview:</p>
          <img src={preview} alt="Image Preview" style={{ width: '200px', height: 'auto' }} />
        </div>
      )}

      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductForm;
