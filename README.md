# Animel is Responsive SPA sample
Animel is using React, Redux, Material-UI, etc...

スマホ・PCに対応した、シングルページアプリケーション（SPA）です。
ボタンを押下すると[ShangriLa Anime API](https://qiita.com/AKB428/items/64938febfd4dcf6ea698)を叩いて今期のアニメ情報を取得してきて表示するというシンプルなアプリ。昨今はモバイルファーストの世の中なのでモバイルを意識しつつもPCで表示できるようにレスポンシブなアプリにしています。

作り方などは[こちら](https://blog.f-arts.work/archives/791)にまとめておりますのでご参考下さい。

## ソフトウェア構成
```
react：16.4.2（React）
react-router：4.3.1（URL遷移本体）
react-router-dom：4.3.1（URL遷移（Web））
redux：4.0.0（Redux）
react-redux：5.0.7（Redux × React）
redux-thunk：2.3.（Redux × API）
material-ui：1.5.1（マテリアルデザインの見た目に）
axios：0.18.0（API叩く）
react-copy-to-clipboard：5.0.1（クリップボードにコピー）
react-custom-scrollbars：4.2.1（ネイティブっぽいスクロールバー）
react-share：2.3.1（SNSシェアボタン）
react-ga：2.5.3（Google Analystics）
react-adsense：0.0.6（Google Adsense）
```
