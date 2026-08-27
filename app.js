
const translations = {
  es: {
    eyebrow:"GUÍA DE PRODUCTO", subtitle:"Instrucciones de acondicionamiento y ensamble",
    noticeTitle:"Importante", noticeText:"Seleccione únicamente la configuración asignada para su territorio.",
    quickAccess:"Acceso rápido", chooseRoute:"Elija su configuración", viewRoutes:"Ver rutas",
    configuration:"CONFIGURACIÓN", selectRoute:"Seleccione la ruta indicada",
    coldRoute:"RUTA FRÍA", coldShort:"4 Pharma-Cool — Tinta Roja",
    coldDesc:"Configuración para territorios con bajas temperaturas externas.",
    hotRoute:"RUTA CALIENTE", hotShort:"2 Pharma-Cool rojos + 2 azules",
    hotDesc:"Configuración para territorios con exposición a picos de calor.",
    viewInstructions:"Ver instrucciones →", back:"← Volver a configuraciones",
    conditioning:"Acondicionamiento", critical:"Punto crítico",
    videoEyebrow:"VIDEO INSTRUCTIVO", videoTitle:"Vea el ensamble paso a paso",
    videoText:"El video oficial se incorporará aquí antes de la implementación.",
    videoSoon:"Video próximamente", manualEyebrow:"GUÍA VISUAL",
    stepsTitle:"Ensamble paso a paso", openManual:"Ver página original del instructivo",
    supportEyebrow:"SOPORTE", supportTitle:"¿Necesita ayuda?",
    supportText:"Contacte a Servicio al Cliente de CSafe.",
    phonePending:"Teléfono por confirmar", downloadGuide:"Abrir instructivo",
    prototype:"Prototipo interno — CSafe LATAM"
  },
  en: {
    eyebrow:"PRODUCT GUIDE", subtitle:"Conditioning and assembly instructions",
    noticeTitle:"Important", noticeText:"Use only the configuration assigned to your territory.",
    quickAccess:"Quick access", chooseRoute:"Choose your configuration", viewRoutes:"View routes",
    configuration:"CONFIGURATION", selectRoute:"Select the assigned route",
    coldRoute:"COLD ROUTE", coldShort:"4 Pharma-Cool — Red Ink",
    coldDesc:"Configuration for territories with low external temperatures.",
    hotRoute:"HOT ROUTE", hotShort:"2 red Pharma-Cool + 2 blue",
    hotDesc:"Configuration for territories exposed to heat peaks.",
    viewInstructions:"View instructions →", back:"← Back to configurations",
    conditioning:"Conditioning", critical:"Critical point",
    videoEyebrow:"INSTRUCTIONAL VIDEO", videoTitle:"Watch the assembly step by step",
    videoText:"The official video will be added here before implementation.",
    videoSoon:"Video coming soon", manualEyebrow:"VISUAL GUIDE",
    stepsTitle:"Step-by-step assembly", openManual:"View original instruction page",
    supportEyebrow:"SUPPORT", supportTitle:"Need help?",
    supportText:"Contact CSafe Customer Service.",
    phonePending:"Phone pending confirmation", downloadGuide:"Open guide",
    prototype:"Internal prototype — CSafe LATAM"
  },
  pt: {
    eyebrow:"GUIA DO PRODUTO", subtitle:"Instruções de condicionamento e montagem",
    noticeTitle:"Importante", noticeText:"Utilize somente a configuração atribuída ao seu território.",
    quickAccess:"Acesso rápido", chooseRoute:"Escolha sua configuração", viewRoutes:"Ver rotas",
    configuration:"CONFIGURAÇÃO", selectRoute:"Selecione a rota indicada",
    coldRoute:"ROTA FRIA", coldShort:"4 Pharma-Cool — Tinta Vermelha",
    coldDesc:"Configuração para territórios com baixas temperaturas externas.",
    hotRoute:"ROTA QUENTE", hotShort:"2 Pharma-Cool vermelhos + 2 azuis",
    hotDesc:"Configuração para territórios expostos a picos de calor.",
    viewInstructions:"Ver instruções →", back:"← Voltar às configurações",
    conditioning:"Condicionamento", critical:"Ponto crítico",
    videoEyebrow:"VÍDEO INSTRUTIVO", videoTitle:"Veja a montagem passo a passo",
    videoText:"O vídeo oficial será incluído aqui antes da implementação.",
    videoSoon:"Vídeo em breve", manualEyebrow:"GUIA VISUAL",
    stepsTitle:"Montagem passo a passo", openManual:"Ver página original do manual",
    supportEyebrow:"SUPORTE", supportTitle:"Precisa de ajuda?",
    supportText:"Entre em contato com o Serviço ao Cliente da CSafe.",
    phonePending:"Telefone a confirmar", downloadGuide:"Abrir manual",
    prototype:"Protótipo interno — CSafe LATAM"
  }
};

const routeData = {
  cold: {
    es: {
      eyebrow:"RUTA FRÍA", pill:"Ruta Fría",
      conditioning:[
        "Kit de nevera de EPS dentro de una caja externa: almacenar a temperatura ambiente menor a 30°C.",
        "4 elementos refrigerantes (Pharma-Cool) Tinta Roja: almacenar entre 2°C y 8°C.",
        "Revisar la fecha de fabricación y garantizar que no supere un año al momento de uso.",
        "Caja interna para producto: almacenar entre 2°C y 8°C junto con el producto de Zoetis."
      ],
      critical:"Utilice los 4 Pharma-Cool rojos en esta configuración. No intercambie componentes entre Ruta Fría y Ruta Caliente.",
      steps:[
        "Inserta la caja de Producto en el centro de la nevera.",
        "Retira la tapa de EPS moldeada de la base.",
        "Inserta 2 Pharma-Cool rojos en los laterales largos.",
        "Inserta 2 Pharma-Cool rojos en los laterales cortos.",
        "Ajusta la tapa de la nevera y cierra la caja externa con cinta."
      ]
    },
    en: {
      eyebrow:"COLD ROUTE", pill:"Cold Route",
      conditioning:[
        "EPS cooler kit inside an outer box: store below 30°C at room temperature.",
        "4 Red Ink Pharma-Cool refrigerants: store between 2°C and 8°C.",
        "Check the manufacturing date and ensure it is not more than one year old at the time of use.",
        "Inner product box: store between 2°C and 8°C together with the Zoetis product."
      ],
      critical:"Use the 4 red Pharma-Cool units in this configuration. Do not interchange components between Cold Route and Hot Route.",
      steps:[
        "Place the Product box in the center of the cooler.",
        "Remove the molded EPS lid from the base.",
        "Place 2 red Pharma-Cool units on the long sides.",
        "Place 2 red Pharma-Cool units on the short sides.",
        "Fit the cooler lid and close the outer box with tape."
      ]
    },
    pt: {
      eyebrow:"ROTA FRIA", pill:"Rota Fria",
      conditioning:[
        "Kit de caixa térmica de EPS dentro de uma caixa externa: armazenar em temperatura ambiente abaixo de 30°C.",
        "4 elementos refrigerantes Pharma-Cool de Tinta Vermelha: armazenar entre 2°C e 8°C.",
        "Verificar a data de fabricação e garantir que não ultrapasse um ano no momento do uso.",
        "Caixa interna do produto: armazenar entre 2°C e 8°C junto com o produto Zoetis."
      ],
      critical:"Utilize os 4 Pharma-Cool vermelhos nesta configuração. Não troque componentes entre Rota Fria e Rota Quente.",
      steps:[
        "Insira a caixa do Produto no centro da caixa térmica.",
        "Retire a tampa de EPS moldada da base.",
        "Insira 2 Pharma-Cool vermelhos nas laterais longas.",
        "Insira 2 Pharma-Cool vermelhos nas laterais curtas.",
        "Ajuste a tampa da caixa térmica e feche a caixa externa com fita."
      ]
    },
    manual:"assets/ruta-fria-manual-p2.png",
    pdf:"Manual Softbox ONE 20L Ruta Fria.pdf"
  },
  hot: {
    es: {
      eyebrow:"RUTA CALIENTE", pill:"Ruta Caliente",
      conditioning:[
        "Kit de nevera de EPS dentro de una caja externa: almacenar a temperatura ambiente menor a 30°C.",
        "2 Pharma-Cool Tinta Roja: almacenar entre 2°C y 8°C.",
        "2 Pharma-Cool Tinta Azul: almacenar congelados entre -15°C y -25°C.",
        "Revisar la fecha de fabricación y garantizar que no supere un año al momento de uso.",
        "Caja interna para producto: almacenar entre 2°C y 8°C junto con el producto de Zoetis."
      ],
      critical:"Antes del ensamble, saque los Pharma-Cool azules del congelador y manténgalos a temperatura ambiente mínimo 45 minutos y máximo 70 minutos.",
      steps:[
        "Inserta la caja de Producto en el centro de la nevera.",
        "Retira la tapa de EPS moldeada de la base.",
        "Inserta 2 Pharma-Cool azules en los laterales largos.",
        "Inserta 2 Pharma-Cool rojos en los laterales cortos.",
        "Ajusta la tapa de la nevera y cierra la caja externa con cinta."
      ]
    },
    en: {
      eyebrow:"HOT ROUTE", pill:"Hot Route",
      conditioning:[
        "EPS cooler kit inside an outer box: store below 30°C at room temperature.",
        "2 Red Ink Pharma-Cool units: store between 2°C and 8°C.",
        "2 Blue Ink Pharma-Cool units: store frozen between -15°C and -25°C.",
        "Check the manufacturing date and ensure it is not more than one year old at the time of use.",
        "Inner product box: store between 2°C and 8°C together with the Zoetis product."
      ],
      critical:"Before assembly, remove the blue Pharma-Cool units from the freezer and keep them at room temperature for at least 45 minutes and no more than 70 minutes.",
      steps:[
        "Place the Product box in the center of the cooler.",
        "Remove the molded EPS lid from the base.",
        "Place 2 blue Pharma-Cool units on the long sides.",
        "Place 2 red Pharma-Cool units on the short sides.",
        "Fit the cooler lid and close the outer box with tape."
      ]
    },
    pt: {
      eyebrow:"ROTA QUENTE", pill:"Rota Quente",
      conditioning:[
        "Kit de caixa térmica de EPS dentro de uma caixa externa: armazenar em temperatura ambiente abaixo de 30°C.",
        "2 Pharma-Cool de Tinta Vermelha: armazenar entre 2°C e 8°C.",
        "2 Pharma-Cool de Tinta Azul: armazenar congelados entre -15°C e -25°C.",
        "Verificar a data de fabricação e garantir que não ultrapasse um ano no momento do uso.",
        "Caixa interna do produto: armazenar entre 2°C e 8°C junto com o produto Zoetis."
      ],
      critical:"Antes da montagem, retire os Pharma-Cool azuis do congelador e mantenha-os em temperatura ambiente por no mínimo 45 minutos e no máximo 70 minutos.",
      steps:[
        "Insira a caixa do Produto no centro da caixa térmica.",
        "Retire a tampa de EPS moldada da base.",
        "Insira 2 Pharma-Cool azuis nas laterais longas.",
        "Insira 2 Pharma-Cool vermelhos nas laterais curtas.",
        "Ajuste a tampa da caixa térmica e feche a caixa externa com fita."
      ]
    },
    manual:"assets/ruta-caliente-manual-p2.png",
    pdf:"Manual Softbox ONE 20L Ruta Caliente.pdf"
  }
};

let currentLang = "es";
let currentRoute = null;

function translateUI(){
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });
  document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("active", b.dataset.lang===currentLang));
  if(currentRoute) renderRoute(currentRoute);
}
function renderRoute(route){
  currentRoute = route;
  const d = routeData[route][currentLang];
  document.getElementById("routeEyebrow").textContent = d.eyebrow;
  document.getElementById("routePill").textContent = d.pill;
  document.getElementById("conditioningContent").innerHTML = "<ul>"+d.conditioning.map(x=>`<li>${x}</li>`).join("")+"</ul>";
  document.getElementById("criticalContent").innerHTML = `<div class="critical-box">${d.critical}</div>`;
  document.getElementById("stepsList").innerHTML = d.steps.map((x,i)=>`<li class="step"><div class="step-num">${i+1}</div><p>${x}</p></li>`).join("");
  document.getElementById("manualImage").src = routeData[route].manual;
  document.getElementById("detail").classList.remove("hidden");
  document.getElementById("detail").scrollIntoView({behavior:"smooth"});
}
document.querySelectorAll(".route-card").forEach(card=>card.addEventListener("click",()=>renderRoute(card.dataset.route)));
document.querySelectorAll(".lang-btn").forEach(btn=>btn.addEventListener("click",()=>{currentLang=btn.dataset.lang; translateUI();}));
document.getElementById("backBtn").addEventListener("click",()=>{
  document.getElementById("detail").classList.add("hidden");
  document.getElementById("rutas").scrollIntoView({behavior:"smooth"});
  currentRoute=null;
});
document.getElementById("downloadBtn").addEventListener("click",()=>{
  if(!currentRoute) return;
  window.open(routeData[currentRoute].pdf,"_blank");
});
translateUI();
