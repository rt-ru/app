<?php

$email=$_GET['Email'];
$customerFirstName=$_GET['FirstName'];
$customerLastName=$_GET['LastName'];
$customerPhone=$_GET['PhoneCountry'].$_GET['PhoneOperator'].$_GET['PhoneNumber'];
$customerCountry=strtoupper($_GET['Country']) ;
$customerPassword = '12345678';
$url='';

$companyId='14';
$utmSource='1';

$lines = file('even.txt', FILE_IGNORE_NEW_LINES);
$val=$lines[0];

    if (isset($email) && isset($customerFirstName) && isset($customerLastName) && isset($customerPhone) && isset($customerCountry)){
        if ($utmSource==='1'){
            $hashString='';
            $companyId=14;
            if ($val==='GTI'){
                $url = 'https://crm.ef-invest.com/api/Lids';
                $hashString='d585f61e-e361-4105-a233-1aff83138771';
                $companyId='14';
            }
            else{
                $url = 'https://crm.pt-finance.com/api/Lids';
                $hashString='df438725-f350-4b18-ab98-33a895287328';
                $companyId='14';
            }


            $source='skymarket.xyz';
            $data = [[
                'CustomerEmail' => $email,
                'CustomerFirstName' => $customerFirstName,
                'CustomerLastName' => $customerLastName,
                'CustomerPhone' => $customerPhone,
                'CustomerCountry' => $customerCountry,
                'Hash' => $hashString,
                'CustomerPassword' => $customerPassword,
                'CompanyId' => $companyId,
                'source'=>$source
            ]];
            $postdata = json_encode($data);
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $postdata);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
            $result = curl_exec($ch);
            curl_close($ch);			
            if ($result==='"Complited"'){
                if ($val==='PT'){
                    $val='GTI';
                }
                else{
                    $val='PT';
                }
                file_put_contents('even.txt',[$val]);
            }
            file_put_contents('logs.txt',[date("Y-m-d H:i:s").' ', $url.' ', $email.' ',$customerFirstName.' ',$customerLastName.' ',$customerPhone.' ' ,$customerCountry.' ',$hashString.' ', $result.PHP_EOL,],FILE_APPEND);
            echo $result;
        }
        else{
            $url = 'https://openapi.myideadata.com/uILVTpf72f6yut5/f11';
            $data = [[
                'email' => $email,
                'name' => $customerFirstName,
                'last_name' => $customerLastName,
                'mob' => $customerPhone,
                'country' => $customerCountry,
            ]];


            $postdata = json_encode($data);
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $postdata);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
            $result = curl_exec($ch);
            curl_close($ch);
            echo $result;
            file_put_contents('logs.txt',[date("Y-m-d H:i:s").' ', $url.' ', $email.'',$customerFirstName.' ',$customerLastName.' ',$customerPhone.' ' ,$customerCountry.' ',$result.PHP_EOL,],FILE_APPEND);
        }


    }
    else{
        echo 'something wrong';
    }





