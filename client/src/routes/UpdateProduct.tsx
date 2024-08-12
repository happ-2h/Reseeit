import { useEffect, useState } from 'react';
import { useParams }           from 'react-router-dom';

import Form from '../components/Form';

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async() => {
      try {
        fetch(`http://localhost:3006/api/v1/products/${id}`)
        .then(val  => val.json())
        .then(data => setProduct({...data.data.products}))
        .catch(err => console.error(err))
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div id="addproduct-container" style={{
      height: "100vh",
      display:        "flex",
      justifyContent: "center",
      alignItems:     "center"
    }}>
      <Form type="update" details={product} />
    </div>
  )
};

export default UpdateProduct;