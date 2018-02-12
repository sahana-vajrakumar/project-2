class StatsController < ApplicationController

  # before_action :check_if_logged_in, only: [:create]


  # GET /stats
  # GET /stats.json
  def index
    @stats = Stat.all
  end

  # GET /stats/1
  # GET /stats/1.json
  def show
    @stat = Stat.find params[:id]
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
    # add to db
    @stat = Stat.new stat_params
    @stat.user = User.first # @current_user
    @stat.game_id = params[:game_id]
    @stat.score = params[:score]
    @stat.accuracy = params[:accuracy]
    @stat.average_time = params[:average_time]
    # params[:game_id]
    if @stat.save
      render json: {result: 'success'}, status: :ok
    else
      render json: {result: 'error'}, status: 404
    end

    # render json: stat_params #, status: :ok
    redirect_to stats_path
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
      params.permit(:game_id, :score, :accuracy, :average_time)
    end
end
