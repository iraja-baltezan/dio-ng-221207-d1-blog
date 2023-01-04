import { AfterViewInit, Component, ElementRef, Input, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

/**
 * Componente que renderiza um texto svg. O tamanho da caixa de visualização do
 * svg é ajustado para a largura e altura do texto. Isto permite que a largura
 * do texto escale para a largura do elemento pai, mantendo a razão de aspecto.
 *
 * @param text string
 */
@Component({
  selector: 'app-svg-title',
  templateUrl: './svg-title.component.svg',
  styleUrls: ['./svg-title.component.scss']
})
export class SvgTitleComponent implements AfterViewInit
{
  @Input()
  text: string = 'Título grande';

  width: number = 1024;
  height: number = 64;
  viewBox: string = '0 0 1024 64';

  ngOnChanges(changes: SimpleChanges) {
    this.updateSvg();
  }

  ngAfterViewInit(): void {
    this.updateSvg();
  }

  @ViewChild('textId', { static: true })
  textElmRef: ElementRef | undefined;

  updateSvg() {
    if (!this.textElmRef) return;
    setTimeout((elmRef) => {
      const svgRect = elmRef.nativeElement.getBBox();
      this.height = svgRect.height;
      this.width = svgRect.width;
      this.viewBox = `0 0 ${svgRect.width} ${svgRect.height}`;
    }, 0, this.textElmRef);
  }
}
