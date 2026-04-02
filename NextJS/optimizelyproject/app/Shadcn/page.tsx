import ShadcnAccordion from "@/Component/ShadcnAccordion";
import ShadcnAlert from "@/Component/ShadcnAlert";
import ShadcnAlertDialog from "@/Component/ShadcnAlertDialog";
import ShadcnLogin from "@/Component/ShadcnLogin";
import ShadcnTable from "@/Component/ShadcnTable";
import { Button } from "@/components/ui/button";

const Shadcn = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <ShadcnAccordion />
      <ShadcnAlert />
      <ShadcnAlertDialog />
      <ShadcnLogin />
      <br /> <br />
      <Button variant="outline" className="w-20">
        Click
      </Button>
      <Button variant="link" className="w-20">
        <a href="">Submit</a>
      </Button>

      <ShadcnTable />
    </div>
  );
};

export default Shadcn;
