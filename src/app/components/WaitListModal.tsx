import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/app/components/ui/Dialog";
import WaitListForm from "./WaitListForm";

export default function WaitListModal() {
  return (
    <Dialog>
      <DialogTrigger variant='outline' className='w-fit'>
        Join the Waitlist
      </DialogTrigger>
      <DialogContent className='space-y-2'>
        <DialogHeader>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogDescription>
            Sign up to be notified when we go live!
          </DialogDescription>
        </DialogHeader>
        <WaitListForm />
      </DialogContent>
    </Dialog>
  );
}
