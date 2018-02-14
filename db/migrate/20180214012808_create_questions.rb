class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.integer :game_id
      t.text :question
      t.text :answer

      t.timestamps
    end
  end
end
