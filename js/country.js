	function cntr()
	{	
		if($("#flag").hasClass('iti__ua'))
		{
			$('#flag').removeClass();
			$('#flag').addClass('iti__flag');
			$('#flag').addClass("iti__ru");			
		}
		if($("#flag").hasClass('iti__ru'))
		{
			$(".maskNom").text("+7");
			$("#kodId").attr('value','+7');
			$("#inpCnt").attr('value','Россия');
			$("#tel1").attr('maxlength','10');
			$("#tel1").attr('pattern','[0-9]{10}');
			$("#tel1").attr('placeholder','123 456 78 90');			
			return;
		}
		if($("#flag").hasClass('iti__pl'))
		{		
			
			$("#inpCnt").attr('value','Польша');
			$(".maskNom").text("+48");
			$("#kodId").val("+48");			
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{9}');
			$("#tel1").attr('placeholder','123 456 789');
			return;
		}
		if($("#flag").hasClass('iti__at'))
		{
			
			$("#inpCnt").attr('value','Австрия');
			$(".maskNom").text("+43");
			$("#kodId").val("+43");				
			$("#tel1").attr('maxlength','13');
			$("#tel1").attr('pattern','[0-9]{4,13}');
			$("#tel1").attr('placeholder','123 456 78 90');
			return;
		}
		if($("#flag").hasClass('iti__al'))
		{			
			$("#inpCnt").attr('value','Албания');
			$(".maskNom").text("+355");
			$("#kodId").val("+355");			
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{8,9}');
			$("#tel1").attr('placeholder','123 456 789');
			return;
		}
		if($("#flag").hasClass('iti__ad'))
		{			
			$("#inpCnt").attr('value','Андорра');
			$(".maskNom").text("+376");
			$("#kodId").val("+376");			
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{9}');
			$("#tel1").attr('placeholder','123 456 789');
			return;
		}
		if($("#flag").hasClass('iti__by'))
		{
			
			$("#inpCnt").attr('value','Белоруссия');
			$(".maskNom").text("+375");
			$("#kodId").val("+375");			
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{9}');
			$("#tel1").attr('placeholder','123 456 789');
			return;
		}
		if($("#flag").hasClass('iti__be'))
		{			
			$("#inpCnt").attr('value','Бельгия');
			$(".maskNom").text("+32");
			$("#kodId").val("+32");			
			$("#tel1").attr('maxlength','12');
			$("#tel1").attr('pattern','[0-9]{8,12}');
			$("#tel1").attr('placeholder','123 456 78');
			return;
		}
		if($("#flag").hasClass('iti__bg'))
		{
			
			$("#inpCnt").attr('value','Болгария');
			$(".maskNom").text("+3");
			$("#kodId").val("+3");			
			$("#tel1").attr('maxlength','11');
			$("#tel1").attr('pattern','[0-9]{11}');
			$("#tel1").attr('placeholder','123 456 789 00');
			return;
		}
		if($("#flag").hasClass('iti__gb'))
		{			
			$("#inpCnt").attr('value','Великобритания');
			$(".maskNom").text("+44");
			$("#kodId").val("+44");			
			$("#tel1").attr('maxlength','10');
			$("#tel1").attr('pattern','[0-9]{10}');
			$("#tel1").attr('placeholder','123 456 78 90');
			return;
		}
		if($("#flag").hasClass('iti__hu'))
		{			
			$("#inpCnt").attr('value','Венгрия');
			$(".maskNom").text("+36");
			$("#kodId").val("+36");			
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{8,9}');
			$("#tel1").attr('placeholder','123 456 789');
			return;
		}
		if($("#flag").hasClass('iti__de'))
		{			
			$("#inpCnt").attr('value','Германия');
			$(".maskNom").text("+49");
			$("#kodId").val("+49");			
			$("#tel1").attr('maxlength','11');
			$("#tel1").attr('pattern','[0-9]{10,11}');
			$("#tel1").attr('placeholder','123 456 78 90');
			return;
		}
		if($("#flag").hasClass('iti__gr'))
		{			
			$("#inpCnt").attr('value','Греция');
			$(".maskNom").text("+30");
			$("#kodId").val("+30");			
			$("#tel1").attr('maxlength','10');
			$("#tel1").attr('pattern','[0-9]{10}');
			$("#tel1").attr('placeholder','123 456 78 90');
			return;
		}
		if($("#flag").hasClass('iti__dk'))
		{
			$("#inpCnt").attr('value','Дания');
			$(".maskNom").text("+45");
			$("#kodId").val("+45");			
			$("#tel1").attr('maxlength','8');
			$("#tel1").attr('pattern','[0-9]{8}');
			$("#tel1").attr('placeholder','123 456 78');
			return;
		}
		if($("#flag").hasClass('iti__ie'))
		{			
			$("#inpCnt").attr('value','Ирландия');
			$(".maskNom").text("+353");
			$("#kodId").val("+353");			
			$("#tel1").attr('maxlength','8');
			$("#tel1").attr('pattern','[0-9]{5,8}');
			$("#tel1").attr('placeholder','123 456 78');
			return;
		}
		if($("#flag").hasClass('iti__is'))
		{			
			$("#inpCnt").attr('value','Исландия');
			$(".maskNom").text("+354");
			$("#kodId").val("+354");			
			$("#tel1").attr('maxlength','7');
			$("#tel1").attr('pattern','[0-9]{7}');
			$("#tel1").attr('placeholder','123 45 67');
			return;
		}
		if($("#flag").hasClass('iti__es'))
		{			
			$("#inpCnt").attr('value','Испания');
				$(".maskNom").text("+34");
			$("#kodId").val("+34");			
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{9}');
			$("#tel1").attr('placeholder','123 456 789');
			return;
		}
		if($("#flag").hasClass('iti__it'))
		{
			
			$("#inpCnt").attr('value','Италия');
				$(".maskNom").text("+39");
			$("#kodId").val("+39");			
			$("#tel1").attr('maxlength','10');
			$("#tel1").attr('pattern','[0-9]{6,10}');
			$("#tel1").attr('placeholder','123 456 78 90');
			return;
		}
		if($("#flag").hasClass('iti__cy'))
		{			
			$("#inpCnt").attr('value','Кипр');
			$(".maskNom").text("+357");
			$("#kodId").val("+357");			
			$("#tel1").attr('maxlength','8');
			$("#tel1").attr('pattern','[0-9]{8}');
			$("#tel1").attr('placeholder','123 456 78');
			return;
		}
		if($("#flag").hasClass('iti__lv'))
		{			
			$("#inpCnt").attr('value','Латвия');
			$(".maskNom").text("+371");
			$("#kodId").val("+371");			
			$("#tel1").attr('maxlength','8');
			$("#tel1").attr('pattern','[0-9]{8}');
			$("#tel1").attr('placeholder','123 456 78');
			return;
		}
		if($("#flag").hasClass('iti__lt'))
		{			
			$("#inpCnt").attr('value','Литва');
			$(".maskNom").text("+370");
			$("#kodId").val("+370");			
			$("#tel1").attr('maxlength','8');
			$("#tel1").attr('pattern','[0-9]{8}');
			$("#tel1").attr('placeholder','123 456 78');
			return;
		}
		if($("#flag").hasClass('iti__li'))
		{			
			$("#inpCnt").attr('value','Лихтенштейн');
			$(".maskNom").text("+423");
			$("#kodId").val("+423");			
			$("#tel1").attr('maxlength','7');
			$("#tel1").attr('pattern','[0-9]{7}');
			$("#tel1").attr('placeholder','123 45 67');
			return;
		}
		if($("#flag").hasClass('iti__mt'))
		{			
			$("#inpCnt").attr('value','Мальта');
			$(".maskNom").text("+356");
			$("#kodId").val("+356");			
			$("#tel1").attr('maxlength','8');
			$("#tel1").attr('pattern','[0-9]{8}');
			$("#tel1").attr('placeholder','123 456 78');
			return;
		}
		if($("#flag").hasClass('iti__md'))
		{			
			$("#inpCnt").attr('value','Молдавия');
			$(".maskNom").text("+373");
			$("#kodId").val("+373");			
			$("#tel1").attr('maxlength','8');
			$("#tel1").attr('pattern','[0-9]{8}');
			$("#tel1").attr('placeholder','123 456 78');
			return;
		}
		if($("#flag").hasClass('iti__mc'))
		{			
			$("#inpCnt").attr('value','Монако');
			$(".maskNom").text("+377");
			$("#kodId").val("+377");			
			$("#tel1").attr('maxlength','8');
			$("#tel1").attr('pattern','[0-9]{8}');
			$("#tel1").attr('placeholder','123 456 78');
			return;
		}
		if($("#flag").hasClass('iti__no'))
		{			
			$("#inpCnt").attr('value','Норвегия');
				$(".maskNom").text("+47");
			$("#kodId").val("+47");			
			$("#tel1").attr('maxlength','8');
			$("#tel1").attr('pattern','[0-9]{8}');
			$("#tel1").attr('placeholder','123 456 78');
			return;
		}
		if($("#flag").hasClass('iti__ro'))
		{			
			$("#inpCnt").attr('value','Румыния');
				$(".maskNom").text("+40");
			$("#kodId").val("+40");			
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{6,9}');
			$("#tel1").attr('placeholder','123 456 789');
			return;
		}
		if($("#flag").hasClass('iti__sm'))
		{			
			$("#inpCnt").attr('value','Сан-Марино');
			$(".maskNom").text("+378");
			$("#kodId").val("+378");			
			$("#tel1").attr('maxlength','10');
			$("#tel1").attr('pattern','[0-9]{10}');
			$("#tel1").attr('placeholder','123 456 78 90');
			return;
		}
		if($("#flag").hasClass('iti__rs'))
		{			
			$("#inpCnt").attr('value','Сербия');
			$(".maskNom").text("+381");
			$("#kodId").val("+381");			
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{9}');
			$("#tel1").attr('placeholder','123 456 789');
			return;
		}
		if($("#flag").hasClass('iti__me'))
		{
			
			$("#inpCnt").attr('value','Черногория');
			$(".maskNom").text("+382");
			$("#kodId").val("+382");			
			$("#tel1").attr('maxlength','8');
			$("#tel1").attr('pattern','[0-9]{8}');
			$("#tel1").attr('placeholder','123 456 78');
			return;
		}
		if($("#flag").hasClass('iti__sk'))
		{
			
			$("#inpCnt").attr('value','Словакия');
			$(".maskNom").text("+421");
			$("#kodId").val("+421");			
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{9}');
			$("#tel1").attr('placeholder','123 456 789');
			return;
		}
		if($("#flag").hasClass('iti__si'))
		{			
			$("#inpCnt").attr('value','Словения');
			$(".maskNom").text("+386");
			$("#kodId").val("+386");			
			$("#tel1").attr('maxlength','8');
			$("#tel1").attr('pattern','[0-9]{8}');
			$("#tel1").attr('placeholder','123 456 78');
			return;
		}
		if($("#flag").hasClass('iti__fi'))
		{			
			$("#inpCnt").attr('value','Финляндия');
			$(".maskNom").text("+358");
			$("#kodId").val("+358");			
			$("#tel1").attr('maxlength','10');
			$("#tel1").attr('pattern','[0-9]{7,10}');
			$("#tel1").attr('placeholder','123 456 78 90');
			return;
		}
		if($("#flag").hasClass('iti__fr'))
		{			
			$("#inpCnt").attr('value','Франция');
				$(".maskNom").text("+33");
			$("#kodId").val("+33");			
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{9}');
			$("#tel1").attr('placeholder','123 456 789');
			
			return;
		}
		if($("#flag").hasClass('iti__hr'))
		{			
			$("#inpCnt").attr('value','Хорватия');
			$(".maskNom").text("+385");
			$("#kodId").val("+385");			
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{6,9}');
			$("#tel1").attr('placeholder','123 456');
			return;
		}
		if($("#flag").hasClass('iti__cz'))
		{			
			$("#inpCnt").attr('value','Чехия');
			$(".maskNom").text("+420");
			$("#kodId").val("+420");			
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{9}');
			$("#tel1").attr('placeholder','123 456 789');
			return;
		}
		if($("#flag").hasClass('iti__ch'))
		{			
			$("#inpCnt").attr('value','Швейцария');
				$(".maskNom").text("+41");
			$("#kodId").val("+41");			
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{9}');
			$("#tel1").attr('placeholder','123 456 789');
			return;
		}
		if($("#flag").hasClass('iti__se'))
		{			
			$("#inpCnt").attr('value','Швеция');
				$(".maskNom").text("+46");
			$("#kodId").val("+46");			
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{7,9}');
			$("#tel1").attr('placeholder','123 456 78 90');
			return;
		}
		if($("#flag").hasClass('iti__ee'))
		{			
			$("#inpCnt").attr('value','Эстония');
			$(".maskNom").text("+372");
			$("#kodId").val("+372");			
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{7,9}');
			$("#tel1").attr('placeholder','123 45 67');
			return;
		}
		if($("#flag").hasClass('iti__my'))
		{
			$("#inpCnt").attr('value','Малайзия');
			$(".maskNom").text("+60");
			$("#kodId").val("+60");
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{8,9}');
			$("#tel1").attr('placeholder','123 456 78');
			return;
		}
		if($("#flag").hasClass('iti__nz'))
		{
			$("#inpCnt").attr('value','Новая Зеландия');
			$(".maskNom").text("+64");
			$("#kodId").val("+64");
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{8,9}');
			$("#tel1").attr('placeholder','123 456 78');
			return;
		}
		if($("#flag").hasClass('iti__sg'))
		{
			$("#inpCnt").attr('value','Сингапур');
			$(".maskNom").text("+65");
			$("#kodId").val("+65");
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{9}');
			$("#tel1").attr('placeholder','123 456 789');
			return;
		}
		if($("#flag").hasClass('iti__za'))
		{
			$("#inpCnt").attr('value','Южная Африка');
			$(".maskNom").text("+27");
			$("#kodId").val("+27");
			$("#tel1").attr('maxlength','9');
			$("#tel1").attr('pattern','[0-9]{9}');
			$("#tel1").attr('placeholder','123 456 789');
			return;
		} 
	}
	$(document).ready(function()
	{
	
		cntr();
		$('#inpSea').on('input', function() 
	{
		
		$("#err1 p").each(function()
		{
			if(!$(this).text().toLowerCase().includes($('#inpSea').val().toLowerCase()))
				$(this).hide();
			else
				$(this).show();
		});
	});	
	
	$("#err1 p").click(function()
	{		
		$('#flag').removeClass();
		$('#flag').addClass('iti__flag');
		$('#flag').addClass("iti__"+$(this).attr('id'));
		$('#err1').hide();
		$('#cntKod').attr('value',$(this).attr('id'));
		cntr();
	});
	
	$(".iti__flag").click(function()
	{
		$('#err1').show();
	});

	
	
	});

	function formsubm()
	{
	  if(!$('#subm8').hasClass('stop'))
		if (document.getElementById('full_name').checkValidity())  
		{
		  if(document.getElementById('inp2').checkValidity())
		  {
			if(document.getElementById('inp3').checkValidity())
			{
			  if(document.getElementById('tel1').checkValidity())  
			  {
				if($('#tel1').val()!="")
				{                
				  $('#subm8').addClass('stop');
				  $('#main_form').submit();                
				}
			  }
			  else
				alert("Введите номер телефона");
			}
			else
			  alert("Введите email");
		  }
		  else
			alert("Введите фамилию");
		}
		else
		  alert("Введите имя");
  
	}

	/*
	intlTelInput.css
	utip/utipApi.php
	mail.php
	thanks.php
	flags.png
	congrats_1.png / 2 / 3
#err1
{
	display: none;
	position: absolute; 
	
	z-index: 100; 
	background-color: white; 
	height: 200px; 
	width: 202px;
	border: 2px solid grey; 
	text-align: center;
	border-radius: 5px;
	margin-top: -15px;
}
#err1 p
{
	padding: 3px;
	margin: 0;
}

$ip = $_SERVER['REMOTE_ADDR'];
						
						$details = json_decode(file_get_contents("http://ipinfo.io/{$ip}?token=54f2e863f5747c"));
						$cntry = mb_strtolower($details->country);
						
						
						
						?>



	<input type="hidden" id="inpCnt" name="country">
								<input type="hidden" name="kod" id="kodId">
								<input name="remote_ip" type="hidden" value="<?php echo($_SERVER['REMOTE_ADDR']); ?>">
								<input type="hidden" name="cntKod" id="cntKod" value="<?=$cntry?>">

	<span class="iti__flag iti__<?=$cntry?>" id="flag" style="position: relative; top: -28px; left: 15px; width: 20px;display: inline-block;">
                                <div style="position: relative;  left: 25px; color: rgb(117, 117, 117); font: 400 13.3333px Arial;" class="maskNom">+7</div>
                            </span>
                            <div class="error" id="err1" style="position: relative; margin-top:30px; font-size: 15px; color: black; text-align: center; ">
                                <input style="margin:0; padding: 0; text-align: center; height: 20%; width: 198px;" placeholder="Поиск" id="inpSea"/>
                                <div style="overflow: auto; height: 80%; padding-bottom: 10px">
                                    <p id="ru">Россия +7</p>							
                                    <p id="pl">Польша +48</p>
                                    <p id="at">Австрия +43</p>
                                    <p id="al">Албания +355</p>
                                    <p id="ad">Андорра +376</p>
                                    <p id="by">Белоруссия +375</p>
                                    <p id="be">Бельгия +32</p>
                                    <p id="bg">Болгария +3</p>
                                    <p id="gb">Великобританя +44</p>
                                    <p id="hu">Венгрия +36</p>
                                    <p id="de">Германия +49</p>
                                    <p id="gr">Греция +30</p>
                                    <p id="dk">Дания +45</p>
                                    <p id="ie">Ирландия +354</p>
                                    <p id="is">Исландия +353</p>
                                    <p id="es">Испания +34</p>
                                    <p id="it">Италия +39</p>
                                    <p id="cy">Кипр +357</p>
                                    <p id="lv">Латвия +371</p>
                                    <p id="lt">Литва +370</p>
                                    <p id="li">Лихтенштейн +423</p>
                                    <p id="mt">Мальта +356</p>
                                    <p id="md">Молдавия +373</p>
                                    <p id="mc">Монако +377</p>
                                    <p id="no">Норвегия +47</p>
                                    <p id="ro">Румыния +40</p>
                                    <p id="sm">Сан-Марино +378</p>
                                    <p id="rs">Сербия +381</p>
                                    <p id="me">Черногория +382</p>
                                    <p id="sk">Словакия +421</p>
                                    <p id="si">Словения +386</p>
                                    <p id="fi">Финляндия +358</p>
                                    <p id="fr">Франция +33</p>
                                    <p id="hr">Хорватия +385</p>
                                    <p id="cz">Чехия +420</p>
                                    <p id="ch">Швейцария +41</p>
                                    <p id="se">Швеция +46</p>
                                    <p id="ee">Эстония +372</p>
                                </div>
                                <input type="hidden" name="token" value="<?php echo(rand(10000,99999));?>" />
                            </div>							
	*/