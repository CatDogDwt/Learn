/*
 *
 *求多项式的值
 *
 */

#include <stdio.h>

int main(void){

	float x;

	printf("Please insert value of x：");
	
	scanf("%f",&x);

	printf("3x^5+2x^4-5x^3-x^2+7x-6=%.2f\n",((((3*x+2)*x-5)*x-1)*x+7)*x-6);

	return 0;
}

