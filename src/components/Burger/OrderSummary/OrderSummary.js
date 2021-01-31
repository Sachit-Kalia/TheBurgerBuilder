import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) =>{
   
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style = {{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        })

   return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul> 
            <p><strong>You need to pay {props.price} INR for this burger.</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType = "Danger" clicked = {props.purchaseCanceled}>CANCEL</Button>
            <Button btnType = "Success" clicked = {props.purchaseContinued}>CONTINUE</Button>
        </Fragment>
   );
}

export default orderSummary;