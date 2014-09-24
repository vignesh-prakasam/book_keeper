json.array!(@invoices) do |invoice|
  json.extract! invoice, :id, :invoice_number, :uuid, :currency, :tax, :amount_paid, :sub_total, :date, :due_date, :discount, :notes
  json.url invoice_url(invoice, format: :json)
end
