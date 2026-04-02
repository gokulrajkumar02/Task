import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const items = [
  {
    value: "search",
    trigger: "Search Books",
    content:
      "Find books by title, author, or category. Use filters to quickly locate available books in the library.",
  },
  {
    value: "borrow",
    trigger: "Borrow Books",
    content:
      "Check availability and borrow books. You can hold a book for 1 hour before collecting it.",
  },
  {
    value: "history",
    trigger: "Borrow History",
    content:
      "View all previously borrowed books along with return dates and pending fines if any.",
  },
];

const ShadcnAccordion = () => {
  return (
    <Accordion type="single" className="w-[500px] m-2" defaultValue="search">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ShadcnAccordion;
