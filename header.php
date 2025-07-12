<!DOCTYPE html>
<html lang="en">
<head>
  <title><?=get_the_title()?></title>

  <!-- meta tag header includes -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/img/favicon.ico" />
  <meta name="robots" content="index, follow">

  <!-- compatability header includes -->
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

	<title><?php echo $titulo_principal; ?></title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
  
  <!-- wordpress header includes -->
  <?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>

  <!-- Header -->
  <header class="scrolledHeader position-fixed top-0 left-0 w-100 z-3">
    <div class="">
      <div class="container-fluid gx-lg-0 py-1">
        <div class="row gx-0 justify-content-between">
          <div class="col-8 d-flex align-items-center d-lg-none ">
            <div class="text-center">
              <a class="d-block" href="/">
                <img width="50" src="<?php echo THEME_IMG; ?>main-logo.svg" alt="Logo" class="img-fluid">
              </a>
            </div>
          </div>
          <div class="customHeaderDesktop col-lg-6 mx-auto <?php echo is_page('cartagena') ? 'ms-0' : 'me-0' ?> d-none d-lg-block">
            <ul class="customHeader d-none d-lg-grid gap-5 py-lg-2">
              <li class="d-flex justify-content-center align-items-center"><a class="font-restora fs-lg-p-medium text-gray-100 letter-spacing-lg-16" href="/#wedding">WEDDING</a></li>
              <li class="d-flex justify-content-center align-items-center"><a class="font-restora fs-lg-p-medium text-gray-100 letter-spacing-lg-16" href="/#events">EVENTS</a></li>
              <li class="d-flex justify-content-center align-items-center">
                <a class="font-restora fs-lg-3-small text-gray-100 letter-spacing-lg-64" href="/">
                  <img width="50" src="<?php echo THEME_IMG; ?>main-logo.svg" alt="Logo" class="scrolledMenuLogo w-0 opacity-0">
                </a>
              </li>
              <li class="d-flex justify-content-center align-items-center"><a class="font-restora fs-lg-p-medium text-gray-100 letter-spacing-lg-16" href="/#cartagena">CARTAGENA</a></li>
              <li class="d-flex justify-content-center align-items-center">
                <a class="font-restora fs-lg-p-medium text-gray-100 letter-spacing-lg-16" href="/#rsvp">R.S.V.P.</a>
              </li>
            </ul>
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center d-lg-none gap-2">
            <button type="button" class="pt-1 border-0 bg-transparent p-0 text-gray-100" style="width: 30px" data-toggle-menu>
              <?php get_template_part('template-parts/components/icons/icon-menu'); ?>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  <!-- Fin Header -->

  <section class="customHeaderMobile position-fixed top-0 right-0 w-100 h-100 pt-3 z-3 bg-white" data-menu-mobile>
    <div class="container-fluid h-100">
      <div class="row h-100">
        <button class="position-absolute top-0 end-0 mt-2 pe-2 p-0 border-0 bg-transparent" style="width: 40px" data-close-menu>
          <?php get_template_part('template-parts/components/icons/icon-close'); ?>
        </button>
        <ul class="customHeader d-flex flex-column justify-content-center align-items-center gap-5 py-lg-2 py-1">
          <li class="d-flex justify-content-center align-items-center"><a class="font-restora fs-lg-p-medium text-gray-100 letter-spacing-lg-16" href="/#wedding">WEDDING</a></li>
          <li class="d-flex justify-content-center align-items-center"><a class="font-restora fs-lg-p-medium text-gray-100 letter-spacing-lg-16" href="/#events">EVENTS</a></li>
          <li class="d-flex justify-content-center align-items-center">
            <a class="font-restora fs-lg-3-small text-gray-100 letter-spacing-lg-64" href="/">
              <img width="60" src="<?php echo THEME_IMG; ?>main-logo.svg" alt="Logo" class="img-fluid">
            </a>
          </li>
          <li class="d-flex justify-content-center align-items-center"><a class="font-restora fs-lg-p-medium text-gray-100 letter-spacing-lg-16" href="/#cartagena">CARTAGENA</a></li>
          <li class="d-flex justify-content-center align-items-center">
            <a class="font-restora fs-lg-p-medium text-gray-100 letter-spacing-lg-16" href="/#rsvp">R.S.V.P.</a>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Whatsapp -->
  <?php mostrar_boton_whatsapp(); ?>
  <!-- Fin Whatsapp -->