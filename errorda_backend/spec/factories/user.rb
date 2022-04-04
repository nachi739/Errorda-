FactoryBot.define do
  factory :user do
    user { Faker::Internet.name }
  end
end