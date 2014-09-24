class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name
      t.string :address1
      t.string :address2
      t.string :state
      t.string :zip
      t.string :country
      t.string :email
      t.string :phone
      t.string :logo

      t.timestamps
    end
  end
end
