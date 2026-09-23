import { Service } from '@angular/core';
import { CartItem } from './cart';  

export interface Transaction {
  id: number;
  items: CartItem[];
  total: number;
  date: Date;
}

@Service()
export class TransactionService {

  transactions: Transaction[] = [];

  addTransaction(items: CartItem[], total: number) {
    const tx: Transaction = {
      id: this.transactions.length + 1,
      items: items.map(i => ({ product: { ...i.product }, quantity: i.quantity })),
      total: total,
      date: new Date()
    };
    this.transactions.push(tx);
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  getTodayTransactions(): Transaction[] {
    const today = new Date();
    return this.transactions.filter(t => {
      const d = new Date(t.date);
      return d.getDate() === today.getDate() &&
             d.getMonth() === today.getMonth() &&
             d.getFullYear() === today.getFullYear();
    });
  }

  // Menghitung total uang masuk hari ini
  getTodayTotal(): number {
    return this.getTodayTransactions().reduce((sum, t) => sum + t.total, 0);
  }
}