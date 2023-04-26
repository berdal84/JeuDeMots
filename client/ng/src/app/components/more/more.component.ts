import {Component} from '@angular/core';

@Component({
  selector: 'app-more',
  template: `
    <h2>A propos...</h2>
    <section class="indent">
      <p>Ce site a été créé pour me former. Dans un premier temps il n'était qu'une simple page AngularJS, il a
          depuis beaucoup évolué (avec un backend et une base de données).</p>
      <p>L'objectif secondaire est évidemment de s'amuser en écrivant les jeux de mots...</p>
      <p>Point de vue technique, ce site a été créé initialement avec AngularJS 1.x., puis il a été mis à jour
          vers Angular 2+ dernièrement
          (<a href="https://github.com/berdal84/jeudemots-ng" title="Consultez le code source sur GitHub">voir
              code source</a>).
      </p>
    </section>
  `
})
export class MoreComponent {
}
