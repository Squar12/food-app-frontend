import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderSheetEmptyCard } from "./OrderSheetEmptyCard";
import { OrderSheetFoodItem } from "./OrderSheetFoodItem";
import { useContext } from "react";
import { foodCartContext } from "@/providers/FoodCart";

export const OrderSheetCart = () => {
  const { foodCart } = useContext(foodCartContext);
  console.log(foodCart);

  const renderFoodCard = () => {
    if (foodCart?.length) {
      return foodCart?.map((item) => {
        return (
          <OrderSheetFoodItem
            key={item.food._id}
            food={item.food}
            quantity={item.quantity}
            image={item.food.image}
          />
        );
      });
    }

    return <OrderSheetEmptyCard />;
  };

  return (
    <Card className="h-[400px] overflow-hidden pb-4">
      <CardHeader className="p-4">
        <CardTitle>My cart</CardTitle>
      </CardHeader>

      <CardContent className="h-full p-4 pb-10 overflow-scroll">
        {renderFoodCard()}
      </CardContent>
    </Card>
  );
};
