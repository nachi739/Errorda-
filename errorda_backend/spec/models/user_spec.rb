require 'rails_helper'

RSpec.describe User, type: :model do
  #before do
    let(:user) {FactoryBot.create(:user)}
    @user = FactoryBot.create(:user)
  #end
  describe 'ユーザーmodelについてのテスト' do
    context '保存後' do
      it 'レコードが０ではないか' do
        expect(User.exists?).to eq true
      end
    end

  end

end

