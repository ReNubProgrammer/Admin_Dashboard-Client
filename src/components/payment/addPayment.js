import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import PaymentForm from './payment-form'

function AddPayment() {
  return (
      <DialogContent className="font-montserrat max-w-[40%]">
        <DialogHeader className="w-auto">
          <DialogTitle className="text-[25px]">New Transaction</DialogTitle>
          <DialogDescription className="text-[18px]">
            Want to add new transaction?
          </DialogDescription>
        </DialogHeader>
        <PaymentForm/>
      </DialogContent>
  );
}

export default AddPayment;
