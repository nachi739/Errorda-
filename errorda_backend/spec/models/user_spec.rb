require 'rails_helper'

RSpec.describe User, type: :model do
  before do
    @user = FactoryBot.create(:user)
    @stumbling = FactoryBot.create(:stumbling)
  end
  describe 'ユーザーmodelについてのテスト' do
    context '保存後' do
      it 'レコードが０ではないか' do
        expect(User.exists?).to eq true
      end
      it 'nameの値の保存の確認' do
        expect(@user.name).to eq 'test'
      end
      it 'idの確認' do
        expect(@user.id).to eq @user.id
      end
      it 'created_atの確認' do
        expect(@user.created_at).to eq @user.created_at
      end
      it 'updated_atの確認' do
        expect(@user.updated_at).to eq @user.updated_at
      end
    end
  end
end

