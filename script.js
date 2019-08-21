$(document).ready(function() {
    $("#can-vd2").on('touchstart click', function() {
        //$('.video-wrap').css('display','none');
        if (_liveContainer == '') {
            _liveContainer = $('.video-wrap').clone();
        }
        $('.video-wrap').remove();       
        $('#livebtbox').show();
        sessionStorage.setItem('lvtvbtn', '1');
    });

    $(document).delegate("#can-vd2", "touchstart click", function() {
        $('.video-wrap').remove();
        $('#livebtbox').show();
    });

    var _liveContainer = '';
    if (sessionStorage.getItem('lvtvbtn') == '1') {
        //console.log("lvtvbtn on page change" + sessionStorage.getItem('lvtvbtn'));
        _liveContainer = $('.video-wrap').clone();
        $('.video-wrap').remove();
        $('#livebtbox').show();
    } else {
        //console.log('else condion called');
        $('.video-wrap').show();
    }

    $(document).delegate("#video-expand", "touchstart click", function() {
        document.getElementById('liveembed').contentWindow.goFullscreen("players");
    });

    $("#live-bt a").on('touchstart click', function() {
        $(_liveContainer).insertBefore("#livebtbox");
        sessionStorage.setItem('lvtvbtn', '0');
        $('.video-wrap').show();
        
        $('#livebtbox').hide();
    });

    $("#video-expand").on('touchstart click', function() {
        document.getElementById('liveembed').contentWindow.goFullscreen("players");
    });
});