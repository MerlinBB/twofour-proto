<!DOCTYPE html>
<html lang="en" class="no-js">
<head>

    <!-- Meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="HandheldFriendly" content="true">

    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="format-detection" content="telephone=no"/>

    <meta name="description" content="">

    <title>Starter</title>

    <link rel="stylesheet" type="text/css" media="all" href="style.css?72d5b357"/>

    <link rel="shortcut icon" type="image/png" href="img/favicons/logo-icon-32x32.png">

    <!-- New iOS7 Sizes -->
    <link rel="apple-touch-icon" href="img/favicons/logo-icon-76x76.png" sizes="76x76">
    <link rel="apple-touch-icon" href="img/favicons/logo-icon-120x120.png" sizes="120x120">
    <link rel="apple-touch-icon" href="img/favicons/logo-icon-152x152.png" sizes="152x152">

    <!-- Metro Tiles -->
    <meta name="msapplication-TileColor" content="#d25353">
    <meta name="msapplication-TileImage" content="img/favicons/logo-icon-152x152.png">

</head>
<body>

<div class="container">
    <h1>Welcome to Starter!</h1>
    <button class="btn">Say Hello!</button>
    <div class="row">
        <div class="col-xs-1">col-xs</div>
        <div class="col-xs-1">col-xs</div>
        <div class="col-xs-1">col-xs</div>
        <div class="col-xs-1">col-xs</div>
        <div class="col-xs-1">col-xs</div>
        <div class="col-xs-1">col-xs</div>
        <div class="col-xs-1">col-xs</div>
        <div class="col-xs-1">col-xs</div>
        <div class="col-xs-1">col-xs</div>
        <div class="col-xs-1">col-xs</div>
        <div class="col-xs-1">col-xs</div>
        <div class="col-xs-1">col-xs</div>
    </div>
    <div class="row">
        <div class="col-sm-1">col-sm</div>
        <div class="col-sm-1">col-sm</div>
        <div class="col-sm-1">col-sm</div>
        <div class="col-sm-1">col-sm</div>
        <div class="col-sm-1">col-sm</div>
        <div class="col-sm-1">col-sm</div>
        <div class="col-sm-1">col-sm</div>
        <div class="col-sm-1">col-sm</div>
        <div class="col-sm-1">col-sm</div>
        <div class="col-sm-1">col-sm</div>
        <div class="col-sm-1">col-sm</div>
        <div class="col-sm-1">col-sm</div>
    </div>
    <div class="row">
        <div class="col-md-1">col-md</div>
        <div class="col-md-1">col-md</div>
        <div class="col-md-1">col-md</div>
        <div class="col-md-1">col-md</div>
        <div class="col-md-1">col-md</div>
        <div class="col-md-1">col-md</div>
        <div class="col-md-1">col-md</div>
        <div class="col-md-1">col-md</div>
        <div class="col-md-1">col-md</div>
        <div class="col-md-1">col-md</div>
        <div class="col-md-1">col-md</div>
        <div class="col-md-1">col-md</div>
    </div>
    <div class="row">
        <div class="col-lg-1">col-lg</div>
        <div class="col-lg-1">col-lg</div>
        <div class="col-lg-1">col-lg</div>
        <div class="col-lg-1">col-lg</div>
        <div class="col-lg-1">col-lg</div>
        <div class="col-lg-1">col-lg</div>
        <div class="col-lg-1">col-lg</div>
        <div class="col-lg-1">col-lg</div>
        <div class="col-lg-1">col-lg</div>
        <div class="col-lg-1">col-lg</div>
        <div class="col-lg-1">col-lg</div>
        <div class="col-lg-1">col-lg</div>
    </div>
</div>


<?php
    // If we're in production mode, include minified concatenated script
    // if not then pull them in unminified individually for easier debugging

    $dev = array(
        '127.0.0.1',
        '192.168.1.144',
        '::1'
    );

    if (!in_array($_SERVER['REMOTE_ADDR'], $dev)) {
        echo ('
            <script async src="/js/production.js?c86a4e82"></script>
        ');

    } else {
        echo ('
            <script src="js/modernizr-custom.js"></script>
            <script src="js/bower/jquery/dist/jquery.js"></script>
            <script src="js/bower/underscore/underscore.js"></script>
            <script src="js/project.js"></script>
            <script src="//localhost:35729/livereload.js"></script>
        ');
    }
?>

</body>
</html>
