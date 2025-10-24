import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "@/features/expenseSlice";

const InputField = () => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const expChange = (e: ChangeEvent<HTMLInputElement>) => {
    setExpense(e.target.value);
  };
  const amountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };
  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (expense.trim() === "" || amount.trim() === "" || category === "") {
      alert("Please Enter Valid Details....?");
      return;
    }
    if (isNaN(Number(amount))) {
      alert("Please Enter Valid Number..?");
      return;
    }
    dispatch(addTasks({ expense, amount: Number(amount), category }));
    setAmount("");
    setCategory("");
    setExpense("");
    console.log(expense);
    console.log(amount);
    console.log(category);
  };

  return (
    <div>
      <h2 className="text-center mb-3 text-2xl font-bold">Expense Tracker</h2>
      <form
        onSubmit={submitHandle}
        className="flex flex-col sm:flex-row  items-center gap-2"
      >
        <Input
          value={expense}
          onChange={expChange}
          className="bg-white"
          placeholder="Expense Name"
        />
        <Input
          value={amount}
          onChange={amountChange}
          className="bg-white"
          placeholder="Amount"
        />
        <div className="flex gap-2">
          <Select
            value={category}
            onValueChange={(Value) => setCategory(Value)}
          >
            <SelectTrigger className="w-[150px] bg-white">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="food">🍔 Food</SelectItem>
              <SelectItem value="travel">✈️ Travel</SelectItem>
              <SelectItem value="shopping">🛍️ Shopping</SelectItem>
              <SelectItem value="other">💡 Other</SelectItem>
            </SelectContent>
          </Select>

          <Button className="cursor-pointer active:scale-95 hover:scale-[1.03] duration-150 shadow-sm hover:shadow-md">
            Add Expense
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InputField;
