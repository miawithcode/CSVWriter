interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[];

class CSVWriter {
  constructor(private columns: PaymentColumns) {
    this.csv = this.columns.join(',');
  }

  private csv: string;
}

const writer = new CSVWriter(['id', 'amount', 'to', 'notes']);
