import React, {Fragment, Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    salad: 5,
    cheese: 5,
    meat: 15,
    bacon: 10
}


class BurgerBuilder extends Component{

   state = {
       ingredients: {
           salad: 0,
           bacon: 0,
           cheese: 0,
           meat: 0
       },
       totalPrice: 15,
       purchasable: false,
       purchasing: false
   }

   addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updateOrderStatus(updatedIngredients);
   }

   removeIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    if(oldCount === 0){
        return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceSubtraction = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtraction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updateOrderStatus(updatedIngredients);
   }

   updateOrderStatus = (ingredients) => {
       
       const sum = Object.keys(ingredients)
           .map(igKey => {
               return ingredients[igKey];
           })
           .reduce((sum, el)=>{
               return sum + el;
           },0);

       this.setState({purchasable: sum > 0});
   }

   purachaseHandler = () =>{
       this.setState({purchasing: true});
   }
 
   purchaseCancelHandler = () =>{
       this.setState({purchasing: false});
   }
   
   purchaseContinueHandler = () =>{
       alert('You can continue!');
   }
   
    render(){
       const disabledInfo = {
            ...this.state.ingredients
       }
       for(let key in disabledInfo){
           disabledInfo[key] = disabledInfo[key] <= 0                     //will return true or false
       } 
        return(
             <Fragment>
                 <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                      <OrderSummary ingredients = {this.state.ingredients} 
                                    price = {this.state.totalPrice}
                                    purchaseCanceled = {this.purchaseCancelHandler}
                                    purchaseContinued = {this.purchaseContinueHandler}/>
                 </Modal>
                 <Burger ingredients = {this.state.ingredients}/>
                 <BuildControls
                    ingredientsAdded = {this.addIngredientHandler}
                    ingredientsRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    ordered = {this.purachaseHandler}/>
             </Fragment>
        );
    }
}

export default BurgerBuilder;