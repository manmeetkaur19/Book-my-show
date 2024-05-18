// import React from "react";
import GooglePayButton from '@google-pay/button-react';
import React from 'react';

function App() {
  return (
    <>
      <h1>Google Pay Button</h1>
      <GooglePayButton
        environment="TEST" // Set environment to TEST or PRODUCTION based on your configuration
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
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'manmeet',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '1',
            currencyCode: 'INR', // Set currency code to Indian Rupee (INR)
            countryCode: 'IN', // Set country code to India (IN)
          },
          shippingAddressRequired: true, // Set as boolean instead of string
          callbackIntents: ['PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log('success', paymentRequest);
        }}
        onPaymentAuthorized={(paymentData) => {
          console.log('Payment Authorized success', paymentData);
          return { transactionState: 'SUCCESS' };
        }}
        existingPaymentMethodRequired={false} // Set as boolean instead of string
        buttonColor="black"
        buttonType="Buy"
      />
    </>
  );
}

export default App;
// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCol,
//   MDBContainer,
//   MDBIcon,
//   MDBInput,
//   MDBRow,
// } from "mdb-react-ui-kit";
// import style from './CSS Module/Pay.module.css'

// export default function App() {
//   return (
//     // <MDBContainer fluid className="py-5 gradient-custom">
//     <MDBContainer fluid className={`${style.gradient} py-5`}>
//       <MDBRow className="d-flex justify-content-center py-5">
//         <MDBCol md="7" lg="5" xl="4">                                                     {/* //xl for both sides width */}
//           <MDBCard style={{ borderRadius: "15px" }}>
//             <MDBCardBody className="p-4">
//               <MDBRow className="d-flex align-items-center">
//                 <MDBCol size="9">
//                   <MDBInput   className="p-2"
//                     label="Card Number"
//                     id="form1"
//                     type="text"
//                     placeholder="1234 5678 9012 3457"
//                   />
//                 </MDBCol>
//                 {/* <MDBCol size="3">
//                   <img
//                     src="https://img.icons8.com/color/48/000000/visa.png"
//                     alt="visa"
//                     width="64px"
//                   />
//                 </MDBCol> */}

//                 <MDBCol size="9">
//                   <MDBInput className="p-2"
//                     label="Cardholder's Name"
//                     id="form2"
//                     type="text"
//                     placeholder="Cardholder's Name"
//                   />
//                 </MDBCol>

//                 <MDBCol size="6">
//                   <MDBInput className="p-2"
//                     label="Expiry Date"
//                     id="form2"
//                     type="text"
//                     placeholder="MM/YYYY"
//                   />
//                 </MDBCol>
//                 <MDBCol size="4">
//                   <MDBInput className="p-2"
//                     label="CVV"
//                     id="form2"
//                     type="text"
//                     placeholder="&#9679;&#9679;&#9679;"
//                   />
//                 </MDBCol>
//                 <MDBCol size="7">
//                   <MDBBtn color="info" rounded size="lg" >
//                   <MDBIcon fas icon="arrow-right" />
//                   </MDBBtn>
//                 </MDBCol>
//               </MDBRow>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }



// // import React from 'react';
// // import  { useEffect, useState } from 'react'
// // import { Button } from 'react-bootstrap';


// // export default function Googlepay() 
// // {
// //         const [isReadyToPay, setIsReadyToPay] = useState(false);

        
      
// //         useEffect(() => {
// //           // Check if Google Pay is available
// //           googlePayIsReadyToPay().then((result) => {
// //             setIsReadyToPay(result);
// //           });
// //         }, []);
      
// //         const handleGooglePay = () => {
// //           const paymentRequest = {
// //             apiVersion: 2,
// //             apiVersionMinor: 0,
// //             allowedPaymentMethods: [
// //               {
// //                 type: 'CARD',
// //                 parameters: {
// //                   allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
// //                   allowedCardNetworks: ['MASTERCARD', 'VISA'],
// //                 },
// //                 tokenizationSpecification: {
// //                   type: 'PAYMENT_GATEWAY',
// //                   parameters: {
// //                     gateway: 'example',
// //                     gatewayMerchantId: 'exampleGatewayMerchantId',
// //                   },
// //                 },
// //               },
// //             ],
// //             merchantInfo: {
// //               merchantName: 'Your Merchant Name',
// //             },
// //             transactionInfo: {
// //               totalPriceStatus: 'FINAL',
// //               totalPrice: '100.00', // Replace '100.00' with your actual amount
// //               currencyCode: 'USD',
// //               countryCode: 'US',
// //             },
// //           };

// //           const checkGooglePayAvailability = async () => {
      
// //           const paymentsClient = new google.payments.api.PaymentsClient({
// //             environment: 'TEST', // Change to 'PRODUCTION' for production environment
// //           });
      
// //           paymentsClient
// //             .loadPaymentData(paymentRequest)
// //             .then((paymentData) => {
// //               // Handle successful payment
// //               console.log('Payment successful:', paymentData);
// //             })
// //             .catch((error) => {
// //               // Handle payment error
// //               console.error('Payment error:', error);
// //             });
// //         };
      

    
// //   return (
// //     <>
// //     <div class="bg-image"
// //    style={{objectFit:'cover',height:'100vh', backgroundImage:"url('https://c7.alamy.com/comp/2FYETW3/google-pay-logo-2FYETW3.jpg')" }}> 
// //    <h2 style={{marginLeft:"420px",paddingTop:"100px"}}>Buy Your Movie Ticket </h2>
// //    <Button variant="primary" onClick={handleGooglePay} disabled={!isReadyToPay}>
// //         Pay with Google Pay
// //       </Button>
// //     </div>
// //    </>
   
// //   )}
// //   return false; // Placeholder until implementation
// // };
