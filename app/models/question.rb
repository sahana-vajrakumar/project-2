class Question < ApplicationRecord
  belongs_to :game, optional: true
end
