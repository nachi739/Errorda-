class CreateStumblings < ActiveRecord::Migration[6.1]
  def change
    create_table :stumblings do |t|

      t.string :user_name
      t.text :search_key #仮タイトル
      t.string :dictiorary_key #本タイトル
      t.datetime :end_time #Error解決終了時刻のため
      t.timestamps #create_atでError解決開始時刻
    end
  end
end
