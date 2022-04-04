require 'rails_helper'

RSpec.describe Stumbling, type: :model do
  describe 'バリデーションのテスト' do
    # factoriesで作成したダミーデータを使用します。
    let(:user) { FactoryBot.create(:user) }
    let!(:stumbling) { build(:stumbling, user_id: user.id) }

    # test_postを作成し、空欄での登録ができるか確認します。
    subject { test_post.valid? }
    let(:test_post) { stumbling }
  end
end
