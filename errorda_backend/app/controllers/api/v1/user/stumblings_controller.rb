class Api::V1::User::StumblingsController < ApplicationController
  #CSRFトークン検証をスキップするため
  skip_before_action :verify_authenticity_token, only: [:create, :searching]

  protect_from_forgery

  def index
    #検証のため５件表示　今後変更する
    @stumblings = Stumbling.all.page(params[:page]).per(5)
  end

  def create
          #該当のデータを引っ張って来る              #なければ新しく作成する
    user = User.find_by(name: params[:name]) || User.create(name: params[:name])
      @stu = Stumbling.new(user_name: user.name, search_key: params[:search_key])
      @stu.save
      #paramsの内容をログに出力している
      p params
      head :created and return
  end

  def edit
    @stumbling = Stumbling.find(params[:id])
  end

  def end_time
    @stu = Stumbling.find(params[:id])
    @stu.end_time =  Time.current
    @stu.memo = "参考URL\n・\n・\n・\n解決に至るまでの経緯\n・\n・\n・"
    @stu.save
    #上記は本来モデルに書くため今後修正予定
    redirect_to action: :edit
  end

  def show
  end

  def update
    #paramsの内容をログに出力している
    p params
    @user = User.find_by(id: params[:id])
    @stumbling = Stumbling.find(params[:id])
    @stumbling.update(update_params)
    redirect_to root_path
  end

  def searching
    p params[:name]
    user = User.find_by(name: params[:name]) || User.create(name: params[:name])
    #今なんの検索をしているのかを向こうに渡している
    searching_error = user.stumblings.where(end_time: nil).first
    if searching_error.nil?
      #リソースが存在しないエラーを渡す
      head :not_found
    else
      render json: searching_error
    end
  end

  private

    def update_params
      #search_keyは変更不可にするため外しています
      params.require(:stumbling).permit( :name, :dictionary_key, :memo)
    end

end