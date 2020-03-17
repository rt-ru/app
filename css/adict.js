$(document).ready(function () {

        var errors = [];
        var firstTouch = true;
        const forms = $("form");
        var lang = $('meta[name=lang]').length ? $('meta[name=lang]').attr('content') : $('html').attr('lang');

        getCountries('countries.json', forms);

        const msg = {
            ru:{
                "f_name":"имя не заполнено",
                "l_name":"фамииля не заполнена",
                "email":"email не заполнен",
                "phone":"телефон не заполнен",
                "conditions": "не выбрано",
                "age":"не выбрано",
            },
            en:{
                "f_name":"first name is required",
                "l_name":"last name is required",
                "email": "e-mail is required",
                "phone": "phone is required",
                "conditions": "missed",
                "age":"missed",
            },
            es:{
                "f_name":"Se requiere el nombre",
                "l_name":"Se requiere el apellido",
                "email": "Se requiere el e-mail",
                "phone": "Se requiere el teléfono",
                "conditions": "missed",
                "age":"missed",
            }
        }


        $("form").each((e)=>{
            var form = $(this);

            validateInputs(form);
            $(form).on("submit","[type='submit']", function(event){
                event.preventDefault();
            })

            $(form).unbind("click").on("click","[type='submit']", function(event){
                event.preventDefault();
                var form = $(this).closest("form"),
                    handlerAddress = $(form).attr("action"),
                    data = $(form).serializeArray(),
                    code = $(form).find(".iti__selected-dial-code").text();
                data = $.map( data, function( it, i ) {
                    if(it.name === 'phone'){
                        return {name: 'phone', value: code + it.value}
                    }
                    return it;
                });

                if(!handlerAddress){
                    console.error('No "action" attribute was set in the form!');
                    return false;
                }

                method = $(form).attr("method") ? $(form).attr("method") : "POST";
                $(form).attr("method", method);

                validateInputs(form);
                if ( errors.length ) return false;

                startLoadingSpinner();
                $(form).find('[type="submit"]').attr('disabled','disabled');


                let email = getEmail(data),
                    emailUrl = `https://crm.jokermg.com/Test_api/isEmailExist2?email=${email}`;
                axios
                    .get(`${emailUrl}`)
                    .then((response) => {
                        if (response.data.success) {
                            var tel = $(form).find('input[type="tel"]').val();
                            $(form).find('input[type="tel"]').val(code + tel);
                            $(form).submit();
                        }else{
                            let inputEmail = $(form).find('input[name="email"]').closest(".form-group");
                            let notif = $("<span class='warning-notification' style='color: white'>Такой емейл уже был использован! Введите другой.</span>");
                            inputEmail.append(notif);
                            $(notif).fadeIn();
                            setTimeout(()=>{
                                $(notif).fadeOut();

                            },1500);
                            console.error('email exists');
                            $(form).find('[type="submit"]').prop("disabled", false);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        stopLoading();
                    });

            });
        })

        function getEmail(data) {
            let res = null;
            data.forEach((it,i)=>{
                if(it.hasOwnProperty('name') && it.name === 'email') res = it.value;
            })
            return res;
        }



        function validateInputs(form){
            errors = [];

            var inputs = $(form).find(':input:not([type="hidden"])').not('input[type="submit"]');
            inputs = Array.from(inputs);
            inputs.forEach(function(el){
                var value = el.value;
                var type  = el.name;

                switch(type){
                    case "l_name":
                    case "f_name":
                        var check =  /([^\s !@#\$%\^\&*\ ]+?){2,}/.test(value);
                        if( !check ){
                            errors.push(type);
                            errNotify(el);
                        }else{
                            clearInputErrors(el);
                        }
                        break;
                    case "email":
                        var check = /^([a-zA-Z0-9_\.]{2,}@[\D]{1,}\..+)$/.test(value);
                        if( !check ){
                            errors.push(type);
                            errNotify(el);
                        }else{
                            clearInputErrors(el);
                        }
                        break;
                    case "phone":

                        value = value.replace(/\D./g, '');
                        $(el).val(value);

                        fbq('track', 'InitiateCheckout');

                        var attr = $(el).attr("data-intl-tel-input-id"),
                            pattern = $(el).attr("placeholder");

                        if (window.intlTelInputUtils !== undefined && typeof attr !== typeof undefined && attr !== false) {
                            if(pattern) {
                                var
                                    tail = pattern.replace(new RegExp('-| ', 'g'),''),
                                    tailLen = pattern.replace(new RegExp('-| ', 'g'),'').length;

                                if(value.length >= tail.length){
                                    value = value.slice(0, tailLen);
                                    $(el).val(value);
                                }
                                $(el).val(value);

                                var check = value.match(new RegExp(`^[0-9]{${tailLen}}$`));
                                if (!check) {
                                    errors.push(type);
                                    errNotify(el);
                                }else{
                                    clearInputErrors(el);
                                }
                            }else{
                                errors.push(type);
                            }

                        }else{
                            var check = /^(\+?[0-9 -]{4,})$/.test(value);
                            if (!check) {
                                errors.push(type);
                                errNotify(el);
                            }else{
                                clearInputErrors(el);
                            }
                        }
                        break;
                    case "conditions":
                    case "age":
                        var isChecked = $(el).prop('checked') == false;
                        if(isChecked){
                            errors.push(type);
                            $(el).addClass('shake');
                            setTimeout(()=>{$(el).removeClass('shake')}, 500);
                            errNotify(el);
                        }else{
                            clearInputErrors(el);
                        }
                        break;
                    default: return false;
                }

            });

            if(errors.length){
                form.addClass('not-validated');
                $(form).find("[type='submit']").attr('disabled', 'disabled');
            }else{
                form.removeClass('not-validated');
                $(form).find("[type='submit']").removeAttr('disabled');
            }
        }


        jQuery(document).on("propertychange input",":input:not([type='hidden'])", function (e) {
            var valueChanged = false;
            firstTouch = false;

            if (e.type=="propertychange") {
                valueChanged = e.originalEvent.propertyName=="value";
            } else {
                valueChanged = true;
            }
            if (valueChanged) {
                $(this).addClass('chckd');
                validateInputs($(this).closest("form"));
            }
        });

        function errNotify(el){
            var type = $(el).attr("name");
            var message = `${msg[lang][type]}`;

            $errorContainer = `<span class="${type}-error-message error-message"> ${message} </span>`;

            if(!firstTouch && $(el).hasClass('chckd') && ($(el).closest(".form-group").find(".error-message").length) == 0) {
                $(el).addClass("err");
            }
        }

        function clearInputErrors(el) {
            var type = $(el).attr("name");
            $(el).removeClass("err");
            $(el).closest("form").find(`.${type}-error-message`).remove();
        }

        function startLoadingSpinner(){
            $('<div id="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>').appendTo('body');
        }
        function stopLoading(){
            $('body').find("#spinner").remove();
        }



        function getCountries(filePath, forms){
            $.getJSON(filePath, (allCountries)=>{
                var iti = [],
                    initialCheckout = true,
                    countryCode = null,
                    noErrors = false;

                function getCounty(countryCode) {
                    for (var i = 0; i < allCountries.length; i++) {
                        if (allCountries[i][1] == countryCode) {
                            $('.gtd-geo-country-name').html(allCountries[i][0].split(' ')[0]);
                        }
                    }
                }

                $.get("https://ipinfo.io?token=c80bf220eab51f", function () {}, "jsonp")
                    .always(function (resp) {
                        countryCode = (resp && resp.country) ? resp.country : "";
                        var _country = getCounty(countryCode.toLowerCase());

                        //hard-core shit
                        _country = 'ru';

                        $('.iti__flag_add').addClass('iti__' + _country);

                        for(var i=0; i< forms.length; i++){
                            inetlStart(forms[i]);
                        }

                    });

                function inetlStart(form) {
                    var inputs = $(form).find('input[name=phone]');
                    var acceptCountry = lang == 'ar' ? ["ye", "kw", "ae", "bh", "qa", "om", "sa"] : ["RU", "KZ", "IS", "GB", "IE", "NO", "SE", "FI", "PT", "ES", "FR", "IT", "NL", "DK", "DE", "CH", "AT", "CZ", "HU", "LU", "LT", "LV", "EE", "LI", "BA", "SK", "SI", "GR"]
                    $('meta[name=bush]').length ? acceptCountry = ["NZ", "AU", "NL", "SE", "CH", "NO", "IE", "GB", "DK", "LU"] : '';
                    $('meta[name=addCountries]').length ? $('meta[name=addCountries]').attr('data-countries').split(',').map(function (el) {
                        acceptCountry.push(el);
                    }) : '' ;
                    if(lang == 'en') {
                        acceptCountry =  acceptCountry.concat(["NZ","AU","BE" ])
                    }

                    for (var i = 0; i < inputs.length; i++) {
                        iti[i] = intlTelInput(inputs[i], {
                            utilsScript: "https://cdn-cloudflare.world/adict/utils.js",
                            initialCountry: "auto",
                            separateDialCode: true,
                            onlyCountries: acceptCountry,
                            coutryCode: true,
                            geoIpLookup: function (success, failure) {
                                countryCode.toLowerCase() == 'ua' ? countryCode = acceptCountry[0] : '';

                                //hardcore shit!!
                                success('ru');
                            },
                        });
                        inputs[i].setAttribute('data-iti', i);
                        inputs[i].addEventListener('input', function () {
                            var p = ~~this.getAttribute('data-iti');

                            if(initialCheckout) {
                                initialCheckout = false;
                            }

                            if(!firstTouch) {
                                var _noErrors = (($(form).find('.err').length == 0) && ($(form).find('.err-tel').length == 0));
                                if (!_noErrors) {
                                    $(form).find('[type="submit"]').attr("disabled", "disabled");
                                } else {
                                    $(form).find('[type="submit"]').removeAttr("disabled");
                                }
                            }

                        });
                    }
                }
            })
                .fail(function(e) {
                    console.error(`Файл ${filePath} не найден!`);
                });
        }




    if ($('.alterlink')) {
        $('body').append('<div class="pop-outer">\n' +
            '    <div class="pop-bg"></div>\n' +
            '    <div class="pop-inner">\n' +
            '        <div class="pop-close">X</div>\n' +
            '        <div class="pop-inner__in">\n' +
            '\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>')
    }
    $('.alterlink').click(function (e) {
        e.preventDefault();
        var pol = $(this).attr('href');
        var nam = $(this).html();
        posY = $(window).scrollTop();
        $('body').css({
            overflow: 'hidden'
        })
        $.ajax({
            type: 'post',
            url: pol,
            success: function (res) {
                $('.pop-outer').addClass('active');
                $('.pop-inner__in ').html(res);
            }
        })

    })

    $('.pop-close').click(closePop);
    $('.pop-bg').click(closePop);

    function closePop() {
        $('body').css({
            overflow: 'auto'
        })
        $('html, body').animate({
            scrollTop: posY + 'px'
        }, 0)
        $('.pop-inner__in ').animate({
            scrollTop: 0 + 'px'
        }, 0)
        $('.pop-outer').removeClass('active');
        $('.pop-inner__in ').html(' ');
    }


    var posY = 0;

    $('.cookie').click(function () {
        posY = $(window).scrollTop();
        $('body').css({
            overflow: 'hidden'
        })
        $('.cookie-policy-pop').addClass('modal-open');
    });

    $('.terms__close').click(function () {
        $('body').css({
            overflow: 'auto'
        })
        $('html, body').animate({
            scrollTop: posY + 'px'
        }, 0)
        $('.terms').removeClass('modal-open').css('display', 'none');
        $('.modal-bg').addClass('modal-open').css('display', 'none');
    })

    $('.scroll-top-btn').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.hero').offset().top + 'px'
        }, 500)
    })


    $('.pops').click(function () {
        posY = $(window).scrollTop();
        $('body').css({
            overflow: 'hidden'
        })
        var r = $(this).attr('data-pop');
        $('.terms[data-pop=' + r + ']').addClass('modal-open').css('display', 'block');
        $('.modal-bg').addClass('modal-open').css('display', 'block');
    })


    window.onscroll = function () {
        $(window).scrollTop() > 200 ? $('.navBarSlider').addClass('slided') : $('.navBarSlider').removeClass('slided');
    }
    if ($.exitIntent) {
        $.exitIntent('enable');
        var fr = false;
        var timeout = 120000;
        if($('html').hasClass('test')) {
            timeout = 1000;
        }

        $('.exit_popup .close').click(function () {
            posY = $(window).scrollTop();
            $('.exit_popup').hide().css('display', 'none');
            $('.modal-bg').addClass('modal-open').css('display', 'none');
        });
        function timeoutWait(){
            setTimeout(function () {
                fr = true
            },timeout)
        }timeoutWait()

        $(document).bind('exitintent', function () {
            if (!fr) {
                return
            }
            fr = false;
            timeoutWait();
            posY = $(window).scrollTop();
            $('.exit_popup').show().css('display', 'block');
            $('.modal-bg').addClass('modal-open').css('display', 'block');
        });

    }


    $('.video-insert').each(function () {
        let vid = $(this).attr('data-video');
        let video = $('<video/>');
        let poster = $(this).attr('data-poster');
        video.attr('src', vid);
        video.attr('playsinline', true);
        video.attr('controls', true);
        video.attr('preload', 'none');
        video.attr('allowfullscreen', 'true');
        poster ? video.attr('poster', poster) : '';
        video.css({
            width: '100%',
            height: '100%'
        });
        $(this).append(video);
        let playBtn = $('<div/>');
        playBtn.addClass('play-btn');
        $(this).append(playBtn);
    })

    let playBtns = document.querySelectorAll('.play-btn');

    for (var i = 0; i < playBtns.length; i++) {
        playBtns[i].addEventListener('click', function () {
            let videoEl = this.parentNode.querySelector('video');
            if (videoEl.paused) {
                videoEl.play();
                this.parentNode.classList.add('play')
            } else {
                videoEl.pause();
                this.parentNode.classList.remove('play')
            }
        })
    }





})

if($('#youtube-insert').length) {
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtube-insert', {
            height: '360',
            width: '640',
            videoId: $('#youtube-insert').attr('data-video'),
            events: {
                'onReady': onPlayerReady,
            },
            playerVars: {
                controls:0,
                loop:1,
                modestbranding:1,
                rel:0,
                showinfo:0
            }
        });
    }

    function onPlayerReady(event) {
        $('.over').click(function () {
            console.log(player, player.getPlayerState());
            if (player.getPlayerState() != 1) {
                player.playVideo();
            }else {
                player.pauseVideo();

            }
        })
    }
}