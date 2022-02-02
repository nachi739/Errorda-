# Error解決の個人辞書（Error解決の成長の見える化）

# 機能要件
・Error解決スタートから解決までのレコーディング<br>
・レコーディングしたものをインデックス化<br>
・インデックス化されたものの集計と帳票<br>



# 基本設計
・遷移UIフロー<br>
![EErrorda!!遷移フロー図](https://user-images.githubusercontent.com/75469934/152122934-9893a020-99c6-4421-aa54-d00b5c42e150.jpeg)
 <br>
  ・処理フロー<br>
  ![処理フロー図(2)](https://user-images.githubusercontent.com/75469934/152151304-99aac1e8-5a79-42dd-b105-2305d0cd1015.jpeg)
<br>


・拡張機能側<br>
-アイコンの追加<br>
-ポップアップ画面の表示<br>
-開始・終了・一覧ボタンの追加<br>
・バックエンド側<br>
-集計<br>
-ダッシュボードで表示する中身のデータをAPIで取得<br>

・選択した技術<br>
JavaScript <br>
（Chrome拡張機能を利用するため）<br>
PHP + Laravel <br>
(情報が多いため)<br>
Heroku <br>
(簡易的に実現するため)<br>




# 実装計画<br>
・拡張機能側のアイコン・ポップアップ表示の作成<br>
実装工数：　日<br>

