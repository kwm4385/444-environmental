import $  from 'jquery'
import React  from 'react'

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
    $.fn.extend({
        html5_qrcode: function(qrcodeSuccess, qrcodeError, videoError) {
            return this.each(function() {
                var currentElem = $(this),
                    height = currentElem.height(),
                    width = currentElem.width();
                null == height && (height = 250), null == width && (width = 300);
                var localMediaStream, vidElem = $('<video autoplay=autoplay width="' + width + 'px" height="' + height + 'px"></video>').appendTo(currentElem),
                    canvasElem = $('<canvas id="qr-canvas" width="' + (width - 2) + 'px" height="' + (height - 2) + 'px" style="display:none;"></canvas>').appendTo(currentElem),
                    video = vidElem[0],
                    canvas = canvasElem[0],
                    context = canvas.getContext("2d"),
                    scan = function() {
                        if (localMediaStream) {
                            context.drawImage(video, 0, 0, 307, 250);
                            try {
                              var qrcode = require('jsqrcode')(canvas);
                              let result = qrcode.decode(canvas);
                              qrcodeSuccess(result);
                            } catch (e) {
                              qrcodeError(e, localMediaStream)
                            }
                            $.data(currentElem[0], "timeout", setTimeout(scan, 500))
                        } else $.data(currentElem[0], "timeout", setTimeout(scan, 500))
                    };
                window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL, navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                var successCallback = function(stream) {
                    video.src = window.URL && window.URL.createObjectURL(stream) || stream, localMediaStream = stream, $.data(currentElem[0], "stream", stream), video.play(), $.data(currentElem[0], "timeout", setTimeout(scan, 1e3))
                };
                navigator.getUserMedia ? navigator.getUserMedia({
                    video: !0
                }, successCallback, function(error) {
                    videoError(error, localMediaStream)
                }) : alert("Native web camera streaming (getUserMedia) not supported in this browser.")
            })
        },
        html5_qrcode_stop: function() {
            return this.each(function() {
                $(this).data("stream").getVideoTracks().forEach(function(videoTrack) {
                    videoTrack.stop()
                }), clearTimeout($(this).data("timeout"))
            })
        }
    });
    $('#reader').html5_qrcode((data) => {
        this.props.onRead(data);
      },
      function(error){
          // console.log(error);
      }, function(videoError){
          alert(videoError);
      }
    );
  },

  componentWillUnmount() {
     $('#reader').html5_qrcode_stop();
  },

  render() {
    return (
      <div style={{width: '100%'}}>
        <div
        id="reader"
        style={{width: 300, height: 250, margin: '0 auto'}}>
        </div>
      </div>
    );
  }
});
