import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const ShadcnAlertDialog = () => {
  return (
    <div className="w-20">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Content</AlertDialogTitle>
            <AlertDialogDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              maiores rem iusto commodi consequatur ex, qui quos, optio ipsum
              deserunt exercitationem error odit minus cupiditate facilis
              molestiae esse aspernatur fugiat.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ShadcnAlertDialog;
