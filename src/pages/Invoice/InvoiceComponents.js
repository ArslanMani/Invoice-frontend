import { useState } from "react";

const formatAddress = (address) => {
    const arr = address.split(',');
    return (
        <>
            {arr.slice(0, -2).join(',')},<br />
            {arr.slice(arr.length - 2).join(',')}
        </>
    );
};

const InvoiceDetails = ({ details, title }) => (
    <div>
        <h6 className='font-800 mb-1 text-theme'>{title}</h6>
        {Object.keys(details).map((key, index) => {
            if (key === 'address') {
                return (
                    <address className='small font-500 mb-1' key={index}>
                        {formatAddress(details[key])}
                    </address>
                );
            }
            return (
                <p className='small font-500 mb-1' key={index}>
                    {details[key]}
                </p>
            );
        })}
    </div>
);
function InvoiceTable() {


    const items = [
        { id: '01', description: 'Suzuki Swift From 03.08.2024 | 05:00 To 04.08.2024 | 05:00', price: 560 },
        { id: '02', description: 'Chauffeur', price: 50 }
    ];

    return (
        <div className="invoice-table mt-5">
            <div className="table-header d-flex justify-content-between py-3 px-4">
                <p className="mb-0 small font-500 text-gray">SN</p>
                <p className="mb-0 small font-500 service-description text-gray">Service description</p>
                <p className="mb-0 small font-500 text-gray">Price</p>
            </div>
            {
                items.map((e) => {
                    return (<div key={e.id} className="table-row d-flex justify-content-between align-items-center py-3 px-4">
                        <p className="mb-0 small font-500 ">{e.id}</p>
                        <p className="mb-0 small font-500 service-description"><span className="col-sm-9 col-md-8 col-lg-6 d-block">{e.description}</span></p>
                        <p className="mb-0 small font-500 ">${e.price}</p>
                    </div>)
                })
            }
            <div className="col-6 col-md-5 px-3 px-md-4 mt-2 ms-auto">
                <div className='d-flex justify-content-between'>
                    <h6 className="mb-0 font-600">Subtotal</h6>
                    <h6 className="MB-0 font-600">$1140</h6>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <h6 className="mb-0 font-500">VAT</h6>
                    <h6 className="MB-0 font-500">20%</h6>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <PaymentINFO/>
                <div className="col-6 col-md-5">
                    <div className="d-flex bg-theme py-3 px-3 px-md-4 justify-content-between">
                        <h6 className="text-white font-600 mb-0">TOTAL:</h6>
                        <h6 className="text-white font-600 mb-0">$1160</h6>
                    </div>
                </div>
            </div>
        </div>
    );

}
function PaymentINFO(){
    let [data,setData]=useState({
        'A/C NAME':'',
        'BANK':'',
        'SWIFT':'',
        'IBAN':'',
        'ACCOUNT':'',
        'METHOD':'Bank'
    })
    return(
    <div >
        <h5 className="font-600">PAYMENT INFO</h5>
        {Object.keys(data).map((e,index)=>{
            if(index==Object.keys(data).length-1){
                return <div key={index+'79h2'} className="d-flex pb-1">
                <p className="small mb-0 font-500">{e}:</p>
                <p className="mb-0 ms-1 small font-500">{data[e]}</p>
            </div>
            }
           return( <div key={index+'79h2'} className="d-flex pb-1">
                <p className="small mb-0 font-500">{e}:</p>
                <p className="payment-info-value mb-0 ms-1 position-relative"></p>
            </div>)
        })

        }
    </div>)
}
function TermsAndCondition(){
    let [state,setState]=useState(["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    ])
    return (
        <div className="mt-4 mt-sm-5">
            <h5 className="font-600 mb-3 d-inline-block terms-heading">TERMS & CONDTIONS</h5>
            {
                state.map((e,index)=><p className="small font-500">{index+1} .{e}</p>)
            }
        </div>
    )
}

export { InvoiceDetails, InvoiceTable ,TermsAndCondition}  