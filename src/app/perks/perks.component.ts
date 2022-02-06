import { Component } from "@angular/core";
import { PerksService } from "./perks.service";

@Component({
    selector: 'perks',
    templateUrl:'./perks.component.html'
})
export class PerksComponent {
    selectedPerk: string = '';
    perksList: string[] = [];
    orderPizza: boolean = false;
    toppings: string[] = [];
    firstTimeDisplay: boolean = false;
    customerName: string = '';

    constructor(private perksService: PerksService) {
        this.perksList = this.perksService.getPerks();
    }

    selectChangeHandler(event: any) {
        this.selectedPerk = event.target.value;
        if(this.selectedPerk == 'Order Pizza') {
            this.firstTimeDisplay = true;
            this.orderPizza = true;
        }
    }

    setSelectedToppings(selectedToppings: string[]) {
        this.toppings = selectedToppings;
    }

    onNameSubmit() {
        this.firstTimeDisplay = false;
    }
}