import {
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "../ui/dialog";
  
  import TeamForm from './team-form-builder'
  
  function AddTeam() {
    return (
        <DialogContent className="font-montserrat max-w-[40%]">
          <DialogHeader className="w-auto">
            <DialogTitle className="text-[25px]">Add New Member to Your Team</DialogTitle>
          </DialogHeader>
          <TeamForm/>
        </DialogContent>
    );
  }
  
  export default AddTeam;
  