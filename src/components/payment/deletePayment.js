import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "../ui/dialog";
import { useToast } from "../ui/use-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "../ui/button";
import httpPayment from "../../lib/apiPayment";

function DeletePayment({ payName, payId }) {
  const { toast } = useToast();
  async function OnDelete() {
    await httpPayment
      .remove(`/drop/${payId}`)
      .then((response) => {
        let timerInterval;
        Swal.fire({
          icon: "success",
          title: "Product Deleted!",
          html: "You will be redirect back product list",
          timer: 1000,
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then(() => {
          window.location.reload();
          // navigate("/mutation");
        });
      })
      .catch((error) => {
        const msg = error.response.status;
        toast({
          variant: "destructive",
          title: `Something went wrong (${msg})`,
          description: `Please Try Again Later`,
          duration: 5000,
        });
      });
  }
  return (
    <DialogContent className="font-montserrat">
      <DialogHeader className="w-auto">
        <DialogTitle className="text-[20px]">
          Are you sure to delete {payName}?
        </DialogTitle>
        <DialogDescription className="text-[18px]">
          Once you delete this transaction you can't retrieve
          this transaction.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="justify-center">
        <DialogClose>
          <Button onClick={OnDelete} variant={"destructive"}>
            Yes
          </Button>
          <Button className="mx-2" variant={"secondary"}>
            No
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
export default DeletePayment;
