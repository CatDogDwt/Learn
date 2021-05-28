/*
*
*计算球体体积
*用户自行录入球体半径
*
*/

#include <stdio.h>

#define PI 3.14f
#define V (4.0f/3.0f*PI)

int main(void){

	float r, result;
	
    	printf("请输入球体半径：\n");
    	scanf("%f",&r);
	printf("%.2f",result = V*r*r*r);

	return 0;
}
