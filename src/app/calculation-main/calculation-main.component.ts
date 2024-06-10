import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Step1Component } from '../step1/step1.component';
import { Step2Component } from '../step2/step2.component';
import { Step3Component } from '../step3/step3.component';
import { Step4Component } from '../step4/step4.component';
import { Step5Component } from '../step5/step5.component';
import { Step6Component } from '../step6/step6.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-calculation-main',
  standalone: true,
  imports: [
    CommonModule, 
    Step1Component, 
    Step2Component, 
    Step3Component, 
    Step4Component, 
    Step5Component, 
    Step6Component
  ],
  templateUrl: './calculation-main.component.html',
  styleUrls: ['./calculation-main.component.css']
})
export class CalculationMainComponent implements OnInit {
  @ViewChild(Step1Component) step1Component!: Step1Component;
  @ViewChild(Step2Component) step2Component!: Step2Component;
  @ViewChild(Step3Component) step3Component!: Step3Component;
  @ViewChild(Step4Component) step4Component!: Step4Component;
  @ViewChild(Step5Component) step5Component!: Step5Component;
  @ViewChild(Step6Component) step6Component!: Step6Component;
  steps = ['Start', 'Standorte', 'Verträge', 'Brennstoffe', 'Fuhrpark', 'Energie'];
  currentStep = 0;

  leftTitle = 'Erklärung';
  leftText = 'Das ist ein langer Beispieltext zur Erklärung unterschiedlicher Angelegenheiten und dient einer kurzen Beschreibung.';
  rightTitle = 'Wo ist das?';
  rightText = 'Das ist ein langer Beispieltext zur Erklärung unterschiedlicher Angelegenheiten und dient einer kurzen Beschreibung.';

  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit() {
    const savedStep = localStorage.getItem('currentStep');
    if (savedStep !== null) {
      this.currentStep = parseInt(savedStep, 10);
    }
    console.log('ngOnInit: Current step loaded:', this.currentStep);
    this.updateTexts();
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
    this.sharedService.clearAllData();
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    } else {
      this.navigateToDashboard();
    }
    this.updateTexts();
    localStorage.setItem('currentStep', this.currentStep.toString());
  }

  nextStep() {
    this.saveValues();
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    } else {
      this.navigateToDashboard();
      this.sharedService.clearAllData();
    }
    this.updateTexts();
    localStorage.setItem('currentStep', this.currentStep.toString());
  }
  
  saveValues() {
    console.log('saveValues: Saving values for current step:', this.currentStep);
    switch (this.currentStep) {
      case 0:
        this.step1Component.onSave();
        break;
      case 1:
        this.step2Component.saveLocations();
        break;
      case 2:
        this.step3Component.saveLocations();
        break;
      case 3:
        this.step4Component.saveLocations();
        break;
      case 4:
        this.step5Component.saveVehicles();
        break;
      case 5:
        this.step6Component.saveEnergies();
        break;
      default:
        break;
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: BeforeUnloadEvent) {
    console.log('unloadHandler: Saving values before unload');
    this.saveValues();
    event.preventDefault();
    event.returnValue = ''; // Required for some browsers to trigger the confirmation dialog
  }

  goToStep(step: number) {
    this.saveValues();
    this.currentStep = step;
    this.updateTexts();
    localStorage.setItem('currentStep', this.currentStep.toString());
  }

  get progressPercentage() {
    return Math.round((this.currentStep / (this.steps.length - 1)) * 100);
  }

  updateTexts() {
    switch (this.currentStep) {
      case 0:
        this.leftTitle = 'Erklärung';
        this.leftText = 'Auf dieser Seite werden die Rahmeninformationen für die Berechnung ausgefüllt. Das Jahr, für welches die Berechnung erstellt werden soll, eine interne Bezeichnung und eine Datenquelle, wenn Daten aus einer anderen Berechnung übernommen werden sollen (Beispiel: Standorte und Verträge).';
        this.rightTitle = 'Woher kommen die Daten?';
        this.rightText = 'Die Daten entsprechen der von Dir gewünschten Bearbeitung. Nutze am besten eine Bezeichnung, welche dir im Nachhinein Aufschluss über die Berechnung gibt. Eine Datenquelle ist optional.';
        break;
      case 1:
        this.leftTitle = 'Erklärung';
        this.leftText = 'Die Standorteingabe ermöglicht eine Übersicht, um Verbräuche leichter zuzuordnen und schafft Aufschluss über die Emissionen der einzelnen Standorte. Die Emissionsberechnung unterscheidet sich, je nachdem ob der Standort Eigentum oder gemietet ist. Es muss mindestens ein Standort eingetragen werden. Nutze eine Bezeichnung, die Du später eindeutig zuordnen kannst.';
        this.rightTitle = 'Woher kommen die Daten?';
        this.rightText = 'Hierbei handelt es sich um interne Daten Deines Unternehmens. Je nach gewünschter Genauigkeit können die Standorte nach Orten, Gebäuden oder abgeschlossenen Büros aufgeschlüsselt werden.';
        break;
      case 2:
        this.leftTitle = 'Erklärung';
        this.leftText = 'Liste hier alle Verträge auf, welche Dein Unternehmen in den im Dropdown "Typ" angezeigten Feldern hat. Hier kannst du sowohl übergreifende Verträge für mehrere Standorte wie auch einzelne Verträge zuordnen. Achte auch hier wieder auf eine eindeutige Bezeichnung. Bei Auswahl eines Typs wird automatisch ein Standardemissionswert für das Gut angenommen.';
        this.rightTitle = 'Woher kommen die Daten?';
        this.rightText = 'Die Daten über Typ und Emissionsfaktor stammen aus Deinen Verträgen mit den Lieferanten. Diese müssen den entsprechenden Emissionsfaktor aufschlüsseln, sodass Du ihn hier eintragen kannst. Du kannst auch die Standardemissionswerte nutzen, allerdings ist die Berechnung in dem Fall dann nicht so genau.';
        break;
      case 3:
        this.leftTitle = 'Erklärung';
        this.leftText = 'Hier geht es um die Zuordnung von eingekauften Brennstoffen zu einzelnen Standorten. Im Dropdown sind alle Verträge, die in diesem Schritt relevant sind aufgelistet. Umso genauer Du die Daten einträgst, desto genauer ist die Auswertung nachher. Gesamt wird zusätzlich addiert und umfasst Verbräuche, welche nicht genauer aufgeschlüsselt werden können, da nur ein kombinierter Verbrauch bekannt ist.';
        this.rightTitle = 'Woher kommen die Daten?';
        this.rightText = 'Die Daten stammen aus den Verbräuchen zu den Verträgen. Hierbei sind entweder um einzelne Zählerdifferenzen zum Vorjahr oder die angegebenen Verbräuche beim Lieferanten anzugeben. Diese sollten auf der Website des Betreibers oder in der Jahresabrechnung vorliegen.';
        break;  
      case 4:
        this.leftTitle = 'Erklärung';
        this.leftText = 'Bitte trage hier die Gesamtzahl der gekauften Kraftstoffe ein. Du kannst auch mehrere Verbräuche eines Typs eintragen, sodass du entweder Jahresgesamtzahlen oder einzelne Tankvorgänge eintragen kannst.';
        this.rightTitle = 'Woher kommen die Daten?';
        this.rightText = 'Die Daten können entweder aus einzelnen Abrechnungen von Tankvorgängen stammen (Belege, Tankkarten o.ä.) oder aus einem Gesamtverbrauch für ein Jahr stammen. Hier kann auch eine zusammengefasste Menge eingetragen werden. Alternativ lässt sich die Literanzahl auch mit folgender Formel aus den gefahrenen Kilometern berechnen: (gefahrene km) / 100 * (durchschnittlicher Verbrauch des Autos).';
        break;  
      case 5:
        this.leftTitle = 'Erklärung';
        this.leftText = 'Hier geht es um eingekaufte Energien, das heißt Strom und Fernwärme. Die entsprechenden Verträge sind im Dropdown Menü aufgelistet. Bitte trage die Gesamtzahlen unabhängig vom Standort hier ein.';
        this.rightTitle = 'Woher kommen die Daten?';
        this.rightText = 'Die Daten stammen aus den Verbräuchen zu den Verträgen. Hierbei sind entweder um einzelne Zählerdifferenzen zum Vorjahr oder die angegebenen Verbräuche beim Lieferanten anzugeben. Diese sollten auf der Website des Betreibers oder in der Jahresabrechnung vorliegen.';
        break;  
      default:
        break;
    }
  }

  isLastStep(): boolean {
    return this.currentStep === this.steps.length - 1;
  }

  getButtonText(): string {
    return this.isLastStep() ? 'Fertig' : 'Weiter';
  }
  getStepTitle(): string {
    switch (this.currentStep) {
      case 0:
        return 'Rahmeninformationen eingeben';
      case 1:
        return 'Standorte eingeben';
      case 2:
        return 'Verträge eingeben';
      case 3:
        return 'Brennstoffe eingeben';
      case 4:
        return 'Fuhrpark eingeben';
      case 5:
        return 'Energie eingeben';
      default:
        return 'Eingeben der Daten';
    }
  }
  
}
