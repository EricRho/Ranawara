Rails.application.routes.draw do


  # get 'gallery/index'

  get 'home/index' => ''
  get '/activities' => 'activities#index', as: 'activities'
  get '/about' => 'about#index', as: 'about'
  get '/gallery' => 'gallery#index', as: 'gallery'
  # get 'about/index', to: 'about#index', as: 'about'

  root 'home#index'
end
