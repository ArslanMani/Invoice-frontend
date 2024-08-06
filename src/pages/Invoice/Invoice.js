import React, { useState } from 'react';
import './invoice.css';
import car_logo from '../../assets/car-logo.png';
import { InvoiceDetails, InvoiceTable,TermsAndCondition } from './InvoiceComponents';
export default function Invoice() {
  const [invoiceTo] = useState({
    name: 'Jennifer Richards',
    address: '365 Bloor Street East, Toronto Ontario, M4W 3lA, Canada',
    phoneNumber: 118525211,
    email: 'Jennifer@gmail.com'
  });

  const [carRental] = useState({
    address: '237 Roanoke Road, North York, Ontario, Canada',
    phoneNumber: 4654927726,
    email: 'domo@gmail.com'
  });
  return (
    <div className='invoice mx-auto bg-white my-5 px-2 px-sm-3  px-md-4 px-lg-5 py-5'>
        
      <div className='content pt-4 pt-sm-5'>
        <h6 className='mb-4'>
          Invoice Number <span className='font-600'>#SM75692</span>
        </h6>
        <div className='d-flex justify-content-between align-items-end'>
          <InvoiceDetails details={invoiceTo} title='Invoice To:' />
          <div className='text-end'>
            <img src={car_logo} className='invoice-car-logo' alt='Car Logo' />
            <h5 className='font-600'>Car Rental</h5>
            <InvoiceDetails details={carRental} title='' />
          </div>
        </div>
        <InvoiceTable/>
        <TermsAndCondition/>
            <p className='text-end mt-4 py-4 mt-sm-5'> <span className='d-inline-block px-5 signature pt-2 font-500'>SIGNATURE</span> </p>
            <div className='mt-4 mt-sm-5 d-flex justify-content-around'>
                <h6>Address</h6>
                <h6>Phone</h6>
                <h6>Email</h6>
            </div>
      </div>
    </div>
  );
}




