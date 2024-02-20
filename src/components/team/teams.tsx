import httpTeam from "../../lib/apiTeam";
import { useEffect, useState } from "react";
import { column } from "./team-columns";
import { GenerateTable } from "../ui/data-table";
import { toast } from "../ui/use-toast";

export default function TeamTable() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await httpTeam.get("/all").then((response)=>{
        setTeams(response.data)
      }).catch((error) => {
        const msg = error.message;
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: `${msg}`,
        });
      });
    }
    fetchData();
  }, []);

  return (
    <div className="container justify-center mt-5 ml-0">
      <GenerateTable columns={column} data={teams} nameFilter={"name"}/>
    </div>
  );
}
