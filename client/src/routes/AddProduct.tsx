import Form from '../components/Form';

const AddProduct = () => {
  return (
    <div id="addproduct-container" style={{
      height: "100vh",
      display:        "flex",
      justifyContent: "center",
      alignItems:     "center"
    }}>
      <Form type="add" details={null} />
    </div>
  )
};

export default AddProduct;
