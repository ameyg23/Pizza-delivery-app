import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';


declare var paypal:any;

@Component({
  selector: 'paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent implements OnInit{
  @Input()
  order!:Order;

  @ViewChild('paypal',{static:true})
  paypalElement!:ElementRef;

  constructor(private orderService:OrderService,
    private cartService:CartService,
    private router:Router,
    private toastrService:ToastrService ){
    
  }

  ngOnInit(): void {
    const self = this;
      paypal 
      .Buttons({
        createOrder:(data:any,action:any) => {
          return action.order.create({
            purchase_units:[
              {
                amount:{
                  currency_code:'IND',
                  value:self.order.totalPrice,       
                },
              },
            ],
          });
        },

        onApprove:async(data:any,action:any) => {
          const payment = await action.order.capture();
          this.order.paymentId = payment.id;
          self.orderService.pay(this.order).subscribe(
            {
              next: (orderId) => {
                this.cartService.clearCart();
                this.router.navigateByUrl('/track' + orderId);
                this.toastrService.success(
                  'Payment Saved Successsfully',
                  'Success'
                );
              },
              error: (error) => {
                this.toastrService.error('Payment Save Failed','Error');
              }
            }
          );
        },
        onError: (err:any ) => {
          this.toastrService.error('Payment Failed','Error');
          console.log(err);
        },
      })
      .render(this.paypalElement.nativeElement);
  }
}
