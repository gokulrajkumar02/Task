"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { infoCards } from "@/DB/District";
import { useState } from "react";

const RestaurantInfoCard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-4">
      <div className="flex gap-4 justify-center">
        <Carousel>
          <CarouselContent>
            {infoCards.map((item, i) => (
              <CarouselItem
                key={i}
                onClick={() => setOpen(true)}
                className="w-[130px] cursor-pointer"
              >
                <div className="flex gap-3 p-4">
                  <span className="text-yellow-500 text-lg">{item.icon}</span>

                  <div>
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
           <CarouselPrevious />
      <CarouselNext />
        </Carousel>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-4xl h-[90%] sm:h-[80%] overflow-auto">
          <DialogHeader>
            <DialogTitle>About the place</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 mt-2">
            {infoCards.map((item, i) => (
              <Card key={i}>
                <CardContent className="flex gap-3 p-4">
                  <span className="text-yellow-500">{item.icon}</span>

                  <div>
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RestaurantInfoCard;
