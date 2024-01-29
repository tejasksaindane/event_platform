import React from 'react'
import { Button } from '../ui/button';
import { IEvent } from '@/lib/mongodb/database/models/event.model';
import {loadStripe} from "@stripe/stripe-js"


const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

// 4:38:40
const Checkout = ({event, userId}:{event:IEvent,userId:string}) => {
    
    const onCheckout = async () => {
        console.log('CHECKOUT');
    }
  return (
      <form action={onCheckout} method='post'>
          <Button type="submit" role="link" size='lg' className="button sm:w-fit">
              {event.isFree ? "Get Ticket":'Buy Ticket'}
          </Button>
      </form>
  )
}

export default Checkout