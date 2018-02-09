class CreateStats < ActiveRecord::Migration[5.1]
  def change
    create_table :stats do |t|
      t.integer :game_id
      t.integer :user_id
      t.integer :score
      t.integer :accuracy
      t.float :average_time

      t.timestamps
    end
  end
end
