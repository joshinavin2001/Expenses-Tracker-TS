import { useState } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { useDispatch, useSelector } from "react-redux";
import { totalExp } from "@/features/expenseSlice";
import type { RootState } from "@/redux/store";
const TotalExp = () => {
  const totalValue = useSelector((state: RootState) => state.expenses.total);
  const [totalCategory, setTotalCategory] = useState<string>("");
  const dispatch = useDispatch();
  const totalExpenses = () => {
    dispatch(totalExp(totalCategory));
  };
  return (
    <div className="flex justify-between mt-5">
      <div className="flex gap-2 mr-3">
        <Select
          value={totalCategory}
          onValueChange={(value) => setTotalCategory(value)}
        >
          <SelectTrigger className="w-[150px] bg-white">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">🌍 All</SelectItem>
            <SelectItem value="food">🍔 Food</SelectItem>
            <SelectItem value="travel">✈️ Travel</SelectItem>
            <SelectItem value="shopping">🛍️ Shopping</SelectItem>
            <SelectItem value="other">💡 Other</SelectItem>
          </SelectContent>
        </Select>
        <Button
          onClick={totalExpenses}
          className="active:scale-95 hover:scale-[1.03] duration-150 shadow-sm hover:shadow-md cursor-pointer"
        >
          Total
        </Button>
      </div>
      <div className="flex gap-2 items-center">
        <h2 className="text-xl font-bold">Total</h2>
        <div className=" px-3 py-1 rounded bg-white flex justify-center items-center font-semibold text-md">
          {totalValue}
        </div>
      </div>
    </div>
  );
};

export default TotalExp;
