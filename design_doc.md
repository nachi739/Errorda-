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
 ![処理フロー図](https://user-images.githubusercontent.com/75469934/152130169-f2e789b3-f88a-4a95-a72e-a0a18b9b15e4.jpeg)
<br>


・拡張機能側<br>
-検索窓の追加<br>
-アイコンの追加<br>
-別ウィンドウでのダッシュボードの表示<br>
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




# 実装計画
