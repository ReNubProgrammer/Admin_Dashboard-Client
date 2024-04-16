import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "../ui/dialog";
  import AgendaForm from "./form-agenda-builder";
  function AddAgenda() {
    return (
        <DialogContent className="font-montserrat max-w-[30%] h-[700px] overflow-y-auto">
          <DialogHeader className="w-auto">
            <DialogTitle className="text-[25px]">New Agenda</DialogTitle>
            <DialogDescription className="text-[18px]">
              Want to add new agenda?
              <br></br>
              Fill the credentials and make sure pay attention to the guide.
            </DialogDescription>
          </DialogHeader>
          <AgendaForm/>
        </DialogContent>
    );
  }
  
  export default AddAgenda;
  