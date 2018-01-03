import React, { Component } from 'react';

class PaymentMethodForm extends Component {
  render() {
    return (
      <div>
          <input type="text" />
      </div>
    );
  }
}

class CreatePaymentMethodForm extends Component{
    render()
    {
        return (
            <div>
                <PaymentMethodForm/>
                <button>Create</button>
            </div>
        );
    }
}
class UpdatePaymentMethodForm extends Component{
    render()
    {
        return (
            <div>
                <PaymentMethodForm/>
                <button>Update</button>
            </div>
        );
    }
}

class PaymentForm extends Component{
    render()
    {
        return(
            <div>
                <h1>Payment Form</h1>
                <CreatePaymentMethodForm/>
                <UpdatePaymentMethodForm/>
            </div>
        );
    }
}
export default PaymentForm;
