import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

function AgendaCard() {
  return (
    <>
      <div className="my-5 w-[95%]">
        <h1 className="font-semibold text-[18px] mb-4">9 October</h1>
        <div className="flex items-center mb-4">
          <div className="w-[15%] mr-5">
            <h3 className="text-[20px] font-semibold">08:00</h3>
            <h4 className="text-[14px]">10:30</h4>
          </div>
          <div className="border-2 rounded-full h-[50px]" />
          <div className="w-[80%] ml-5">
            <h2>Pas Photo</h2>
            <h1 className="font-semibold text-[20px]">Donut Kentang Abah Zuhdi</h1>
          </div>
          <Dialog>
            <DialogTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-transparent items-end mt-2"
              >
                <DotsHorizontalIcon />
              </Button>
            </DialogTrigger>
            <DialogContent className="font-montserrat max-w-[30%] h-[700px] overflow-y-auto">
              <DialogHeader className="w-auto">
                <DialogTitle className="text-[25px]">New Agenda</DialogTitle>
                <DialogDescription className="text-[18px]">
                  Want to add new agenda?
                  <br></br>
                  Fill the credentials and make sure pay attention to the guide.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-[15%] mr-5">
            <h3 className="text-[20px] font-semibold">18:00</h3>
            <h4 className="text-[14px]">19:30</h4>
          </div>
          <div className="border-2 rounded-full h-[50px]" />
          <div className="w-[80%] ml-5">
            <h2>Pas Photo</h2>
            <h1 className="font-semibold text-[20px]">Pas Photo Abang Feri</h1>
          </div>
          <Dialog>
            <DialogTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-transparent items-end mt-2"
              >
                <DotsHorizontalIcon />
              </Button>
            </DialogTrigger>
            <DialogContent className="font-montserrat max-w-[30%] h-[700px] overflow-y-auto">
              <DialogHeader className="w-auto">
                <DialogTitle className="text-[25px]">New Agenda</DialogTitle>
                <DialogDescription className="text-[18px]">
                  Want to add new agenda?
                  <br></br>
                  Fill the credentials and make sure pay attention to the guide.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default AgendaCard;
