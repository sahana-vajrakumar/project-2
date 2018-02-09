class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.integer :category
      t.integer :speed
      t.integer :level

      t.timestamps
    end
  end
end
