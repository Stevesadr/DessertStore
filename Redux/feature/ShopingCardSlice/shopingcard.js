import { createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUE = { items: [], totalCount: 0, totalValue: 0, allCount: 0 };

const calculateItem = (state) => {
  state.totalCount = 0;
  state.totalValue = 0;
  state.items.map((item) => {
    state.totalCount += 1;
    state.totalValue += item.price * item.count;
  });
  state.allCount = state.items.reduce((sum, item) => sum + item.count, 0);
};

const shopingCardSlice = createSlice({
  name: "shopingCard",
  initialState: INITIAL_VALUE,
  reducers: {
    AddItem(state, action) {
      state.items.push({ ...action.payload, count: 1 });
      return calculateItem(state);
    },
    RemoveItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      return calculateItem(state);
    },
    IncrisItem: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.count++;
        }
      });
      return calculateItem(state);
    },
    DecreaseItem: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.count--;
        }
      });
      return calculateItem(state);
    },
    ResetAll: () => {
      return { items: [], totalCount: 0, totalValue: 0, allCount: 0 };
    },
  },
});

export const { AddItem, RemoveItem, IncrisItem, DecreaseItem, ResetAll } =
  shopingCardSlice.actions;

export default shopingCardSlice.reducer;
