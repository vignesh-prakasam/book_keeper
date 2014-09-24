class CreateInvoices < ActiveRecord::Migration
  def change
    create_table :invoices do |t|
      t.string :invoice_number
      t.uuid :uuid
      t.string :currency
      t.string :tax
      t.string :amount_paid
      t.string :sub_total
      t.string :date
      t.string :due_date
      t.string :discount
      t.string :notes

      t.timestamps
    end
  end
end
