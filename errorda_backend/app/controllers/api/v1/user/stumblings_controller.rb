class Api::V1::User::StumblingsController < ApplicationController

    skip_before_action :verify_authenticity_token, only: [:create, :searching]
    #CSRFトークン検証をスキップするため

    protect_from_forgery

    def index
        @stumblings = Stumbling.all #veiw側で表示するため
    end
    def create
        user = User.find_by(name: 'error') || User.create(name: 'error')
            #該当のデータを引っ張って来る           #なければ新しく作成する
            @stu = Stumbling.new(user_name: user.name, search_key: params[:search_key])
            @stu.save
        p params #postで投げられた値を受け取る
        render json: {test:"test"}
    end
    def edit
        @stumbling = Stumbling.find_by(id: params[:id])
    end
    def end_time
        @stu = Stumbling.find_by(id: params[:id])
        @stu.end_time =  Time.now
        @stu.dictiorary_key = "本タイトルを入力してください"
        @stu.save
        redirect_to '/'
    end
    def show
    end
    def update
        p params #postで投げられた値を更新する

        @stumbling = Stumbling.find_by(id: params[:id])
        @stumbling.update(update_params)
        redirect_to '/'


    end
    def searching
        user = User.find_by(name: 'error') || User.create(name: 'error')

        searching_error = user.stumblings.where(end_time: nil).first#  || ''
        #今なんの検索をしているのかを向こうに渡している

        render json: searching_error
    end


    def update_params
        params.require(:stumbling).permit( :name, :search_key, :dictiorary_key)
    end

    def end_params
        params.require(:stumbling).permit(:end_time)
    end
end