/*
  Serverless 3D Minecraft Skin
  Copyright (c) 2014, James Mortemore <jamesmortemore@gmail.com>
  Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is
  hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE
  INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE
  FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
  OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING
  OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

  Based on minecraft skins in html5 canvas tags by Kent Rasmussen @ earthiverse.ath.cx
 */
(function($) {
  var pluginName = 'minecraftSkin'
  /* jslint maxlen: 2414 */
    , steveImg = 'data:image/png;base64,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'

  var methods =
    { init: function(options) {
      return this.each(function () {
        var $this = $(this)
          , data = $this.data(pluginName)
          , settings = {}

        // If the plugin hasn't been initialized yet
        if (!data) {
          settings =
            { scale: 6
            , hat: true
            , draw : 'model'
            }

          if(options) $.extend(true, settings, options)
        }

        settings.username = $this.data('minecraft-username')

        if ($this.data('minecraft-scale')) settings.scale = $this.data('minecraft-scale')
        if ($this.data('minecraft-draw')) settings.draw = $this.data('minecraft-draw')

        // Check if valid drawing set
        if (settings.draw !== 'head' && settings.draw !== 'model') settings.draw = 'model'

        // Request the data
        methods.requestData('http://s3.amazonaws.com/MinecraftSkins/' + settings.username + '.png', $this, settings)
      })
    }
    , buildImage: function(imgData, $this, settings) {
      // Failed to respond
      if(!imgData) return

      // Create the canvas
      var canvas = document.createElement('canvas')
        , scratchCanv = document.createElement('canvas')
        , model = canvas.getContext('2d')
        , scratch = scratchCanv.getContext('2d')
        , skin = new Image()
        , heightMultiplier = settings.draw === 'head' ? 17.6 : 44.8

      canvas.setAttribute('class', 'model')

      // Resize Scratch
      scratchCanv.setAttribute('width', 64 * settings.scale)
      scratchCanv.setAttribute('height', 32 * settings.scale)
      scratchCanv.setAttribute('class', 'scratch')

      // Resize Isometric Area (Found by trial and error)
      canvas.setAttribute('width', 20 * settings.scale)
      canvas.setAttribute('height', heightMultiplier * settings.scale)

      $this.append(canvas)
      $this.append(scratchCanv)

      skin.onload = function () {
        scratch.drawImage(skin, 0, 0, 64, 32, 0, 0, 64, 32)

        // Scale it
        scaleImage(scratch.getImageData(0, 0, 64, 32), scratch, 0, 0, settings.scale)

        // Draw the skin
        if(settings.draw === 'model') {
          methods.drawModel(model, scratchCanv, scratch, settings.hat, settings.scale)
        } else {
          methods.drawHead(model, scratchCanv, scratch, settings.hat, settings.scale)
        }
      }

      skin.src = imgData
    }
    , requestData: function(username, $this, settings) {
        var query = encodeURIComponent('SELECT * FROM data.uri WHERE url = "' + username + '"')
          , yql = 'http://query.yahooapis.com/v1/public/yql?q=' + query + '&format=json&callback=?'

        $.getJSON(yql, function (data) {
          if (data.query.results.url) {
            var imgData = data.query.results.url

            // Convert MIME
            imgData = imgData.replace('application/octet-stream', 'image/png')
            methods.buildImage(imgData, $this, settings)
          } else {
            methods.buildImage(steveImg, $this, settings)
          }
        }).fail(function () {
          methods.buildImage(steveImg, $this, settings)
        })
      }
    , drawHead: function (model, scratchCanv, scratch, showHat, scale) {
        var scaleEight = 8 * scale
        // Head - Front
        model.setTransform(1, -0.5, 0, 1.2, 0, 0)
        model.drawImage
          ( scratchCanv
          , scaleEight
          , scaleEight
          , scaleEight
          , scaleEight
          , 10 * scale
          , 13/1.2 * scale
          , scaleEight
          , scaleEight
          )

        // Head - Right
        model.setTransform(1, 0.5, 0, 1.2, 0, 0)
        model.drawImage
          ( scratchCanv
          , 0
          , scaleEight
          , scaleEight
          , scaleEight
          , 2 * scale
          , 3/1.2 * scale
          , scaleEight
          , scaleEight
          )

        // Head - Top
        model.setTransform(-1, 0.5, 1, 0.5, 0, 0)
        model.scale(-1, 1)
        model.drawImage
          ( scratchCanv
          , scaleEight
          , 0
          , scaleEight
          , scaleEight
          , -3 * scale
          , 5 * scale
          , scaleEight
          , scaleEight
          )

        if (!showHat) return

        // Hat - Front
        model.setTransform(1, -0.5, 0, 1.2, 0, 0)
        model.drawImage
          ( scratchCanv
          , 40 * scale
          , scaleEight
          , scaleEight
          , scaleEight
          , 10 * scale
          , 13/1.2 * scale
          , scaleEight
          , scaleEight
          )

        // Hat - Right
        model.setTransform(1, 0.5, 0, 1.2, 0, 0)
        model.drawImage
          ( scratchCanv
          , 32 * scale
          , scaleEight
          , scaleEight
          , scaleEight
          , 2 * scale
          , 3/1.2 * scale
          , scaleEight
          , scaleEight
          )

        // Hat - Top
        model.setTransform(-1, 0.5, 1, 0.5, 0, 0)
        model.scale(-1, 1)
        model.drawImage
          ( scratchCanv
          , 40 * scale
          , 0
          , scaleEight
          , scaleEight
          , -3 * scale
          , 5 * scale
          , scaleEight
          , scaleEight
          )
      }
    , drawModel: function(model, scratchCanv, scratch, showHat, scale) {
        var scaleEight = 8 * scale

        // Left Leg
        // Left Leg - Front
        model.setTransform(1, -0.5, 0, 1.2, 0, 0)
        model.scale(-1, 1)
        model.drawImage
          ( scratchCanv
          , 4 * scale
          , 20 * scale
          , 4 * scale
          , 12 * scale
          , -16 * scale
          , 34.4/1.2 * scale
          , 4 * scale
          , 12 * scale
          )

        // Right Leg
        // Right Leg - Right
        model.setTransform(1, 0.5, 0, 1.2, 0, 0)
        model.drawImage
          ( scratchCanv
          , 0 * scale
          , 20 * scale
          , 4 * scale
          , 12 * scale
          , 4 * scale
          , 26.4/1.2 * scale
          , 4 * scale
          , 12 * scale
          )

        // Right Leg - Front
        model.setTransform(1, -0.5 ,0, 1.2, 0, 0)
        model.drawImage
          ( scratchCanv
          , 4 * scale
          , 20 * scale
          , 4 * scale
          , 12 * scale
          , 8 * scale
          , 34.4/1.2 * scale
          , 4 * scale
          , 12 * scale
          )

        // Arm Left
        // Arm Left - Front
        model.setTransform(1, -0.5, 0, 1.2, 0, 0)
        model.scale(-1, 1)
        model.drawImage
          ( scratchCanv
          , 44 * scale
          , 20 * scale
          , 4 * scale
          , 12 * scale
          , -20 * scale
          , 20/1.2 * scale
          , 4 * scale
          , 12 * scale
          )

        // Arm Left - Top
        model.setTransform(-1, 0.5, 1, 0.5, 0, 0)
        model.drawImage
          ( scratchCanv
          , 44 * scale
          , 16 * scale
          , 4 * scale
          , 4 * scale
          , 0
          , 16 * scale
          , 4 * scale
          , 4 * scale
          )

        // Body
        // Body - Front
        model.setTransform(1, -0.5, 0, 1.2, 0, 0)
        model.drawImage
          ( scratchCanv
          , 20 * scale
          , 20 * scale
          , 8 * scale
          , 12 * scale
          , 8 * scale
          , 20/1.2 * scale
          , scaleEight
          , 12 * scale
          )

        // Arm Right
        // Arm Right - Right
        model.setTransform(1, 0.5, 0, 1.2, 0, 0)
        model.drawImage
          ( scratchCanv
          , 40 * scale
          , 20 * scale
          , 4 * scale
          , 12 * scale
          , 0
          , 16/1.2 * scale
          , 4 * scale
          , 12 * scale
          )

        // Arm Right - Front
        model.setTransform(1, -0.5, 0, 1.2, 0, 0)
        model.drawImage
          ( scratchCanv
          , 44 * scale
          , 20 * scale
          , 4 * scale
          , 12 * scale
          , 4 * scale
          , 20/1.2 * scale
          , 4 * scale
          , 12 * scale
          )

        // Arm Right - Top
        model.setTransform(-1, 0.5, 1, 0.5, 0, 0)
        model.scale(-1 ,1)
        model.drawImage
          ( scratchCanv
          , 44 * scale
          , 16 * scale
          , 4 * scale
          , 4 * scale
          , -16 * scale
          , 16 * scale
          , 4 * scale
          , 4 * scale
          )

        methods.drawHead(model, scratchCanv, scratch, showHat, scale)
      }

  }

  //Scales using nearest neighbour
  function scaleImage(imageData, context, dx, dy, scale) {
    var width = imageData.width
      , height = imageData.height

    context.clearRect(0, 0, width, height) //Clear the spot where it originated from

    for (var y = 0; y < height; y++) { // Height original
      for (var x = 0; x < width; x++) { // Width original
        // Gets original colour, then makes a scaled square of the same colour
        var index = (x + y * width) * 4
          , fill = imageData.data[index]

        fill += ',' + imageData.data[index + 1] + ',' + imageData.data[index + 2] + ',' + imageData.data[index + 3]

        context.fillStyle = 'rgba(' + fill + ')'
        context.fillRect(dx + x * scale, dy + y * scale, scale, scale)
      }
    }
  }

  $.fn[pluginName] = function( method ) {
    if (methods[method]) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ))
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments)
    } else {
      $.error('Method ' + method + ' does not exist in jQuery.' + pluginName)
    }
  }
})( jQuery )
