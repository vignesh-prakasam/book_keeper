class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :name
      t.string :address1
      t.string :address2
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end
