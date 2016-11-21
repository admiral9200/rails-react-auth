Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'auth/sign_in', to: 'auth#sign_in'

  get '/member-only', to: 'test#members_only'

  root to: 'test#members_only'
end
