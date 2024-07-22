import React, { createContext, useState} from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([
        { key: 'Starbucks', amount: '$12.00', date: '2021-10-01', address: '123 Main St' },
        { key: 'Apple Store', amount: '$101.00', date: '2021-10-01', address: '123 Main St' },
        { key: 'Sephora', amount: '$120.00', date: '2021-10-01', address: '123 Main St' },
        { key: 'Shoppers Drug Mart', amount: '$12.00', date: '2021-10-01', address: '123 Main St' },
        { key: 'Pizza Hut', amount: '$24.00', date: '2021-10-01', address: '123 Main St' },
        { key: 'Cheesecake Factory', amount: '$45.00', date: '2021-10-01', address: '123 Main St' },
        { key: 'Nike', amount: '$250.00', date: '2021-10-01', address: '123 Main St' },
        { key: 'Tim Hortons', amount: '$7.89', date: '2021-10-01', address: '123 Main St' },
        { key: 'Whole Foods', amount: '$78.00', date: '2021-10-01', address: '123 Main St' },
        { key: 'Cineplex', amount: '$42.50', date: '2021-10-01', address: '123 Main St' },
      ]);
  
    return (
      <DataContext.Provider value={{ transactions, setTransactions }}>
        {children}
      </DataContext.Provider>
    );
  };