"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
export const reviews = ["Ambience", "Service", "Food"];
const RestaurantRatingReview = () => {
  return (
    <div className="p-4">
              <h2 className="font-semibold text-lg mb-4">Ratings & reviews</h2>

              <Card className="rounded-2xl">
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <div className="flex items-center gap-2">
                    <h1 className="text-[35px] font-bold text-green-700">
                      4.8
                    </h1>
                    <Star className="text-green-700" size={20} />
                  </div>

                  <p className="text-[15px] text-muted-foreground mt-2">
                    Based on 7,509 ratings
                  </p>

                  <p className="text-[12px] text-gray-500 mt-1">
                    how are ratings calculated?
                  </p>

                  <div className="mt-6 bg-gray-50 rounded-xl px-6 py-4 flex justify-between w-full max-w-md">
                    <div className="text-center flex-1">
                      <p className="font-semibold">4.8</p>
                      <p className="text-[12px]">Ambience</p>
                    </div>

                    <div className="w-px bg-gray-200 mx-2" />

                    <div className="text-center flex-1">
                      <p className="font-semibold">4.9</p>
                      <p className="text-[12px]">Food</p>
                    </div>

                    <div className="w-px bg-gray-200 mx-2" />

                    <div className="text-center flex-1">
                      <p className="font-semibold">4.9</p>
                      <p className="text-[12px]">Service</p>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <h3 className="font-semibold text-lg">1,207 reviews</h3>
                  </div>

                  <div className="flex justify-center gap-3 mt-4 flex-wrap">
                    {reviews.map((item, index) => (
                      <button
                        key={index}
                        className="px-4 py-1.5 rounded-full border text-sm hover:bg-gray-100"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
  )
}

export default RestaurantRatingReview
