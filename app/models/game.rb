class Game < ApplicationRecord

  has_many :stats
  has_many :users, through: :stats

  enum category: [:english, :maths, :music, :code]

end
