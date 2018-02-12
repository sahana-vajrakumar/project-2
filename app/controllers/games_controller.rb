class GamesController < ApplicationController

  # GET /games
  # GET /games.json
  def index
    @games = Game.all
  end

  # GET /games/1
  # GET /games/1.json
  def show
    @game = Game.find params[:id]
  end

  # GET /games/new
  def new
    @game = Game.new
  end

  # GET /games/1/edit
  def edit
  end

  # POST /games
  # POST /games.json
  def create

  end

  # PATCH/PUT /games/1
  # PATCH/PUT /games/1.json
  def update
  end

  # DELETE /games/1
  # DELETE /games/1.json
  def destroy

  end

  private
    # Use callbacks to share common setup or constraints between actions.


    # Never trust parameters from the scary internet, only allow the white list through.
    def game_params
      params.require(:game).permit(:category, :speed, :level)
    end
end
