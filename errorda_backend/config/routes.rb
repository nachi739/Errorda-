Rails.application.routes.draw do

  root to: 'api/v1/user/stumblings#index' #home画面変更
  namespace :api do
    namespace :v1 do
      namespace :user do
        post 'stumblings/searching', to: 'stumblings#searching'
        get 'stumblings/:id', to: 'stumblings#end_time',as: :stumblings
        resources :stumblings, only: [:index, :create, :edit, :update, :show]

      end

      # resource :user do
      #   resources :stumblings, only: [:index, :create, :edit, :show, :update]
      #     get 'stumblings/searching', to: 'stumblings#searching'
      #   end
    end
  end
end

=begin



=end
