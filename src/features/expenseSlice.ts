import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Exp {
  id: string;
  expense: string;
  amount: number;
  category: string;
}
const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    tasks: [] as Exp[],
    total: 0 as number,
    filterExp: [] as Exp[],
  },
  reducers: {
    addTasks: (
      state,
      action: PayloadAction<{
        amount: number;
        expense: string;
        category: string;
      }>
    ) => {
      const newTasks: Exp = {
        id: crypto.randomUUID(),
        expense: action.payload.expense,
        amount: action.payload.amount,
        category: action.payload.category,
      };
      state.tasks.push(newTasks);
      state.filterExp.push(newTasks);
    },
    totalExp: (state, action: PayloadAction<string>) => {
      if (action.payload === "All" || !action.payload) {
        state.tasks = [...state.filterExp];
      } else {
        state.tasks = state.filterExp.filter(
          (t) => t.category === action.payload
        );
      }
      const totalexp = state.tasks.reduce(
        (acc, t) => acc + Number(t.amount),
        0
      );
      state.total = totalexp;
    },
    deleteExp: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      state.filterExp = state.filterExp.filter((t) => t.id !== action.payload);
    },
  },
});
export const { addTasks, totalExp, deleteExp } = expenseSlice.actions;
export default expenseSlice.reducer;
