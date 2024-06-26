import { useToast } from "../ui/use-toast";
import { useNavigate } from "react-router-dom";
import httpProduct from "../../lib/apiProduct";
import Swal from "sweetalert2";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose
} from "../ui/dialog";

function DeletePackage({packName, prodId, packId}) {
  const { toast } = useToast();
  const navigate = useNavigate();
  const pckgId = JSON.stringify(packId)
  async function OnDelete() {
    await httpProduct
      .remove(`/drop/${prodId}/${pckgId}`)
      .then((response) => {
        let timerInterval;
        Swal.fire({
          icon: "success",
          title: "Package Deleted!",
          html: "You will be redirect back to product list",
          timer: 1000,
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then(() => {
          window.location.reload();
          navigate("/product");
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
        <DialogTitle className="text-[25px]">Delete {packName}?</DialogTitle>
        <DialogDescription className="text-[18px]">
          Are you sure to delete this package?
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

export default DeletePackage;
