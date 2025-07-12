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
                <div class="col-12 col-lg-6 gx-0">
                    <img class="w-100 shadow-1 d-none d-lg-block" src="<?php echo THEME_IMG; ?>hero.webp" alt="Hero">
                    <img class="w-100 shadow-1 d-block d-lg-none" src="<?php echo THEME_IMG; ?>hero-mobile.webp" alt="Hero">
                </div>
                <div class="col-12 col-lg-6">
                    <div class="d-flex flex-column justify-content-end align-items-center h-100 pb-lg-5">
                        <img src="<?php echo THEME_IMG; ?>main-logo.svg" alt="Main logo" class="opacityDiv d-lg-block d-none">
                        <img src="<?php echo THEME_IMG; ?>text-meli-jake.svg" alt="Text meli jake" class="mb-5 opacityDiv d-lg-block d-none">
                        <img width="280" src="<?php echo THEME_IMG; ?>text-meli-jake.svg" alt="Text meli jake" class="mb-5 opacityDiv d-lg-none">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-lg-5 pt-lg-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="font-restora fs-lg-2 fs-2 text-primary letter-spacing-lg-12 letter-spacing-8">05 . 24 . 2026</h2>
                    <p class="font-restora fs-lg-4 fs-p-small text-primary letter-spacing-lg-1 letter-spacing-07">Cartagena de Indias, Colombia</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Wedding -->
    <div class="py-lg-0 py-5"></div>
    <div class="py-lg-0 py-5"></div>
    <div class="py-lg-0 py-5"></div>
    <section class="position-relative mt-5" id="wedding">
        <img class="position-relative top-0 w-100 d-block" src="<?php echo THEME_IMG; ?>bckg-wedding.webp" alt="Background wedding">
        <div class="position-absolute top-0 start-0 w-100 h-100 pt-5 mt-lg-5">
            <div class="container -mt-22">
                <div class="row">
                    <div class="col-12 col-lg-8 mx-auto">
                        <div class="customBoxPaper text-center p-lg-5 p-2 pb-2">
                            <h2 class="font-austrisa fs-lg-1 fs-1 text-primary mb-3">Wedding</h2>
                            <p class="font-restora fs-lg-4 fs-2 text-black letter-spacing-lg-96 letter-spacing-8 mb-lg-5 mb-3">NUESTRA BODA</p>
                            <p class="font-restora fs-lg-2 fs-2 text-black letter-spacing-lg-15 letter-spacing-1">May 24th, 2026</p>
                            <p class="font-restora fs-lg-2 fs-2 text-black letter-spacing-lg-15 letter-spacing-1">7:00 P.M.</p>
                            <p class="font-restora fs-lg-2 fs-2 text-black letter-spacing-lg-15 letter-spacing-1 mb-4">Baluarte Santa Clara</p>

                            <p class="font-restora fs-lg-4 fs-p text-black letter-spacing-lg-96 letter-spacing-8 mb-3">RECEPTION</p>
                            <h2 class="font-restora fs-lg-2 fs-2 text-black letter-spacing-lg-15 letter-spacing-1">Teatro Heredia</h2>

                            <p class="font-restora fs-lg-2 fs-2 text-black letter-spacing-lg-15 letter-spacing-1 mb-4">Cartagena, Colombia</p>

                            <h2 class="font-restora fs-lg-4 fs-p text-black letter-spacing-lg-96 letter-spacing-8 mb-4">DRESS CODE</h2>

                            <h2 class="font-restora fs-lg-2 fs-p text-black letter-spacing-lg-15 letter-spacing-1">Tropical Tuxedo - White Jacket</h2>
                            <h2 class="font-restora fs-lg-2 fs-p text-black letter-spacing-lg-15 letter-spacing-1 mb-4">Smoking Tropical</h2>

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
                <div class="col-12 mx-auto text-center gx-0">
                    <div class="customBoxPaper p-lg-5 pb-5">
                        <h2 class="font-austrisa fs-lg-1 fs-1 text-primary fw-light mb-3">Celebrate with us!</h2>
                        <div id="mi-countdown" data-countdown="2026-05-24 15:00:00"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-lg-5 position-relative pb-lg-5">
            <div class="container">
                <div class="row d-flex flex-lg-row flex-column-reverse">
                    <div class="col-12 col-lg-6 ps-lg-4 px-5 pb-5">
                        <h2 class="font-austrisa fs-lg-1 fs-1 text-primary fw-light letter-spacing-1">Shabbat</h2>
                        <p class="font-restora fs-lg-4 fs-p text-black letter-spacing-lg-96 letter-spacing-8 mb-4">CENA DE SHABBAT</p>
    
                        <p class="font-restora fs-lg-2 fs-2 text-black letter-spacing-lg-15 letter-spacing-1">May 22nd, 2026</p>
                        <p class="font-restora fs-lg-2 fs-2 text-black letter-spacing-lg-15 letter-spacing-1">7:00 P.M.</p>
                        <p class="font-restora fs-lg-2 fs-2 text-black letter-spacing-lg-15 letter-spacing-1 mb-4">CASA 1537</p>
                        
                        <p class="font-restora fs-lg-4 fs-p text-black letter-spacing-lg-96 letter-spacing-8">DRESS CODE</p>
                        <p class="font-restora fs-lg-2 fs-2 text-black letter-spacing-lg-15 letter-spacing-1 mb-4">White Cocktail Chic Attire</p>
    
                        <p class="font-restora fs-lg-p-small fs-p-small text-black letter-spacing-lg-15 letter-spacing-1">Additional INFO pending, INFO ADICIONAL pendiente</p>
                    </div>
                    <div class="col-12 col-lg-6 gx-0">
                        <div class="pe-lg-5">
                            <img src="<?php echo THEME_IMG; ?>shabbat.webp" alt="Shabbat" class="d-block w-100 w-lg-auto shadow-1">
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
                    <div class="customSectionCocktail__img position-relative h-100 float-lg-end px-lg-0 px-3">
                        <img src="<?php echo THEME_IMG; ?>cocktail.webp" alt="Welcome cocktail" class="d-block w-100">
                    </div>
                </div>
                <div class="col-12 col-lg-6 gx-lg-0">
                    <div class="d-flex flex-column justify-content-center h-100">
                        <div class="customBoxPaper p-lg-5 px-3">
                            <h2 class="font-austrisa fs-lg-1 fs-1 text-primary fw-light text-lg-left text-center">Welcome Cocktail</h2>
                            <p class="font-restora fs-lg-4 fs-p text-black letter-spacing-lg-96 letter-spacing-8 mb-4 mt-lg-0 mt-2">COCTÉL <br class="d-block d-lg-none"> DE BIENVENIDA</p>
    
                            <h2 class="font-restora fs-lg-2 fs-2 text-black letter-spacing-lg-15 letter-spacing-1">May 23th, 2026</h2>
                            <h2 class="font-restora fs-lg-2 fs-2 text-black letter-spacing-lg-15 letter-spacing-1 mb-4">6:00 P.M.</h2>
    
                            <p class="font-restora fs-lg-2 fs-2 text-black letter-spacing-lg-15 letter-spacing-1 mb-3">Terraza Centro <br class="d-block d-lg-none"> de Convenciones</p>
    
                            <p class="font-restora fs-lg-4 fs-p text-black letter-spacing-lg-96 letter-spacing-8">DRESS CODE</p>
                            <p class="font-restora fs-lg-2 fs-2 text-black letter-spacing-lg-15 letter-spacing-1">Tropical Sunset Chic Attire</p>
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
                        <div class="px-lg-4 py-lg-0 px-4 pb-5">
                            <h2 class="font-austrisa fs-lg-1 fs-1 text-primary fw-light mb-4">Cartagena</h2>
                            <p class="font-restora fs-lg-6 fs-p-small text-black letter-spacing-lg-1 mb-3">We were very excited to have our wedding in Cartagena. A city full of magic, charm, history and tradition, which is characterized by its great wall, cobblestone streets and beautiful colonial houses. Cartagena is a UNESCO World Heritage Site and is considered one of the greatest cultural treasures of Latin America.</p>
                            <p class="font-restora fs-lg-6 fs-p-small text-black letter-spacing-lg-1">We would like to make some recommendations, so that you can enjoy your stay in this wonderful place to the fullest. The best way to experience Cartagena is to walk and explore its labyrinths of narrow streets and lush squares. Ideally, you should stay in the historic district, so that you can be within walking distance of places of interest and experience live music, excellent gastronomy and popular art.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img class="d-lg-block d-none w-100 position-relative z-1" src="<?php echo THEME_IMG; ?>bckg-cartagena.webp" alt="Background cartagena">
    </section>

    <section class="customSectionPlaces position-relative">
        <img class="d-block w-100 h-100 position-absolute top-0 start-0 z-0" src="<?php echo THEME_IMG; ?>bckg-2.webp" alt="Background 2">
        <div class="position-absolute top-0 start-0 w-100 h-100 bg-primary-200"></div>
        <div class="container gx-0">
            <div class="row gx-0">
                <div class="col-12 col-lg-6">
                    <div class="customSectionPlaces__img position-relative h-100 float-lg-end">
                        <img class="d-block w-100" src="<?php echo THEME_IMG; ?>places.webp" alt="Places">
                    </div>
                </div>
                <div class="col-12 col-lg-6 -mt-lg-5 position-relative z-1">
                    <div class="customBoxPaper px-lg-5 pt-2 pb-lg-5 shadow-1">
                        <h2 class="font-austrisa fs-lg-1 fs-1 text-center text-primary fw-light mb-3">Places to Interest</h2>
                        <ul>
                            <li class="clickeable">
                                <a href="/cartagena#travel-info" class="d-flex justify-content-between align-items-center py-3 px-5">
                                    <span class="font-restora fs-lg-3 text-primary letter-spacing-lg-15 letter-spacing-1">
                                        TRAVEL INFO
                                        <span class="d-block fs-lg-5">Info de Viaje</span>
                                    </span>
                                    <img src="<?php echo THEME_IMG; ?>icons/icon-airplane.svg" alt="airplane">
                                </a>
                            </li>
                            <li class="clickeable">
                                <a href="/cartagena#hotels" class="d-flex justify-content-between align-items-center py-3 px-5">
                                    <span class="font-restora fs-lg-3 text-primary letter-spacing-lg-15 letter-spacing-1">
                                        HOTELS
                                        <span class="d-block fs-lg-5">Hoteles</span>
                                    </span>
                                    <img src="<?php echo THEME_IMG; ?>icons/icon-hotel.svg" alt="hotel">
                                </a>
                            </li>
                            <li class="clickeable">
                                <a href="/cartagena#restaurants" class="d-flex justify-content-between align-items-center py-3 px-5">
                                    <span class="font-restora fs-lg-3 text-primary letter-spacing-lg-15 letter-spacing-1">
                                        RESTAURANTS
                                        <span class="d-block fs-lg-5">Restaurantes</span>
                                    </span>
                                    <img src="<?php echo THEME_IMG; ?>icons/icon-restaurants.svg" alt="hotel">
                                </a>
                            </li>
                            <li class="clickeable">
                                <a href="/cartagena#brunch" class="d-flex justify-content-between align-items-center py-3 px-5">
                                    <span class="font-restora fs-lg-3 text-primary letter-spacing-lg-15 letter-spacing-1">
                                        BRUNCH & DESSERTS
                                        <span class="d-block fs-lg-5">Brunch y Postres</span>
                                    </span>
                                    <img src="<?php echo THEME_IMG; ?>icons/icon-brunch.svg" alt="hotel">
                                </a>
                            </li>
                            <!-- <li class="clickeable">
                                <a href="/cartagena#bars" class="d-flex justify-content-between align-items-center py-3 px-5">
                                    <span class="font-restora fs-lg-3 text-primary letter-spacing-lg-15 letter-spacing-1">
                                        BARS
                                        <span class="d-block fs-lg-5">Bares</span>
                                    </span>
                                    <img src="<?php echo THEME_IMG; ?>icons/icon-bars.svg" alt="hotel">
                                </a>
                            </li> -->
                            <li class="clickeable">
                                <a href="/cartagena#boutiques" class="d-flex justify-content-between align-items-center py-3 px-5">
                                    <span class="font-restora fs-lg-3 text-primary letter-spacing-lg-15 letter-spacing-1">
                                        BOUTIQUES
                                        <span class="d-block fs-lg-5">Boutiques</span>
                                    </span>
                                    <img src="<?php echo THEME_IMG; ?>icons/icon-boutiques.svg" alt="hotel">
                                </a>
                            </li>
                            <li class="clickeable">
                                <a href="/cartagena#beauty" class="d-flex justify-content-between align-items-center py-3 px-5">
                                    <span class="font-restora fs-lg-3 text-primary letter-spacing-lg-15 letter-spacing-1">
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
                   <h2 class="font-austrisa fs-lg-1 fs-1 text-center text-primary fw-light mb-5">Places to Interest</h2>
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
        <div class="pt-lg-5"></div>
        <div class="pt-lg-5"></div>

        <img style="pointer-events: none;" class="position-relative d-none d-lg-block w-100 z-1" src="<?php echo THEME_IMG; ?>bckg-rsvp.webp" alt="Background rsvp">
        <img style="pointer-events: none;" class="position-relative d-block w-100 z-1 d-lg-none" src="<?php echo THEME_IMG; ?>bckg-rsvp-mobile.webp" alt="Background rsvp">
        <div class="position-xl-absolute top-0 start-0 w-100 h-100">
            <div class="row gx-0">
                <div class="col-12">
                    <div class="position-relative col-12 col-lg-8 mx-auto -mt-lg-7">
                        <div class="customBoxPaper p-lg-5 py-5" id="rsvp">
                            <h2 class="font-restora fs-lg-1 fs-1-small text-center text-primary fw-light letter-spacing-lg-28-2 mb-lg-5">R.S.V.P.</h2>
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