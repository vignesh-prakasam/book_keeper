class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :description
      t.integer :quantity
      t.string :price

      t.timestamps
    end
  end
end
