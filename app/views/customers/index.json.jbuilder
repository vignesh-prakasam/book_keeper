json.array!(@customers) do |customer|
  json.extract! customer, :id, :name, :address1, :address2, :state, :zip, :country, :email, :phone, :logo
  json.url customer_url(customer, format: :json)
end
