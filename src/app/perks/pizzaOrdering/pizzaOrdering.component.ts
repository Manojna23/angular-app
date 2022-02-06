import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
    selector:'orderPizza',
    templateUrl:'./pizzaOrdering.component.html'
})
export class PizzaOrderingComponent{
    @Input() customerName: string = '';
    toppings = new FormControl();
    @Output() selectedToppingsEmitter = new EventEmitter<string[]>();

    toppingsList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    
    onSubmit() {
        this.selectedToppingsEmitter.emit(this.toppings.value);
    }
}