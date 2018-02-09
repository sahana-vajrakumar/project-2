json.extract! stat, :id, :game_id, :user_id, :score, :accuracy, :average_time, :created_at, :updated_at
json.url stat_url(stat, format: :json)
