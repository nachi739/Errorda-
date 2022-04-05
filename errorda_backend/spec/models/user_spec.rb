require 'rails_helper'

RSpec.describe User, type: :model do
  before do
    @user = build(:user)
  end

  describe ' test' do
    it ' ユーザー名がそのまま変えること' do
      expect(@user.name).to eq 'test'
    end
  end
end
