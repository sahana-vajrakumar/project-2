class UpdateColumnNames < ActiveRecord::Migration[5.1]
  def change
    rename_column :games, :speed, :speeds
    rename_column :games, :level, :levels
  end
end
