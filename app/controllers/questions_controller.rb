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

  # GET /games/new
  def new
    @questions = Question.new
  end

  # GET /games/1/edit
  def edit
    @questions = Question.find params[:id]

  end

  # POST /games
  # POST /games.json
  def create
    questions = Question.new question_params
    #     questions.question = params[:question]
    #     questions.answer = params[:answer]
    questions.save
    redirect_to( questions_path )
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
