import { CheckCircle2Icon ,BookMarkedIcon} from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

const ShancnAlert = () => {
  return (
    <Alert className="w-[50%]">
        <CheckCircle2Icon/>
        {/* <BookMarkedIcon/> */}
        <AlertTitle>
            <AlertTitle>Title of the content</AlertTitle>
            <AlertDescription>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe perspiciatis nemo sunt earum sapiente minus omnis, voluptates, atque aut possimus eos maxime voluptate voluptas, recusandae distinctio sed iste a corrupti!</AlertDescription>
        </AlertTitle>
    </Alert>
  )
}

export default ShancnAlert
