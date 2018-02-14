class Game < ApplicationRecord

  has_many :stats
  has_many :users, through: :stats
  has_many :questions

  enum category: [:english, :maths, :music, :voice]

end
