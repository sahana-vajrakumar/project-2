class Game < ApplicationRecord

  has_many :stats
  has_many :users, through: :stats

  enum category: [:literacy, :numeracy, :music, :code]
  enum level: [:one, :two, :three]

end
