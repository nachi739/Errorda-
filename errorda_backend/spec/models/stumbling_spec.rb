require 'rails_helper'

RSpec.describe Stumbling, type: :model do
  # #let(:stumbling) { FactoryBot.create(:stumbling) }
    before do
      @user = FactoryBot.create(:user)
      @stumbling = FactoryBot.create(:stumbling)
    end
    describe 'Stumbling modelについてのテスト' do
      context '保存後' do
        it 'レコードが０ではないか' do
          expect(Stumbling.exists?).to eq true
        end
        it 'user.nameとuser_nameが一致するか' do
          expect(@user.name).to eq @stumbling.user_name
        end
        it '作成直後end_timeはnilか' do
          expect(@stumbling.end_time).to eq nil
        end
      end
    end
end
