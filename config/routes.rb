Spoonfork::Application.routes.draw do

  resources :challenges

  root :to => "challenges#main"

end
