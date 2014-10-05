Requires no server side code to run. Uses YQL (Yahoo Query) to download the skin and create the 3D model all in the browser via canvas.

bower
-----
```bower install jquery.serverless-mc-skin-viewer --save```

Demo
----
http://jamesmortemore.com/mcskinviewer/

Usage
-----
```
<script src="jquery.js" type="text/javascript"></script>
<script src="jquery.minecraftskin.js" type="text/javascript"></script>
<script type="text/javascript">
    $(function() {
        $(".mc-skin").minecraftSkin({scale: 6, hat: true});
    });
</script>
<style>
.scratch {
    display:none;
}
</style>
<span class="mc-skin" data-minecraft-username="confuserr"></span>
```

Change scale to change the size. Set hat to false if you don't want the hat to display.

Note
----
* As this uses YQL please note their usage policy which can be found [here] [1].
* For IE support, include excanvas.

[1]: http://developer.yahoo.com/yql/guide/usage_info_limits.html "here"
