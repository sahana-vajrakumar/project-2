class QuestionsController < ApplicationController

  # GET /games
  # GET /games.json
  def index
    @questions = Question.all
  end

  # GET /games/1
  # GET /games/1.json
  def show
    @questions = Question.find params[:id]

  end

  # GET /games/:id/questions/new
  def new
    @question = Question.new
    @game = Game.find params[:game_id]
  end

  # GET /games/1/edit
  def edit
    @questions = Question.find params[:id]

  end

  # POST /games
  # POST /games.json
  def create
    game = Game.find params[:game_id]
    question = game.questions.new( question_params )
    # questions = Question.new(question_params)
    if params[:file].present?
      req = Cloudinary::Uploader.upload(params[:file])

      question.question = req["public_id"]
      # raise 'hell'

      if question.save
        redirect_to( game_questions_path(game) )
      else
        # handle error
        flash[:error] = "Upload Error!! Pls try again!!"
      end

    else
      # no file specified error
      flash[:error] = "Question field cannot be empty... Please try again!!"

    end

    #
    #
    # questions = Question.new question_params
    # #     questions.question = params[:question]
    # #     questions.answer = params[:answer]
    # questions.save
  end

  # PATCH/PUT /games/1
  # PATCH/PUT /games/1.json
  def update
    @questions = Question.find params[:id]
    Question.update questions_params
    redirect_to questions_path
  end

  # DELETE /games/1
  # DELETE /games/1.json
  def destroy
    Question.destroy params[:id]
    redirect_to root_path
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    #
    #
    # Never trust parameters from the scary internet, only allow the white list through.
    def question_params
      params.require(:question).permit(:question, :answer)
    end
end
