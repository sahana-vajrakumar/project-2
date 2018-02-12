class StatsController < ApplicationController

  # GET /stats
  # GET /stats.json
  def index
    @stats = Stat.all
  end

  # GET /stats/1
  # GET /stats/1.json
  def show
  end

  # GET /stats/new
  def new
    @stat = Stat.new
  end

  # GET /stats/1/edit
  def edit
  end

  # POST /stats
  # POST /stats.json
  def create

  end

  # PATCH/PUT /stats/1
  # PATCH/PUT /stats/1.json
  def update

  end

  # DELETE /stats/1
  # DELETE /stats/1.json
  def destroy

  end

  private
    # Use callbacks to share common setup or constraints between actions.
  
    # Never trust parameters from the scary internet, only allow the white list through.
    def stat_params
      params.require(:stat).permit(:game_id, :user_id, :score, :accuracy, :average_time)
    end
end
