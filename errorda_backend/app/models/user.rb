class User < ApplicationRecord

    has_many :stumblings, primary_key: :name, foreign_key: :user_name #stumblingsテーブルに対して１対多の関係(userが１)

end

#ActiveRecordクラスはDBとやり取りする際に必要なSQL構文を翻訳する機能を持っている。