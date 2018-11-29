document.addEventListener('readystatechange', function () {
    if (document.readyState == 'complete') {

        var overlayStyle = "\
            .area-overlay-mob {\
                position: fixed;\
                display: none;\
                width: 100%;\
                height: 100%;\
                top: 0;\
                left: 0;\
                right: 0;\
                bottom: 0;\
                background-color: rgba(0, 0, 0, 0.50); \
                z-index: 9999999 !important;\
            }\
            .image-ads-mob {\
                width: 250px;\
                height: 250px;\
                position: relative;\
                top: 50%;\
                left: 50%;\
                transform: translate(-50%,-50%);\
                -ms-transform: translate(-50%,-50%);\
            }\
            .image-ads-mob img {\
                max-width: 100%;\
                max-height: 100%;\
            }\
            .close-overlay-mob img{\
                position: absolute;\
                width: 8%;\
                right: 0px;\
                bottom: 240px;\
                left: 240px;\
                cursor: pointer;\
            }\
             .zoomIn {\
                -webkit-animation-name: zoomIn;\
                animation-name: zoomIn;\
            }\
            .animated {\
                -webkit-animation-duration: 0.3s;\
                animation-duration: 0.3s;\
                -webkit-animation-fill-mode: both;\
                animation-fill-mode: both;\
            }\
            @-webkit-keyframes zoomIn {\
                from {\
                    opacity: 0;\
                    -webkit-transform: scale3d(0.3, 0.3, 0.3);\
                    transform: scale3d(0.3, 0.3, 0.3);\
                }\
                50% {\
                    opacity: 1;\
                }\
            }\
            @keyframes zoomIn {\
                from {\
                    opacity: 0;\
                    -webkit-transform: scale3d(0.3, 0.3, 0.3);\
                    transform: scale3d(0.3, 0.3, 0.3);\
                }\
                50% {\
                    opacity: 1;\
                }\
            }";

        var overlayElementStyle = parent.document.createElement('style');
        overlayElementStyle.type = 'text/css';
        overlayElementStyle.appendChild(document.createTextNode(overlayStyle));
        parent.document.getElementsByTagName('head')[0].appendChild(overlayElementStyle);

        var overlayTemplate = '\
            <div class="image-ads-mob" id="image-ads-mob">\
                <div class="close-overlay-mob" id="close-overlay-mob" onclick="offOverlay()"><img src="[%ButtonClose%]" alt="close"></div>\
                <a target="_blank" href="%%CLICK_URL_UNESC%%[%LandingPage%]">\
                    <img src="[%FileImage%]" alt="images ads">\
                </a>\
                <img src="%%VIEW_URL_UNESC%%" style="display:none">\
            </div>';

        var overlayElementTemplate = parent.document.createElement('div');
        overlayElementTemplate.innerHTML = overlayTemplate;
        overlayElementTemplate.setAttribute('class', 'area-overlay-mob zoomIn animated');
        overlayElementTemplate.setAttribute('id', 'area-overlay-mob');
        overlayElementTemplate.setAttribute('onClick', 'offOverlay()');
        parent.document.querySelector('div.overlay-mobile').parentNode.insertBefore(overlayElementTemplate, parent.document.querySelector('div.overlay-mobile'));

        var overlayScript = '\
            onOverlay();\
            function onOverlay() {\
                document.getElementById("area-overlay-mob").style.display = "block";\
                console.log("open overlay");\
                    setTimeout(function () {\
                    document.getElementById("area-overlay-mob").style.display = "none";\
                    console.log("auto close overlay");\
                }, 15000);\
            }\
            function offOverlay() {\
                document.getElementById("area-overlay-mob").style.display = "none";\
                console.log("close overlay");\
            }';

        var overlayElementScript = parent.document.createElement('script');
        overlayElementScript.text = overlayScript;
        parent.document.getElementsByTagName('head')[0].appendChild(overlayElementScript);
        console.log('draw overlay mobile');

    }
})