import React from 'react';
import  { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';


export default function Googlepay() 
{
        const [isReadyToPay, setIsReadyToPay] = useState(false);
      
        useEffect(() => {
          // Check if Google Pay is available
          googlePayIsReadyToPay().then((result) => {
            setIsReadyToPay(result);
          });
        }, []);
      
        const handleGooglePay = () => {
          const paymentRequest = {
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
              merchantName: 'Your Merchant Name',
            },
            transactionInfo: {
              totalPriceStatus: 'FINAL',
              totalPrice: '100.00', // Replace '100.00' with your actual amount
              currencyCode: 'INR',
            },
          };

          const checkGooglePayAvailability = async () => {
      
          const paymentsClient = new google.payments.api.PaymentsClient({
            environment: 'TEST', // Change to 'PRODUCTION' for production environment
          });
      
          paymentsClient
            .loadPaymentData(paymentRequest)
            .then((paymentData) => {
              // Handle successful payment
              console.log('Payment successful:', paymentData);
            })
            .catch((error) => {
              // Handle payment error
              console.error('Payment error:', error);
            });
        };
      

    
  return (
    <>
    <div class="bg-image"
   style={{objectFit:'cover',height:'100vh', backgroundImage:"url('https://c7.alamy.com/comp/2FYETW3/google-pay-logo-2FYETW3.jpg')" }}> 
   <h2 style={{marginLeft:"420px",paddingTop:"100px"}}>Buy Your Movie Ticket </h2>
   <Button variant="primary" onClick={handleGooglePay} disabled={!isReadyToPay}>
        Pay with Google Pay
      </Button>
    </div>
   </>
   
  )}
  return false; // Placeholder until implementation
};
