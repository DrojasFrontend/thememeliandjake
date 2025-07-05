<?php 
/* 
* Template Name: Inicio
*/

// Manejar las peticiones AJAX del RSVP
handle_rsvp_ajax();

get_header();

?>

<main class="">

    <!-- Hero -->
    <section class="customSectionHero">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <img class="w-100 shadow-1" src="<?php echo THEME_IMG; ?>hero.webp" alt="Hero">
                </div>
                <div class="col-12 col-lg-6">
                    <div class="d-flex flex-column justify-content-end align-items-center h-100 pb-lg-5">
                        <img src="<?php echo THEME_IMG; ?>main-logo.svg" alt="Main logo" class="opacityDiv">
                        <img src="<?php echo THEME_IMG; ?>text-meli-jake.svg" alt="Text meli jake" class="mb-5 opacityDiv">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-lg-5 pt-lg-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="font-restora fs-lg-2 text-primary letter-spacing-lg-12">05 . 24 . 2026</h2>
                    <p class="font-restora fs-lg-4 text-primary letter-spacing-lg-1">Cartagena de Indias, Colombia</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Wedding -->
    <section class="position-relative mt-lg-5" id="wedding">
        <img class="position-relative top-0 w-100 d-block" src="<?php echo THEME_IMG; ?>bckg-wedding.webp" alt="Background wedding">
        <div class="position-absolute top-0 start-0 w-100 h-100 pt-5 mt-lg-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8 mx-auto">
                        <div class="customBoxPaper text-center p-5">
                            <h2 class="font-austrisa fs-lg-1 text-primary mb-3">Wedding</h2>
                            <p class="font-restora fs-lg-4 text-black letter-spacing-lg-96 mb-lg-5">NUESTRA BODA</p>
                            <p class="font-restora fs-lg-2 text-black letter-spacing-lg-15">May 24th, 2026</p>
                            <p class="font-restora fs-lg-2 text-black letter-spacing-lg-15">7:00 P.M.</p>
                            <p class="font-restora fs-lg-2 text-black letter-spacing-lg-15 mb-4">Baluarte Santa Clara</p>

                            <p class="font-restora fs-lg-4 text-black letter-spacing-lg-96 mb-3">RECEPTION</p>
                            <h2 class="font-restora fs-lg-2 text-black letter-spacing-lg-15">Teatro Heredia</h2>

                            <p class="font-restora fs-lg-2 text-black letter-spacing-lg-15 mb-4">Cartagena, Colombia</p>

                            <h2 class="font-restora fs-lg-4 text-black letter-spacing-lg-96 mb-4">DRESS CODE</h2>

                            <h2 class="font-restora fs-lg-2 text-black letter-spacing-lg-15">Tropical Tuxedo - White Jacket</h2>
                            <h2 class="font-restora fs-lg-2 text-black letter-spacing-lg-15 mb-4">Smoking Tropical</h2>

                            <button class="btn btn-primary border-0 mx-auto mb-4" type="button" data-bs-toggle="modal" data-bs-target="#gifts">
                                GIFTS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Celebrate with us! -->
    <section class="position-relative -mt-lg-5 overflow-hidden" >
        <img class="position-absolute top-0 w-100 h-100 d-block object-fit-cover pt-5" src="<?php echo THEME_IMG; ?>bckg.webp" alt="Background Shabbat">
        <div class="container position-relative pb-lg-5">
            <div class="row">
                <div class="col-12 mx-auto text-center">
                    <div class="customBoxPaper p-lg-5">
                        <h2 class="font-austrisa fs-lg-1 text-primary fw-light mb-3">Celebrate with us!</h2>
                        <div id="mi-countdown" data-countdown="2026-05-24 15:00:00"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-lg-5 position-relative pb-lg-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6 ps-lg-4">
                        <h2 class="font-austrisa fs-lg-1-medium text-primary fw-light">Shabbat</h2>
                        <p class="font-restora fs-lg-4 text-black letter-spacing-lg-96 mb-4">CENA DE SHABBAT</p>
    
                        <p class="font-restora fs-lg-2 text-black letter-spacing-lg-15">May 22nd, 2026</p>
                        <p class="font-restora fs-lg-2 text-black letter-spacing-lg-15">7:00 P.M.</p>
                        <p class="font-restora fs-lg-2 text-black letter-spacing-lg-15 mb-4">CASA 1537</p>
                        
                        <p class="font-restora fs-lg-4 text-black letter-spacing-lg-96">DRESS CODE</p>
                        <p class="font-restora fs-lg-2 text-black letter-spacing-lg-15 mb-4">White Cocktail Chic Attire</p>
    
                        <p class="font-restora fs-lg-p-small text-black letter-spacing-lg-15">Additional INFO pending, INFO ADICIONAL pendiente</p>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="pe-lg-5">
                            <img src="<?php echo THEME_IMG; ?>shabbat.webp" alt="Shabbat" class="d-block w-lg-auto shadow-1">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img class="d-block w-100 position-relative" src="<?php echo THEME_IMG; ?>bckg-sabbat.webp" alt="Background Sabbat">
    </section>

    <!-- Cartagena -->
    <section class="customSectionCocktail position-relative -mt-lg-5 bg-primary-100">
        <img class="d-block w-100 h-100 position-absolute top-0 start-0 z-0" src="<?php echo THEME_IMG; ?>bckg-2.webp" alt="Background 2">
        <div class="position-absolute top-0 start-0 w-100 h-100 bg-primary-100"></div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 gx-lg-0 -mt-lg-5">
                    <div class="customSectionCocktail__img position-relative h-100 float-end">
                        <img src="<?php echo THEME_IMG; ?>cocktail.webp" alt="Welcome cocktail" class="d-block w-100">
                    </div>
                </div>
                <div class="col-12 col-lg-6 gx-lg-0">
                    <div class="d-flex flex-column justify-content-center h-100">
                        <div class="customBoxPaper p-lg-5 shadow-1">
                            <h2 class="font-austrisa fs-lg-1-medium text-primary fw-light">Welcome Cocktail</h2>
                            <p class="font-restora fs-lg-4 text-black letter-spacing-lg-96 mb-4">COCTÉL DE BIENVENIDA</p>
    
                            <h2 class="font-restora fs-lg-2 text-black letter-spacing-lg-15">May 23th, 2026</h2>
                            <h2 class="font-restora fs-lg-2 text-black letter-spacing-lg-15 mb-4">6:00 P.M.</h2>
    
                            <p class="font-restora fs-lg-2 text-black letter-spacing-lg-15">Terraza</p>
                            <p class="font-restora fs-lg-2 text-black letter-spacing-lg-15 mb-4">Centro de  Convenciones</p>
    
                            <p class="font-restora fs-lg-4 text-black letter-spacing-lg-96">DRESS CODE</p>
                            <p class="font-restora fs-lg-2 text-black letter-spacing-lg-15">Tropical Sunset Chic Attire</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-5">
            <div class="mt-lg-3"></div>
        </div>
        <div class="container position-relative" id="cartagena">
            <div class="row">
                <div class="col-12 col-lg-7 mx-auto">
                    <div class="customBoxPaper customBoxPaper__cartagena p-lg-5 pb-lg-0 text-center">
                        <div class="px-lg-4 py-lg-0">
                            <h2 class="font-austrisa fs-lg-1-medium text-primary fw-light mb-4">Cartagena</h2>
                            <p class="font-restora fs-lg-6 text-black letter-spacing-lg-1 mb-3">We were very excited to have our wedding in Cartagena. A city full of magic, charm, history and tradition, which is characterized by its great wall, cobblestone streets and beautiful colonial houses. Cartagena is a UNESCO World Heritage Site and is considered one of the greatest cultural treasures of Latin America.</p>
                            <p class="font-restora fs-lg-6 text-black letter-spacing-lg-1">We would like to make some recommendations, so that you can enjoy your stay in this wonderful place to the fullest. The best way to experience Cartagena is to walk and explore its labyrinths of narrow streets and lush squares. Ideally, you should stay in the historic district, so that you can be within walking distance of places of interest and experience live music, excellent gastronomy and popular art.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img class="d-block w-100 position-relative z-1" src="<?php echo THEME_IMG; ?>bckg-cartagena.webp" alt="Background cartagena">
    </section>

    <section class="customSectionPlaces position-relative">
        <img class="d-block w-100 h-100 position-absolute top-0 start-0 z-0" src="<?php echo THEME_IMG; ?>bckg-2.webp" alt="Background 2">
        <div class="position-absolute top-0 start-0 w-100 h-100 bg-primary-200"></div>
        <div class="container">
            <div class="row gx-0">
                <div class="col-12 col-lg-6">
                    <div class="customSectionPlaces__img position-relative h-100 float-end">
                        <img class="d-block w-100" src="<?php echo THEME_IMG; ?>places.webp" alt="Places">
                    </div>
                </div>
                <div class="col-12 col-lg-6 -mt-lg-5 position-relative z-1">
                    <div class="customBoxPaper px-lg-5 pt-2 pb-lg-5 shadow-1">
                        <h2 class="font-austrisa fs-lg-1-medium text-center text-primary fw-light mb-3">Places to Interest</h2>
                        <ul>
                            <li class="clickeable">
                                <a href="" class="d-flex justify-content-between align-items-center py-3 px-5">
                                    <span class="font-restora fs-lg-3 text-primary letter-spacing-lg-15">
                                        TRAVEL INFO
                                        <span class="d-block fs-lg-5">Info de Viaje</span>
                                    </span>
                                    <img src="<?php echo THEME_IMG; ?>icons/icon-airplane.svg" alt="airplane">
                                </a>
                            </li>
                            <li class="clickeable">
                                <a href="" class="d-flex justify-content-between align-items-center py-3 px-5">
                                    <span class="font-restora fs-lg-3 text-primary letter-spacing-lg-15">
                                        HOTELS
                                        <span class="d-block fs-lg-5">Hoteles</span>
                                    </span>
                                    <img src="<?php echo THEME_IMG; ?>icons/icon-hotel.svg" alt="hotel">
                                </a>
                            </li>
                            <li class="clickeable">
                                <a href="" class="d-flex justify-content-between align-items-center py-3 px-5">
                                    <span class="font-restora fs-lg-3 text-primary letter-spacing-lg-15">
                                        RESTAURANTS
                                        <span class="d-block fs-lg-5">Restaurantes</span>
                                    </span>
                                    <img src="<?php echo THEME_IMG; ?>icons/icon-restaurants.svg" alt="hotel">
                                </a>
                            </li>
                            <li class="clickeable">
                                <a href="" class="d-flex justify-content-between align-items-center py-3 px-5">
                                    <span class="font-restora fs-lg-3 text-primary letter-spacing-lg-15">
                                        BRUNCH & DESSERTS
                                        <span class="d-block fs-lg-5">Brunch y Postres</span>
                                    </span>
                                    <img src="<?php echo THEME_IMG; ?>icons/icon-brunch.svg" alt="hotel">
                                </a>
                            </li>
                            <li class="clickeable">
                                <a href="" class="d-flex justify-content-between align-items-center py-3 px-5">
                                    <span class="font-restora fs-lg-3 text-primary letter-spacing-lg-15">
                                        BARS
                                        <span class="d-block fs-lg-5">Bares</span>
                                    </span>
                                    <img src="<?php echo THEME_IMG; ?>icons/icon-bars.svg" alt="hotel">
                                </a>
                            </li>
                            <li class="clickeable">
                                <a href="" class="d-flex justify-content-between align-items-center py-3 px-5">
                                    <span class="font-restora fs-lg-3 text-primary letter-spacing-lg-15">
                                        BOUTIQUES
                                        <span class="d-block fs-lg-5">Boutiques</span>
                                    </span>
                                    <img src="<?php echo THEME_IMG; ?>icons/icon-boutiques.svg" alt="hotel">
                                </a>
                            </li>
                            <li class="clickeable">
                                <a href="" class="d-flex justify-content-between align-items-center py-3 px-5">
                                    <span class="font-restora fs-lg-3 text-primary letter-spacing-lg-15">
                                        BEAUTY SALONS
                                        <span class="d-block fs-lg-5">Salones de Belleza</span>
                                    </span>
                                    <img src="<?php echo THEME_IMG; ?>icons/icon-beauty-salons.svg" alt="hotel">
                                </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid position-relative pt-5">
            <div class="row">
                <div class="col-12">
                   <h2 class="font-austrisa fs-lg-1-medium text-center text-primary fw-light mb-5">Places to Interest</h2>
                   <?php get_template_part('template-parts/components/component-swiper-place'); ?>
                </div>
            </div>
        </div>
    </section>

    <?php get_template_part('template-parts/components/component-map'); ?>

    <section class="position-relative">
        <div class="pt-lg-5"></div>
        <div class="pt-lg-5"></div>
        <div class="pt-lg-5"></div>
        <div class="pt-lg-5"></div>

        <img style="pointer-events: none;" class="position-relative d-block w-100 z-1" src="<?php echo THEME_IMG; ?>bckg-rsvp.webp" alt="Background rsvp">
        <div class="position-absolute top-0 start-0 w-100 h-100">
            <div class="row gx-0">
                <div class="col-12">
                    <div class="position-relative col-12 col-lg-8 mx-auto -mt-lg-7">
                        <div class="customBoxPaper p-lg-5" id="rsvp">
                            <h2 class="font-restora fs-lg-1-small text-center text-primary fw-light letter-spacing-lg-28-2 mb-5">R.S.V.P.</h2>
                            <p class="font-restora fs-lg-p text-black text-center letter-spacing-lg-1 mb-5">Kindly respond by APRIL 15th, 2026</p>
                            <button class="btn btn-primary border-0 mx-auto rsvp-open-btn" type="button">
                                R.S.V.P.
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php get_template_part('template-parts/components/component-step-rsvp'); ?>
</main>

<?php 
get_footer();
?>