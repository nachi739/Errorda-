FactoryBot.define do
  factory :user do
    name { "test" }
    #has_many { :stumblings }
    #stumblings { [ FactoryBot.build(:stumbling, user: nil) ] }
  end
end