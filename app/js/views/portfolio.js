function getPortfolio(view){
   if(view == "portfolio")
      return `      
      <div class="pageTitle animation-default">
      <h1 class="pageTitle-h1"><span class="text-mark text-mark-11art pr-5 pl-5 pageTitle-span">Portfolio</span></h1>
      <p class="pageTitle-p">Escolha uma categoria abaixo para filtrar ;)</p>
      </div>
      <div class="text-center animation-default row">
         <div class="col-md-12">
            <button id="11art" onclick="portfolioFiltrar('11art')" class="btn btn-outline-11art btn-portfolio">Todos</button>
            <button id="design" onclick="portfolioFiltrar('design')" class="btn btn-outline-design btn-portfolio">Design Gráfico</button>
            <button id="3d" onclick="portfolioFiltrar('3d')" class="btn btn-outline-3d btn-portfolio">Modelagem 3D</button>
            <button id="web" onclick="portfolioFiltrar('web')" class="btn btn-outline-web btn-portfolio">Website</button>
            <button id="video" onclick="portfolioFiltrar('video')" class="btn btn-outline-video btn-portfolio">Produção Vídeo</button>
         </div>
      </div>
      <div class="row animation-default">
         <div class="col-md-12 pb-6 pt-5">
            <article class="boxPortfolio">
               <div class="gallery">
               </div>
            </article>
         </div>
      </div>
      `;
   else
      return '';
}