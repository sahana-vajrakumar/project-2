class User < ApplicationRecord

  has_many :stats
  has_many :games, through: :stats
  
end
