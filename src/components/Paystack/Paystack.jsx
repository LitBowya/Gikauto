import { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalPrice } from '../../redux/selector';
import './Paystack.scss'; // Custom CSS file for additional styling

const Paystack = () => {

    const totalPrice = useSelector(selectTotalPrice);
    
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    creditCardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form submitted:', formData);
    // You can add your form submission logic here, such as making an API request.

    // Clear the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      zipCode: '',
      creditCardNumber: '',
      expiryDate: '',
      cvv: '',
    });
  };

  const handlePaystackSuccess = (response) => {
    console.log('Payment successful. Transaction Reference:', response.reference);
    // Add your logic for handling successful payment (e.g., update order status)
  };

  const handlePaystackClose = () => {
    console.log('Payment closed');
    // Add your logic for handling payment close event
  };

  const config = {
    reference: new Date().getTime(),
    email: formData.email,
    amount: totalPrice,
    publicKey: process.env.PAYSTACK_PUBLIC_KEY,
  };

  return (
    <div className="paystack">
      <div className="container my-4">
        
          <div className="border rounded-3 p-4">
            <header className="header">
              <h4 className="py-2">Checkout</h4>
              <p>Amount: GHC {config.amount}</p>
            </header>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="firstName" className="form-label">First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="lastName" className="form-label">Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="city" className="form-label">City:</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="zipCode" className="form-label">ZIP Code:</label>
                  <input
                    type="number"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <p type="submit" className="">{/* PaystackButton component for initiating payment */}
            <PaystackButton
              {...config}
              text="Pay Now"
              onSuccess={handlePaystackSuccess}
              onClose={handlePaystackClose}
              className="btn btn-success btn-block mt-3"
            /></p>
            </form>

            
          </div>
        
      </div>
    </div>
  );
};

export default Paystack;
