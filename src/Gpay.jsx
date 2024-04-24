import React from "react";
import GooglePayButton from '@google-pay/button-react';



export default function Gpay() {
    return(
      <>
         <div class="bg-image"
        style={{objectFit:'cover',height:'100vh', backgroundImage:"url('https://c7.alamy.com/comp/2FYETW3/google-pay-logo-2FYETW3.jpg')" }}> 
        <h2 style={{marginLeft:"420px",paddingTop:"100px"}}>Buy Your Movie Ticket </h2>
        <div style={{paddingLeft:'38%',paddingTop:'170px'}}>  
    <GooglePayButton 
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example ',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USA',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
  />
</div>
</div>
</>


   
  )
}

