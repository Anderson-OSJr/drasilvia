import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MidleCarousel = () => {
  return (
    <Carousel className="w-full max-w-xs pl-3">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="
            absolute left-4 top-1/2 -translate-y-1/2 
            bg-white/70 hover:bg-white shadow-lg 
            rounded-full backdrop-blur px-3 py-2
          "
      />
      <CarouselNext
        className="
            absolute right-1 top-1/2 -translate-y-1/2 
            bg-white/70 hover:bg-white shadow-lg 
            rounded-full backdrop-blur px-3 py-2
          "
      />
    </Carousel>
  );
};
export default MidleCarousel;
