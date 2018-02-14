class QuestionsController < ApplicationController

  # before_action :check_if_logged_in, except: [:show]

  # GET /games
  # GET /games.json
  def index
    @games = Question.all
  end

  # GET /games/1
  # GET /games/1.json
  def show
    @game = Question.find params[:id]

  end

  # GET /games/new
  def new
    @game = Question.new
  end

  # GET /games/1/edit
  def edit
    @game = Question.find params[:id]

  end

  # POST /games
  # POST /games.json
  def create
    @game = Question.create params[:id]


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
    #
    #
    # # Never trust parameters from the scary internet, only allow the white list through.
    # def game_params
    #   params.require(:game).permit(:category, :speeds, :levels)
    # end
end
