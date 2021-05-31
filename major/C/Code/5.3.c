/*
 *
 *修改broker.c
 *
 */

#include <stdio.h>

int main(void){

    float commission,commission_rival,price,value,count;

    printf("输入股票的数量:");
    scanf("%f",&count);
    printf("输入每股的价格:");
    scanf("%f",&price);

    value = count*price;

    if(value < 2500.00f)
        commission = 30.00f + .017f*value;
    else if(value < 6250.00f)
        commission = 56.00f + .0066f*value;
    else if(value < 20000.00f)
        commission = 76.00f + .0034f*value;
    else if(value < 50000.00f)
        commission = 100.00f + .0022f*value;
    else if(value < 500000.00f)
        commission = 155.00f + .0011f*value;
    else
        commission = 255.00f + .0009f*value;

    if(commission = 39.00f)
        commission = 39.00f;

    printf("经纪人佣金为：%.2f\n",commission);

    if(count < 2000.00f)
	    commission_rival = 33.03f * count;
    else if(count >= 2000.00f)
	    commission_rival = 33.02f * count;

    printf("竞争对手佣金为：%.2f\n",commission_rival);

    return 0;
}
