Rails.application.routes.draw do


  get 'home/index' => ''
  get '/activities' => 'activities#index', as: 'activities'
  get '/about' => 'about#index', as: 'about'
  # get 'about/index', to: 'about#index', as: 'about'

  root 'home#index'
end
