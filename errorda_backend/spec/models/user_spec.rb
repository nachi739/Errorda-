require 'rails_helper'

RSpec.describe User, type: :model do
  before do
    @user = build(:user)
  end

  describe ' test' do
    it ' test' do
      expect(@user)
    end
  end
end
