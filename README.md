# jQuery.ykMaterialDesign

### jQuery Plugin ###
Google Material風ボタンアクションを実装します

http://www.google.com/design/spec/animation/

``` html
<script src='jquery.min.js'></script>
<script src='jQuery.ykMaterialDesign.js'></script>
<link href='jQuery.ykMaterialDesign.css' rel='stylesheet' >
```
``` javascript
<script>
  $(selector).ykMaterialDesign();
</script>
```
``` html
<div class="uniBtn md-button md-circle-gray">
ボタン
</div>  
```
クリックエフェクト

+ `md-circle-white` : 白波紋
+ `md-circle-gray` : グレー波紋
+ `md-icon-rotate` : 回転

## Example
``` html
<div class="uniBtn md-button md-circle-gray">
sign up
</div>  
<div class="md-button md-circle-white">
    <img src="http://www.trendir.com/outdoors/outdoor-glass-art-swon-design-2.jpg" width="300px"/>
</div>
<div 
    class="uniIcon md-button md-icon-rotate" 
    data-md-before-img="https://cdn4.iconfinder.com/data/icons/miu/22/editor_list_view_hambuger_menu_-48.png"
    data-md-after-img="https://cdn1.iconfinder.com/data/icons/material-core/16/arrow-back-48.png"
    data-md-width="50"
    data-md-height="50">
</div>     
```

### JSFIDDLE
http://jsfiddle.net/3nap8a0s/11/


## License

Copyright(c) 2014 Yuki Kuroki  
Licensed under the MIT license.

