import { deleteExp } from "@/features/expenseSlice";
import type { RootState } from "@/redux/store";
import { Delete } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const OutputField = () => {
  const allData = useSelector((state: RootState) => state.expenses.tasks);
  const dispatch = useDispatch();

  return (
    <div className="mt-2">
      {allData.map((t) => {
        return (
          <div
            className={`flex justify-between items-center  capitalize p-2 text-lg font-semibold`}
            key={t.id}
          >
            <h2 className="w-25 sm:w-60 mr-4">{t.expense}</h2>
            <h2 className="w-20">{t.category}</h2>
            <h2 className="w-20 text-end pr-5  ">{t.amount}</h2>
            <Delete
              onClick={() => dispatch(deleteExp(t.id))}
              className="text-red-500 cursor-pointer active:scale-125"
            />
          </div>
        );
      })}
    </div>
  );
};

export default OutputField;
