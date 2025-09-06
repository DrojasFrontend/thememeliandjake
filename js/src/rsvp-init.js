/**
 * Inicialización y manejo del formulario RSVP
 */

// Variables globales del RSVP
let rsvpState = {
    currentStep: 1,
    selectedGuest: '',
    guestList: [],
    rsvpData: {
        ceremony: {},
        welcome: {},
        brunch: {}
    }
};

// Configuración de eventos
const rsvpEvents = [
    { id: 'welcome', step: 2, name: 'SHABBAT' },
    { id: 'brunch', step: 3, name: 'WELCOME COCKTAIL' },
    { id: 'ceremony', step: 4, name: 'CEREMONY' }
];

// Datos de invitados (embebidos directamente)
const invitedGuests = {
    'Migue': ['Migue', 'Fanny', 'Daniel'],
    'ATTIA JACK': ['ATTIA JACK', 'ATTIA SRA'],
    'ATTIA NARCISO': ['ATTIA NARCISO', 'ATTIA SRA'],
    'BERG EDUARDO': ['BERG EDUARDO', 'BERG SRA'],
    'BERG JONATHAN': ['BERG JONATHAN', 'BERG SRA'],
    'COHEN YOSSI': ['COHEN YOSSI', 'COHEN SRA'],
    'DASSUM MARTIN': ['DASSUM MARTIN', 'VIGODA TAMI'],
    'DELLER ADRIEL': ['DELLER ADRIEL', 'DELLER HELEN'],
    'DORFZAUN ALBERTO': ['DORFZAUN ALBERTO', 'DORFZAUN SRA'],
    'DORFZAUN ERNESTO': ['DORFZAUN ERNESTO', 'DORFZAUN SRA'],
    'EHRENFELD ANDY': ['EHRENFELD ANDY', 'EHRENFELD SRA'],
    'EHRENFELD DANIEL': ['EHRENFELD DANIEL', 'EHRENFELD SRA'],
    'EHRENFELD TOMAS': ['EHRENFELD TOMAS', 'EHRENFELD SRA'],
    'FROELICH DIANA': ['FROELICH DIANA', 'ANDRADE MARIN CARLOS'],
    'GRUBEL JAIME': ['GRUBEL JAIME', 'GRUBEL SRA'],
    'GRUN AVI': ['GRUN AVI', 'GRUN SRA'],
    'GRUN ELI': ['GRUN ELI', 'GRUN SRA'],
    'HELLER ENRIQUE': ['HELLER ENRIQUE', 'HELLER SRA'],
    'HORVATH HENRI': ['HORVATH HENRI', 'HORVATH SRA'],
    'KATZ ANDREI': ['KATZ ANDRIE', 'KATZ SRA'],
    'LESZCZ DANIEL': ['LESZCZ DANIEL', 'LESZCZ SRA'],
    'LIBERMAN DAVID': ['LIBERMAN DAVID', 'LIBERMAN SRA'],
    'MARCOVICI WILLIAM': ['MARCOVICI WILLIAM', 'MARCOVICI SRA'],
    'MARKOVITCS GABRIEL': ['MARKOVITCS GABRIEL', 'MARKOVITCS SRA'],
    'MARKOVITCS PEDRO': ['MARKOVITCS PEDRO', 'MARKOVITCS SRA'],
    'NUSSBAUM SACHA': ['NUSSBAUM SACHA', 'NUSSBAUM SRA'],
    'ORTIZ JOSE': ['ORTIZ JOSE', 'ORTIZ SRA'],
    'PEREZ DANIEL': ['PEREZ DANIEL', 'PEREZ SRA'],
    'PIENKNAGURA MIGUEL': ['PIENKNAGURA MIGUEL', 'PIENKNAGURA SRA'],
    'RABINO PABLO GABE': ['RABINO PABLO GABE', 'GABE SRA'],
    'RZONZEW LEON': ['RZONZEW LEON', 'RZONZEW SRA'],
    'ROTHSCHILD ANA': ['ROTHSCHILD ANA', 'ROTHSCHILD SRA'],
    'SCHOLEM DORA': ['SCHOLEM DORA', 'SCHOLEM SRA'],
    'SCHOLEM GUSTAVO': ['SCHOLEM GUSTAVO', 'SCHOLEM SRA'],
    'SCHOLEM MARCEL': ['SCHOLEM MARCEL', 'SCHOLEM SRA'],
    'SCHOLEM NORBERTO': ['SCHOLEM NORBERTO', 'SCHOLEM SRA'],
    'STERN ROLF': ['STERN ROLF', 'STERN SRA'],
    'VIGODA ABRAHAM': ['VIGODA ABRAHAM', 'VIGODA SRA'],
    'YOSSEF SHULI': ['YOSSEF SHULI', 'YOSSEF SRA'],
    'BALAS CARLOS': ['BALAS CARLOS', 'BALAS SRA'],
    'CALDERON FERNANDO': ['CALDERON FERNANDO', 'CALDERON SRA'],
    'DINER ALBERT': ['DINER ALBERT', 'PESSI'],
    'DINER JAMIE': ['DINER JAMIE', 'DINER SRA'],
    'DINER MICHAEL': ['DINER MICHAEL', 'CAROLINA'],
    'DINN JIMM': ['DINN JIMM', 'DINN SRA'],
    'ELISCOVICH FEDERICO': ['ELISCOVICH FEDERICO', 'ELISCOVICH SRA'],
    'FELSTEIN SIMON': ['FELSTEIN SIMON', 'FELSTEIN SRA'],
    'FINKELSTEIN MARCOS': ['FINKELSTEIN MARCOS', 'FINKELSTEIN SRA'],
    'HABER ISAAC': ['HABER ISAAC', 'HABER SRA'],
    'HELLER ENRIQUE': ['HELLER ENRIQUE', 'PAUL'],
    'JULISBURGER RONALD': ['JULISBURGER RONALD', 'JULISBURGER SRA'],
    'SCHMUEL MONAS': ['SCHMUEL MONAS', 'SCHMUEL SRA'],
    'LEVINSKY BERNIE': ['LEVINSKY BERNIE', 'LEVINSKY SRA'],
    'LEVY ABI': ['LEVY ABI', 'LEVY SRA'],
    'LEVY ALICIA': ['LEVY ALICIA', 'LEVY SRA'],
    'LEVY DAVID': ['LEVY DAVID', 'LEVY SRA'],
    'LEVY EDUARDO': ['LEVY EDUARDO', 'LEVY SRA'],
    'LEVY SALOMON': ['LEVY SALOMON', 'LEVY SRA'],
    'LEVY HENRY': ['LEVY HENRY', 'LEVY SRA'],
    'LEVY JIMMY': ['LEVY JIMMY', 'LEVY SRA'],
    'LEVY JORGE': ['LEVY JORGE', 'LEVY SRA'],
    'SASSON ELI': ['SASSON ELI', 'SASSON SRA'],
    'LEVY SUSI': ['LEVY SUSI'],
    'MELISSA SCHOLEM': ['MELISSA SCHOLEM', 'JAKE DUBERSTEIN'],
    'PIENKNAGURA FANNY': ['PIENKNAGURA FANNY', 'ROSEMAN CHARLES'],
    'STERBA SAMUEL': ['STERBA SAMUEL', 'DANIELA'],
    'TORREALBA IVAN': ['TORREALBA IVAN', 'TORREALBA SRA'],
    'VAINBERG SAMUEL': ['VAINBERG SAMUEL', 'VAINBERG SRA'],
    'VAISMAN ARON': ['VAISMAN ARON', 'VAISMAN SRA'],
    'WINER JIMMY': ['WINER JIMMY', 'WINER SRA'],
    'MARKOVITZ LISA': ['MARKOVITZ LISA'],
    'BARREIROS GRACIA MARIA': ['BARREIROS GRACIA MARIA'],
    'ABEDRABBO ESTEBAN': ['ABEDRABBO ESTEBAN', 'ABEDRABBO SRA'],
    'ALATORRE MONICA': ['ALATORRE MONICA'],
    'ANDRADE FEDERICO': ['ANDRADE FEDERICO', 'ANDRADE SRA'],
    'AREVALO ROCIO': ['AREVALO ROCIO'],
    'ARIZAGA ALFREDO': ['ARIZAGA ALFREDO', 'ARIZAGA SRA'],
    'ARIZAGA JUAN CARLOS': ['ARIZAGA JUAN CARLOS', 'ARIZAGA SRA'],
    'ARTEAGA ESTELA MARIS': ['ARTEAGA ESTELA MARIS'],
    'BACA LUIS': ['BACA LUIS', 'BACA SRA'],
    'BAKKER LUIS': ['BAKKER LUIS', 'BAKKER SRA'],
    'BUSTAMANTE CARLOS': ['BUSTAMANTE CARLOS', 'BUSTAMANTE SRA'],
    'CRUZ KARLA': ['CRUZ KARLA'],
    'DASSUM SADIN': ['DASSUM SADIN', 'DASSUM SRA'],
    'DONOSO FERNANDO': ['DONOSO FERNANDO', 'DONOSO SRA'],
    'ECHEVERRY ALEJANDRO': ['ECHEVERRY ALEJANDRO', 'ECHEVERRY SRA'],
    'FAIETA JESSICA': ['FAIETA JESSICA'],
    'FLORES SANTIAGO': ['FLORES SANTIAGO', 'FLORES SRA'],
    'GALLEGOS JOSE IVAN': ['GALLEGOS JOSE IVAN', 'GALLEGOS SRA'],
    'HOLGUIN JOSE LUIS': ['HOLGUIN JOSE LUIS', 'HOLGUIN SRA'],
    'IVICH GINO': ['IVICH GINO', 'IVICH SRA'],
    'KHAMIS JORGE': ['KHAMIS JORGE', 'KHAMIS SRA'],
    'KHAMIS RAMON': ['KHAMIS RAMON', 'KHAMIS SRA'],
    'LEON FAUSTO': ['LEON FAUSTO', 'LEON SRA'],
    'LEYVA MARY': ['LEYVA MARY'],
    'MARTINEZ MAURICIO': ['MARTINEZ MAURICIO', 'MARTINEZ SRA'],
    'MELO CARLOS': ['MELO CARLOS', 'MELO SRA'],
    'MEYTHALER JOSE': ['MEYTHALER JOSE', 'MEYTHALER SRA'],
    'MIÑO FABIAN': ['MIÑO FABIAN', 'MIÑO SRA'],
    'MONCAYO GUSTAVO': ['MONCAYO GUSTAVO', 'MONCAYO SRA'],
    'MOSCARELA ORESTES': ['MOSCARELA ORESTES', 'MOSCARELA SRA'],
    'MOSQUERA SERGIO': ['MOSQUERA SERGIO', 'MOSQUERA SRA'],
    'MOSS BOB': ['MOSS BOB', 'MOSS SRA'],
    'NAVEDA ESTEBAN': ['NAVEDA ESTEBAN', 'NAVEDA SRA'],
    'OLEAS JOSE': ['OLEAS JOSE', 'OLEAS SRA'],
    'ORDOÑEZ HERNAN': ['ORDOÑEZ HERNAN', 'ORDOÑEZ SRA'],
    'ORTIZ PABLO': ['ORTIZ PABLO', 'ORTIZ SRA'],
    'PAEZ RODRIGO': ['PAEZ RODRIGO', 'PAEZ SRA'],
    'PATIÑO PATRICIO': ['PATIÑO PATRICIO', 'PATIÑO SRA'],
    'PAZ JORGE': ['PAZ JORGE', 'PAZ SRA'],
    'RAMOS CESAR': ['RAMOS CESAR', 'RAMOS SRA'],
    'RODRIGUEZ MARTIN': ['RODRIGUEZ MARTIN', 'RODRIGUEZ SRA'],
    'RUALES GUSTAVO': ['RUALES GUSTAVO', 'RUALES SRA'],
    'SALAZAR JUAN FERNANDO': ['SALAZAR JUAN FERNANDO', 'SALAZAR SRA'],
    'SALAZAR PABLO': ['SALAZAR PABLO', 'SALAZAR SRA'],
    'SANTELLI MAGDALENA': ['SANTELLI MAGDALENA', 'JAIME HERRAIZ'],
    'SOGUES JOSE': ['SOGUES JOSE', 'SOGUES SRA'],
    'TRAVERSARI BERNARDO': ['TRAVERSARI BERNARDO', 'TRAVERSARI SRA'],
    'UQULLAS RICKY': ['UQULLAS RICKY', 'UQULLAS SRA'],
    'URIBE CAYETANO': ['URIBE CAYETANO', 'URIBE SRA'],
    'VALAREZO GONZALO': ['VALAREZO GONZALO', 'VALAREZO SRA'],
    'VALHUBERT TIOCH MICHELLE': ['VALHUBERT TIOCH MICHELLE'],
    'VAREA PABLO': ['VAREA PABLO', 'VAREA SRA'],
    'VELEZ AMAURI': ['VELEZ AMAURI', 'VELEZ SRA'],
    'VERGARA DAVID': ['VERGARA DAVID', 'VERGARA SRA'],
    'VIVERO MONICA': ['VIVERO MONICA'],
    'WRIGHT ANDI': ['WRIGHT ANDI', 'WRIGHT SRA'],
    'WRIGHT RONNY': ['WRIGHT RONNY', 'WRIGHT SRA'],
    'DUBBERSTEIN GAVIN': ['DUBBERSTEIN GAVIN', 'MACEY'],
    'DUBBERSTEIN HART': ['DUBBERSTEIN HART', 'ABBY'],
    'DUBBERSTEIN MARC': ['DUBBERSTEIN MARC', 'BARBIE'],
    'BENEDICT JOE': ['BENEDICT JOE'],
    'WARNER CALVIN': ['WARNER CALVIN', 'WARNER SRA'],
    'THERESA BENEDICT': ['THERESA BENEDICT', 'SANDERS PHIL'],
    'BENEDICT ROGER': ['BENEDICT ROGER', 'STACY'],
    'SCHWAB ALEX': ['SCHWAB ALEX', 'SCHWAB SRA'],
    'VOLGEELSMEIR SPENCER': ['VOLGEELSMEIR SPENCER', 'VOLGEELSMEIR SRA'],
    'BENEDICT BRADY': ['BENEDICT BRADY', 'BENEDICT SRA'],
    'BENEDICT HALLIE': ['BENEDICT HALLIE'],
    'DUBBERSTEIN MATTIE': ['DUBBERSTEIN MATTIE'],
    'DUBBERSTEIN CINDY': ['DUBBERSTEIN CINDY'],
    'DUBBERSTEIN NEILL': ['DUBBERSTEIN NEILL', 'DUBBERSTEIN SRA'],
    'DUBBERSTEIN ZANE': ['DUBBERSTEIN ZANE', 'DUBBERSTEIN SRA'],
    'FOX JOE': ['FOX JOE', 'FOX SRA'],
    'FOX ALEX': ['FOX ALEX', 'FOX SRA'],
    'FOX BRENDAN': ['FOX BRENDAN'],
    'FOX HAYDEN': ['FOX HAYDEN', 'FOX SRA'],
    'BURNETT CRIS': ['BURNETT CRIS', 'SRA'],
    'TATUM MICHAEL': ['TATUM MICHAEL', 'TATUM SRA'],
    'TATUM MEREDITH': ['TATUM MEREDITH'],
    'BURNETT COLTON': ['BURNETT COLTON'],
    'BURNETT CHASE': ['BURNETT CHASE', 'BURNETT SRA'],
    'BERRYHILL LES': ['BERRYHILL LES', 'BERRYHILL SRA'],
    'SNIPES BILL': ['SNIPES BILL', 'SNIPES SRA'],
    'STONE CLINT': ['STONE CLINT', 'STONE SRA'],
    'MING MIKE': ['MING MIKE', 'MING SRA'],
    'GOODEN BRENT': ['GOODEN BRENT', 'GOODEN SRA'],
    'TONEY GLENN': ['TONEY GLENN', 'TONEY SRA'],
    'ANDRADE NICOLAS': ['ANDRADE NICOLAS'],
    'ANDRADE DANIEL': ['ANDRADE DANIEL', 'ANDRADE SRA'],
    'ANDRADE JAVIER': ['ANDRADE JAVIER', 'ANDRADE SRA'],
    'APOSTILODIS DAPHNE': ['APOSTILODIS DAPHNE'],
    'ARREAZA DAN': ['ARREAZA DAN', 'ARREAGA SRA'],
    'ARTEAGA ESTELA MARIS': ['ARTEAGA ESTELA MARIS'],
    'ATAMAI Tuiolosega': ['ATAMAI Tuiolosega'],
    'BEN ZVI MIRI': ['BEN ZVI MIRI'],
    'BENNET DREW': ['BENNET DREW', 'SAMANTHA'],
    'BES LARA': ['BES LARA', 'MIKE'],
    'BUSTAMANTE CARLOS FRANCISCO': ['BUSTAMANTE CARLOS FRANCISCO', 'BUSTAMANTE SRA'],
    'BUSTAMANTE MAURICIO': ['BUSTAMANTE MAURICIO', 'SOFIA'],
    'CHAMA DANIEL': ['CHAMA DANIEL', 'ALAN'],
    'CHOCRON JOHNY': ['CHOCRON JOHNY', 'CHOCRON SRA'],
    'GODLEY MIKE': ['GODLEY MIKE', 'GODLEY SRA'],
    'DASSUM MARIA JOSE': ['DASSUM MARIA JOSE', 'SADIN'],
    'DEL SALTO SEBASTIAN': ['DEL SALTO SEBASTIAN', 'DEL SALTO SRA'],
    'DIAZ PABLO': ['DIAZ PABLO', 'DIAZ SRA'],
    'DORFZAUN NOAM': ['DORFZAUN NOAM'],
    'ERIC': ['ERIC', 'ANDI'],
    'GAL SVERDELIN NOAM': ['GAL SVERDELIN NOAM'],
    'GALLEGOS JOSE ELIAS': ['GALLEGOS JOSE ELIAS', 'GALLEGOS SRA'],
    'GALLEGOS LUISMI': ['GALLEGOS LUISMI', 'GALLEGOS SRA'],
    'GALLINI STEFI': ['GALLINI STEFI'],
    'CASTRO PABLO': ['CASTRO PABLO', 'CASTRO SRA'],
    'HELLER DAVID': ['HELLER DAVID'],
    'Kyra shapuriji': ['Kyra shapuriji'],
    'HUMMEL RANAE': ['HUMMEL RANAE'],
    'ISABELLA PRIA': ['ISABELLA PRIA', 'MAX HUMPERT'],
    'KOFMEHL KIM': ['KOFMEHL KIM'],
    'KOTTA KANDIL': ['KOTTA KANDIL', 'MERLIN BRYCHCY'],
    'LEDERMAN ABI': ['LEDERMAN ABI', 'LEDERMAN SRA'],
    'LEDERMAN JOEL': ['LEDERMAN JOEL', 'LEDERMAN SRA'],
    'LONGO GUIDO': ['LONGO GUIDO', 'LONGO SRA'],
    'MARKOVICTS DANIEL': ['MARKOVICTS DANIEL', 'MARKOVICTS SRA'],
    'MARKOVICTS JONATHAN': ['MARKOVICTS JONATHAN'],
    'MAROTTI MATEO': ['MAROTTI MATEO'],
    'MAYA BERNARDO': ['MAYA BERNARDO'],
    'MCLAUGHLIN BRYCE': ['MCLAUGHLIN BRYCE', 'SHARON SU'],
    'MEYTALLER SEBASTIAN': ['MEYTALLER SEBASTIAN', 'MEYTALLER SRA'],
    'MOSS ANDI': ['MOSS ANDI', 'MOSS SRA'],
    'MOSS VALERY': ['MOSS VALERY'],
    'OLEAS CHANA': ['OLEAS CHANA', 'JOSE'],
    'ORTIZ DEBORA': ['ORTIZ DEBORA'],
    'PECK JOHN': ['PECK JOHN'],
    'PEREZ JOMAR': ['PEREZ JOMAR'],
    'PIENKNAGURA ROBERTO': ['PIENKNAGURA ROBERTO', 'PIENKNAGURA SRA'],
    'POZO SANTIAGO': ['POZO SANTIAGO'],
    'PRAGYA': ['PRAGYA', 'PRAGYA SRA'],
    'RAULT SABBA': ['RAULT SABBA', 'NESTOR PEREIRA'],
    'RAUSLING AMELIE': ['RAUSLING AMELIE', 'LUCAS BRESSEN'],
    'RIOFRIO TRINI': ['RIOFRIO TRINI'],
    'RIVADENEIRA ISA': ['RIVADENEIRA ISA'],
    'ROSEMBERG SARA LIA': ['ROSEMBERG SARA LIA'],
    'ROSEMBERG JOSHUA': ['ROSEMBERG JOSHUA'],
    'RUALES CAMILA': ['RUALES CAMILA'],
    'RZONZEF IVAN': ['RZONZEF IVAN', 'JONATHAN'],
    'SAJONIA COBURGO OLIMPIA': ['SAJONIA COBURGO OLIMPIA'],
    'SALAZAR PABLITO': ['SALAZAR PABLITO', 'SALAZAR SRA'],
    'SALAZAR JUANITO': ['SALAZAR JUANITO'],
    'SANTILAN FRANCISCO': ['SANTILAN FRANCISCO'],
    'SERRANO JOAQUIN': ['SERRANO JOAQUIN', 'SERRANO SRA'],
    'SPECTOR SIMON': ['SPECTOR SIMON'],
    'SHAW ALEX': ['SHAW ALEX', 'CAROLINA KYWI'],
    'SCHOLEM HANS': ['SCHOLEM HANS'],
    'SCHOLEM ROBERT': ['SCHOLEM ROBERT'],
    'SLATER DYLAN': ['SLATER DYLAN', 'ELLEN'],
    'THOMPSON MIMI': ['THOMPSON MIMI'],
    'TORRES MARIALE': ['TORRES MARIALE'],
    'WALKER ANDRE': ['WALKER ANDRE'],
    'YOSH ROZEN': ['YOSH ROZEN'],
    'ZOLDAN LIOR': ['ZOLDAN LIOR', 'ZOLDAN SRA'],
    'HILLARY PRICE': ['HILLARY PRICE', 'ANDY PRICE'],
    'JENNIFER D\'CUNHA': ['JENNIFER D\'CUNHA'],
    'ANNIE RAULT': ['ANNIE RAULT'],
    'ZACH MING': ['ZACH MING', 'HANNAH'],
    'NATHAN SHEPPARD': ['NATHAN SHEPPARD', 'KAYLA STEWART'],
    'JEREMIAH': ['JEREMIAH', 'KEA SHEPPARD'],
    'COLBY': ['COLBY', 'ANGIE RUMMELL'],
    'KENDALL RUMMELL': ['KENDALL RUMMELL'],
    'ALEX MARTINSONS': ['ALEX MARTINSONS', 'SARAH DIETZ'],
    'MARC SILVERMAN': ['MARC SILVERMAN', 'JUDY MILLER'],
    'HEIDI': ['HEIDI', 'ELIZABETH WEBER'],
    'ANDREW': ['ANDREW', 'LETI ROSSITER'],
    'MITCH': ['MITCH', 'LETI ROSSITER'],
    'TAYLOR': ['TAYLOR', 'ALEX LAMBERT'],
    'TONY': ['TONY', 'SUAD BISOGNO'],
    'BRUNO YBARRA': ['BRUNO YBARRA'],
    'DAVID': ['DAVID', 'SHELBY BROOKINGS'],
    'AMY': ['AMY', 'BEN PEELER'],
    'OZ MCGUIRE': ['OZ MCGUIRE'],
    'JEN TINDAL': ['JEN TINDAL'],
    'LUPITA FALCON': ['LUPITA FALCON', 'LOTT'],
};

/**
 * Funciones principales del RSVP
 */
export function initRSVPForm() {
    console.log('🎉 Inicializando formulario RSVP');
    
    // Elementos DOM
    const rsvpContainer = document.getElementById('rsvp-form-container');
    const searchInput = document.getElementById('guest-search');
    const searchResults = document.getElementById('search-results');
    const allergyInput = document.getElementById('allergies');
    const emailInput = document.getElementById('guest-email');
    const closeButton = document.querySelector('.rsvp-form-close');
    
    if (!rsvpContainer) {
        return;
    }
    
    // Event listeners principales
    setupRSVPEventListeners();
    
    // Event listener directo para el botón de cerrar
    if (closeButton) {
        closeButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeRSVPForm();
        });
    } else {
        console.warn('⚠️ Botón de cerrar no encontrado');
    }
    
    // Búsqueda automática al escribir y con Enter
    if (searchInput) {
        // Búsqueda automática al escribir (input event)
        searchInput.addEventListener('input', function(e) {
            searchGuests();
        });
        
        // Búsqueda con Enter en el campo
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                e.preventDefault();
                findInvitation();
            }
        });
    }
    
}

function setupRSVPEventListeners() {
    // Event listeners mediante delegación de eventos
    document.addEventListener('click', function(e) {
        // Abrir formulario RSVP
        if (e.target.matches('.rsvp-open-btn')) {
            e.preventDefault();
            openRSVPForm();
        }
        
        // Cerrar formulario - verificar tanto el botón como el span interno
        if (e.target.matches('.rsvp-form-close') || e.target.closest('.rsvp-form-close')) {
            e.preventDefault();
            closeRSVPForm();
        }
        
        // Cerrar al hacer click en el overlay de fondo
        if (e.target.matches('#rsvp-form-container')) {
            closeRSVPForm();
        }
        
        // Botón home (cerrar modal)
        if (e.target.matches('.rsvp-home-btn')) {
            closeRSVPForm();
        }
        
        // Botón siguiente
        if (e.target.matches('.rsvp-next-btn')) {
            nextStep();
        }
        
        // Botón anterior
        if (e.target.matches('.rsvp-back-btn')) {
            previousStep();
        }
        
        // Botón buscar invitación
        if (e.target.matches('.rsvp-find-btn')) {
            findInvitation();
        }
    });
}

// Abrir formulario RSVP
function openRSVPForm() {
    const rsvpContainer = document.getElementById('rsvp-form-container');
    
    // Verificar si Bootstrap está disponible
    if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
        const modal = new bootstrap.Modal(rsvpContainer);
        modal.show();
    } else {
        // Fallback para cuando Bootstrap no esté disponible
        rsvpContainer.style.display = 'block';
        rsvpContainer.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    showStep(1);
}

// Cerrar formulario RSVP
function closeRSVPForm() {
    const rsvpContainer = document.getElementById('rsvp-form-container');
    
    if (!rsvpContainer) {
        console.error('❌ No se encontró el contenedor RSVP');
        return;
    }
    
    
    // Verificar si Bootstrap está disponible
    if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
        const modal = bootstrap.Modal.getInstance(rsvpContainer);
        if (modal) {
            modal.hide();
        }
    } else {
        // Fallback para cuando Bootstrap no esté disponible
        rsvpContainer.style.display = 'none';
        rsvpContainer.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
    resetForm();
}

// Resetear formulario
function resetForm() {
    rsvpState.currentStep = 1;
    rsvpState.selectedGuest = '';
    rsvpState.guestList = [];
    rsvpState.rsvpData = {
        ceremony: {},
        welcome: {},
        brunch: {}
    };
    
    const searchInput = document.getElementById('guest-search');
    const searchResults = document.getElementById('search-results');
    const allergyInput = document.getElementById('allergies');
    const emailInput = document.getElementById('guest-email');
    
    if (searchInput) searchInput.value = '';
    if (searchResults) {
        searchResults.style.display = 'none';
        searchResults.innerHTML = '';
    }
    if (allergyInput) allergyInput.value = '';
    if (emailInput) emailInput.value = '';
}

// Mostrar paso específico
function showStep(step) {
    document.querySelectorAll('.rsvp-form-step').forEach(el => {
        el.classList.remove('active');
    });
    
    const stepElement = document.getElementById(`step-${step}`);
    if (stepElement) {
        stepElement.classList.add('active');
    }
    
    rsvpState.currentStep = step;
    
    // Configurar paso específico
    if (step >= 2 && step <= 4) {
        const event = rsvpEvents.find(e => e.step === step);
        if (event) {
            setupEventStep(event.id);
        }
    } else if (step === 5) {
        setupAdditionalInfoStep();
    } else if (step === 6) {
        setupThankYouStep();
    }
}

// Búsqueda automática de invitados
function searchGuests() {
    const searchInput = document.getElementById('guest-search');
    const searchResults = document.getElementById('search-results');
    const query = searchInput.value.toLowerCase().trim();
    
    // Ocultar resultados si hay menos de 3 caracteres
    if (query.length < 3) {
        searchResults.style.display = 'none';
        return;
    }
    
    const allMainGuests = Object.keys(invitedGuests);
    let foundMainGuests = new Set(); // Para evitar duplicados
    
    // Buscar coincidencias exactas en nombres principales
    const exactMatches = allMainGuests.filter(name => {
        if (name.toLowerCase() === query) {
            foundMainGuests.add(name);
            return true;
        }
        return false;
    });
    
    // Buscar nombres que empiecen con la consulta
    const startsWithMatches = allMainGuests.filter(name => {
        if (!foundMainGuests.has(name) && name.toLowerCase().startsWith(query)) {
            foundMainGuests.add(name);
            return true;
        }
        return false;
    });
    
    // Buscar nombres que contengan la consulta
    const containsMatches = allMainGuests.filter(name => {
        if (!foundMainGuests.has(name) && name.toLowerCase().includes(query)) {
            foundMainGuests.add(name);
            return true;
        }
        return false;
    });
    
    // Buscar también en la lista de invitados de cada grupo
    allMainGuests.forEach(mainGuest => {
        if (!foundMainGuests.has(mainGuest)) {
            const guestList = invitedGuests[mainGuest];
            const hasMatchingGuest = guestList.some(guest => {
                const guestName = guest.toLowerCase();
                return guestName === query || 
                       guestName.startsWith(query) || 
                       guestName.includes(query);
            });
            if (hasMatchingGuest) {
                foundMainGuests.add(mainGuest);
                containsMatches.push(mainGuest);
            }
        }
    });
    
    // Combinar resultados por prioridad y limitar a 6 resultados máximo
    const matches = [...exactMatches, ...startsWithMatches, ...containsMatches].slice(0, 6);
    
    // Mostrar resultados automáticamente
    if (matches.length > 0) {
        searchResults.innerHTML = matches.map(name => 
            `<div class="rsvp-search-item cursor-pointer" onclick="selectGuest('${name}')">${name}</div>`
        ).join('');
        searchResults.style.display = 'block';
    } else {
        searchResults.innerHTML = '<div class="rsvp-search-item">No guest found with that name</div>';
        searchResults.style.display = 'block';
    }
}

// Función para buscar invitación desde el botón
function findInvitation() {
    const searchInput = document.getElementById('guest-search');
    const searchResults = document.getElementById('search-results');
    const inputValue = searchInput.value.trim();
    
    if (inputValue.length < 3) {
        alert('Please enter at least 3 characters of your name');
        return;
    }
    
    const query = inputValue.toLowerCase();
    const allMainGuests = Object.keys(invitedGuests);
    let foundMainGuests = new Set(); // Para evitar duplicados
    
    // Buscar coincidencias exactas en nombres principales
    const exactMatches = allMainGuests.filter(name => {
        if (name.toLowerCase() === query) {
            foundMainGuests.add(name);
            return true;
        }
        return false;
    });
    
    // Buscar nombres que empiecen con la consulta
    const startsWithMatches = allMainGuests.filter(name => {
        if (!foundMainGuests.has(name) && name.toLowerCase().startsWith(query)) {
            foundMainGuests.add(name);
            return true;
        }
        return false;
    });
    
    // Buscar nombres que contengan la consulta
    const containsMatches = allMainGuests.filter(name => {
        if (!foundMainGuests.has(name) && name.toLowerCase().includes(query)) {
            foundMainGuests.add(name);
            return true;
        }
        return false;
    });
    
    // Buscar también en la lista de invitados de cada grupo
    allMainGuests.forEach(mainGuest => {
        if (!foundMainGuests.has(mainGuest)) {
            const guestList = invitedGuests[mainGuest];
            const hasMatchingGuest = guestList.some(guest => {
                const guestName = guest.toLowerCase();
                return guestName === query || 
                       guestName.startsWith(query) || 
                       guestName.includes(query);
            });
            if (hasMatchingGuest) {
                foundMainGuests.add(mainGuest);
                containsMatches.push(mainGuest);
            }
        }
    });
    
    // Combinar resultados por prioridad y limitar a 6 resultados máximo
    const matches = [...exactMatches, ...startsWithMatches, ...containsMatches].slice(0, 6);
    
    if (matches.length > 0) {
        searchResults.innerHTML = matches.map(name => 
            `<div class="rsvp-search-item cursor-pointer" onclick="selectGuest('${name}')">${name}</div>`
        ).join('');
        searchResults.style.display = 'block';
    } else {
        searchResults.innerHTML = '<div class="rsvp-search-item">No guest found with that name</div>';
        searchResults.style.display = 'block';
    }
}

// Seleccionar invitado - función global para onclick
window.selectGuest = function(guestName) {
    const searchInput = document.getElementById('guest-search');
    const searchResults = document.getElementById('search-results');
    
    rsvpState.selectedGuest = guestName;
    rsvpState.guestList = invitedGuests[guestName] || [];
    searchInput.value = guestName;
    searchResults.style.display = 'none';
    
    // Inicializar datos RSVP para cada evento
    rsvpState.guestList.forEach(guest => {
        rsvpState.rsvpData.ceremony[guest] = 'pending';
        rsvpState.rsvpData.welcome[guest] = 'pending';
        rsvpState.rsvpData.brunch[guest] = 'pending';
    });
    
    showStep(2);
};

// Configurar paso de evento específico
function setupEventStep(eventId) {
    const container = document.getElementById(`guest-list-${eventId}`);
    if (!container) return;
    
    let html = '';
    
    rsvpState.guestList.forEach((guest, index) => {
        html += `
            <div class="rsvp-guest-item" data-guest-index="${index}">
                <div class="row">
                    <div class="col-12 col-xl-5">
                        <div class="rsvp-guest-name fs-xl-7 font-secondary fs-lg-p">${guest}</div>
                    </div>
                    <div class="col-12 col-xl-7">
                        <div class="mb-2">
                            <div class="row">
                                <div class="col-12 col-xl-6 mb-xl-0 mb-2">
                                    <button type="button" class="rsvp-btn w-100 border-1 font-secondary py-2 px-2" data-guest-name="${guest}" data-response="accept" data-event="${eventId}">Accept</button>
                                </div>
                                <div class="col-12 col-xl-6">
                                    <button type="button" class="rsvp-btn rsvp-btn-outline rsvp-btn w-100 border-1 font-secondary bg-white-100 py-2 px-2" data-guest-name="${guest}" data-response="decline" data-event="${eventId}">Decline</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Agregar event listeners a los botones
    const responseButtons = container.querySelectorAll('.rsvp-btn');
    responseButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const guestName = this.getAttribute('data-guest-name');
            const response = this.getAttribute('data-response');
            const event = this.getAttribute('data-event');
            setGuestResponse(guestName, response, event);
        });
    });
    
    updateEventButtons(eventId);
}

// Configurar paso de información adicional
function setupAdditionalInfoStep() {
    const allergyInput = document.getElementById('allergies');
    const emailInput = document.getElementById('guest-email');
    
    // Solo necesita asegurar que los elementos existen
    if (allergyInput) allergyInput.value = allergyInput.value || '';
    if (emailInput) emailInput.value = emailInput.value || '';
}

// Configurar paso de agradecimiento
function setupThankYouStep() {
    const thankYouContainer = document.querySelector('#step-7 .rsvp-thank-you');
    if (!thankYouContainer) return;
    
    // Verificar si el invitado principal declinó todos los eventos
    const primaryGuestDeclinedAll = checkIfPrimaryGuestDeclinedAll();
    
    if (primaryGuestDeclinedAll) {
        // Mensaje para quienes declinan
        thankYouContainer.innerHTML = `
            <h3 class="fs-lg-3 text-primary mb-2">THANKS</h3>
            <p class="fs-6 text-black font-secondary mb-1 col-xl-8 pe-xl-3">Thank you for letting us know. We'll miss you on our special day, but we truly appreciate your thoughtfulness in responding to our invitation.</p>
            <button type="button" class="rsvp-btn rsvp-btn-primary rsvp-home-btn btn btn-primary w-100 border-0">BACK TO HOME</button>
        `;
    } else {
        // Mensaje original para quienes asisten
        thankYouContainer.innerHTML = `
            <h3 class="fs-lg-3 text-primary mb-2">THANKS</h3>
            <p class="fs-6 text-black font-secondary mb-1 col-xl-8 pe-xl-3">Thank you for confirming your attendance to our wedding. We are very happy to share this special day with you. We will send a copy of your RSVP to your email.</p>
            <button type="button" class="rsvp-btn rsvp-btn-primary rsvp-home-btn btn btn-primary w-100 border-0">BACK TO HOME</button>
        `;
    }
}

// Verificar si el invitado principal declinó todos los eventos
function checkIfPrimaryGuestDeclinedAll() {
    const primaryGuest = rsvpState.selectedGuest;
    if (!primaryGuest) return false;
    
    // Verificar cada evento
    const events = ['ceremony', 'welcome', 'brunch'];
    for (const eventId of events) {
        const response = rsvpState.rsvpData[eventId][primaryGuest];
        // Si acepta explícitamente O está pendiente (que se considera accept), no declinó todos
        if (response === 'accept' || response === 'pending') {
            return false;
        }
    }
    
    return true; // Solo si EXPLÍCITAMENTE declinó todos los eventos
}

// Establecer respuesta del invitado
function setGuestResponse(guestName, response, eventId) {
    rsvpState.rsvpData[eventId][guestName] = response;
    updateEventButtons(eventId);
}

// Actualizar botones de evento específico
function updateEventButtons(eventId) {
    
    const container = document.getElementById(`guest-list-${eventId}`);
    if (!container) return;
    
    // Primero resetear todos los botones del evento
    const allButtons = container.querySelectorAll('.rsvp-btn');
    allButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.style.backgroundColor = '';
        btn.style.color = '';
        
        // Restaurar estilos por defecto
        if (btn.classList.contains('rsvp-btn-outline')) {
            btn.style.backgroundColor = 'transparent';
            btn.style.color = '#746448';
            btn.style.borderColor = '#746448';
        } else {
            btn.style.backgroundColor = '#746448';
            btn.style.color = '#fff';
            btn.style.borderColor = '#746448';
        }
    });
    
    // Luego marcar los botones seleccionados para este evento
    Object.keys(rsvpState.rsvpData[eventId]).forEach(guest => {
        const response = rsvpState.rsvpData[eventId][guest];
        if (response === 'pending') return;
        
        // Buscar los botones de este invitado para este evento
        const buttons = container.querySelectorAll(`[data-guest-name="${guest}"][data-event="${eventId}"]`);
        
        buttons.forEach(btn => {
            const btnResponse = btn.getAttribute('data-response');
            
            if (btnResponse === response) {
                // Marcar como activo
                btn.classList.add('active');
                btn.style.backgroundColor = '#fff';
                btn.style.color = '#746448';
                btn.style.borderColor = '#746448';
                btn.style.opacity = '1';
            } else {
                // Marcar como inactivo
                btn.style.backgroundColor = '#fff';
                btn.style.color = '#746448';
                btn.style.borderColor = '#746448';
                btn.style.opacity = '0.7';
            }
        });
    });
}

// Validar si se puede continuar
function canContinue() {
    // Para eventos (pasos 2-4): Siempre se puede continuar (no es obligatorio responder)
    if (rsvpState.currentStep >= 2 && rsvpState.currentStep <= 4) {
        return true;
    }
    // Para información adicional: Solo email es obligatorio
    if (rsvpState.currentStep === 5) {
        const emailInput = document.getElementById('guest-email');
        return emailInput && emailInput.value.trim() !== '';
    }
    return true;
}

// Ir al siguiente paso
function nextStep() {
    if (!canContinue()) {
        alert('Por favor complete todos los campos requeridos');
        return;
    }
    
    if (rsvpState.currentStep === 5) {
        submitRSVP();
    } else {
        showStep(rsvpState.currentStep + 1);
    }
}

// Ir al paso anterior
function previousStep() {
    if (rsvpState.currentStep > 1) {
        showStep(rsvpState.currentStep - 1);
    }
}

// Enviar RSVP
function submitRSVP() {
    const allergyInput = document.getElementById('allergies');
    const emailInput = document.getElementById('guest-email');
    
    // Procesar respuestas finales (pending = accept por defecto)
    const processedData = {};
    Object.keys(rsvpState.rsvpData).forEach(eventId => {
        processedData[eventId] = {};
        Object.keys(rsvpState.rsvpData[eventId]).forEach(guest => {
            // Si no respondió (pending), se asume que va (accept)
            processedData[eventId][guest] = rsvpState.rsvpData[eventId][guest] === 'pending' ? 'accept' : rsvpState.rsvpData[eventId][guest];
        });
    });
    
    const submitData = {
        action: 'submit_rsvp',
        guest_name: rsvpState.selectedGuest,
        guests: processedData,
        allergies: allergyInput.value.trim(),
        email: emailInput.value.trim()
    };
    
    // Mostrar loading
    document.getElementById('step-5').innerHTML = '<div class="rsvp-loading">Sending...</div>';
    
    // Construir body correctamente
    const formData = new FormData();
    formData.append('action', 'submit_rsvp');
    formData.append('guest_name', rsvpState.selectedGuest);
    formData.append('email', emailInput.value.trim());
    formData.append('allergies', allergyInput.value.trim());
    formData.append('guests', JSON.stringify(processedData));
    
    // Debug: Mostrar lo que se va a enviar
    // for (let [key, value] of formData.entries()) {
    //     console.log(key + ':', value);
    // }
    
    // Debug: Verificar JSON antes de enviar
    const jsonString = JSON.stringify(processedData);
    
    // TEMPORAL: Log para debug
    console.log('🐛 DEBUG - Datos a enviar:', {
        guest_name: rsvpState.selectedGuest,
        processedData: processedData,
        primaryGuestDeclinedAll: checkIfPrimaryGuestDeclinedAll()
    });
    
    fetch(window.location.href, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text(); // Primero como texto para debugging
    })
    .then(text => {
        const data = JSON.parse(text);
        if (data.success) {
            showStep(6);
        } else {
            console.error('❌ Error al enviar RSVP:', data.message);
            alert('Error al enviar RSVP: ' + data.message);
            // Regenerar el paso 5 sin el loading
            showStep(5);
            setupAdditionalInfoStep();
        }
    })
    .catch(error => {
        console.error('❌ Error de conexión:', error);
        // En local, simular éxito para testing
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            alert('MODO LOCAL: RSVP procesado (revisa la consola para ver los datos)');
            showStep(6);
        } else {
            alert('Error al enviar RSVP');
            showStep(5);
        }
    });
} 