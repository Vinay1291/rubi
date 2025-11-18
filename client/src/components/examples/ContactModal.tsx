import { useState } from "react";
import ContactModal from "../ContactModal";
import { Button } from "@/components/ui/button";

export default function ContactModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Contact Modal</Button>
      <ContactModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
