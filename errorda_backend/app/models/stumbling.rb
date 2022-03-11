class Stumbling < ApplicationRecord

    belongs_to :user, primary_key: :name, foreign_key: :user_name #userテーブルと１対多の関係(stumblingが多)

end

#ActiveRecordクラスはDBとやり取りする際に必要なSQL構文を翻訳する機能を持っている。
