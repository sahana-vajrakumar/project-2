class AddLevelToStats < ActiveRecord::Migration[5.1]
  def change
    add_column :stats, :level, :integer
  end
end
