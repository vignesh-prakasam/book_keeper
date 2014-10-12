# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141012192311) do

  create_table "clients", force: true do |t|
    t.string   "name"
    t.string   "address1"
    t.string   "address2"
    t.string   "email"
    t.string   "phone"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "customers", force: true do |t|
    t.string   "name"
    t.string   "address1"
    t.string   "address2"
    t.string   "state"
    t.string   "zip"
    t.string   "country"
    t.string   "email"
    t.string   "phone"
    t.string   "logo"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "invoices", force: true do |t|
    t.string   "invoice_number"
    t.uuid     "uuid"
    t.string   "currency"
    t.string   "tax"
    t.string   "amount_paid"
    t.string   "sub_total"
    t.string   "date"
    t.string   "due_date"
    t.string   "discount"
    t.string   "notes"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "customer_id"
  end

  create_table "products", force: true do |t|
    t.string   "description"
    t.integer  "quantity"
    t.string   "price"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "amount"
  end

end
