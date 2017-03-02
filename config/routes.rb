Rails.application.routes.draw do

  get 'home/index' => ''
  get '/activities' => 'activities#index', as: 'activities'
  get '/about' => 'about#index', as: 'about'
  get '/gallery' => 'gallery#index', as: 'gallery'
  get '/contact' => 'contact#index', as: 'contact'
  get '/availability' => 'availability#index', as: 'availiability'
  get '/FAQ' => 'faq#index', as: 'faq'
  # get 'about/index', to: 'about#index', as: 'about'

  root 'home#index'
end
