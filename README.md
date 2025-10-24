# 💰 Expense Tracker

A simple and responsive **Expense Tracker** app built using **React + TypeScript + Redux Toolkit + Shadcn UI**.  
It helps you add, filter, and manage your daily expenses easily with a clean and modern UI.

---

## 🚀 Features

✅ Add new expenses (name, amount, category)  
✅ Filter expenses by category  
✅ Real-time total calculation  
✅ Responsive design (mobile & desktop)  
✅ Redux Toolkit for state management  
✅ Shadcn/UI components for modern styling  
✅ **Light & Dark theme toggle** with automatic system theme detection  

---

## 🌗 Dark Mode

This app supports **dark mode** using **Shadcn UI + TailwindCSS + `next-themes`**:

- Toggle between light and dark mode using the **moon/sun button** in the top-right corner.  
- Theme preference is **saved automatically** and respects the system theme.  
- All Shadcn components like **Buttons, Cards, Inputs** adapt automatically to the selected theme.

---

## 🧠 Tech Stack

- ⚛️ **React** – Frontend framework  
- 🧩 **TypeScript** – Type-safe development  
- 🧠 **Redux Toolkit** – State management  
- 🎨 **Tailwind CSS** – Utility-first CSS framework  
- 🪄 **Shadcn/UI** – Reusable modern UI components  
- 🔢 **Lucide Icons** – Clean SVG icons

---

## 📁 Project Structure

src/  
├── features/  
│ └── expenseSlice.ts # Redux slice for expense logic  
├── components/  
│ ├── InputField.tsx # Add new expense form  
│ ├── OutputField.tsx # Display expenses list  
│ ├── ThemeToggle.tsx # Dark/Light mode toggle button  
│ └── ui/ # Shadcn UI components  
├── redux/  
│ └── store.ts # Redux store setup  
└── App.tsx # Main app component

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/joshinavin2001/Expenses-Tracker-TS.git
cd Expenses-Tracker-TS
