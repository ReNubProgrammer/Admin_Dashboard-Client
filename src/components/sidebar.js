import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { Link } from "react-router-dom";
import { useToast } from "./ui/use-toast";
import AddProduct from "./products/addProduct";
import AddTeam from "./team/addTeam";
import AddPayment from "./payment/addPayment";

function Sidebar() {
  const { toast } = useToast();
  return (
    <div className="w-[250px] h-screen fixed text-white bg-yellowON z-10 font-montserrat">
      <div className="text-[20px] px-10 mt-10">
        <Accordion
          className=""
          type="multiple"
          defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5"]}
        >
          <AccordionItem className="border-b-0" value="item-1">
            <AccordionTrigger className="py-2 hover:no-underline font-semibold">
              Home
            </AccordionTrigger>
            <AccordionContent className="pl-2 text-[18px]">
              <Link to={`/`}>
                <button type="button">Dashboard</button>
              </Link>
            </AccordionContent>
            <AccordionContent className="pl-2 text-[18px]">
              <Link to={`/agenda`}>
                <button type="button">Agenda</button>
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-b-0" value="item-2">
            <AccordionTrigger className="py-2 hover:no-underline font-semibold">
              Order
            </AccordionTrigger>
            <AccordionContent className="pl-2 text-[18px]">
              <Link to={`/order`}>
                <button type="button">Order List</button>
              </Link>
            </AccordionContent>
            <AccordionContent className="pl-2 text-[18px]">
              <button type="button">New Order</button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-b-0" value="item-3">
            <AccordionTrigger className="py-2 hover:no-underline font-semibold">
              Product
            </AccordionTrigger>
            <AccordionContent className="pl-2 text-[18px]">
              <Dialog>
                <DialogTrigger>Add Product</DialogTrigger>
                {AddProduct()}
              </Dialog>
            </AccordionContent>
            <AccordionContent className="pl-2 text-[18px]">
              <Link to={`/product`}>
                <button type="button">Product List</button>
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-b-0" value="item-4">
            <AccordionTrigger className="py-2 hover:no-underline font-semibold">
              Team
            </AccordionTrigger>
            <AccordionContent className="pl-2 text-[18px]">
              <button type="button">
                <Dialog>
                  <DialogTrigger>Add Member</DialogTrigger>
                  {AddTeam()}
                </Dialog>
              </button>
            </AccordionContent>
            <AccordionContent className="pl-2 text-[18px]">
              <Link to={`/team`}>
                <button type="button">Member List</button>
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-b-0" value="item-5">
            <AccordionTrigger className="py-2 hover:no-underline font-semibold">
              Cashflow
            </AccordionTrigger>
            <AccordionContent className="pl-2 text-[18px]">
              <button type="button">
                <Dialog>
                  <DialogTrigger>Add Transaction</DialogTrigger>
                  {AddPayment()}
                </Dialog>
              </button>
            </AccordionContent>
            <AccordionContent className="pl-2 text-[18px]">
              <Link to={`/mutation`}>
                <button type="button">Mutation</button>
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-b-0" value="item-6">
            <AccordionTrigger className="py-2 hover:no-underline font-semibold">
              Project
            </AccordionTrigger>
            <AccordionContent className="pl-2 text-[18px]">
              <button
                className="text-yellow-600"
                type="button"
                onClick={() => {
                  toast({
                    title: "Need to Upgrade!",
                    description: "Upgrade your application to use this feature",
                    duration: 2000,
                  });
                }}
              >
                Project Calendar
              </button>
            </AccordionContent>
            <AccordionContent className="pl-2 text-[18px]">
              <button
                className="text-yellow-600"
                type="button"
                onClick={() => {
                  toast({
                    title: "Need to Upgrade!",
                    description: "Upgrade your application to use this feature",
                    duration: 2000,
                  });
                }}
              >
                Project Manage
              </button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-b-0" value="item-7">
            <AccordionTrigger className="py-2 hover:no-underline font-semibold">
              Main Website&nbsp;&nbsp;
            </AccordionTrigger>
            <AccordionContent className="pl-2 text-[18px]">
              <button
                className="text-yellow-600"
                type="button"
                onClick={() => {
                  toast({
                    title: "Need to Upgrade!",
                    description: "Upgrade your application to use this feature",
                    duration: 2000,
                  });
                }}
              >
                CMS
              </button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Sidebar;
